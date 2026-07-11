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
  MapPin,
  Loader2,
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
  const [addressError, setAddressError] = useState("");
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

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
      price: "125",
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
      price: "165",
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
      price: "265",
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
    setAddressError("");
  };

  const canContinueToConfirm =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    customerEmail.trim() !== "" &&
    customerPhone.trim() !== "" &&
    customerAddress.trim() !== "" &&
    customerCity.trim() !== "";

  const handleContinue = () => {
    const hasNumber = /\d/.test(customerAddress);
    const words = customerAddress.trim().split(/\s+/).length;
    if (!hasNumber || customerAddress.length < 15 || words < 3) {
      setAddressError("Please enter full address with country, state, pincode, and address.");
      return;
    }
    setAddressError("");
    setCheckoutStep(2);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsFetchingLocation(true);
    setAddressError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

          // DIAGNOSTIC CHECK 1: Is the key actually loaded?
          if (!googleApiKey) {
            alert("NEXT.JS ERROR: The API key is missing!\n\nPlease check your .env.local file. If you just added it, you MUST kill the terminal (Ctrl+C) and run 'npm run dev' again for Next.js to see it.");
            setIsFetchingLocation(false);
            return;
          }

          // We have the key! Let's ping Google.
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`);
          const data = await response.json();

          if (data.status === "OK" && data.results[0]) {
            // SUCCESS! Google's formatted address natively includes the exact street and pincode!
            setCustomerAddress(data.results[0].formatted_address);

            const cityObj = data.results[0].address_components.find((component: any) =>
              component.types.includes("locality") || component.types.includes("administrative_area_level_2")
            );

            if (cityObj && !customerCity) setCustomerCity(cityObj.long_name);
            setIsFetchingLocation(false);
            return;
          } else {
            // DIAGNOSTIC CHECK 2: Google Rejected the Request!
            alert(`GOOGLE MAPS BLOCKED THE REQUEST:\n\nStatus: ${data.status}\nMessage: ${data.error_message || "Unknown API restriction error"}\n\nTell your client to change Application Restrictions from 'Websites' to 'None' in the Google Cloud Console.`);
            setIsFetchingLocation(false);
            return; // Force it to stop so it doesn't fall back to the silent error!
          }
        } catch (error) {
          alert("Network failed to reach Google Maps. Check your internet connection.");
          setIsFetchingLocation(false);
        }
      },
      (error) => {
        setIsFetchingLocation(false);
        setAddressError("Location access denied or unavailable. Please type manually.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

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
                    <span className="text-4xl font-light text-primary">${tier.price}</span>
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
                // NOTE: Added overflow-x-hidden here to guarantee no horizontal scrolling
                className="relative my-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto overflow-x-hidden border border-primary/30 bg-card shadow-[0_0_50px_rgba(0,0,0,0.5)]"
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
                    <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground font-[Arial,sans-serif] font-bold">
                      1. {t("membership.checkout.indicator1")}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-[Arial,sans-serif] font-bold ${
                        checkoutStep >= 2 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                      }`}
                    >
                      2. {t("membership.checkout.indicator2")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground font-[Arial,sans-serif] font-bold">
                      3. {t("membership.checkout.indicator3")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground font-[Arial,sans-serif] font-bold">
                      4. {t("membership.checkout.indicator4")}
                    </span>
                  </div>
                </div>

                {checkoutStep === 1 && (
                  <div className="p-6 md:p-8">
                    {/* NOTE: Changed to md:grid-cols-2 for perfect sizing */}
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <div className="border border-border bg-background/40 p-5">
                          <p className="text-xs uppercase tracking-[0.3em] text-primary">
                            {t("membership.checkout.selectedTitle")}
                          </p>
                          <h4 className="mt-3 font-[Arial,sans-serif] text-xl font-bold tracking-wider text-foreground">
                            {selectedTier.name}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {selectedTier.tagline}
                          </p>
                          <div className="mt-6 space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                {t("membership.checkout.priceLabel")}
                              </span>
                              <span className="font-[Arial,sans-serif] text-lg font-bold tracking-wider text-foreground">
                                ${selectedTier.price}
                              </span>
                            </div>
                            <div className="flex items-center justify-between border-t border-border pt-4">
                              <span className="font-[Arial,sans-serif] text-sm font-bold uppercase tracking-widest text-foreground">
                                {t("membership.checkout.totalLabel")}
                              </span>
                              <span className="font-[Arial,sans-serif] text-2xl font-bold tracking-wider text-primary">
                                ${selectedTier.price}
                              </span>
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
                            <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.form.firstName")}
                            </label>
                            <input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First name"
                              autoComplete="given-name"
                              className="w-full border border-border bg-background px-4 py-3 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.form.lastName")}
                            </label>
                            <input
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last name"
                              autoComplete="family-name"
                              className="w-full border border-border bg-background px-4 py-3 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {t("membership.checkout.form.email")}
                          </label>
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="w-full border border-border bg-background px-4 py-3 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {t("membership.checkout.form.phone")}
                          </label>
                          <input
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ""))}
                            placeholder="Enter your phone number"
                            autoComplete="tel"
                            className="w-full border border-border bg-background px-4 py-3 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {t("membership.checkout.form.address")}
                          </label>
                          <div className="relative">
                            <input
                              value={customerAddress}
                              onChange={(e) => {
                                setCustomerAddress(e.target.value);
                                if (addressError) setAddressError("");
                              }}
                              placeholder="Enter country, state, pincode, address"
                              autoComplete="street-address"
                              className={`w-full border ${
                                addressError ? 'border-[#E57373]' : 'border-border'
                              } bg-background px-4 py-3 pr-12 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal`}
                            />
                            <button
                              type="button"
                              onClick={handleGetLocation}
                              disabled={isFetchingLocation}
                              title="Fetch current location"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary disabled:opacity-50"
                            >
                              {isFetchingLocation ? (
                                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                              ) : (
                                <MapPin className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          {addressError && (
                            <p className="mt-2 text-xs font-medium text-[#E57373]">
                              {addressError}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {t("membership.checkout.form.city")}
                          </label>
                          <input
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            placeholder="Enter your city"
                            autoComplete="address-level2"
                            className="w-full border border-border bg-background px-4 py-3 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleContinue}
                          disabled={!canContinueToConfirm}
                          className="mt-2 w-full bg-primary px-5 py-4 font-[Arial,sans-serif] text-[13px] font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {t("membership.checkout.btnContinue")}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {checkoutStep === 2 && (
                  <div className="p-6 md:p-8">
                    {/* NOTE: Changed to md:grid-cols-2 for perfect sizing without overflow */}
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="border border-border bg-background/40 p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">
                          {t("membership.checkout.summary.title")}
                        </p>
                        <div className="mt-6 space-y-5">
                          <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.summary.plan")}
                            </span>
                            <span className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right">
                              {selectedTier.name}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.summary.name")}
                            </span>
                            <span className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right">
                              {firstName} {lastName}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.summary.email")}
                            </span>
                            {/* NOTE: Added break-all to prevent long emails from breaking layout */}
                            <span className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground text-right break-all max-w-[60%]">
                              {customerEmail}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.summary.phone")}
                            </span>
                            <span className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground text-right">
                              {customerPhone}
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-1">
                              {t("membership.checkout.summary.address")}
                            </span>
                            <span className="max-w-[60%] truncate text-right font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground capitalize">
                              {customerAddress}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.summary.city")}
                            </span>
                            <span className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right">
                              {customerCity}
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="font-[Arial,sans-serif] text-sm font-bold uppercase tracking-widest text-foreground">
                              {t("membership.checkout.summary.amount")}
                            </span>
                            <span className="font-[Arial,sans-serif] text-2xl font-bold tracking-wider text-primary">
                              ${selectedTier.price}
                            </span>
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
                        <div className="mt-8 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setCheckoutStep(1)}
                            className="w-1/2 border border-border px-4 py-4 font-[Arial,sans-serif] text-[13px] font-bold uppercase tracking-widest text-foreground transition hover:border-primary hover:text-primary"
                          >
                            {t("membership.checkout.confirm.btnBack")}
                          </button>
                          <button
                            type="button"
                            onClick={goToPaymentPage}
                            className="w-1/2 bg-primary px-4 py-4 font-[Arial,sans-serif] text-[13px] font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
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