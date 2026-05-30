import { getOwnerEmailHtml, getAutoReplyHtml, autoReplyTranslations } from './templates';

interface Env {
  RESEND_API_KEY: string;
  RESEND_OWNER_EMAIL: string;
}

interface InquiryPayload {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  department: string;
  message: string;
  user_lang: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = await context.request.json() as InquiryPayload;
    const { firstName, lastName, company, email, department, message, user_lang } = body;

    const resendHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`
    };

    const localizedSubject = autoReplyTranslations[user_lang]?.subject || autoReplyTranslations['en'].subject;
    const fullName = `${firstName} ${lastName}`;

    const ownerEmailPayload = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: resendHeaders,
      body: JSON.stringify({
        from: `Corporate Portal <${context.env.RESEND_OWNER_EMAIL}>`,
        to: [context.env.RESEND_OWNER_EMAIL], 
        reply_to: email,
        subject: `Trade Inquiry: ${company} (${department})`,
        html: getOwnerEmailHtml(fullName, company, email, department, message)
      })
    });

    const autoReplyPayload = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: resendHeaders,
      body: JSON.stringify({
        from: `Meray Global <${context.env.RESEND_OWNER_EMAIL}>`,
        to: [email], 
        subject: localizedSubject,
        html: getAutoReplyHtml(firstName, user_lang)
      })
    });

    const [ownerRes, autoReplyRes] = await Promise.all([ownerEmailPayload, autoReplyPayload]);

    if (ownerRes.ok && autoReplyRes.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      throw new Error("Transmission failure: One or more routing protocols failed.");
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}