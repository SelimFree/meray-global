const WEBSITE_URL = "https://www.merayglobal.com"; // Update to your domain
const COMPANY_NAME = "Meray Global";
const LOGO_URL = "https://www.merayglobal.com/logo.png"; // Update to your hosted logo URL

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
    contact: string;
  };
  legal: {
    privacy: string;
    terms: string;
  };
}

export const autoReplyTranslations: Record<string, AutoReplyTranslation> = {
  en: {
    subject: "Inquiry Acknowledgment - Meray Global",
    title: "Transmission Logged",
    greeting: "Attention:",
    body1:
      "Your trade inquiry has been securely received by the Meray Global server network. A preliminary compliance check is currently underway.",
    body2:
      "Our regional trading desk will review your requirements. You can expect direct communication from an authorized representative within one standard business day.",
    regards: "Authorized by",
    contactTitle: "Global Headquarters",
    linksTitle: "Corporate Index",
    legalTitle: "Compliance",
    links: {
      about: "Corporate Overview",
      products: "Commodities Portfolio",
      contact: "Global Desks",
    },
    legal: { privacy: "Data Privacy Standard", terms: "Terms of Trade" },
  },
  tr: {
    subject: "Talep Onayı - Meray Global",
    title: "İletim Kaydedildi",
    greeting: "Dikkatine:",
    body1:
      "Ticari talebiniz Meray Global sunucu ağı tarafından güvenli bir şekilde alınmıştır. Ön uyumluluk kontrolü şu anda devam etmektedir.",
    body2:
      "Bölgesel ticaret masamız gereksinimlerinizi inceleyecektir. Yetkili bir temsilcimiz bir iş günü içerisinde sizinle doğrudan iletişime geçecektir.",
    regards: "Onaylayan",
    contactTitle: "Küresel Merkez",
    linksTitle: "Kurumsal Dizin",
    legalTitle: "Uyumluluk",
    links: {
      about: "Kurumsal Genel Bakış",
      products: "Emtia Portföyü",
      contact: "Küresel Masalar",
    },
    legal: { privacy: "Veri Gizliliği Standardı", terms: "Ticaret Şartları" },
  },
  de: {
    subject: "Anfragebestätigung - Meray Global",
    title: "Übertragung Protokolliert",
    greeting: "Zu Händen von:",
    body1:
      "Ihre Handelsanfrage wurde vom Meray Global-Servernetzwerk sicher empfangen. Eine vorläufige Compliance-Prüfung ist derzeit im Gange.",
    body2:
      "Unser regionales Trading Desk wird Ihre Anforderungen prüfen. Sie können innerhalb eines Standardarbeitstages mit einer direkten Kommunikation von einem autorisierten Vertreter rechnen.",
    regards: "Autorisiert durch",
    contactTitle: "Globaler Hauptsitz",
    linksTitle: "Unternehmensindex",
    legalTitle: "Compliance",
    links: {
      about: "Unternehmensübersicht",
      products: "Rohstoffportfolio",
      contact: "Globale Desks",
    },
    legal: { privacy: "Datenschutzstandard", terms: "Handelsbedingungen" },
  },
  ru: {
    subject: "Подтверждение запроса - Meray Global",
    title: "Передача Зарегистрирована",
    greeting: "Вниманию:",
    body1:
      "Ваш торговый запрос был безопасно получен серверной сетью Meray Global. В настоящее время проводится предварительная проверка на соответствие.",
    body2:
      "Наш региональный торговый отдел рассмотрит ваши требования. Ожидайте прямого сообщения от уполномоченного представителя в течение одного рабочего дня.",
    regards: "Утверждено",
    contactTitle: "Глобальная Штаб-квартира",
    linksTitle: "Корпоративный Индекс",
    legalTitle: "Соответствие",
    links: {
      about: "Обзор компании",
      products: "Сырьевой портфель",
      contact: "Глобальные отделы",
    },
    legal: {
      privacy: "Стандарт конфиденциальности",
      terms: "Условия торговли",
    },
  },
};

