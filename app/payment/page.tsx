"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Landmark,
  Wallet,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Method = "razorpay" | "paypal";

export default function PaymentPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [method, setMethod] = useState<Method>("razorpay");
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const membershipId = params.get("membershipId") || `GM-${Date.now()}`;
  const plan = params.get("plan") || "Platinum";
  const name = params.get("memberName") || "Member";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const address = params.get("address") || "";
  const city = params.get("city") || "";

  // NEW: Read corporate keys from string values
  const isCorporate = params.get("isCorporate") === "true";
  const gstin = params.get("gstin") || "";
  const companyName = params.get("companyName") || "";
  const companyAddress = params.get("companyAddress") || "";

  // FINANCIAL CALCULATION
  const baseAmount = Number(params.get("amount")) || 160;
  const serviceFee = 2.50;
  const gstRate = 0.18;
  const calculatedGst = (baseAmount + serviceFee) * gstRate;
  const totalAmount = (baseAmount + serviceFee + calculatedGst).toFixed(2);

  useEffect(() => {
    const existingScript = document.getElementById("razorpay-checkout-script");
    if (existingScript) {
      setRazorpayLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-checkout-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => setRazorpayLoaded(false);
    document.body.appendChild(script);
  }, []);

  const paymentTitle = useMemo(() => {
    if (method === "razorpay") return "Razorpay";
    return "PayPal";
  }, [method]);

  const paymentDescription = useMemo(() => {
    if (method === "razorpay") {
      return "Best for India payments with UPI, GPay, Paytm, cards, and net banking.";
    }
    return "Secure international payments via PayPal.";
  }, [method]);

  const paymentButtonLabel = useMemo(() => {
    if (method === "razorpay") return `Pay $${Number(totalAmount).toFixed(2)} with Razorpay`;
    return `Pay $${Number(totalAmount).toFixed(2)} with PayPal`;
  }, [method, totalAmount]);

  const goToSuccessPage = (paymentMethod: string, paymentId: string) => {
    const query = new URLSearchParams({
      membershipId,
      plan,
      amountPaid: totalAmount,
      memberName: name,
      email,
      phone,
      address,
      city,
      paymentId,
      validity: "Lifetime Membership",
      paymentMethod,
      isCorporate: String(isCorporate),
      gstin,
      companyName,
      companyAddress,
    });
    router.push(`/order-success?${query.toString()}`);
  };

  const handleRazorpayPayment = async () => {
    try {
      if (!razorpayLoaded || !window.Razorpay) {
        alert("Razorpay failed to load. Please refresh and try again.");
        setLoading(false);
        return;
      }
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalAmount,
          baseAmount,
          serviceFee,
          calculatedGst,
          membershipId,
          plan,
          name,
          email,
          phone,
          address,
          city,
          isCorporate,
          gstin,
          companyName,
          companyAddress,
        }),
      });

      if (!response.ok) throw new Error("Failed to create Razorpay order");
      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "GOA MOMENTS",
        description: `Plan: $${baseAmount.toFixed(2)} | Fee: $${serviceFee.toFixed(2)} | GST: $${calculatedGst.toFixed(2)}`,
        image: "/images/logo.png",
        order_id: order.id,
        handler: function (response: any) {
          goToSuccessPage("razorpay", response.razorpay_payment_id);
        },
        prefill: { name, email, contact: phone },
        notes: { membershipId, plan, city, isCorporate: String(isCorporate), gstin },
        theme: { color: "#d4af37" },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay payment failed:", error);
      alert("Unable to start payment. Please try again.");
      setLoading(false);
    }
  };

  const handlePayPalPayment = async () => {
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          plan,
          membershipId,
          memberName: name,
          email,
          phone,
          address,
          city,
          isCorporate,
          gstin,
          companyName,
          companyAddress,
        }),
      });
      const data = await response.json();
      const approveLink = data.links?.find((link: any) => link.rel === "approve")?.href;
      
      if (!response.ok || !approveLink) {
        throw new Error(data?.message || data?.error || "PayPal session creation failed");
      }
      
      window.location.href = approveLink;
    } catch (error) {
      console.error("PayPal payment failed:", error);
      alert("Unable to start PayPal payment. Please try again.");
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    if (method === "razorpay") await handleRazorpayPayment();
    else if (method === "paypal") await handlePayPalPayment();
  };

  const methods = [
    { key: "razorpay" as Method, title: "Razorpay", desc: "UPI, GPay, Paytm, cards, and net banking", icon: Landmark },
    { key: "paypal" as Method, title: "PayPal", desc: "Secure international payments via PayPal", icon: Wallet },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navigation />
      <section className="relative z-10 px-6 pt-[220px] lg:pt-[260px] pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              Payment Method
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-black md:text-5xl">
              Secure Payment Experience
            </h1>
            <p className="mx-auto mt-5 max-w-3xl font-serif text-base leading-relaxed text-gray-700 md:text-lg">
              Select your preferred payment option and continue through a premium, secure checkout journey.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-serif text-[11px] uppercase tracking-widest">
            <span className="rounded-full border border-gray-300 bg-white px-4 py-1.5 font-bold text-gray-500 shadow-sm">1. Details</span>
            <span className="rounded-full border border-gray-300 bg-white px-4 py-1.5 font-bold text-gray-500 shadow-sm">2. Confirm Order</span>
            <span className="rounded-full border-[#D4AF37] bg-[#D4AF37] px-4 py-1.5 font-bold text-white shadow-md">3. Payment Method</span>
            <span className="rounded-full border border-gray-300 bg-white px-4 py-1.5 font-bold text-gray-500 shadow-sm">4. Order Successful</span>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-xl border border-[#D4AF37]/30 bg-white p-6 shadow-[0_15px_40px_rgba(212,175,55,0.1)]">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="font-serif text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Payment Options
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-black">
                    Choose How You Want To Pay
                  </h2>
                </div>
                <ShieldCheck className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <div className="mt-6 space-y-4">
                {methods.map((m) => {
                  const Icon = m.icon;
                  const active = method === m.key;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setMethod(m.key)}
                      className={`flex w-full items-center justify-between rounded-lg border p-5 text-left transition-all duration-300 ${
                        active
                          ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_5px_15px_rgba(212,175,55,0.15)]"
                          : "border-gray-200 bg-gray-50 hover:border-[#D4AF37]/50 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${active ? "border-[#D4AF37] bg-white" : "border-gray-300 bg-white"}`}>
                          <Icon className={`h-5 w-5 ${active ? "text-[#D4AF37]" : "text-gray-500"}`} />
                        </div>
                        <div>
                          <p className={`text-lg tracking-wide ${active ? "text-black" : "text-gray-800"}`} style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: active ? 900 : 700 }}>
                            {m.title}
                          </p>
                          <p className="mt-1 font-serif text-sm font-medium text-gray-600">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                      {active && <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4">
                <div className="flex items-start gap-3">
                  <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <p className="font-serif text-sm font-semibold leading-relaxed text-gray-800">
                    All payments are routed through secure provider checkout and your membership is activated after successful payment.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[#D4AF37]/30 bg-white p-6 shadow-[0_15px_40px_rgba(212,175,55,0.1)] md:p-8">
              <p className="font-serif text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Payment
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-black">
                {paymentTitle} Checkout
              </h2>
              <div className="mt-5 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <div>
                    <p className="text-[15px] text-black tracking-wide" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>
                      Selected: {paymentTitle}
                    </p>
                    <p className="mt-1 font-serif text-sm font-medium leading-relaxed text-gray-800">
                      {paymentDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* NEW FEATURE: Corporate metadata claim dashboard confirmation badge */}
              {isCorporate && (
                <div className="mt-4 rounded-lg border border-yellow-600/30 bg-yellow-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-black font-bold font-sans">
                        Corporate Input Tax Credit Claimed
                      </p>
                      <p className="mt-1 font-serif text-xs text-gray-700 leading-relaxed">
                        An official B2B tax invoice will automatically be sent to your email addressed to <strong className="uppercase">{companyName}</strong> (GSTIN: {gstin}).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase">Membership Plan</span>
                  <span className="text-base text-black tracking-wider" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{plan}</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase">Member Name</span>
                  <span className="text-base text-black tracking-wider uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{name}</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase">Email</span>
                  <span className="break-all text-[15px] text-black tracking-wider" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{email}</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase">Phone</span>
                  <span className="text-base text-black tracking-wider" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{phone}</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase pt-1">Address</span>
                  <span className="max-w-[60%] break-words text-right text-[15px] text-black tracking-wider capitalize" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{address}</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <span className="font-serif text-[12px] font-bold tracking-widest text-gray-500 uppercase">City</span>
                  <span className="text-base text-black tracking-wider uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>{city}</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-lg bg-gray-50 p-5 border border-gray-200">
                  <span className="font-serif text-sm font-bold tracking-widest text-black uppercase">Total Amount</span>
                  <span className="text-3xl text-[#D4AF37] tracking-wider" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}>
                    ${Number(totalAmount).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-[#D4AF37] py-4 text-[15px] uppercase tracking-widest text-white shadow-[0_4px_14px_rgba(212,175,55,0.4)] transition-all hover:bg-[#c29b2b] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] disabled:opacity-50"
                style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900 }}
              >
                {loading ? "Processing Securely..." : paymentButtonLabel}
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}