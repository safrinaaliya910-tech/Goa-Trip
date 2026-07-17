import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

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
      cardImage,
      isCorporate,
      gstin,
      companyName,
      companyAddress,
    } = body;

    if (!email) {
      return NextResponse.json({ error: "Member email is required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const attachments: any[] = [];
    
    // 1. Attach the Digital Membership Card
    if (cardImage) {
      const base64Data = cardImage.split("base64,")[1];
      attachments.push({
        filename: `${membershipId}-${plan.toLowerCase()}-card.jpg`,
        content: base64Data,
        encoding: "base64",
      });
    }

    // Financial calculations for the invoice
    const totalCost = Number(amountPaid) || 160;
    const calculatedBaseFee = (totalCost / 1.18) - 2.50;
    const computedGstAmt = totalCost - (totalCost / 1.18);

    // 2. Generate and Attach the PREMIUM B2B PDF Invoice
    if (isCorporate && gstin && companyName) {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595.28, 841.89]); // Standard A4 Size
      const { width, height } = page.getSize();
      
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
      // Colors: Pure Black for all text, Gold for accents
      const goldColor = rgb(0.831, 0.686, 0.216); // #D4AF37
      const blackColor = rgb(0, 0, 0);            // Pure Black (#000000)
      const lightGray = rgb(0.9, 0.9, 0.9);       // #E5E5E5 (Only used for thin border lines)
      const whiteColor = rgb(1, 1, 1);            // #FFFFFF

      // Helper function defaulting strictly to Bold Black text
      const drawText = (text: string, x: number, yOffset: number, size = 10, color = blackColor) => {
        page.drawText(text, { x, y: height - yOffset, size, font: boldFont, color });
      };

      // --- PREMIUM PDF DESIGN START ---

      // 1. Top Gold Accent Bar
      page.drawRectangle({ x: 0, y: height - 10, width: width, height: 10, color: goldColor });

      // 2. Logo & Header Section
      try {
        const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
        const logoBytes = fs.readFileSync(logoPath);
        const logoImage = await pdfDoc.embedPng(logoBytes); 
        
        const scaleFactor = 45 / logoImage.height;
        page.drawImage(logoImage, {
          x: 50,
          y: height - 75, 
          width: logoImage.width * scaleFactor,
          height: 45,
        });
      } catch (e) {
        drawText("GOA MOMENTS", 50, 55, 24, goldColor);
      }

      // Top Right: Invoice Info (Bold Black)
      drawText("TAX INVOICE", 400, 45, 22, goldColor);
      drawText(`Invoice No: INV-${Date.now().toString().slice(-6)}`, 400, 65, 10, blackColor);
      drawText(`Date: ${new Date().toLocaleDateString('en-IN')}`, 400, 80, 10, blackColor);

      // Main Gold Divider Line
      page.drawLine({ start: { x: 50, y: height - 105 }, end: { x: width - 50, y: height - 105 }, thickness: 1.5, color: goldColor });

      // 3. Billing Sections (Perfectly Side-by-Side)
      const sectionY = 135;
      
      // Left: Supplier Details (ALL BOLD BLACK)
      drawText("SUPPLIER DETAILS", 50, sectionY, 11, goldColor);
      drawText("LOTLAN EXPERT PRIVATE LIMITED", 50, sectionY + 20, 10, blackColor);
      drawText("Sarojini Road,Pappanaickenpalayam", 50, sectionY + 35, 10, blackColor); // <-- Edit Address Here
      drawText("Coimbatore, Tamil Nadu, 641044", 50, sectionY + 50, 10, blackColor);          // <-- Edit Pincode Here
      drawText("GSTIN: 33AAFCL4757P1ZY", 50, sectionY + 70, 10, blackColor);           // <-- Edit GSTIN Here

      // Right: Recipient Details (ALL BOLD BLACK)
      drawText("BILLED TO (RECIPIENT)", 320, sectionY, 11, goldColor);
      drawText(companyName.toUpperCase(), 320, sectionY + 20, 10, blackColor);
      drawText(companyAddress, 320, sectionY + 35, 10, blackColor);
      drawText(`City: ${city.toUpperCase()}`, 320, sectionY + 50, 10, blackColor);
      drawText(`BUYER GSTIN: ${gstin.toUpperCase()}`, 320, sectionY + 70, 10, blackColor);

      // 4. Table Header (Solid Gold Block with White Text)
      const tableY = sectionY + 110;
      page.drawRectangle({ x: 50, y: height - tableY - 20, width: width - 100, height: 26, color: goldColor });
      
      drawText("Description", 60, tableY + 13, 10, whiteColor);
      drawText("SAC Code", 250, tableY + 13, 10, whiteColor);
      drawText("Base Price", 330, tableY + 13, 10, whiteColor);
      drawText("GST (18%)", 410, tableY + 13, 10, whiteColor);
      drawText("Total", 490, tableY + 13, 10, whiteColor);

      // 5. Table Data Row (ALL BOLD BLACK)
      const rowY = tableY + 45;
      drawText(`${plan} Membership`, 60, rowY, 10, blackColor);
      drawText("999799", 250, rowY, 10, blackColor);
      drawText(`$${calculatedBaseFee.toFixed(2)}`, 330, rowY, 10, blackColor);
      drawText(`$${computedGstAmt.toFixed(2)}`, 410, rowY, 10, blackColor);
      drawText(`$${totalCost.toFixed(2)}`, 490, rowY, 10, blackColor);

      // Subtle Bottom Border for Row
      page.drawLine({ start: { x: 50, y: height - rowY - 15 }, end: { x: width - 50, y: height - rowY - 15 }, thickness: 1, color: lightGray });

      // 6. Totals Section (ALL BOLD BLACK)
      const totalsY = rowY + 45;
      drawText("Subtotal:", 410, totalsY, 10, blackColor);
      drawText(`$${calculatedBaseFee.toFixed(2)}`, 490, totalsY, 10, blackColor);
      
      drawText("GST (18%):", 410, totalsY + 18, 10, blackColor);
      drawText(`$${computedGstAmt.toFixed(2)}`, 490, totalsY + 18, 10, blackColor);

      // Thick Gold Line above Grand Total
      page.drawLine({ start: { x: 390, y: height - totalsY - 30 }, end: { x: width - 50, y: height - totalsY - 30 }, thickness: 2, color: goldColor });

      drawText("Grand Total:", 410, totalsY + 48, 12, goldColor);
      drawText(`$${totalCost.toFixed(2)}`, 490, totalsY + 48, 12, goldColor);

      // 7. Legal Footer (Centered, BOLD BLACK)
      const footerY = 780;
      page.drawLine({ start: { x: 50, y: height - footerY + 20 }, end: { x: width - 50, y: height - footerY + 20 }, thickness: 1, color: lightGray });
      
      const drawCenteredText = (text: string, yOffset: number, size = 9, color = blackColor) => {
        const textWidth = boldFont.widthOfTextAtSize(text, size);
        page.drawText(text, { x: (width - textWidth) / 2, y: height - yOffset, size, font: boldFont, color });
      };

      drawCenteredText("This is a computer-generated invoice and does not require a physical signature.", footerY, 9, blackColor);
      drawCenteredText(`Input Tax Credit (ITC) of 18% has been safely logged against Buyer GSTIN: ${gstin.toUpperCase()}`, footerY + 15, 9, blackColor);

      // --- PREMIUM PDF DESIGN END ---

      const pdfBytes = await pdfDoc.save();
      const pdfBuffer = Buffer.from(pdfBytes);

      attachments.push({
        filename: `Tax_Invoice_${paymentId}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      });
    }

    await transporter.sendMail({
      from: '"GOA MOMENTS" <support@goamoments.com>',
      replyTo: "support@goamoments.com",
      to: email,
      subject: `Welcome to GOA MOMENTS — ${plan} Membership Activated`,
      attachments: attachments,
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
                  You are now officially a <strong style="color:#d4af37;">${plan}</strong> member of <strong style="color:#d4af37;">GOA MOMENTS</strong>.
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
                          <td align="right" style="padding:8px 0;color:#ffffff;font-weight:bold;font-family:monospace;">${membershipId}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Plan</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;font-weight:bold;">${plan}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Amount Paid</td>
                          <td align="right" style="padding:8px 0;color:#d4af37;font-weight:bold;">$${totalCost.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Payment Method</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;text-transform:capitalize;">${paymentMethod}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Payment ID</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;font-family:monospace;">${paymentId}</td>
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
                        As a member, you are not left alone after payment. Our team is here to support you with hotels, restaurants, nightlife, taxis, travel guidance, curated experiences, membership usage, and selected partner venue privileges.
                      </p>
                      <div style="margin-top:16px;padding-top:16px;border-top:1px dashed rgba(212,175,55,0.3);">
                        <span style="color:#cfc7b8;font-size:15px;text-transform:uppercase;letter-spacing:1px;">Service Contact:</span>
                        <strong style="color:#d4af37;font-size:18px;letter-spacing:1px;margin-left:8px;">+91 9566416333</strong>
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
                    <strong>Your Digital Assets are Attached!</strong><br><br>
                    Please find your personalized <strong>${plan} membership card</strong> attached to this email. Keep your Membership ID safe. 
                    ${isCorporate ? '<br><br>Your official <strong>B2B Tax Invoice</strong> has also been attached as a PDF document for your accounting and GST input tax credit records.' : ''}
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
    return NextResponse.json({ error: "Unable to send membership email." }, { status: 500 });
  }
}