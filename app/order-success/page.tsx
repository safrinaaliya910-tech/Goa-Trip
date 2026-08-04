"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import QRCode from "qrcode";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const membershipId = searchParams.get("membershipId") || "GM-XXX-000000";
  const plan = searchParams.get("plan") || "Platinum";
  const amountPaid = searchParams.get("amountPaid") || "0";
  const memberName = searchParams.get("memberName") || "Member";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const address = searchParams.get("address") || "";
  const city = searchParams.get("city") || "";
  const validity = searchParams.get("validity") || "1 Year Validity";
  const paymentMethod = searchParams.get("paymentMethod") || "Secure Checkout";
  
  const paypalToken = searchParams.get("token");
  const rawPaymentId = searchParams.get("paymentId");
  
  const [orderId, setOrderId] = useState<string>(rawPaymentId || paypalToken || `ORDER-${Date.now()}`);
  const [verifying, setVerifying] = useState<boolean>(!!paypalToken);
  const [emailStatus, setEmailStatus] = useState<"sending" | "sent" | "failed">("sending");
  const workflowExecutedRef = useRef(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const safePlanName = plan.toLowerCase();
  const cardImagePath = `/images/${safePlanName}-card.jpg`;

  const isCorporate = searchParams.get("isCorporate") === "true";
  const gstin = searchParams.get("gstin") || "";
  const companyName = searchParams.get("companyName") || "";
  const companyAddress = searchParams.get("companyAddress") || "";

  useEffect(() => {
    if (workflowExecutedRef.current) return;
    if (!email || !cardImagePath) return;
    workflowExecutedRef.current = true;

    const executeWorkflow = async () => {
      let currentOrderId = orderId;

      if (paymentMethod === "paypal" && paypalToken) {
        try {
          const captureResponse = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: paypalToken }),
          });
          const captureData = await captureResponse.json();
          if (!captureResponse.ok) {
            throw new Error(captureData.error || "Failed to finalize PayPal capture.");
          }
          if (captureData.id) {
            setOrderId(captureData.id);
            currentOrderId = captureData.id;
          }
        } catch (err) {
          console.error("Critical capture error:", err);
          alert("Payment execution failed. Please verify with customer support.");
          setVerifying(false);
          return;
        }
      }
      setVerifying(false);

      let memberAccessCount = "2"; 
      if (safePlanName === "platinum") memberAccessCount = "6";
      if (safePlanName === "diamond") memberAccessCount = "8";

      // 🟢 VISUAL DATE: This is for the nice text on the physical card image
      const purchaseDateVisual = new Date().toLocaleDateString('en-US', { 
        day: '2-digit', month: 'short', year: 'numeric' 
      }).toUpperCase();

      // 🟢 FIXED QR PAYLOAD: Reverted exactly to lowercase keys so the Flutter app doesn't crash!
      const qrPayload = JSON.stringify({
        id: membershipId,
        name: memberName,
        phone: phone,
        email: email,
        plan: plan,
        date: new Date().toISOString().split('T')[0] // Reverted to the original format the app expects
      });
      
      const qrDataUrl = await QRCode.toDataURL(qrPayload, {
        width: 300,
        margin: 1,
        color: { dark: '#000000', light: '#FFFFFF' }
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = cardImagePath;
      
      img.onload = async () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let primaryColor = "#D4AF37";
        let labelColor = "#B89B2F";
        if (safePlanName === "platinum") {
          primaryColor = "#E5E4E2";
          labelColor = "#A0AAB5";
        } else if (safePlanName === "diamond") {
          primaryColor = "#FFFFFF";
          labelColor = "#94A3B8";
        }

        // --- ALIGNMENT FIX APPLIED HERE ---
        // Changed from 0.38 to 0.28 to shift text exactly to the marked red line
        const leftColX = canvas.width * 0.28; 
        const rightColX = canvas.width * 0.92;
        let startY = canvas.height * 0.55;

        ctx.textAlign = "left";
        ctx.fillStyle = primaryColor;
        ctx.font = `500 ${canvas.height * 0.022}px 'Arial', sans-serif`;
        ctx.fillText("LUXURY MEMBERSHIP EXPERIENCE", leftColX, startY);

        startY += canvas.height * 0.035;
        ctx.beginPath();
        ctx.moveTo(leftColX, startY);
        ctx.lineTo(rightColX, startY);
        ctx.strokeStyle = labelColor;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.4;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        const row1Y = startY + canvas.height * 0.06;
        const row2Y = startY + canvas.height * 0.15;
        const row3Y = startY + canvas.height * 0.24;
        const row4Y = startY + canvas.height * 0.33;

        // ROW 1: MEMBER NAME
        ctx.textAlign = "left";
        ctx.fillStyle = labelColor;
        ctx.font = `600 ${canvas.height * 0.015}px 'Arial', sans-serif`;
        ctx.fillText("MEMBER NAME", leftColX, row1Y);
        ctx.fillStyle = primaryColor;
        ctx.font = `bold ${canvas.height * 0.042}px 'Georgia', serif`;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        ctx.shadowBlur = 4; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 2;
        ctx.fillText(memberName.toUpperCase(), leftColX, row1Y + (canvas.height * 0.045));
        ctx.shadowColor = "transparent";

        // ROW 2: MEMBER ID
        ctx.fillStyle = labelColor;
        ctx.font = `600 ${canvas.height * 0.015}px 'Arial', sans-serif`;
        ctx.fillText("MEMBER ID", leftColX, row2Y);
        ctx.fillStyle = primaryColor;
        ctx.font = `bold ${canvas.height * 0.028}px 'Courier New', monospace`;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        ctx.shadowBlur = 4; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 1;
        ctx.fillText(membershipId.toUpperCase(), leftColX, row2Y + (canvas.height * 0.035));
        ctx.shadowColor = "transparent";

        // ROW 3: MEMBER ACCESS
        ctx.fillStyle = labelColor;
        ctx.font = `600 ${canvas.height * 0.015}px 'Arial', sans-serif`;
        ctx.fillText("MEMBER ACCESS", leftColX, row3Y);
        ctx.fillStyle = primaryColor;
        ctx.font = `bold ${canvas.height * 0.028}px 'Courier New', monospace`;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        ctx.shadowBlur = 4; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 1;
        ctx.fillText(memberAccessCount, leftColX, row3Y + (canvas.height * 0.035));
        ctx.shadowColor = "transparent";

        // ROW 4: PURCHASE DATE
        ctx.fillStyle = labelColor;
        ctx.font = `600 ${canvas.height * 0.015}px 'Arial', sans-serif`;
        ctx.fillText("PURCHASE DATE", leftColX, row4Y);
        ctx.fillStyle = primaryColor;
        ctx.font = `bold ${canvas.height * 0.028}px 'Courier New', monospace`;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        ctx.shadowBlur = 4; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 1;
        ctx.fillText(purchaseDateVisual, leftColX, row4Y + (canvas.height * 0.035));
        ctx.shadowColor = "transparent";

        // QR CODE & CONTACT
        const qrImg = new window.Image();
        qrImg.crossOrigin = "anonymous";
        qrImg.src = qrDataUrl;
        
        await new Promise((resolve) => { qrImg.onload = resolve; });

        const qrSize = canvas.height * 0.14;
        const qrX = rightColX - qrSize;
        const qrY = row1Y - (canvas.height * 0.01); 

        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(qrX - 3, qrY - 3, qrSize + 6, qrSize + 6);
        ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

        const contactStartY = qrY + qrSize + (canvas.height * 0.05);

        ctx.textAlign = "right";
        ctx.fillStyle = labelColor;
        ctx.font = `700 ${canvas.height * 0.015}px 'Arial', sans-serif`;
        ctx.fillText("REGISTERED CONTACT", rightColX, contactStartY);
        ctx.fillStyle = primaryColor;
        ctx.font = `bold ${canvas.height * 0.022}px 'Arial', sans-serif`;
        ctx.fillText(phone, rightColX, contactStartY + (canvas.height * 0.035));
        ctx.font = `600 ${canvas.height * 0.016}px 'Arial', sans-serif`;
        ctx.fillText(email.toLowerCase(), rightColX, contactStartY + (canvas.height * 0.060));

        // Compress to 40% quality to bypass Vercel's 4.5MB payload limit
        const finalImageDataUrl = canvas.toDataURL("image/jpeg", 0.4);
        setPreviewUrl(finalImageDataUrl);

        try {
          const dbResponse = await fetch("/api/save-member", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              membershipId, plan, amountPaid, memberName, email, phone, address, city,
              paymentId: paypalToken || currentOrderId,
              paymentMethod, status: "pending", isCorporate, gstin, companyName, companyAddress,
            }),
          });
          if (!dbResponse.ok) console.error("Database save failed during background sync.");
        } catch (dbErr) {
          console.error("Network error during database save:", dbErr);
        }

        try {
          const emailResponse = await fetch("/api/send-membership-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              membershipId, plan, amountPaid, memberName, email, phone, address, city,
              paymentId: paypalToken || currentOrderId,
              validity, paymentMethod, cardImage: finalImageDataUrl,
              isCorporate, gstin, companyName, companyAddress,
            }),
          });

          if (emailResponse.ok) {
            setEmailStatus("sent");
          } else {
            setEmailStatus("failed");
          }
        } catch (emailErr) {
          setEmailStatus("failed");
          console.error("Failed to dispatch membership email:", emailErr);
        }
      };
    };

    executeWorkflow();
  }, [cardImagePath, safePlanName, memberName, membershipId, phone, email, amountPaid, address, city, orderId, validity, paymentMethod, paypalToken, isCorporate, gstin, companyName, companyAddress, plan]);

  const downloadCard = () => {
    if (!previewUrl) return;
    const link = document.createElement("a");
    link.href = previewUrl;
    link.download = `${membershipId}-${safePlanName}-card.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (verifying) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center font-serif text-gray-800">
        <Sparkles className="animate-spin h-10 w-10 text-[#D4AF37]" />
        <h2 className="mt-4 text-xl font-medium tracking-wide">Securing Live Transaction Data...</h2>
        <p className="mt-2 text-sm text-gray-500">Executing final capture steps over security channels.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary">Order Confirmed</p>
            <h1 className="mt-5 text-5xl font-light text-foreground md:text-6xl lg:text-7xl">Order Successful</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Welcome to GOA MOMENTS. Your membership has been activated successfully. Your card, support access, and premium privileges are now live.
            </p>

            {emailStatus === "failed" && (
              <div className="mx-auto mt-6 max-w-md rounded border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200 flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>Notice: Automated confirmation email encountered a delivery delay. Your membership is fully active in our system.</span>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-widest">
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">1. Details</span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">2. Confirm Order</span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">3. Payment Method</span>
              <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">4. Order Successful</span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border border-primary/30 bg-card p-4 shadow-[0_0_40px_rgba(212,175,55,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">Membership Card Preview</p>
                  <p className="mt-2 text-lg text-foreground">{plan} Membership</p>
                </div>
                <button
                  type="button"
                  onClick={downloadCard}
                  className="border border-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Download Card
                </button>
              </div>
              <div className="mt-6 flex min-h-72 items-center justify-center bg-black/40 p-4 md:min-h-96 md:h-[380px]">
                <div className="relative h-56 w-full max-w-[700px]">
                  <Image src={previewUrl || cardImagePath} alt={`${plan} Membership card`} fill priority className="object-contain" />
                </div>
              </div>
              <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Your membership access is now active</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      You can now use your GOA MOMENTS membership card for eligible venue-based benefits, premium support guidance, and member savings at selected partner locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-light text-foreground">Order Details</h2>
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start justify-between gap-4">
                  <span>Membership ID</span>
                  <span className="text-right text-foreground">{membershipId}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Plan</span>
                  <span className="text-right text-foreground">{plan}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Amount Paid</span>
                  <span className="text-right text-foreground">${amountPaid}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Member Name</span>
                  <span className="text-right text-foreground">{memberName}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Email</span>
                  <span className="break-all text-right text-foreground">{email}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Phone</span>
                  <span className="text-right text-foreground">{phone}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Address</span>
                  <span className="max-w-[60%] break-words text-right text-foreground">{address}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>City</span>
                  <span className="text-right text-foreground">{city}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Payment Method</span>
                  <span className="text-right capitalize text-foreground">{paymentMethod}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Order ID</span>
                  <span className="break-all text-right text-foreground">{paypalToken || orderId}</span>
                </div>

                {isCorporate && (
                  <div className="mt-4 pt-4 border-t border-dashed border-border space-y-3 bg-primary/5 p-3 rounded-md">
                    <p className="text-xs uppercase tracking-wider font-sans font-bold text-primary">Corporate Invoice Details</p>
                    <div className="flex justify-between text-xs">
                      <span>Company Name</span>
                      <span className="text-foreground font-medium uppercase text-right max-w-[60%] break-words">{companyName}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>GSTIN Number</span>
                      <span className="text-foreground font-mono font-bold uppercase">{gstin}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Company Address</span>
                      <span className="text-foreground text-right max-w-[60%] break-words capitalize">{companyAddress}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 border-t border-border pt-3 text-primary">
                  <span>Status</span>
                  <span className="text-right font-medium">Confirmed</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Validity</span>
                  <span className="text-right text-foreground">{validity}</span>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={downloadCard}
                  className="w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
                >
                  Download Membership Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}