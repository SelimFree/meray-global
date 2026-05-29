const LOGO_URL = "https://www.smg-kimya.com/logo.png";
const WEBSITE_URL = "https://www.smg-kimya.com";
const COMPANY_NAME = "SM Group Kimya A.Ş.";

interface AutoReplyTranslation {
  subject: string;
  title: string;
  greeting: string;
  body1: string;
  body2: string;
  regards: string;
  contactTitle: string;
  linksTitle: string;
  legalTitle: string;
  links: {
    about: string;
    products: string;
    logistics: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookies: string;
  };
}

export const autoReplyTranslations: Record<string, AutoReplyTranslation> = {
  en: {
    subject: "Message Received - SM Group",
    title: "Message Received",
    greeting: "Dear",
    body1:
      "Thank you for reaching out to SM Group. We have successfully received your inquiry and a member of our team is currently reviewing it.",
    body2:
      "We prioritize clear communication and aim to respond to all inquiries within 24 hours. If your request is urgent, please do not hesitate to contact our office directly.",
    regards: "Best regards",
    contactTitle: "Contact Us",
    linksTitle: "Quick Links",
    legalTitle: "Legal",
    links: { about: "About Us", products: "Products", logistics: "Logistics" },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
    },
  },
  tr: {
    subject: "Mesajınız Alındı - SM Group",
    title: "Mesajınız Alındı",
    greeting: "Sayın",
    body1:
      "SM Group'a ulaştığınız için teşekkür ederiz. Talebinizi başarıyla aldık ve ekibimiz şu anda inceliyor.",
    body2:
      "Tüm taleplere 24 saat içinde yanıt vermeyi hedefliyoruz. Talebiniz acilse, lütfen doğrudan ofisimizle iletişime geçmekten çekinmeyin.",
    regards: "Saygılarımızla",
    contactTitle: "Bize Ulaşın",
    linksTitle: "Hızlı Bağlantılar",
    legalTitle: "Yasal",
    links: { about: "Hakkımızda", products: "Ürünler", logistics: "Lojistik" },
    legal: {
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      cookies: "Çerez Politikası",
    },
  },
  de: {
    subject: "Nachricht erhalten - SM Group",
    title: "Nachricht erhalten",
    greeting: "Sehr geehrte(r)",
    body1:
      "Vielen Dank für Ihre Kontaktaufnahme mit der SM Group. Wir haben Ihre Anfrage erfolgreich erhalten und unser Team prüft sie derzeit.",
    body2:
      "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Wenn Ihr Anliegen dringend ist, zögern Sie bitte nicht, unser Büro direkt zu kontaktieren.",
    regards: "Mit freundlichen Grüßen",
    contactTitle: "Kontaktiere uns",
    linksTitle: "Schnelllinks",
    legalTitle: "Rechtliches",
    links: { about: "Über uns", products: "Produkte", logistics: "Logistik" },
    legal: {
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
    },
  },
  ru: {
    subject: "Сообщение получено - SM Group",
    title: "Сообщение получено",
    greeting: "Уважаемый(ая)",
    body1:
      "Спасибо за обращение в SM Group. Мы успешно получили ваш запрос, и наша команда в настоящее время его рассматривает.",
    body2:
      "Мы стремимся отвечать на все запросы в течение 24 часов. Если ваш запрос срочный, пожалуйста, не стесняйтесь обращаться в наш офис напрямую.",
    regards: "С уважением",
    contactTitle: "Связаться с нами",
    linksTitle: "Быстрые ссылки",
    legalTitle: "Правовая информация",
    links: { about: "О нас", products: "Продукция", logistics: "Логистика" },
    legal: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      cookies: "Политика использования файлов cookie",
    },
  },
};

export const getOwnerEmailHtml = (
  name: string,
  email: string,
  message: string,
) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-top: 6px solid #2A71AA; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
    
    <div style="padding: 30px 40px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
      <h2 style="margin: 0; color: #2A71AA; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
        New Website Lead
      </h2>
      <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">
        Action required: A new prospect has reached out.
      </p>
    </div>

    <div style="padding: 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
        <tr>
          <td style="padding-bottom: 15px; border-bottom: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Full Name</p>
            <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: bold;">${name}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px 0; border-bottom: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
            <p style="margin: 4px 0 0 0; font-size: 16px;">
              <a href="mailto:${email}" style="color: #2A71AA; text-decoration: none; font-weight: bold;">${email}</a>
            </p>
          </td>
        </tr>
      </table>

      <div style="background-color: #f9fafb; border-left: 4px solid #F0DF3D; padding: 20px;">
        <p style="margin: 0 0 10px 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>

  </div>
</body>
</html>
`;

export const getAutoReplyHtml = (name: string, lang: string = "en") => {
  const t = autoReplyTranslations[lang] || autoReplyTranslations["en"];

  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    
    <div style="padding: 30px 40px; background-color: #ffffff; text-align: left;">
      <img src="${LOGO_URL}" alt="SM Group Logo" width="80" height="80" style="display: block; border: none; outline: none; background-color: #f3f4f6;" />
    </div>

    <div style="height: 4px; width: 100%; background: linear-gradient(to right, #2A71AA 50%, #F0DF3D 50%);"></div>

    <div style="padding: 40px;">
      <h2 style="margin: 0 0 20px 0; color: #2A71AA; font-size: 24px; text-transform: uppercase;">
        ${t.title}
      </h2>
      <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 1.6;">
        ${t.greeting} ${name},
      </p>
      <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 1.6;">
        ${t.body1}
      </p>
      <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.6;">
        ${t.body2}
      </p>
      
      <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.5;">
        ${t.regards},<br/>
        <strong style="color: #2A71AA;">The SM Group Team</strong>
      </p>
    </div>

    <div style="background-color: #f3f4f6; padding: 40px; border-top: 1px solid #e5e7eb;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" style="padding-bottom: 20px; display: block; width: 100%;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #2A71AA; text-transform: uppercase;">${t.contactTitle}</p>
            <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">info@smg-kimya.com</p>
            <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">+1 (555) 123-4567</p>
            <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
              Ayazağa Mah. Azerbay Cad. 2B Blok<br/>
              No:3 K, İç Kapi No:13<br/>
              Sariyer, İstanbul, Türkiye
            </p>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px; border-top: 1px solid #d1d5db; padding-top: 20px;">
        <tr>
          <td valign="top" width="50%">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #2A71AA; text-transform: uppercase; font-size: 12px;">${t.linksTitle}</p>
            <a href="${WEBSITE_URL}/about" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.links.about}</a>
            <a href="${WEBSITE_URL}/products" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.links.products}</a>
            <a href="${WEBSITE_URL}/logistics" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.links.logistics}</a>
          </td>
          <td valign="top" width="50%">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #2A71AA; text-transform: uppercase; font-size: 12px;">${t.legalTitle}</p>
            <a href="${WEBSITE_URL}/privacy" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.legal.privacy}</a>
            <a href="${WEBSITE_URL}/terms" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.legal.terms}</a>
            <a href="${WEBSITE_URL}/cookies" style="display: block; color: #4b5563; text-decoration: none; font-size: 13px; margin-bottom: 6px;">${t.legal.cookies}</a>
          </td>
        </tr>
      </table>

      <div style="margin-top: 30px; text-align: left;">
        <p style="margin: 0; color: #9ca3af; font-size: 11px; text-transform: uppercase;">
          &copy; ${currentYear} ${COMPANY_NAME} All rights reserved.
        </p>
      </div>
    </div>

  </div>
</body>
</html>
`;
};
