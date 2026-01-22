import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email sending will be disabled.");
}

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendContactNotification({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  if (!resend) {
    console.log("Resend not configured, skipping email notification");
    return null;
  }

  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: ["john@builddetroit.xyz"],
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
    replyTo: email,
  });

  if (error) {
    console.error("Failed to send email:", error);
    throw error;
  }

  return data;
}
