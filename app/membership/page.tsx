"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";
import {
  Check,
  Crown,
  Star,
  Gem,
  X,
  ShieldCheck,
  CreditCard,
  BadgeCheck,
  Sparkles,
  Users,
  Hotel,
  Plane,
  Utensils,
  Martini,
  Zap,
} from "lucide-react";

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

export default function MembershipPage() {
  const router = useRouter();
  const { t } = useTranslation();

  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  const benefits = [
    {
      category: t("membership.benefits.hotels.category"),
      items: [
        t("membership.benefits.hotels.item1"),
        t("membership.benefits.hotels.item2"),
        t("membership.benefits.hotels.item3"),
        t("membership.benefits.hotels.item4"),
      ],
    },
    {
      category: t("membership.benefits.dining.category"),
      items: [
        t("membership.benefits.dining.item1"),
        t("membership.benefits.dining.item2"),
        t("membership.benefits.dining.item3"),
        t("membership.benefits.dining.item4"),
      ],
    },
    {
      category: t("membership.benefits.travel.category"),
      items: [
        t("membership.benefits.travel.item1"),
        t("membership.benefits.travel.item2"),
        t("membership.benefits.travel.item3"),
        t("membership.benefits.travel.item4"),
      ],
    },
    {
      category: t("membership.benefits.nightlife.category"),
      items: [
        t("membership.benefits.nightlife.item1"),
        t("membership.benefits.nightlife.item2"),
        t("membership.benefits.nightlife.item3"),
        t("membership.benefits.nightlife.item4"),
      ],
    },
  ];

  const membershipPower = [
    {
      name: t("membership.power.gold.name"),
      icon: Crown,
      members: t("membership.power.gold.members"),
      title: t("membership.power.gold.title"),
      description: t("membership.power.gold.description"),
      highlights: [
        t("membership.power.gold.h1"),
        t("membership.power.gold.h2"),
        t("membership.power.gold.h3"),
        t("membership.power.gold.h4"),
        t("membership.power.gold.h5"),
      ],
    },
    {
      name: t("membership.power.platinum.name"),
      icon: Star,
      members: t("membership.power.platinum.members"),
      title: t("membership.power.platinum.title"),
      description: t("membership.power.platinum.description"),
      highlights: [
        t("membership.power.platinum.h1"),
        t("membership.power.platinum.h2"),
        t("membership.power.platinum.h3"),
        t("membership.power.platinum.h4"),
        t("membership.power.platinum.h5"),
      ],
    },
    {
      name: t("membership.power.diamond.name"),
      icon: Gem,
      members: t("membership.power.diamond.members"),
      title: t("membership.power.diamond.title"),
      description: t("membership.power.diamond.description"),
      highlights: [
        t("membership.power.diamond.h1"),
        t("membership.power.diamond.h2"),
        t("membership.power.diamond.h3"),
        t("membership.power.diamond.h4"),
        t("membership.power.diamond.h5"),
        t("membership.power.diamond.h6"),
      ],
    },
  ];

  const steps = [
    { number: "01", title: t("membership.steps.s1.title"), description: t("membership.steps.s1.desc") },
    { number: "02", title: t("membership.steps.s2.title"), description: t("membership.steps.s2.desc") },
    { number: "03", title: t("membership.steps.s3.title"), description: t("membership.steps.s3.desc") },
    { number: "04", title: t("membership.steps.s4.title"), description: t("membership.steps.s4.desc") },
  ];

  const tiers: Tier[] = [
    {
      key: "gold",
      name: "Gold",
      icon: Crown,
      price: "110",
      tagline: t("membership.tiers.gold.tagline"),
      idealFor: t("membership.tiers.gold.idealFor"),
      features: [
        t("membership.tiers.gold.f1"),
        t("membership.tiers.gold.f2"),
        t("membership.tiers.gold.f3"),
        t("membership.tiers.gold.f4"),
        t("membership.tiers.gold.f5"),
        t("membership.tiers.gold.f6"),
      ],
      popular: false,
    },
    {
      key: "platinum",
      name: "Platinum",
      icon: Star,
      price: "160",
      tagline: t("membership.tiers.platinum.tagline"),
      idealFor: t("membership.tiers.platinum.idealFor"),
      features: [
        t("membership.tiers.platinum.f1"),
        t("membership.tiers.platinum.f2"),
        t("membership.tiers.platinum.f3"),
        t("membership.tiers.platinum.f4"),
        t("membership.tiers.platinum.f5"),
        t("membership.tiers.platinum.f6"),
        t("membership.tiers.platinum.f7"),
      ],
      popular: true,
    },
    {
      key: "diamond",
      name: "Diamond",
      icon: Gem,
      price: "260",
      tagline: t("membership.tiers.diamond.tagline"),
      idealFor: t("membership.tiers.diamond.idealFor"),
      features: [
        t("membership.tiers.diamond.f1"),
        t("membership.tiers.diamond.f2"),
        t("membership.tiers.diamond.f3"),
        t("membership.tiers.diamond.f4"),
        t("membership.tiers.diamond.f5"),
        t("membership.tiers.diamond.f6"),
        t("membership.tiers.diamond.f7"),
      ],
      popular: false,
    },
  ];

  const openCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setCheckoutStep(1);
  };

  const closeCheckout = () => {
    setSelectedTier(null);
    setCheckoutStep(1);
    setFirstName("");
    setLastName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setCustomerAddress("");
    setCustomerCity("");
  };

  const canContinueToConfirm =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    customerEmail.trim() !== "" &&
    customerPhone.trim() !== "" &&
    customerAddress.trim() !== "" &&
    customerCity.trim() !== "";

  const goToPaymentPage = () => {
    if (!selectedTier) return;

    const membershipId = `GM-${selectedTier.name.slice(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const params = new URLSearchParams({
      membershipId,
      plan: selectedTier.name,
      amount: String(selectedTier.price),
      memberName: `${firstName} ${lastName}`.trim(),
      email: customerEmail,
      phone: customerPhone,
      address: customerAddress,
      city: customerCity,
    });

    closeCheckout();
    router.push(`/payment?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* --- 1. HERO SECTION --- */}
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
              {t("membership.heroTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("membership.heroSubtitle")}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.28em] text-primary md:text-base">
              {t("membership.heroTagline")}
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

      {/* --- 2. MEMBERSHIP PLANS SECTION --- */}
      <section className="bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("membership.plans.sectionTitle")}
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              {t("membership.plans.heading")}
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
                className="relative border bg-card p-8 transition-all duration-500 border-primary shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:bg-primary/5"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                      {t("membership.plans.popularTag")}
                    </span>
                  </div>
                )}
                <div className="mb-6 flex items-center justify-center">
                  <tier.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-center text-2xl font-medium uppercase tracking-wider text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                  {tier.tagline}
                </p>
                <div className="mt-6 text-center">
                  <span className="text-sm text-muted-foreground">
                    {t("membership.plans.priceLabel")}
                  </span>
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
                  className="mt-8 block w-full py-4 text-center text-sm uppercase tracking-widest transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("membership.plans.btnLabel")} {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. WHY GOA MOMENTS SECTION --- */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("membership.whyTitle")}
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              {t("membership.oneCard")}{" "}
              <span className="text-primary">{t("membership.premiumPrivileges")}</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {t("membership.whyDesc")}
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="border border-border bg-card p-6">
                <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  {t("membership.features.savings.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("membership.features.savings.desc")}
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <BadgeCheck className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  {t("membership.features.access.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("membership.features.access.desc")}
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <CreditCard className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg uppercase tracking-wider text-foreground">
                  {t("membership.features.value.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("membership.features.value.desc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. BENEFITS SECTION --- */}
      <section className="bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("membership.benefits.title")}
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              {t("membership.benefits.subtitle")}
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
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

      {/* --- 5. POWER SECTION --- */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              {t("membership.power.sectionTitle")}
            </span>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-light leading-tight text-foreground md:text-5xl">
              {t("membership.power.heading")}{" "}
              <span className="text-primary">{t("membership.power.headingGold")}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("membership.power.subheading")}
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-3">
            {membershipPower.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.15 }}
                className={`relative border bg-card/80 p-8 backdrop-blur-md transition-all duration-500 ${
                  card.name.includes("Diamond") || card.name.includes("डायमंड")
                    ? "border-primary shadow-[0_0_55px_rgba(212,175,55,0.18)]"
                    : "border-border hover:border-primary/60"
                }`}
              >
                {(card.name.includes("Diamond") || card.name.includes("डायमंड")) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                      {t("membership.power.priorityTag")}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <card.icon className="h-11 w-11 text-primary" />
                  <span className="border border-primary/30 px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
                    {card.members}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-light uppercase tracking-wider text-foreground">
                  {card.name}
                </h3>
                <h4 className="mt-4 text-xl font-light text-primary">{card.title}</h4>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-7 space-y-4">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-8 grid gap-3 border-t border-border pt-6 ${index === 0 ? "grid-cols-3" : "grid-cols-4"}`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Hotel className="h-5 w-5 text-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t("membership.power.labels.hotels")}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    {index === 0 ? (
                      <Plane className="h-5 w-5 text-primary" />
                    ) : (
                      <Utensils className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {index === 0 ? t("membership.power.labels.travel") : t("membership.power.labels.dining")}
                    </span>
                  </div>
                  {index !== 0 && (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Martini className="h-5 w-5 text-primary" />
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {t("membership.power.labels.clubs")}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-2 text-center">
                    {index === 2 ? (
                      <Zap className="h-5 w-5 text-primary" />
                    ) : (
                      <Users className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {index === 0 ? t("membership.power.labels.u4") : index === 2 ? t("membership.power.labels.hp") : t("membership.power.labels.u8")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. STEPS SECTION --- */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("membership.steps.sectionTitle")}
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              {t("membership.steps.heading")}
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                <span className="text-7xl font-light text-primary/20">{step.number}</span>
                <h3 className="mt-2 text-xl font-medium uppercase tracking-wider text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKOUT MODAL */}
      <AnimatePresence>
        {selectedTier && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto px-4 py-6 backdrop-blur-sm bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex min-h-full items-start justify-center md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative my-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-primary/30 bg-card shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <button
                  onClick={closeCheckout}
                  aria-label="Close checkout"
                  title="Close"
                  className="absolute right-4 top-4 z-10 text-muted-foreground transition hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="border-b border-border p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {t("membership.checkout.secureTitle")}
                  </p>
                  <h3 className="mt-3 text-2xl font-light text-foreground md:text-3xl">
                    {checkoutStep === 1 && `${t("membership.checkout.step1Heading")} - ${selectedTier.name}`}
                    {checkoutStep === 2 && t("membership.checkout.step2Heading")}
                  </h3>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-widest">
                    <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                      1. {t("membership.checkout.indicator1")}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 ${
                        checkoutStep >= 2 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                      }`}
                    >
                      2. {t("membership.checkout.indicator2")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                      3. {t("membership.checkout.indicator3")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                      4. {t("membership.checkout.indicator4")}
                    </span>
                  </div>
                </div>

                {checkoutStep === 1 && (
                  <div className="p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
                      <div>
                        <div className="border border-border bg-background/40 p-5">
                          <p className="text-xs uppercase tracking-[0.3em] text-primary">
                            {t("membership.checkout.selectedTitle")}
                          </p>
                          <h4 className="mt-3 text-2xl font-light text-foreground">{selectedTier.name}</h4>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {selectedTier.tagline}
                          </p>
                          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center justify-between">
                              <span>{t("membership.checkout.priceLabel")}</span>
                              <span className="text-foreground">₹{selectedTier.price}</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-border pt-3">
                              <span className="font-medium text-foreground">
                                {t("membership.checkout.totalLabel")}
                              </span>
                              <span className="text-xl font-light text-primary">₹{selectedTier.price}</span>
                            </div>
                          </div>
                          <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                            {t("membership.checkout.infoNote")}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="mb-2 block text-sm text-foreground">
                              {t("membership.checkout.form.firstName")}
                            </label>
                            <input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First name"
                              className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm text-foreground">
                              {t("membership.checkout.form.lastName")}
                            </label>
                            <input
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last name"
                              className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">
                            {t("membership.checkout.form.email")}
                          </label>
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">
                            {t("membership.checkout.form.phone")}
                          </label>
                          <input
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ""))}
                            placeholder="Enter your phone number"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">
                            {t("membership.checkout.form.address")}
                          </label>
                          <input
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="Enter your full address"
                            className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm text-foreground">
                            {t("membership.checkout.form.city")}
                          </label>
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
                          disabled={!canContinueToConfirm}
                          className="mt-2 w-full bg-primary px-5 py-4 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {t("membership.checkout.btnContinue")}
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
                          {t("membership.checkout.summary.title")}
                        </p>
                        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                          <div className="flex items-center justify-between">
                            <span>{t("membership.checkout.summary.plan")}</span>
                            <span className="text-foreground">{selectedTier.name}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("membership.checkout.summary.name")}</span>
                            <span className="text-foreground">
                              {firstName} {lastName}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("membership.checkout.summary.email")}</span>
                            <span className="text-foreground">{customerEmail}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("membership.checkout.summary.phone")}</span>
                            <span className="text-foreground">{customerPhone}</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span>{t("membership.checkout.summary.address")}</span>
                            <span className="max-w-[60%] truncate text-right text-foreground">
                              {customerAddress}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>{t("membership.checkout.summary.city")}</span>
                            <span className="text-foreground">{customerCity}</span>
                          </div>
                          <div className="flex items-center justify-between border-t border-border pt-3">
                            <span className="font-medium text-foreground">
                              {t("membership.checkout.summary.amount")}
                            </span>
                            <span className="text-xl font-light text-primary">₹{selectedTier.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">
                          {t("membership.checkout.confirm.title")}
                        </p>
                        <h4 className="mt-3 text-xl font-light text-foreground">
                          {t("membership.checkout.confirm.heading")}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {t("membership.checkout.confirm.desc")}
                        </p>
                        <div className="mt-5 rounded-sm border border-primary/20 bg-background/30 p-4">
                          <div className="flex items-center gap-3">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <p className="text-sm text-foreground">
                              {t("membership.checkout.confirm.sparkNote")}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setCheckoutStep(1)}
                            className="w-1/2 border border-border px-4 py-4 text-sm uppercase tracking-widest text-foreground transition hover:border-primary hover:text-primary"
                          >
                            {t("membership.checkout.confirm.btnBack")}
                          </button>
                          <button
                            type="button"
                            onClick={goToPaymentPage}
                            className="w-1/2 bg-primary px-4 py-4 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
                          >
                            {t("membership.checkout.confirm.btnConfirm")}
                          </button>
                        </div>
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