"use client";

import { useState, useRef, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
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


type TierCardProps = {
  tier: Tier;
  index: number;
  popularLabel: string;
  buttonLabel: string;
  onSelect: (tier: Tier) => void;
};

const tierVisuals = {
  gold: {
    accent: "#d7a93d",
    edge: "rgba(215,169,61,0.48)",
    soft: "rgba(215,169,61,0.14)",
    surface:
      "linear-gradient(145deg, rgba(31,24,10,0.98) 0%, rgba(11,10,7,0.99) 48%, rgba(5,5,5,1) 100%)",
    code: "G / 01",
  },
  platinum: {
    accent: "#eee1b4",
    edge: "rgba(238,225,180,0.58)",
    soft: "rgba(238,225,180,0.15)",
    surface:
      "linear-gradient(145deg, rgba(35,32,23,0.98) 0%, rgba(13,12,9,0.99) 48%, rgba(5,5,5,1) 100%)",
    code: "P / 02",
  },
  diamond: {
    accent: "#f0c85a",
    edge: "rgba(240,200,90,0.52)",
    soft: "rgba(240,200,90,0.14)",
    surface:
      "linear-gradient(145deg, rgba(28,23,12,0.98) 0%, rgba(10,9,7,0.99) 48%, rgba(4,4,4,1) 100%)",
    code: "D / 03",
  },
} as const;

function TierCard({
  tier,
  index,
  popularLabel,
  buttonLabel,
  onSelect,
}: TierCardProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [5.5, -5.5]),
    { stiffness: 210, damping: 24 }
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-7, 7]),
    { stiffness: 210, damping: 24 }
  );

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,244,207,0.22), rgba(255,255,255,0.035) 19%, transparent 45%)`;
  const visual = tierVisuals[tier.key];
  const Icon = tier.icon;

  const handlePointerMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x - 0.5);
    pointerY.set(y - 0.5);
    glareX.set(x * 100);
    glareY.set(y * 100);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#eee1b4]/45 bg-[#17150f] px-4 py-1.5 text-[9px] uppercase tracking-[0.25em] text-[#eee1b4] shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          {popularLabel}
        </motion.div>
      )}

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.65,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={reduceMotion ? undefined : { y: -7 }}
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointer}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: visual.surface,
          borderColor: visual.edge,
          boxShadow: tier.popular
            ? `0 28px 75px rgba(0,0,0,0.58), 0 0 38px ${visual.soft}`
            : "0 24px 65px rgba(0,0,0,0.48)",
        }}
        className={`group relative flex min-h-[545px] overflow-hidden rounded-[24px] border p-5 sm:p-6 ${
          tier.popular ? "lg:-translate-y-2" : ""
        }`}
      >
        <motion.div
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["-140%", "230%"],
                }
          }
          transition={{
            duration: 5.5,
            delay: index * 0.7,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 z-10 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.055] to-transparent"
        />

        <div className="pointer-events-none absolute inset-[7px] rounded-[19px] border border-white/[0.045]" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
          style={{ background: visual.soft }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${visual.accent}, transparent)`,
          }}
        />

        <div
          className="relative z-20 flex w-full flex-col"
          style={{ transform: "translateZ(34px)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-black/30"
              style={{ borderColor: visual.edge }}
            >
              <Icon className="h-6 w-6" style={{ color: visual.accent }} />
            </div>

            <div className="text-right">
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/28">
                Membership
              </p>
              <p
                className="mt-1 font-[Arial,sans-serif] text-[10px] font-semibold tracking-[0.2em]"
                style={{ color: visual.accent }}
              >
                {visual.code}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4 border-b border-white/[0.07] pb-5">
            <div>
              <h3 className="font-serif text-[28px] font-light uppercase tracking-[0.08em] text-white">
                {tier.name}
              </h3>
              <p className="mt-2 max-w-[235px] text-xs leading-5 text-white/42">
                {tier.tagline}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/28">
                Price
              </p>
              <div className="mt-1 flex items-start justify-end">
                <span
                  className="mt-1 font-[Arial,sans-serif] text-base font-light"
                  style={{ color: visual.accent }}
                >
                  $
                </span>
                <span
                  className="font-[Arial,sans-serif] text-4xl font-light leading-none"
                  style={{ color: visual.accent }}
                >
                  {tier.price}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 min-h-[42px] text-xs leading-5 text-white/46">
            {tier.idealFor}
          </p>

          <ul className="mt-4 grid gap-2.5">
            {tier.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-[12px] leading-[1.35rem] text-white/54"
              >
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 border"
                  style={{ borderColor: visual.accent }}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => onSelect(tier)}
            className="group/button relative mt-auto overflow-hidden rounded-xl border px-4 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] transition-all duration-300"
            style={{
              borderColor: visual.edge,
              color: tier.key === "platinum" ? "#080808" : visual.accent,
              background:
                tier.key === "platinum"
                  ? visual.accent
                  : "rgba(0,0,0,0.28)",
            }}
          >
            <span className="relative z-10">
              {buttonLabel} {tier.name}
            </span>
            <span
              className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover/button:translate-x-0"
              style={{
                background:
                  tier.key === "platinum"
                    ? "rgba(255,255,255,0.18)"
                    : visual.soft,
              }}
            />
          </button>
        </div>
      </motion.article>
    </div>
  );
}

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

  // NEW: Corporate GST States
  const [isCorporate, setIsCorporate] = useState(false);
  const [gstin, setGstin] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  // REFS FOR AUTO-FOCUS UX
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

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
      price: "1",
      tagline: t("membership.tiers.gold.tagline"),
      idealFor: t("membership.tiers.gold.idealFor"),
      features: [
        t("membership.tiers.gold.f1"),
        t("membership.tiers.gold.f2"),
        t("membership.tiers.gold.f3"),
        t("membership.tiers.gold.f4"),
        t("membership.tiers.gold.f5"),
        "Member Access: 2",
      ],
      popular: false,
    },
    {
      key: "platinum",
      name: "Platinum",
      icon: Star,
      price: "1",
      tagline: t("membership.tiers.platinum.tagline"),
      idealFor: t("membership.tiers.platinum.idealFor"),
      features: [
        t("membership.tiers.platinum.f1"),
        t("membership.tiers.platinum.f2"),
        t("membership.tiers.platinum.f3"),
        t("membership.tiers.platinum.f4"),
        t("membership.tiers.platinum.f5"),
        t("membership.tiers.platinum.f6"),
        "Member Access: 6",
      ],
      popular: true,
    },
    {
      key: "diamond",
      name: "Diamond",
      icon: Gem,
      price: "1",
      tagline: t("membership.tiers.diamond.tagline"),
      idealFor: t("membership.tiers.diamond.idealFor"),
      features: [
        t("membership.tiers.diamond.f1"),
        t("membership.tiers.diamond.f2"),
        t("membership.tiers.diamond.f3"),
        t("membership.tiers.diamond.f4"),
        t("membership.tiers.diamond.f5"),
        t("membership.tiers.diamond.f6"),
        "Member Access: 8",
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
    setIsCorporate(false);
    setGstin("");
    setCompanyName("");
    setCompanyAddress("");
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
          if (!googleApiKey) {
            alert("NEXT.JS ERROR: The API key is missing!\n\nPlease check your .env.local file.");
            setIsFetchingLocation(false);
            return;
          }
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
          );
          const data = await response.json();
          if (data.status === "OK" && data.results[0]) {
            setCustomerAddress(data.results[0].formatted_address);
            const cityObj = data.results[0].address_components.find((component: any) =>
              component.types.includes("locality") ||
              component.types.includes("administrative_area_level_2")
            );
            if (cityObj && !customerCity) setCustomerCity(cityObj.long_name);
            setIsFetchingLocation(false);
          } else {
            alert(`GOOGLE MAPS BLOCKED THE REQUEST:\n\nStatus: ${data.status}`);
            setIsFetchingLocation(false);
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
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
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
      isCorporate: String(isCorporate),
      gstin: isCorporate ? gstin.trim() : "",
      companyName: isCorporate ? companyName.trim() : "",
      companyAddress: isCorporate ? companyAddress.trim() : "",
    });
    
    closeCheckout();
    router.push(`/payment?${params.toString()}`);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <Navigation />

      {/* Existing membership hero preserved exactly from the original page */}
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

      {/* Premium membership cards — current card design preserved */}
      <section className="relative overflow-hidden border-b border-white/[0.055] px-5 py-16 sm:px-6 md:py-20 lg:px-10">
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.13), transparent 31%), #030303",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />

        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-1/2 top-4 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-[#d4af37]/10 sm:h-[390px] sm:w-[390px]"
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#e3c45b] shadow-[0_0_16px_rgba(227,196,91,0.9)]" />
        </motion.div>

        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#d4af37] sm:text-[10px]">
                {t("membership.plans.sectionTitle")}
              </span>
              <span className="h-px w-9 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl font-light text-white sm:text-4xl">
              {t("membership.plans.heading")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-7 flex items-center justify-between gap-4 border-y border-white/[0.06] py-3.5"
          >
            <div className="hidden items-center gap-2.5 sm:flex">
              <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
              <span className="text-[8px] uppercase tracking-[0.28em] text-white/30">
                Choose your access
              </span>
            </div>
            <span className="text-center text-[9px] uppercase tracking-[0.3em] text-white/30">
              Gold · Platinum · Diamond
            </span>
            <div className="hidden items-center gap-2.5 sm:flex">
              <span className="text-[8px] uppercase tracking-[0.28em] text-white/30">
                Secure checkout
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-[#d4af37]" />
            </div>
          </motion.div>

          <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3 lg:gap-6">
            {tiers.map((tier, index) => (
              <TierCard
                key={tier.name}
                tier={tier}
                index={index}
                popularLabel={t("membership.plans.popularTag")}
                buttonLabel={t("membership.plans.btnLabel")}
                onSelect={openCheckout}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why membership — compact split composition */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20 lg:px-10">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.05] blur-[100px]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4af37]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
                {t("membership.whyTitle")}
              </span>
            </div>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("membership.oneCard")}{" "}
              <span className="bg-gradient-to-r from-[#9d7525] via-[#f1d77b] to-[#b68b31] bg-clip-text text-transparent">
                {t("membership.premiumPrivileges")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/48 sm:text-[15px]">
              {t("membership.whyDesc")}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: t("membership.features.savings.title"),
                description: t("membership.features.savings.desc"),
              },
              {
                icon: BadgeCheck,
                title: t("membership.features.access.title"),
                description: t("membership.features.access.desc"),
              },
              {
                icon: CreditCard,
                title: t("membership.features.value.title"),
                description: t("membership.features.value.desc"),
              },
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{
                    y: -6,
                    rotateX: 3,
                    rotateY: index === 1 ? 0 : index === 0 ? -3 : 3,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080807] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
                  style={{ transformStyle: "preserve-3d", perspective: "900px" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.04]">
                      <FeatureIcon className="h-5 w-5 text-[#d4af37]" />
                    </div>
                    <h3 className="mt-5 text-sm uppercase tracking-[0.16em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/42">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits — compact premium grid */}
      <section className="relative overflow-hidden border-y border-white/[0.055] bg-[#050505] px-6 py-16 md:py-20 lg:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
                {t("membership.benefits.title")}
              </span>
              <h2 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl">
                {t("membership.benefits.subtitle")}
              </h2>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-px w-16 bg-white/10" />
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Member privileges
              </span>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-black/35 p-5 sm:p-6"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-150%", "250%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 5,
                    delay: index * 0.7,
                  }}
                  className="pointer-events-none absolute inset-y-0 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent"
                />
                <div className="relative flex gap-5">
                  <span className="font-[Arial,sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#d4af37]/70">
                    0{index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base uppercase tracking-[0.13em] text-[#d4af37]">
                      {benefit.category}
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {benefit.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs leading-5 text-white/47"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — compact connected timeline */}
      <section className="relative px-6 py-16 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
              {t("membership.steps.sectionTitle")}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl">
              {t("membership.steps.heading")}
            </h2>
          </motion.div>

          <div className="relative mt-10">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent md:block" />
            <div className="grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl border border-white/[0.075] bg-[#070707] px-5 pb-5 pt-4 text-center"
                >
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#090806] shadow-[0_0_0_7px_#030303]">
                    <span className="font-[Arial,sans-serif] text-[11px] font-semibold tracking-[0.18em] text-[#d4af37]">
                      {step.number}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 14 + index,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-1 rounded-full border border-dashed border-[#d4af37]/10"
                    />
                  </div>
                  <h3 className="mt-5 text-sm uppercase leading-6 tracking-[0.13em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-white/43">
                    {step.description}
                  </p>
                  <div className="absolute inset-x-5 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </div>
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
                    {checkoutStep === 1 && `${t("membership.checkout.step1Heading")} ${selectedTier.name}`}
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
                    <span className="rounded-full border border-border text-muted-foreground font-[Arial,sans-serif] font-bold">
                      3. {t("membership.checkout.indicator3")}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground font-[Arial,sans-serif] font-bold">
                      4. {t("membership.checkout.indicator4")}
                    </span>
                  </div>
                </div>

                {checkoutStep === 1 && (
                  <div className="p-6 md:p-8">
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
                        </div>
                        <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                          {t("membership.checkout.infoNote")}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="mb-2 block font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              {t("membership.checkout.form.firstName")}
                            </label>
                            <input
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  lastNameRef.current?.focus();
                                }
                              }}
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
                              ref={lastNameRef}
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  emailRef.current?.focus();
                                }
                              }}
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
                            ref={emailRef}
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                phoneRef.current?.focus();
                              }
                            }}
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
                            ref={phoneRef}
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ""))}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                addressRef.current?.focus();
                              }
                            }}
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
                              ref={addressRef}
                              type="text"
                              value={customerAddress}
                              onChange={(e) => {
                                setCustomerAddress(e.target.value);
                                if (addressError) setAddressError("");
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  cityRef.current?.focus();
                                }
                              }}
                              placeholder="Enter country, state, pincode, address"
                              autoComplete="street-address"
                              className={`w-full border ${addressError ? "border-[#E57373]" : "border-border"} bg-background px-4 py-3 pr-12 font-[Arial,sans-serif] text-sm text-foreground outline-none transition focus:border-primary placeholder:font-normal placeholder:tracking-normal`}
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
                            ref={cityRef}
                            type="text"
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                if (canContinueToConfirm) handleContinue();
                              }
                            }}
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
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="border border-border bg-background/40 p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary">
                          {t("membership.checkout.summary.title")}
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.plan")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right break-words min-w-0">
                              {selectedTier.name}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.name")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right break-words min-w-0">
                              {firstName} {lastName}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.email")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground text-right break-all min-w-0">
                              {customerEmail}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.phone")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground text-right break-words min-w-0">
                              {customerPhone}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.address")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground text-right capitalize break-words min-w-0">
                              {customerAddress}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-muted-foreground pt-[2px] shrink-0">
                              {t("membership.checkout.summary.city")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-sm font-bold tracking-wide text-foreground uppercase text-right break-words min-w-0">
                              {customerCity}
                            </div>
                          </div>
                          <div className="flex items-start justify-between gap-4 pt-1">
                            <span className="font-[Arial,sans-serif] text-[12px] font-bold uppercase tracking-widest text-foreground pt-[4px] shrink-0">
                              {t("membership.checkout.summary.amount")}
                            </span>
                            <div className="font-[Arial,sans-serif] text-2xl font-bold tracking-wider text-primary text-right break-words min-w-0">
                              ${selectedTier.price}
                            </div>
                          </div>
                        </div>

                        {/* NEW FEATURE: Corporate B2B Registration inputs */}
                        <div className="mt-6 border-t border-border pt-5">
                          <label className="flex items-start gap-3 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={isCorporate}
                              onChange={(e) => setIsCorporate(e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-gray-300 bg-background text-primary focus:ring-primary outline-none accent-[#D4AF37]"
                            />
                            <div className="space-y-0.5">
                              <span className="font-[Arial,sans-serif] text-xs font-bold uppercase tracking-widest text-foreground">
                                Add GST Number
                              </span>
                              <p className="font-serif text-[11px] text-primary tracking-normal">
                                Claim 18% input tax credit using corporate GST invoice
                              </p>
                            </div>
                          </label>

                          {isCorporate && (
                            <div className="mt-4 space-y-4 pl-7 transition-all duration-300">
                              <div>
                                <label className="mb-1 block font-[Arial,sans-serif] text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                  GST Registration Number (GSTIN)
                                </label>
                                <input
                                  type="text"
                                  value={gstin}
                                  maxLength={15}
                                  onChange={(e) => setGstin(e.target.value.toUpperCase())}
                                  placeholder="e.g. 29AAAAA1111A1Z1"
                                  className="w-full border border-border bg-background px-3 py-2 font-[Arial,sans-serif] text-xs text-foreground uppercase outline-none focus:border-primary"
                                />
                              </div>
                              <div>
                                <label className="mb-1 block font-[Arial,sans-serif] text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                  Registered Company Name
                                </label>
                                <input
                                  type="text"
                                  value={companyName}
                                  onChange={(e) => setCompanyName(e.target.value)}
                                  placeholder="e.g. Goa Moments Private Limited"
                                  className="w-full border border-border bg-background px-3 py-2 font-[Arial,sans-serif] text-xs text-foreground outline-none focus:border-primary"
                                />
                              </div>
                              <div>
                                <label className="mb-1 block font-[Arial,sans-serif] text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                  Registered Company Address
                                </label>
                                <input
                                  type="text"
                                  value={companyAddress}
                                  onChange={(e) => setCompanyAddress(e.target.value)}
                                  placeholder="Complete company registered address"
                                  className="w-full border border-border bg-background px-3 py-2 font-[Arial,sans-serif] text-xs text-foreground outline-none focus:border-primary"
                                />
                              </div>
                            </div>
                          )}
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
                            <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                            <p className="text-sm text-foreground">
                              {t("membership.checkout.confirm.sparkNote")}
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={() => setCheckoutStep(1)}
                            className="w-full sm:w-1/2 border border-border px-4 py-4 font-[Arial,sans-serif] text-[13px] font-bold uppercase tracking-widest text-foreground transition hover:border-primary hover:text-primary"
                          >
                            {t("membership.checkout.confirm.btnBack")}
                          </button>
                          <button
                            type="button"
                            onClick={goToPaymentPage}
                            disabled={isCorporate && (!gstin || !companyName || !companyAddress)}
                            className="w-full sm:w-1/2 bg-primary px-4 py-4 font-[Arial,sans-serif] text-[13px] font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
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