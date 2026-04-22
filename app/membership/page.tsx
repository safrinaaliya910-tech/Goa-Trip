"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Check,
  Crown,
  Star,
  Gem,
  X,
  ShieldCheck,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Tier = {
  key: "gold" | "platinum" | "diamond";
  name: string;
  icon: any;
  price: string;
  tagline: string;
  features: string[];
  idealFor: string;
  popular: boolean;
};

const benefits = [
  {
    category: "Hotels & Resorts",
    items: [
      "Up to 60–80% savings at selected partner stays",
      "Priority reservations during peak season",
      "Room upgrades and late checkout benefits",
      "Special member-only resort packages",
    ],
  },
  {
    category: "Restaurants & Dining",
    items: [
      "Exclusive discounts at premium restaurants",
      "Reserved tables at partner venues",
      "Complimentary welcome perks at select locations",
      "Special dining offers for couples, families, and groups",
    ],
  },
  {
    category: "Travel & Experiences",
    items: [
      "Special pricing on cabs, rentals, cruises, and activities",
      "Discounted access to curated Goa experiences",
      "Faster booking support through premium assistance",
      "Seasonal travel deals available only to members",
    ],
  },
  {
    category: "Nightlife & Entertainment",
    items: [
      "Member privileges at clubs, lounges, and events",
      "Priority entry at selected nightlife venues",
      "Exclusive access to premium event offers",
      "Special entertainment and party partner discounts",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Membership",
    description:
      "Select the Goa Trip card that fits your lifestyle, budget, and travel plans.",
  },
  {
    number: "02",
    title: "Complete Your Checkout",
    description:
      "Review your order, fill in your details, and make a secure payment in minutes.",
  },
  {
    number: "03",
    title: "Use Your Card in Goa",
    description:
      "Show your membership and unlock premium discounts, benefits, and exclusive privileges across Goa.",
  },
];

const tiers: Tier[] = [
  {
    key: "gold",
    name: "Gold",
    icon: Crown,
    price: "10,000",
    tagline:
      "Perfect for smart travelers who want premium Goa access at the best value.",
    idealFor: "Ideal for couples, solo travelers, and frequent weekend visitors.",
    features: [
      "Access to selected partner hotels, restaurants, and travel partners",
      "Up to 60% discounts at participating venues",
      "Priority reservation support",
      "Special seasonal member offers",
      "Digital membership card",
      "Lifetime membership access",
    ],
    popular: false,
  },
  {
    key: "platinum",
    name: "Platinum",
    icon: Star,
    price: "15,000",
    tagline:
      "Our most popular membership for premium experiences and bigger savings.",
    idealFor: "Ideal for families, premium travelers, and regular Goa visitors.",
    features: [
      "Broader partner network across Goa",
      "Up to 70% discounts at participating venues",
      "Priority booking and premium support",
      "Special access to curated experiences",
      "Enhanced dining, stay, and travel privileges",
      "Digital membership card",
      "Lifetime membership access",
    ],
    popular: true,
  },
  {
    key: "diamond",
    name: "Diamond",
    icon: Gem,
    price: "25,000",
    tagline:
      "The ultimate elite card for high-value savings and top-tier member treatment.",
    idealFor:
      "Ideal for luxury travelers, VIP clients, and those who want the best of Goa.",
    features: [
      "Premium access across top partner categories",
      "Up to 80% discounts at participating venues",
      "Priority concierge-style assistance",
      "High-value luxury stay and dining privileges",
      "Premium event, nightlife, and experience offers",
      "Digital membership card",
      "Lifetime membership access",
    ],
    popular: false,
  },
];

function loadRazorpayScript() {
  return new Promise<boolean>((resolve) => {
    if (document.getElementById("razorpay-checkout-script")) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-checkout-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function MembershipPage() {
  const router = useRouter();

  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  const openCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setCheckoutStep(1);
  };

  const closeCheckout = () => {
    setSelectedTier(null);
    setCheckoutStep(1);
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setCustomerCity("");
    setIsLoadingPayment(false);
  };

  const canContinueToPayment =
    customerName.trim() &&
    customerEmail.trim() &&
    customerPhone.trim() &&
    customerCity.trim();

  const goToSuccessPage = () => {
    if (!selectedTier) return;

    const membershipId = `GT-${selectedTier.name
      .slice(0, 3)
      .toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const params = new URLSearchParams({
      membershipId,
      plan: selectedTier.name,
      amountPaid: selectedTier.price.replace(/,/g, ""),
      memberName: customerName,
      email: customerEmail,
      phone: customerPhone,
      city: customerCity,
      validity: "Lifetime Membership",
      paymentId: `DEMO-${Date.now()}`,
      demo: "true",
    });

    closeCheckout();
    router.push(`/order-success?${params.toString()}`);
  };

  const startRazorpayPayment = async () => {
    if (!selectedTier) return;

    try {
      setIsLoadingPayment(true);

      const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!publicKey) {
        goToSuccessPage();
        return;
      }

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        goToSuccessPage();
        return;
      }

      const createOrderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedTier.key,
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          city: customerCity,
        }),
      });

      const createOrderData = await createOrderRes.json();

      if (!createOrderRes.ok || !createOrderData?.order?.id) {
        goToSuccessPage();
        return;
      }

      const options = {
        key: publicKey,
        amount: createOrderData.order.amount,
        currency: createOrderData.order.currency,
        name: "Goa Trip",
        description: `${selectedTier.name} Membership`,
        image: "/images/logo.png",
        order_id: createOrderData.order.id,
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        notes: {
          city: customerCity,
          membershipPlan: selectedTier.name,
        },
        theme: {
          color: "#d4af37",
        },
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: createOrderData.order.id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                plan: selectedTier.key,
                name: customerName,
                email: customerEmail,
                phone: customerPhone,
                city: customerCity,
              }),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok || !verifyData.success) {
              goToSuccessPage();
              return;
            }

            const membership = verifyData.membership;
            const params = new URLSearchParams({
              membershipId: membership.membershipId,
              plan: membership.plan,
              amountPaid: String(membership.amountPaid),
              memberName: membership.memberName,
              email: membership.email,
              phone: membership.phone,
              city: membership.city,
              validity: membership.validity,
              paymentId: membership.paymentId,
              demo: "false",
            });

            closeCheckout();
            router.push(`/order-success?${params.toString()}`);
          } catch {
            goToSuccessPage();
          }
        },
        modal: {
          ondismiss: function () {
            setIsLoadingPayment(false);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setIsLoadingPayment(false);
    } catch (error) {
      console.error(error);
      goToSuccessPage();
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-[75vh] min-h-[560px] overflow-hidden">
        <Image
          src="/images/membership-hero.jpg"
          alt="Luxury membership cards"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="px-6 text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-6 h-px w-24 bg-primary"
            />
            <h1 className="text-4xl font-light uppercase tracking-[0.18em] text-foreground md:text-6xl lg:text-7xl">
              Membership
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Buy one premium Goa Trip membership card and unlock exceptional
              value across hotels, restaurants, travel, nightlife, and curated
              experiences in Goa.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.28em] text-primary md:text-base">
              Up to 60–80% Member Savings • Premium Access • Lifetime Value
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-6 h-px w-24 bg-primary"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Why Goa Trip Membership
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              One Card. <span className="text-primary">Many Premium Privileges.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Goa Trip is a premium membership platform designed for people who
              want to explore Goa smarter, better, and in style.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="border border-border bg-card p-6">
                <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  Trusted Savings
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Unlock up to 60–80% discounts across selected partner venues in Goa.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <BadgeCheck className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  Premium Access
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Get special offers, faster bookings, and premium privileges.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <CreditCard className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  Lifetime Value
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Choose a lifetime membership and keep enjoying Goa benefits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Member Benefits
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              Bigger Savings. Better Experiences. More Goa.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50"
              >
                <h3 className="text-xl font-medium uppercase tracking-wider text-primary">
                  {benefit.category}
                </h3>
                <ul className="mt-6 space-y-3">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              Buy Once. Benefit For Years.
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <span className="text-7xl font-light text-primary/20">{step.number}</span>
                <h3 className="mt-2 text-xl font-medium uppercase tracking-wider text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-8 hidden h-px w-full bg-gradient-to-r from-primary/50 to-transparent md:block"
                    style={{ transform: "translateX(50%)" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Choose Your Tier
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              Membership Plans
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative border bg-card p-8 transition-all duration-500 ${
                  tier.popular
                    ? "border-primary shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 flex items-center justify-center">
                  <tier.icon
                    className={`h-12 w-12 ${
                      tier.popular ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>

                <h3 className="text-center text-2xl font-medium uppercase tracking-wider text-foreground">
                  {tier.name}
                </h3>

                <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                  {tier.tagline}
                </p>

                <div className="mt-6 text-center">
                  <span className="text-sm text-muted-foreground">Lifetime membership price</span>
                  <div className="mt-2">
                    <span className="text-4xl font-light text-primary">₹{tier.price}</span>
                  </div>
                </div>

                <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  {tier.idealFor}
                </p>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openCheckout(tier)}
                  className={`mt-8 block w-full py-4 text-center text-sm uppercase tracking-widest transition-all duration-300 ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Get {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTier && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl border border-primary/30 bg-card shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <button
                  onClick={closeCheckout}
                  className="absolute right-4 top-4 text-muted-foreground transition hover:text-foreground"
                  aria-label="Close checkout"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="border-b border-border p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    Secure Checkout
                  </p>
                  <h3 className="mt-3 text-2xl font-light text-foreground md:text-3xl">
                    {checkoutStep === 1 && `Order Details — ${selectedTier.name}`}
                    {checkoutStep === 2 && "Payment"}
                  </h3>

                  <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest">
                    <span
                      className={`rounded-full px-3 py-1 ${
                        checkoutStep >= 1
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      1. Details
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 ${
                        checkoutStep >= 2
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      2. Payment
                    </span>
                  </div>
                </div>

                {checkoutStep === 1 && (
                  <div className="p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                      <div>
                        <div className="border border-border bg-background/40 p-5">
                          <p className="text-xs uppercase tracking-[0.3em] text-primary">
                            Selected Membership
                          </p>
                          <h4 className="mt-3 text-2xl font-light text-foreground">
                            {selectedTier.name}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {selectedTier.tagline}
                          </p>

                          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center justify-between">
                              <span>Membership Price</span>
                              <span className="text-foreground">₹{selectedTier.price}</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-border pt-3">
                              <span className="font-medium text-foreground">Total</span>
                              <span className="text-xl font-light text-primary">₹{selectedTier.price}</span>
                            </div>
                          </div>

                          <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                            Includes digital membership activation and lifetime access.
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="mb-2 block text-sm text-foreground">Full Name</label>
                          <input
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">Email Address</label>
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">Phone Number</label>
                          <input
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">City</label>
                          <input
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            placeholder="Enter your city"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => setCheckoutStep(2)}
                          disabled={!canContinueToPayment}
                          className="mt-2 w-full bg-primary px-5 py-4 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {checkoutStep === 2 && (
                  <div className="p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-[1fr_0.95fr]">
                      <div className="border border-border bg-background/40 p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">
                          Payment Summary
                        </p>
                        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                          <div className="flex items-center justify-between">
                            <span>Plan</span>
                            <span className="text-foreground">{selectedTier.name}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Name</span>
                            <span className="text-foreground">{customerName}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Email</span>
                            <span className="text-foreground">{customerEmail}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Phone</span>
                            <span className="text-foreground">{customerPhone}</span>
                          </div>
                          <div className="flex items-center justify-between border-t border-border pt-3">
                            <span className="font-medium text-foreground">Payable Amount</span>
                            <span className="text-xl font-light text-primary">₹{selectedTier.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">
                          Razorpay Payment
                        </p>
                        <h4 className="mt-3 text-xl font-light text-foreground">
                          Pay Securely
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          Click below to continue with Razorpay Checkout. If Razorpay is not ready yet, it will still continue to the success page for demo.
                        </p>

                        <div className="mt-6 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setCheckoutStep(1)}
                            className="w-1/2 border border-border px-4 py-4 text-sm uppercase tracking-widest text-foreground transition hover:border-primary hover:text-primary"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={startRazorpayPayment}
                            disabled={isLoadingPayment}
                            className="w-1/2 bg-primary px-4 py-4 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
                          >
                            {isLoadingPayment ? "Processing..." : "Pay Now"}
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={goToSuccessPage}
                          className="mt-4 w-full border border-primary px-4 py-4 text-sm uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
                        >
                          Continue Demo Success
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}