import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

// Helper to convert numbers to words (Strictly US Dollars + Cents)
function convertNumberToWords(amount: number): string {
  const num = Math.floor(amount);
  const cents = Math.round((amount - num) * 100);
  
  if (num === 0 && cents === 0) return "Zero Dollars";
  
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  const inWords = (n: number): string => {
    if (n < 20) return a[n];
    const strNum = n.toString();
    return b[parseInt(strNum[0])] + ' ' + a[parseInt(strNum[1])];
  };

  let word = '';
  let temp = num;
  
  if (temp > 99999) {
    word += inWords(Math.floor(temp / 100000)) + "Hundred Thousand ";
    temp %= 100000;
  }
  if (temp > 999) {
    word += inWords(Math.floor(temp / 1000)) + "Thousand ";
    temp %= 1000;
  }
  if (temp > 99) {
    word += inWords(Math.floor(temp / 100)) + "Hundred ";
    temp %= 100;
  }
  if (temp > 0) {
    word += (word !== '' ? 'and ' : '') + inWords(temp);
  }
  
  let finalString = "Dollars " + word.trim();
  if (cents > 0) {
    finalString += ` and ${cents}/100`;
  }
  
  return finalString;
}

export async function POST(req: Request) {
  console.log("=========================================");
  console.log("✉️ 1. EMAIL DISPATCH API TRIGGERED!");

  try {
    const body = await req.json();
    const {
      membershipId, plan, amountPaid, memberName, email, phone,
      address, city, paymentId, validity, paymentMethod,
      cardImage, isCorporate, gstin, companyName, companyAddress,
    } = body;

    if (!email) {
      console.error("🔴 ERROR: Missing recipient email address.");
      return NextResponse.json({ error: "Member email is required." }, { status: 400 });
    }

    console.log(`✉️ 2. Processing email for: ${email} | Plan: ${plan}`);

    // Determine Member Access limit
    const safePlanName = String(plan).toLowerCase();
    let memberAccessCount = "2"; 
    if (safePlanName === "platinum") memberAccessCount = "6";
    if (safePlanName === "diamond") memberAccessCount = "8";

    // Initialize Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // 🟢 FIX: Force timeout so server doesn't hang indefinitely if Resend is slow
      connectionTimeout: 10000, 
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    const attachments: any[] = [];
    
    // 1. Process Digital Membership Card Safely
    if (cardImage) {
      try {
        const base64Data = cardImage.split("base64,")[1];
        if (base64Data) {
          attachments.push({
            filename: `${membershipId}-${plan.toLowerCase()}-card.jpg`,
            content: base64Data,
            encoding: "base64",
          });
          console.log("✅ Membership Card Base64 processed successfully.");
        }
      } catch (imgErr) {
        console.error("⚠️ Warning: Failed to attach membership card image.", imgErr);
      }
    }

    // --- FINANCIAL CALCULATIONS ($ DOLLARS) ---
    const rawTotal = parseFloat(String(amountPaid).replace(/[^0-9.-]+/g, "")) || 165;
    const basePrice = rawTotal / 1.18;
    const totalTax = rawTotal - basePrice;
    const cgst = Math.round((totalTax / 2) * 100) / 100; 
    const sgst = totalTax - cgst; 
    const sacCode = "999799"; 
    const invoiceNo = `INV-${Date.now().toString().slice(-6)}`;
    const formatAmt = (num: number) => num.toFixed(2); 

    // 2. Generate and Attach PREMIUM B2B PDF Invoice
    if (isCorporate && gstin && companyName) {
      console.log("⚙️ Generating Corporate B2B PDF Invoice...");
      try {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595.28, 841.89]); 
        const { width, height } = page.getSize();
        
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const goldColor = rgb(0.831, 0.686, 0.216); 
        const blackColor = rgb(0, 0, 0); 
        
        const drawText = (text: string, x: number, y: number, size = 10, color = blackColor) => {
          page.drawText(text, { x, y: height - y, size, font: boldFont, color });
        };
        const drawCenterText = (text: string, xStart: number, xEnd: number, y: number, size = 10, color = blackColor) => {
          const textWidth = boldFont.widthOfTextAtSize(text, size);
          const center = xStart + (xEnd - xStart) / 2;
          page.drawText(text, { x: center - textWidth / 2, y: height - y, size, font: boldFont, color });
        };
        const drawRightText = (text: string, xRight: number, y: number, size = 10, color = blackColor) => {
          const textWidth = boldFont.widthOfTextAtSize(text, size);
          page.drawText(text, { x: xRight - textWidth, y: height - y, size, font: boldFont, color });
        };

        try {
          const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
          const logoBytes = fs.readFileSync(logoPath);
          const logoImage = await pdfDoc.embedPng(logoBytes); 
          const scaleFactor = 45 / logoImage.height;
          page.drawImage(logoImage, {
            x: 40, y: height - 75, width: logoImage.width * scaleFactor, height: 45,
          });
        } catch (e) {
          drawText("GOA MOMENTS", 40, 55, 24, goldColor);
        }

        drawText("TAX INVOICE", 400, 45, 22, goldColor);
        drawText(`Invoice No: ${invoiceNo}`, 400, 65, 10, blackColor);
        drawText(`Date: ${new Date().toLocaleDateString('en-IN')}`, 400, 80, 10, blackColor);
        page.drawLine({ start: { x: 40, y: height - 105 }, end: { x: 555, y: height - 105 }, thickness: 1.5, color: goldColor });

        const sectionY = 130;
        drawText("SUPPLIER DETAILS", 40, sectionY, 11, goldColor);
        drawText("LOTLAN EXPERT PRIVATE LIMITED", 40, sectionY + 20, 10, blackColor);
        drawText("Sarojini Road, Pappanaickenpalayam", 40, sectionY + 35, 10, blackColor);
        drawText("Coimbatore, Tamil Nadu, 641044", 40, sectionY + 50, 10, blackColor);
        drawText("GSTIN: 33AAFCL4757P1ZY", 40, sectionY + 70, 10, blackColor); 

        drawText("BILLED TO (RECIPIENT)", 320, sectionY, 11, goldColor);
        drawText(companyName.toUpperCase(), 320, sectionY + 20, 10, blackColor);
        drawText(companyAddress, 320, sectionY + 35, 10, blackColor);
        drawText(`City: ${city.toUpperCase()}`, 320, sectionY + 50, 10, blackColor);
        drawText(`BUYER GSTIN: ${gstin.toUpperCase()}`, 320, sectionY + 70, 10, blackColor);

        // TABLE 1
        const t1Y = 240;
        page.drawRectangle({ x: 40, y: height - (t1Y + 125), width: 515, height: 125, borderColor: blackColor, borderWidth: 1 });
        page.drawLine({ start: { x: 40, y: height - (t1Y + 25) }, end: { x: 555, y: height - (t1Y + 25) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 40, y: height - (t1Y + 50) }, end: { x: 555, y: height - (t1Y + 50) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 40, y: height - (t1Y + 75) }, end: { x: 555, y: height - (t1Y + 75) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 40, y: height - (t1Y + 100) }, end: { x: 555, y: height - (t1Y + 100) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 300, y: height - t1Y }, end: { x: 300, y: height - (t1Y + 125) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 430, y: height - t1Y }, end: { x: 430, y: height - (t1Y + 125) }, thickness: 1, color: blackColor });

        drawCenterText("Particulars", 40, 300, t1Y + 17, 10, blackColor);
        drawCenterText("HSN/SAC", 300, 430, t1Y + 17, 10, blackColor);
        drawCenterText("Amount ($)", 430, 555, t1Y + 17, 10, blackColor);
        drawText(`${plan} Membership Fee`, 45, t1Y + 42, 10, blackColor);
        drawCenterText(sacCode, 300, 430, t1Y + 42, 10, blackColor);
        drawRightText(formatAmt(basePrice), 545, t1Y + 42, 10, blackColor); 
        drawRightText("CGST @ 9.00%", 290, t1Y + 67, 10, blackColor);
        drawRightText(formatAmt(cgst), 545, t1Y + 67, 10, blackColor);
        drawRightText("SGST @ 9.00%", 290, t1Y + 92, 10, blackColor);
        drawRightText(formatAmt(sgst), 545, t1Y + 92, 10, blackColor);
        drawRightText("Grand Total", 290, t1Y + 117, 10, blackColor);
        drawRightText(formatAmt(rawTotal), 545, t1Y + 117, 10, blackColor);
        drawText(`Amount Chargeable (in words): ${convertNumberToWords(rawTotal)} Only.`, 40, t1Y + 145, 10, blackColor);

        // TABLE 2
        const t2Y = 410;
        page.drawRectangle({ x: 40, y: height - (t2Y + 90), width: 515, height: 90, borderColor: blackColor, borderWidth: 1 });
        page.drawLine({ start: { x: 215, y: height - (t2Y + 20) }, end: { x: 455, y: height - (t2Y + 20) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 40, y: height - (t2Y + 40) }, end: { x: 555, y: height - (t2Y + 40) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 40, y: height - (t2Y + 65) }, end: { x: 555, y: height - (t2Y + 65) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 120, y: height - t2Y }, end: { x: 120, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 215, y: height - t2Y }, end: { x: 215, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 265, y: height - (t2Y + 20) }, end: { x: 265, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 335, y: height - t2Y }, end: { x: 335, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 385, y: height - (t2Y + 20) }, end: { x: 385, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });
        page.drawLine({ start: { x: 455, y: height - t2Y }, end: { x: 455, y: height - (t2Y + 90) }, thickness: 1, color: blackColor });

        drawCenterText("HSN/SAC", 40, 120, t2Y + 25, 10, blackColor);
        drawCenterText("Taxable Value", 120, 215, t2Y + 25, 10, blackColor);
        drawCenterText("CGST", 215, 335, t2Y + 14, 10, blackColor);
        drawCenterText("SGST/UTGST", 335, 455, t2Y + 14, 10, blackColor);
        drawCenterText("Total Tax", 455, 555, t2Y + 25, 10, blackColor);
        drawCenterText("Rate", 215, 265, t2Y + 34, 10, blackColor);
        drawCenterText("Amount", 265, 335, t2Y + 34, 10, blackColor);
        drawCenterText("Rate", 335, 385, t2Y + 34, 10, blackColor);
        drawCenterText("Amount", 385, 455, t2Y + 34, 10, blackColor);

        drawCenterText(sacCode, 40, 120, t2Y + 57, 10, blackColor);
        drawRightText(formatAmt(basePrice), 205, t2Y + 57, 10, blackColor);
        drawCenterText("9.00%", 215, 265, t2Y + 57, 10, blackColor);
        drawRightText(formatAmt(cgst), 325, t2Y + 57, 10, blackColor); 
        drawCenterText("9.00%", 335, 385, t2Y + 57, 10, blackColor);
        drawRightText(formatAmt(sgst), 445, t2Y + 57, 10, blackColor); 
        drawRightText(formatAmt(totalTax), 545, t2Y + 57, 10, blackColor); 

        drawCenterText("Total", 40, 120, t2Y + 82, 10, blackColor);
        drawRightText(formatAmt(basePrice), 205, t2Y + 82, 10, blackColor);
        drawRightText(formatAmt(cgst), 325, t2Y + 82, 10, blackColor);
        drawRightText(formatAmt(sgst), 445, t2Y + 82, 10, blackColor);
        drawRightText(formatAmt(totalTax), 545, t2Y + 82, 10, blackColor);

        drawText("This is a computer-generated invoice and does not require a physical signature.", 40, 525, 9, blackColor);
        drawText(`Input Tax Credit (ITC) of 18% has been safely logged against Buyer GSTIN: ${gstin.toUpperCase()}`, 40, 540, 9, blackColor);

        const pdfBytes = await pdfDoc.save();
        const pdfBuffer = Buffer.from(pdfBytes);

        attachments.push({
          filename: `Tax_Invoice_${invoiceNo}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        });
        console.log("✅ PDF generated and attached.");
      } catch (pdfErr) {
        console.error("⚠️ Warning: Failed to generate PDF invoice.", pdfErr);
      }
    }

    console.log("✉️ 3. Transmitting to Resend via Nodemailer...");

    // 🟢 FIX: Wrap in a promise to catch explicit send failures
    const mailInfo = await transporter.sendMail({
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
                          <td align="right" style="padding:8px 0;color:#d4af37;font-weight:bold;">$${rawTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Payment Method</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;text-transform:capitalize;">${paymentMethod}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Invoice ID</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;font-family:monospace;">${invoiceNo}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;color:#a99f8b;">Validity</td>
                          <td align="right" style="padding:8px 0;color:#ffffff;">${validity}</td>
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
                    <strong style="color:#ffffff;font-size:16px;">Your Digital Assets are Attached!</strong><br><br>
                    Please find your personalized <strong>${plan} membership card</strong> attached to this email.<br><br>
                    <strong style="color:#d4af37;">How to use your card:</strong> Simply present the QR Code on your digital card at any partner venue. The venue manager will scan it for instant, seamless access. No manual details required.<br><br>
                    Your current plan allows for <strong style="color:#d4af37;">${memberAccessCount} Member Access</strong> entries.
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

    console.log("🟢 4. SUCCESS! Email dispatched. Message ID:", mailInfo.messageId);
    console.log("=========================================");
    return NextResponse.json({ success: true, messageId: mailInfo.messageId });

  } catch (error: any) {
    console.error("🔴 CRITICAL EMAIL FAILURE:", error.message);
    // 🟢 FIX: Ensure we return an error status so the frontend knows it failed
    return NextResponse.json({ error: "Unable to send membership email.", details: error.message }, { status: 500 });
  }
}