import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Name, email, etc. end up in mail headers (subject, reply-to), so they must stay on one line.
function singleLine(value: unknown, maxLength: number) {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = singleLine(body.firstName, 100);
  const lastName = singleLine(body.lastName, 100);
  const email = singleLine(body.email, 254);
  const company = singleLine(body.company, 200);
  const phone = singleLine(body.phone, 50);
  const service = singleLine(body.service, 100);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!firstName || !lastName || !email) {
    return Response.json({ error: "First name, last name and email are required." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_FROM, MAIL_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASSWORD || !MAIL_TO) {
    console.error("Contact form: set SMTP_USER, SMTP_PASSWORD and MAIL_TO in .env");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465, // 465 uses TLS from the start, 587 upgrades with STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const name = `${firstName} ${lastName}`;
  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: { name, address: email },
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Phone: ${phone || "-"}`,
        `Service interest: ${service || "-"}`,
        "",
        "Message:",
        message || "-",
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact form: failed to send email", error);
    return Response.json({ error: "Could not send your message." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
