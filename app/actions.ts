"use server";

import nodemailer from "nodemailer";

export interface InquiryState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const honeypot = (formData.get("website") as string)?.trim();
  if (honeypot) return { status: "success" }; // silently discard bot submission

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const plan = (formData.get("plan") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email) {
    return { status: "error", message: "Prašome užpildyti privalomus laukus." };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    // Dev fallback: log to console
    console.log("📧 [DEV] New inquiry:", { name, email, phone, plan, message });
    return { status: "success" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"JarvisCo svetainė" <${gmailUser}>`,
      to: "jarvisworks.co@gmail.com",
      subject: `Nauja užklausa: ${plan || "Bendras"} — ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;color:#1a1a1a;">
          <h2 style="font-size:20px;margin-bottom:20px;">Nauja svetainės užklausa</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:140px;">Vardas</td><td style="font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">El. paštas</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Telefonas</td><td>${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Planas</td><td>${plan || "—"}</td></tr>
          </table>
          ${message ? `<hr style="margin:20px 0;border:1px solid #eee;"><p style="white-space:pre-wrap;">${message}</p>` : ""}
        </div>
      `,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Email error:", err);
    return {
      status: "error",
      message:
        "Nepavyko išsiųsti. Rašykite tiesiogiai: jarvisworks.co@gmail.com",
    };
  }
}
