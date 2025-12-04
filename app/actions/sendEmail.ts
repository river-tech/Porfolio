"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse =
  | { success: true }
  | { success: false; error: string };

export async function sendEmail(payload: ContactPayload): Promise<ContactResponse> {
  const { name, email, message } = payload;

  if (!process.env.MY_EMAIL) {
    console.error("[contact] MY_EMAIL is not configured in environment variables.");
    return { success: false, error: "Email destination is not configured." };
  }

  try {
    const fromAddress =
      process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    console.log("[contact] sending email via Resend", {
      to: process.env.MY_EMAIL,
      from: fromAddress,
      name,
      email,
    });

    const result = await resend.emails.send({
      from: fromAddress,
      to: [process.env.MY_EMAIL],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 16px; background-color: #020617; color: #e5e7eb;">
          <h2 style="font-size: 20px; margin-bottom: 12px;">New message from your portfolio</h2>
          <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
          <hr style="margin: 16px 0; border-color: #1f2937;" />
          <p style="margin: 0 0 4px 0;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6; margin-top: 4px;">${message}</p>
        </div>
      `,
    });

    console.log("[contact] Resend response", result);

    // Resend returns { data, error }. If error exists, treat as failure.
    if ((result as any)?.error) {
      const err = (result as any).error;
      console.error("[contact] Resend returned an error", err);
      return {
        success: false,
        error:
          err?.message ||
          "Email provider rejected the request. Please try again later.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("[contact] Failed to send contact email", error);
    return { success: false, error: "Something went wrong while sending your message." };
  }
}

