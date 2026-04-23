"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  CreditCard,
  Landmark,
  Wallet,
  Bitcoin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Method = "razorpay" | "stripe" | "paypal" | "crypto";

export default function PaymentPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [method, setMethod] = useState<Method>("razorpay");
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const membershipId = params.get("membershipId") || `GM-${Date.now()}`;
  const plan = params.get("plan") || "Platinum";
  const amount = params.get("amount") || "160";
  const name = params.get("memberName") || "Member";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const city = params.get("city") || "";

  useEffect(() => {
    const existingScript = document.getElementById("razorpay-checkout-script");

    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-checkout-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setScriptLoaded(false);

    document.body.appendChild(script);
  }, []);

  const paymentTitle = useMemo(() => {
    if (method === "razorpay") return "Razorpay";
    if (method === "stripe") return "Stripe";
    if (method === "paypal") return "PayPal";
    return "Crypto";
  }, [method]);

  const goToSuccessPage = (paymentMethod: string, paymentId: string) => {
    const query = new URLSearchParams({
      membershipId,
      plan,
      amountPaid: amount,
      memberName: name,
      email,
      phone,
      city,
      paymentId,
      validity: "Lifetime Membership",
      paymentMethod,
    });

    router.push(`/order-success?${query.toString()}`);
  };

  const handleRazorpayPayment = async () => {
    try {
      if (!scriptLoaded || !window.Razorpay) {
        alert("Razorpay failed to load. Please refresh and try again.");
        return;
      }

      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          membershipId,
          plan,
          name,
          email,
          phone,
          city,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Razorpay order");
      }

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "GOA MOMENTS",
        description: `${plan} Membership`,
        image: "/images/logo.png",
        order_id: order.id,
        handler: function (response: any) {
          goToSuccessPage("razorpay", response.razorpay_payment_id);
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        notes: {
          membershipId,
          plan,
          city,
        },
        theme: {
          color: "#d4af37",
        },
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

  const handlePayment = async () => {
    setLoading(true);

    if (method === "razorpay") {
      await handleRazorpayPayment();
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));
    goToSuccessPage(method, `ORDER-${Date.now()}`);
  };

  const methods = [
    {
      key: "razorpay" as Method,
      title: "Razorpay",
      desc: "UPI, cards, and net banking for India",
      icon: Landmark,
    },
    {
      key: "stripe" as Method,
      title: "Stripe",
      desc: "International debit and credit cards",
      icon: CreditCard,
    },
    {
      key: "paypal" as Method,
      title: "PayPal",
      desc: "Fast wallet-based international checkout",
      icon: Wallet,
    },
    {
      key: "crypto" as Method,
      title: "Crypto",
      desc: "BTC, ETH, USDT and other digital payments",
      icon: Bitcoin,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Payment Method
            </p>

            <h1 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              Secure Payment Experience
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Select your preferred payment option and continue through a premium, secure checkout journey.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-widest">
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              1. Details
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              2. Confirm Order
            </span>
            <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
              3. Payment Method
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              4. Order Successful
            </span>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-primary/30 bg-card p-6 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary">
                    Payment Options
                  </p>
                  <h2 className="mt-2 text-2xl font-light text-foreground">
                    Choose How You Want To Pay
                  </h2>
                </div>
                <ShieldCheck className="h-6 w-6 text-primary" />
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
                      className={`flex w-full items-center justify-between border p-5 text-left transition ${
                        active
                          ? "border-primary bg-primary/10 shadow-[0_0_25px_rgba(212,175,55,0.08)]"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg text-foreground">{m.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {m.desc}
                          </p>
                        </div>
                      </div>

                      {active && <CheckCircle2 className="h-5 w-5 text-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border border-border bg-card p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)]">
              <p className="text-xs uppercase tracking-widest text-primary">
                Payment
              </p>
              <h2 className="mt-2 text-3xl font-light text-foreground">
                Confirm & Continue
              </h2>

              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <span>Membership Plan</span>
                  <span className="text-right text-foreground">{plan}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Member Name</span>
                  <span className="text-right text-foreground">{name}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Email</span>
                  <span className="break-all text-right text-foreground">{email}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Phone</span>
                  <span className="text-right text-foreground">{phone}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>City</span>
                  <span className="text-right text-foreground">{city}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Selected Method</span>
                  <span className="text-right text-foreground">{paymentTitle}</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-border pt-5">
                  <span className="font-medium text-foreground">Amount</span>
                  <span className="text-2xl font-light text-primary">${amount}</span>
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  You are proceeding through a secure payment step to activate your GOA MOMENTS membership.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm uppercase tracking-widest text-white transition hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Proceed to Payment"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}