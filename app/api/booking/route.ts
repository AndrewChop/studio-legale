import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { fullName, email, company, phone, message, privacyAccepted, lang } =
      await request.json();

    const locale: "it" | "en" = lang === "en" ? "en" : "it";

    // Strong validation (company optional)
    const sanitized = {
      fullName: typeof fullName === "string" ? fullName.trim() : "",
      email: typeof email === "string" ? email.trim() : "",
      company: typeof company === "string" ? company.trim() : "",
      phone: typeof phone === "string" ? phone.trim() : "",
      message: typeof message === "string" ? message.trim() : "",
      privacyAccepted: Boolean(privacyAccepted),
    };

    const errors: string[] = [];

    if (!sanitized.fullName) errors.push("fullName");
    if (!sanitized.email || !isValidEmail(sanitized.email))
      errors.push("email");
    if (!sanitized.phone || !isValidPhone(sanitized.phone))
      errors.push("phone");
    if (sanitized.company && sanitized.company.length < 2)
      errors.push("company");
    if (!sanitized.message || sanitized.message.length < 5)
      errors.push("message");
    if (!sanitized.privacyAccepted) errors.push("privacyAccepted");

    if (errors.length) {
      return NextResponse.json(
        { error: "Invalid fields", fields: errors },
        { status: 400 }
      );
    }

    const templates = getEmailTemplates(locale, sanitized);

    // Send email to studio
    await resend.emails.send({
      from: "onboarding@resend.dev", // Dominio di test - funziona in localhost
      to: "studiolegaleamaranto@gmail.com",
      subject: templates.adminSubject,
      html: templates.adminHtml,
    });

    // Optional: Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: sanitized.email,
      subject: templates.userSubject,
      html: templates.userHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking request sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        error: "Failed to send booking request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function isValidEmail(value: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value);
}

function isValidPhone(value: string): boolean {
  // Accept digits, spaces, plus, parentheses, dashes; require at least 7 digits
  const cleaned = value.replace(/[^0-9]/g, "");
  if (cleaned.length < 7) return false;
  const re = /^[+()0-9\s-]+$/;
  return re.test(value);
}

type Sanitized = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
};

function getEmailTemplates(locale: "it" | "en", data: Sanitized) {
  const escapedMessage = data.message ? escapeHtml(data.message) : "";

  if (locale === "en") {
    return {
      adminSubject: `New consultation request from ${data.fullName}`,
      adminHtml: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">New Consultation Request</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company || "(not provided)"}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          ${
            escapedMessage
              ? `<div style="margin-bottom: 20px;">
                  <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
                  <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${escapedMessage}</p>
                </div>`
              : ""
          }
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; color: #9ca3af; font-size: 12px;">
            <p>This message was sent from the consultation form on the Studio Legale Amaranto website.</p>
          </div>
        </div>
      `,
      userSubject: "We received your request - Studio Legale Amaranto",
      userHtml: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Thank you for your request</h2>
          <p style="color: #374151; line-height: 1.6;">Dear ${data.fullName},</p>
          <p style="color: #6b7280; line-height: 1.6;">We have received your consultation request. Our team will review the details and contact you soon by phone or email to discuss your needs.</p>
          <p style="color: #6b7280; line-height: 1.6;">If you have urgent questions, you can reach us directly:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #374151; margin: 5px 0;"><strong>Phone:</strong> +39 338 347 0581</p>
            <p style="color: #374151; margin: 5px 0;"><strong>Email:</strong> studiolegaleamaranto@gmail.com</p>
          </div>
          <p style="color: #6b7280; line-height: 1.6;">Kind regards,<br/><strong>Studio Legale Amaranto</strong></p>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; color: #9ca3af; font-size: 12px;">
            <p>This is an automatic message. No reply is required.</p>
          </div>
        </div>
      `,
    };
  }

  return {
    adminSubject: `Nuova richiesta di consulenza da ${data.fullName}`,
    adminHtml: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">Nuova richiesta di consulenza</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Nome e cognome:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Azienda:</strong> ${data.company || "(non indicata)"}</p>
          <p><strong>Telefono:</strong> ${data.phone}</p>
        </div>
        ${
          escapedMessage
            ? `<div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin-bottom: 10px;">Messaggio:</h3>
                <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${escapedMessage}</p>
              </div>`
            : ""
        }
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>Questo messaggio è stato inviato dal modulo di richiesta consulenza del sito Studio Legale Amaranto.</p>
        </div>
      </div>
    `,
    userSubject: "Abbiamo ricevuto la tua richiesta - Studio Legale Amaranto",
    userHtml: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">Grazie per la tua richiesta</h2>
        <p style="color: #374151; line-height: 1.6;">Caro/a ${data.fullName},</p>
        <p style="color: #6b7280; line-height: 1.6;">Abbiamo ricevuto la tua richiesta di consulenza. Il nostro team esaminerà i dettagli e ti contatterà al più presto tramite telefono o email per discutere delle tue esigenze legali.</p>
        <p style="color: #6b7280; line-height: 1.6;">Se hai domande urgenti, puoi contattarci direttamente:</p>
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #374151; margin: 5px 0;"><strong>Telefono:</strong> +39 338 347 0581</p>
          <p style="color: #374151; margin: 5px 0;"><strong>Email:</strong> studiolegaleamaranto@gmail.com</p>
        </div>
        <p style="color: #6b7280; line-height: 1.6;">Cordiali saluti,<br/><strong>Studio Legale Amaranto</strong></p>
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>Questo è un messaggio automatico. Non è necessario rispondere.</p>
        </div>
      </div>
    `,
  };
}
