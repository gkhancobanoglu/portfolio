import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message)
      return NextResponse.json(
        { ok: false, error: "Eksik alan var" },
        { status: 400 }
      );

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["gkhancobanoglu@gmail.com"],
      reply_to: email,
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
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
