import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Missing SENDGRID_API_KEY",
          details: "La variabile d'ambiente SENDGRID_API_KEY non è configurata",
        },
        { status: 500 }
      );
    }

    console.log("🔑 API Key found:", apiKey.substring(0, 10) + "...");

    sgMail.setApiKey(apiKey);

    // Test email
    console.log("📧 Sending test email...");

    const response = await sgMail.send({
      from: "studiolegaleamaranto@gmail.com",
      to: "studiolegaleamaranto@gmail.com",
      subject: "Test Email da Studio Legale Amaranto",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">🧪 Test Email</h2>
          <p style="color: #374151; line-height: 1.6;">
            Questa è un'email di test per verificare la configurazione di SendGrid.
          </p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p style="margin: 5px 0;"><strong>From:</strong> studiolegaleamaranto@gmail.com</p>
            <p style="margin: 5px 0;"><strong>To:</strong> studiolegaleamaranto@gmail.com</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Se ricevi questa email, SendGrid è configurato correttamente! ✅
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully:", response);

    return NextResponse.json(
      {
        success: true,
        message: "Test email inviata con successo!",
        response: response,
        instructions: [
          "1. Controlla la casella di posta di studiolegaleamaranto@gmail.com",
          "2. Controlla anche la cartella SPAM/Promozioni",
          "3. SendGrid invia 100 email/giorno gratis senza limitazioni",
          "4. Se non arriva nulla, verifica l'API key su sendgrid.com",
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    const err: any = error;
    console.error(
      "❌ Test email error:",
      err?.response?.statusCode,
      err?.response?.body || err
    );

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
        details:
          err?.response?.body ||
          (error instanceof Error ? error.message : "Unknown error"),
        statusCode: err?.response?.statusCode,
      },
      { status: 500 }
    );
  }
}
