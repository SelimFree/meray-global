import { getOwnerEmailHtml, getAutoReplyHtml, autoReplyTranslations } from './templates';

interface Env {
  RESEND_API_KEY: string;
  RESEND_OWNER_EMAIL: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = await context.request.json() as { user_name: string; user_email: string; message: string; user_lang: string };
    const { user_name, user_email, message, user_lang } = body;

    const resendHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`
    };

    const localizedSubject = autoReplyTranslations[user_lang]?.subject || autoReplyTranslations['en'].subject;

    const ownerEmailPayload = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: resendHeaders,
      body: JSON.stringify({
        from: `Contact Form <${context.env.RESEND_OWNER_EMAIL}>`,
        to: [context.env.RESEND_OWNER_EMAIL], 
        reply_to: user_email,
        subject: `New Lead: ${user_name}`,
        html: getOwnerEmailHtml(user_name, user_email, message)
      })
    });

    const autoReplyPayload = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: resendHeaders,
      body: JSON.stringify({
        from: `Contact Form <${context.env.RESEND_OWNER_EMAIL}>`,
        to: [user_email], 
        subject: localizedSubject,
        html: getAutoReplyHtml(user_name, user_lang)
      })
    });

    const [ownerRes, autoReplyRes] = await Promise.all([ownerEmailPayload, autoReplyPayload]);

    if (ownerRes.ok && autoReplyRes.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      throw new Error("One or more emails failed to send");
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}