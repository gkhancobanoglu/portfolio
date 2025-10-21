import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // 🧩 Basit doğrulama
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Lütfen tüm alanları doldurun." },
        { status: 400 }
      );
    }

    // 🧩 E-posta formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Lütfen geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["gkhancobanoglu@gmail.com"],
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#0f172a">
          <p><b>Ad Soyad:</b> ${name}</p>
          <p><b>E-posta:</b> ${email}</p>
          <p><b>Konu:</b> ${subject}</p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const error =
      err instanceof Error && err.message.includes("replyTo")
        ? "E-posta adresiniz geçerli bir biçimde değil. Lütfen kontrol edin."
        : err instanceof Error
        ? err.message
        : "Bilinmeyen bir hata oluştu.";

    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
