import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      membershipId,
      plan,
      amountPaid,
      memberName,
      email,
      phone,
      city,
      paymentId,
      validity,
      paymentMethod,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Member email is required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"GOA MOMENTS" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Welcome to GOA MOMENTS — ${plan} Membership Activated`,
      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 12px;">
      <tr>
        <td align="center">
          <table width="680" cellpadding="0" cellspacing="0" style="max-width:680px;width:100%;background:linear-gradient(135deg,#090909,#141006,#090909);border:1px solid #d4af37;box-shadow:0 0 45px rgba(212,175,55,0.28);">
            
            <tr>
              <td style="padding:34px 30px 20px;text-align:center;border-bottom:1px solid rgba(212,175,55,0.35);">
                <div style="font-size:30px;font-weight:700;letter-spacing:3px;color:#d4af37;">
                  GOA MOMENTS
                </div>
                <div style="margin-top:8px;font-size:11px;letter-spacing:5px;color:#e8c866;">
                  LUXURY LIVING
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 34px 20px;text-align:center;">
                <div style="display:inline-block;padding:8px 16px;border:1px solid rgba(212,175,55,0.45);color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;">
                  Payment Successful
                </div>

                <h1 style="margin:24px 0 12px;font-size:34px;line-height:1.2;font-weight:400;color:#ffffff;">
                  Welcome to Premium Goa Access
                </h1>

                <p style="margin:0 auto;max-width:520px;font-size:16px;line-height:1.8;color:#cfc7b8;">
                  Dear <strong style="color:#ffffff;">${memberName || "Member"}</strong>, congratulations.
                  You are now officially a <strong style="color:#d4af37;">${plan}</strong> member of
                  <strong style="color:#d4af37;">GOA MOMENTS</strong>.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 34px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#000000;border:1px solid rgba(212,175,55,0.55);">
                  <tr>
                    <td style="padding:24px;">
                      <h2 style="margin:0 0 18px;font-size:20px;font-weight:400;color:#d4af37;letter-spacing:1px;">
                        Membership Confirmation
                      </h2>

                      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#d8d2c7;">
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Membership ID</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;font-weight:bold;">${membershipId}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Plan</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;font-weight:bold;">${plan}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Amount Paid</td>
                          <td align="right" style="padding:8px 0;color:#d4af37;font-weight:bold;">$${amountPaid}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Payment Method</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;text-transform:capitalize;">${paymentMethod}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Payment ID</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;">${paymentId}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Validity</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;">${validity}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Phone</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;">${phone || "-"}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">City</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;">${city || "-"}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 34px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:22px;background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.35);">
                      <h2 style="margin:0 0 12px;font-size:22px;font-weight:400;color:#ffffff;">
                        Your GOA MOMENTS Support Starts Now
                      </h2>
                      <p style="margin:0;font-size:15px;line-height:1.8;color:#cfc7b8;">
                        As a member, you are not left alone after payment. Our team is here to support
                        you with hotels, restaurants, nightlife, taxis, travel guidance, curated
                        experiences, membership usage, and selected partner venue benefits.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 34px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="33.33%" style="padding:10px;">
                      <div style="border:1px solid rgba(212,175,55,0.35);padding:18px;text-align:center;min-height:105px;">
                        <div style="font-size:22px;color:#d4af37;font-weight:bold;">10–70%</div>
                        <div style="margin-top:8px;font-size:13px;color:#cfc7b8;line-height:1.5;">
                          Selected venue savings
                        </div>
                      </div>
                    </td>
                    <td width="33.33%" style="padding:10px;">
                      <div style="border:1px solid rgba(212,175,55,0.35);padding:18px;text-align:center;min-height:105px;">
                        <div style="font-size:22px;color:#d4af37;font-weight:bold;">Lifetime</div>
                        <div style="margin-top:8px;font-size:13px;color:#cfc7b8;line-height:1.5;">
                          Membership accessibility
                        </div>
                      </div>
                    </td>
                    <td width="33.33%" style="padding:10px;">
                      <div style="border:1px solid rgba(212,175,55,0.35);padding:18px;text-align:center;min-height:105px;">
                        <div style="font-size:22px;color:#d4af37;font-weight:bold;">Support</div>
                        <div style="margin-top:8px;font-size:13px;color:#cfc7b8;line-height:1.5;">
                          Strong GOA MOMENTS guidance
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 34px 30px;">
                <div style="padding:22px;border-left:3px solid #d4af37;background:#080808;">
                  <p style="margin:0;font-size:15px;line-height:1.8;color:#d8d2c7;">
                    Keep your Membership ID safe. Use it whenever you contact GOA MOMENTS support
                    for membership assistance, partner venue guidance, or premium Goa recommendations.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 34px;text-align:center;background:#000000;border-top:1px solid rgba(212,175,55,0.35);">
                <p style="margin:0;font-size:14px;line-height:1.7;color:#cfc7b8;">
                  Welcome to luxury living in Goa.<br/>
                  <strong style="color:#d4af37;">GOA MOMENTS Team</strong>
                </p>
                <p style="margin:18px 0 0;font-size:11px;letter-spacing:2px;color:#7c735f;">
                  PREMIUM MEMBERSHIP • CURATED SUPPORT • GOA LIFESTYLE ACCESS
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Membership email failed:", error);
    return NextResponse.json(
      { error: "Unable to send membership email." },
      { status: 500 }
    );
  }
}