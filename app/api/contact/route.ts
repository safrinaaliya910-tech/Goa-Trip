import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, supportType, message } = body;

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Reuse the same SMTP setup you use for membership emails
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send the email TO the Goa Moments admin email
    await transporter.sendMail({
      from: '"Goa Moments Website" <support@goamoments.com>', // Or your verified sender email
      replyTo: email, // This allows you to click "Reply" in Gmail and email the customer directly
      to: "goamoments.com@gmail.com",
      subject: `New Contact Form Inquiry: ${supportType || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d4af37;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Support Type:</strong> ${supportType || "Not specified"}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}