export const getOwnerEmailHtml = (
  fullName: string,
  company: string,
  email: string,
  department: string,
  message: string,
) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="padding: 24px 40px; background-color: #0f172a; border-bottom: 4px solid #d97706;">
      <img src="${LOGO_URL}" alt="${COMPANY_NAME}" height="32" style="display: block; border: none; outline: none; margin-bottom: 24px;" />
      <p style="margin: 0 0 4px 0; color: #94a3b8; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-family: monospace;">Internal System Alert</p>
      <h2 style="margin: 0; color: #ffffff; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">
        Incoming Trade Inquiry
      </h2>
    </div>

    <!-- Data Grid -->
    <div style="padding: 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-collapse: collapse;">
        <tr>
          <td width="50%" style="padding: 16px; border: 1px solid #e5e7eb; background-color: #f8fafc;">
            <p style="margin: 0; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Entity</p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #0f172a; font-weight: bold;">${company}</p>
          </td>
          <td width="50%" style="padding: 16px; border: 1px solid #e5e7eb; background-color: #ffffff;">
            <p style="margin: 0; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Contact Name</p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #0f172a; font-weight: bold;">${fullName}</p>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding: 16px; border: 1px solid #e5e7eb; background-color: #ffffff;">
            <p style="margin: 0; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Email Authorization</p>
            <p style="margin: 4px 0 0 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #d97706; text-decoration: none; font-weight: bold;">${email}</a>
            </p>
          </td>
          <td width="50%" style="padding: 16px; border: 1px solid #e5e7eb; background-color: #f8fafc;">
            <p style="margin: 0; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Routing Target</p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #0f172a; font-weight: bold; text-transform: uppercase;">${department}</p>
          </td>
        </tr>
      </table>

      <!-- Message Block -->
      <div style="background-color: #f1f5f9; border-left: 4px solid #0f172a; padding: 24px;">
        <p style="margin: 0 0 12px 0; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">Transmission Details</p>
        <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>

  </div>
</body>
</html>
`;

export const getAutoReplyHtml = (firstName: string, lang: string = "en") => {
  const t = autoReplyTranslations[lang] || autoReplyTranslations["en"];
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb;">
    
    <div style="padding: 32px 40px; background-color: #ffffff; border-bottom: 2px solid #0f172a; text-align: left;">
      <img src="${LOGO_URL}" alt="${COMPANY_NAME} Logo" width="140" style="display: block; border: none; outline: none; margin-bottom: 8px;" />
      <!-- Text fallback in case images are disabled by the email client -->
      <h1 style="margin: 0; color: #0f172a; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
        ${COMPANY_NAME}
      </h1>
    </div>

    <div style="padding: 40px;">
      <h2 style="margin: 0 0 24px 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
        ${t.title}
      </h2>
      
      <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-family: monospace;">
        ${t.greeting} ${firstName}
      </p>
      
      <p style="margin: 0 0 16px 0; color: #334155; font-size: 14px; line-height: 1.7;">
        ${t.body1}
      </p>
      <p style="margin: 0 0 32px 0; color: #334155; font-size: 14px; line-height: 1.7;">
        ${t.body2}
      </p>
      
      <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.6; text-transform: uppercase; letter-spacing: 1px;">
        ${t.regards},<br/>
        <strong style="color: #0f172a;">Corporate Logistics & Trading</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #0f172a; padding: 40px; color: #ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
        <tr>
          <td valign="top">
            <p style="margin: 0 0 12px 0; font-size: 10px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">${t.contactTitle}</p>
            <p style="margin: 0 0 4px 0; color: #f8fafc; font-size: 12px; font-family: monospace;">operations@merayglobal.com</p>
            <p style="margin: 0 0 4px 0; color: #f8fafc; font-size: 12px; font-family: monospace;">+41 22 123 45 67 (Geneva Desk)</p>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid #334155; padding-top: 24px;">
        <tr>
          <td valign="top" width="50%">
            <p style="margin: 0 0 12px 0; font-size: 10px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">${t.linksTitle}</p>
            <a href="${WEBSITE_URL}/about" style="display: block; color: #cbd5e1; text-decoration: none; font-size: 12px; margin-bottom: 8px;">${t.links.about}</a>
            <a href="${WEBSITE_URL}/products" style="display: block; color: #cbd5e1; text-decoration: none; font-size: 12px; margin-bottom: 8px;">${t.links.products}</a>
          </td>
          <td valign="top" width="50%">
            <p style="margin: 0 0 12px 0; font-size: 10px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">${t.legalTitle}</p>
            <a href="${WEBSITE_URL}/privacy" style="display: block; color: #cbd5e1; text-decoration: none; font-size: 12px; margin-bottom: 8px;">${t.legal.privacy}</a>
            <a href="${WEBSITE_URL}/terms" style="display: block; color: #cbd5e1; text-decoration: none; font-size: 12px; margin-bottom: 8px;">${t.legal.terms}</a>
          </td>
        </tr>
      </table>

      <div style="margin-top: 32px; text-align: left;">
        <p style="margin: 0; color: #64748b; font-size: 10px; font-family: monospace; text-transform: uppercase;">
          &copy; ${currentYear} ${COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </div>

  </div>
</body>
</html>
`;
};
