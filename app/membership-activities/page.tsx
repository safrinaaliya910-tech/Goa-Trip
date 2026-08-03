"use client";

import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";
import {
  ArrowRight,
  BadgeCheck,
  ConciergeBell,
  Hotel,
  ShieldCheck,
  Sparkles,
  Star,
  TicketPercent,
  UtensilsCrossed,
  ChevronDown,
  Crown,
  Gem,
  Users,
  Plane,
  Martini,
  Zap,
  Check,
  LockKeyhole,
  MapPin,
} from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-9 bg-gradient-to-r from-transparent to-primary/80" />
        <p className="text-[10px] uppercase tracking-[0.38em] text-primary sm:text-xs">
          {eyebrow}
        </p>
        <span className="h-px w-9 bg-gradient-to-l from-transparent to-primary/80" />
      </div>

      <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-7 text-muted-foreground sm:text-base ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function TiltPanel({
  children,
  className = "",
  strength = 7,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,238,178,0.14), transparent 34%)`;

  const rotateX = useSpring(rotateXValue, {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(rotateYValue, {
    stiffness: 180,
    damping: 22,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    rotateYValue.set((px - 0.5) * strength * 2);
    rotateXValue.set((0.5 - py) * strength * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function resetTilt() {
    rotateXValue.set(0);
    rotateYValue.set(0);
    glareX.set(50);
    glareY.set(50);
  }

  return (
    <div className="h-full" style={{ perspective: "1200px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className={`group relative h-full overflow-hidden ${className}`}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glare }}
        />
        {children}
      </motion.div>
    </div>
  );
}

function HeroAccessPass() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[470px] sm:h-[430px]">
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 360],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15 sm:h-[370px] sm:w-[370px]"
      />

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [0.9, 1.08, 0.9],
                opacity: [0.18, 0.38, 0.18],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 35, rotateZ: -3 }}
        animate={{ opacity: 1, y: 0, rotateZ: -3 }}
        transition={{ duration: 1, delay: 0.25, ease: easeOutExpo }}
        className="absolute left-[4%] top-[11%] h-[255px] w-[88%] rounded-[28px] border border-primary/18 bg-black/50 shadow-[0_35px_100px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:h-[300px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 45, rotateZ: 4 }}
        animate={{ opacity: 1, y: 0, rotateZ: 4 }}
        transition={{ duration: 1, delay: 0.35, ease: easeOutExpo }}
        className="absolute left-[7%] top-[14%] h-[255px] w-[88%] rounded-[28px] border border-primary/14 bg-[linear-gradient(145deg,rgba(212,175,55,0.09),rgba(6,6,6,0.88)_48%,rgba(212,175,55,0.05))] shadow-[0_35px_100px_rgba(0,0,0,0.72)] backdrop-blur-xl sm:h-[300px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.45, ease: easeOutExpo }}
        className="absolute left-1/2 top-1/2 h-[270px] w-[88%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-primary/35 bg-[linear-gradient(135deg,#15130e_0%,#080808_48%,#171208_100%)] shadow-[0_45px_120px_rgba(0,0,0,0.82),0_0_55px_rgba(212,175,55,0.12)] sm:h-[320px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-[7px] rounded-[24px] border border-white/[0.045]" />
        <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full border border-primary/15" />
        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-primary/10" />

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["-160%", "230%"],
                }
          }
          transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.8 }}
          className="absolute -top-10 h-[140%] w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
        />

        <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/[0.06] shadow-[inset_0_0_20px_rgba(212,175,55,0.06)]">
              <Crown className="h-6 w-6 text-primary" />
            </div>

            <div className="text-right">
              <p className="text-[8px] uppercase tracking-[0.38em] text-white/30">
                Secure access
              </p>
              <p className="mt-2 font-mono text-xs tracking-[0.22em] text-primary/80">
                GM / 24 / 7
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-primary/70" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-primary/75">
                Goa Moments
              </span>
            </div>
            <p className="mt-4 font-serif text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl">
              Member Access
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-white/[0.07] pt-5">
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-white/35">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Goa, India
            </div>
            <LockKeyhole className="h-5 w-5 text-primary/75" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-4 left-0 rounded-full border border-primary/20 bg-black/65 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-white/45 backdrop-blur-xl"
      >
        Premium savings
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute right-0 top-5 rounded-full border border-primary/20 bg-black/65 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-white/45 backdrop-blur-xl"
      >
        Curated access
      </motion.div>
    </div>
  );
}

export default function MembershipActivitiesPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: TicketPercent,
      title: t("activities.benefits.b1.title"),
      description: t("activities.benefits.b1.desc"),
    },
    {
      icon: BadgeCheck,
      title: t("activities.benefits.b2.title"),
      description: t("activities.benefits.b2.desc"),
    },
    {
      icon: ConciergeBell,
      title: t("activities.benefits.b3.title"),
      description: t("activities.benefits.b3.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("activities.benefits.b4.title"),
      description: t("activities.benefits.b4.desc"),
    },
  ];

  const detailedMemberships = [
    {
      name: t("activities.memberships.diamond.name"),
      icon: Gem,
      badge: t("activities.memberships.diamond.badge"),
      title: t("activities.memberships.diamond.title"),
      description: t("activities.memberships.diamond.desc"),
      access: t("activities.memberships.diamond.access"),
      support: t("activities.memberships.diamond.support"),
      highlight: t("activities.memberships.diamond.highlight"),
      points: [
        t("activities.memberships.diamond.p1"),
        t("activities.memberships.diamond.p2"),
        t("activities.memberships.diamond.p3"),
        t("activities.memberships.diamond.p4"),
        t("activities.memberships.diamond.p5"),
        t("activities.memberships.diamond.p6"),
      ],
    },
    {
      name: t("activities.memberships.platinum.name"),
      icon: Star,
      badge: t("activities.memberships.platinum.badge"),
      title: t("activities.memberships.platinum.title"),
      description: t("activities.memberships.platinum.desc"),
      access: t("activities.memberships.platinum.access"),
      support: t("activities.memberships.platinum.support"),
      highlight: t("activities.memberships.platinum.highlight"),
      points: [
        t("activities.memberships.platinum.p1"),
        t("activities.memberships.platinum.p2"),
        t("activities.memberships.platinum.p3"),
        t("activities.memberships.platinum.p4"),
        t("activities.memberships.platinum.p5"),
        t("activities.memberships.platinum.p6"),
      ],
    },
    {
      name: t("activities.memberships.gold.name"),
      icon: Crown,
      badge: t("activities.memberships.gold.badge"),
      title: t("activities.memberships.gold.title"),
      description: t("activities.memberships.gold.desc"),
      access: t("activities.memberships.gold.access"),
      support: t("activities.memberships.gold.support"),
      highlight: t("activities.memberships.gold.highlight"),
      points: [
        t("activities.memberships.gold.p1"),
        t("activities.memberships.gold.p2"),
        t("activities.memberships.gold.p3"),
        t("activities.memberships.gold.p4"),
        t("activities.memberships.gold.p5"),
        t("activities.memberships.gold.p6"),
      ],
    },
  ];

  const venues = [
    t("activities.venues.v1"),
    t("activities.venues.v2"),
    t("activities.venues.v3"),
    t("activities.venues.v4"),
    t("activities.venues.v5"),
    t("activities.venues.v6"),
  ];

  const reviews = [
    {
      name: "Aarav Mehta",
      text: t("activities.reviews.r1.text"),
    },
    {
      name: "Rhea Fernandes",
      text: t("activities.reviews.r2.text"),
    },
    {
      name: "Naina Joseph",
      text: t("activities.reviews.r3.text"),
    },
  ];

  const faqs = [
    { question: t("activities.faqs.q1.q"), answer: t("activities.faqs.q1.a") },
    { question: t("activities.faqs.q2.q"), answer: t("activities.faqs.q2.a") },
    { question: t("activities.faqs.q3.q"), answer: t("activities.faqs.q3.a") },
    { question: t("activities.faqs.q4.q"), answer: t("activities.faqs.q4.a") },
    { question: t("activities.faqs.q5.q"), answer: t("activities.faqs.q5.a") },
    { question: t("activities.faqs.q6.q"), answer: t("activities.faqs.q6.a") },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 15%, transparent 78%)",
        }}
      />

      <Navigation />

      {/* HERO — editorial split with animated access pass */}
      <section className="relative isolate min-h-[720px] overflow-hidden border-b border-white/[0.05] px-5 pb-20 pt-32 sm:px-7 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 -z-30">
          <Image
            src="/images/membership-hero.jpg"
            alt="GOA MOMENTS membership activities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.17]"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,3,3,0.98)_0%,rgba(3,3,3,0.88)_48%,rgba(3,3,3,0.64)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/50 via-transparent to-[#030303]" />
        <div className="absolute left-[48%] top-[15%] -z-10 h-[520px] w-[520px] rounded-full bg-primary/[0.11] blur-[120px]" />

        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-primary/80" />
              <p className="text-[10px] uppercase tracking-[0.42em] text-primary sm:text-xs">
                {t("activities.hero.pretitle")}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: easeOutExpo }}
              className="mt-7 max-w-3xl font-serif text-4xl font-light leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-[4.6rem]"
            >
              {t("activities.hero.title1")} {" "}
              <span className="bg-gradient-to-r from-[#a77c24] via-[#f0d77f] to-[#a77c24] bg-clip-text text-transparent">
                {t("activities.hero.title2")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: easeOutExpo }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/48 sm:text-lg"
            >
              {t("activities.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: easeOutExpo }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="/membership"
                className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden border border-primary bg-primary px-7 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-black shadow-[0_16px_45px_rgba(212,175,55,0.18)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#efd477] transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">{t("activities.hero.btnBuy")}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#benefits"
                className="inline-flex min-h-12 items-center justify-center border border-white/12 bg-white/[0.025] px-7 py-3 text-[11px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl transition hover:border-primary/55 hover:text-primary"
              >
                {t("activities.hero.btnExplore")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/[0.06] py-5"
            >
              {[ShieldCheck, Sparkles, ConciergeBell].map((Icon, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/35 ${
                    index !== 2 ? "border-r border-white/[0.06]" : ""
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 text-primary/75" />
                  <span className="hidden sm:inline">
                    {index === 0 ? "Verified" : index === 1 ? "Curated" : "Assisted"}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroAccessPass />
        </div>
      </section>

      {/* BENEFIT RAIL */}
      <section id="benefits" className="relative px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("activities.benefits.pretitle")}
            title={t("activities.benefits.title")}
          />

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:block" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: easeOutExpo }}
                  className="group relative"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/24 bg-[#080806] shadow-[0_0_0_10px_#030303] transition duration-500 group-hover:border-primary/70 group-hover:shadow-[0_0_0_10px_#030303,0_0_45px_rgba(212,175,55,0.18)]">
                    <benefit.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/25 bg-black text-[9px] font-mono text-primary/70">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="-mt-4 min-h-[205px] rounded-[24px] border border-white/[0.065] bg-[linear-gradient(180deg,rgba(212,175,55,0.055),rgba(255,255,255,0.015))] px-6 pb-7 pt-14 text-center transition duration-500 hover:border-primary/28 hover:bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))]">
                    <h3 className="font-serif text-xl font-light text-white sm:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/42">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP ACCESS DOSSIERS */}
      <section className="relative border-y border-white/[0.045] bg-[#050505] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("activities.access.pretitle")}
            title={
              <>
                {t("activities.access.title1")} {" "}
                <span className="text-primary">{t("activities.access.title2")}</span>
              </>
            }
            description={t("activities.access.subtitle")}
          />

          <div className="mt-14 space-y-6">
            {detailedMemberships.map((item, index) => {
              const isDiamond = item.name.includes(
                t("activities.memberships.diamond.name"),
              );
              const isGold = item.name.includes(
                t("activities.memberships.gold.name"),
              );

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: easeOutExpo }}
                >
                  <TiltPanel
                    strength={4}
                    className={`rounded-[28px] border p-1 shadow-[0_26px_80px_rgba(0,0,0,0.48)] ${
                      isDiamond
                        ? "border-primary/45 bg-[linear-gradient(105deg,rgba(212,175,55,0.16),rgba(255,255,255,0.025)_38%,rgba(212,175,55,0.06))]"
                        : "border-white/[0.08] bg-white/[0.018]"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[24px] bg-[#070707]">
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/80 to-transparent" />
                      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-primary/[0.08]" />
                      <div className="absolute -bottom-24 right-20 h-56 w-56 rounded-full bg-primary/[0.035] blur-3xl" />

                      <div className="relative grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="border-b border-white/[0.06] p-7 sm:p-9 lg:border-b-0 lg:border-r">
                          <div className="flex items-start justify-between gap-5">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/[0.065]">
                              <item.icon className="h-7 w-7 text-primary" />
                            </div>

                            <div className="text-right">
                              <p className="text-[8px] uppercase tracking-[0.34em] text-white/24">
                                Access dossier
                              </p>
                              <p className="mt-2 font-mono text-xs tracking-[0.22em] text-primary/65">
                                0{index + 1} / 03
                              </p>
                            </div>
                          </div>

                          <span className="mt-7 inline-flex rounded-full border border-primary/25 bg-primary/[0.04] px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-primary/80">
                            {item.badge}
                          </span>

                          <h3 className="mt-5 font-serif text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-4xl">
                            {item.name}
                          </h3>
                          <h4 className="mt-3 font-serif text-xl font-light text-primary/90 sm:text-2xl">
                            {item.title}
                          </h4>
                          <p className="mt-5 text-sm leading-7 text-white/42">
                            {item.description}
                          </p>

                          <div className="mt-7 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/[0.065] bg-white/[0.018] p-4">
                              <p className="text-[8px] uppercase tracking-[0.26em] text-primary/70">
                                {t("activities.access.memberAccessLabel")}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-white/65">
                                {item.access}
                              </p>
                            </div>
                            <div className="rounded-2xl border border-white/[0.065] bg-white/[0.018] p-4">
                              <p className="text-[8px] uppercase tracking-[0.26em] text-primary/70">
                                {t("activities.access.supportLevelLabel")}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-white/65">
                                {item.support}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-7 sm:p-9">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-[9px] uppercase tracking-[0.32em] text-primary/80">
                              {t("activities.access.whyValuableLabel")}
                            </p>
                            <span className="hidden h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent sm:block" />
                          </div>

                          <ul className="mt-6 grid gap-x-7 gap-y-4 sm:grid-cols-2">
                            {item.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-3 text-sm leading-6 text-white/46"
                              >
                                <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.05]">
                                  <Check className="h-2.5 w-2.5 text-primary" />
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-7 rounded-2xl border border-primary/18 bg-[linear-gradient(90deg,rgba(212,175,55,0.08),rgba(212,175,55,0.02))] p-5">
                            <p className="text-sm leading-7 text-white/65">
                              <span className="mr-2 text-primary">
                                {t("activities.access.bestChoiceLabel")}
                              </span>
                              {item.highlight}
                            </p>
                          </div>

                          <div className="mt-6 grid grid-cols-4 gap-2">
                            {[
                              {
                                icon: Hotel,
                                label: t("activities.access.icons.hotels"),
                              },
                              {
                                icon: isGold ? Plane : UtensilsCrossed,
                                label: isGold
                                  ? t("activities.access.icons.travel")
                                  : t("activities.access.icons.dining"),
                              },
                              {
                                icon: isGold ? Users : Martini,
                                label: isGold
                                  ? t("activities.access.icons.u4")
                                  : t("activities.access.icons.clubs"),
                              },
                              {
                                icon: isDiamond ? Zap : ShieldCheck,
                                label: isDiamond
                                  ? t("activities.access.icons.hp")
                                  : t("activities.access.icons.support"),
                              },
                            ].map((entry) => (
                              <div
                                key={entry.label}
                                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-2 py-3 text-center transition hover:border-primary/25 hover:bg-primary/[0.035]"
                              >
                                <entry.icon className="h-4 w-4 text-primary" />
                                <span className="text-[8px] uppercase leading-4 tracking-[0.18em] text-white/32">
                                  {entry.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltPanel>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/membership"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/[0.06] px-7 py-3 text-[10px] uppercase tracking-[0.25em] text-primary transition hover:bg-primary hover:text-black"
            >
              {t("activities.access.btnChoose")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE EDITORIAL BENTO */}
      <section className="relative px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#070707] p-7 lg:col-span-5 lg:p-9"
            >
              <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-primary/[0.06] blur-3xl" />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.34em] text-primary">
                  {t("activities.discounts.pretitle")}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-white sm:text-4xl">
                  {t("activities.discounts.title")}
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/42">
                  {t("activities.discounts.desc")}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {venues.map((venue, index) => (
                    <motion.div
                      key={venue}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/25 text-[9px] font-mono text-primary/70">
                        0{index + 1}
                      </span>
                      <span className="text-sm leading-6 text-white/45">{venue}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.08, ease: easeOutExpo }}
              className="group relative min-h-[430px] overflow-hidden rounded-[30px] border border-white/[0.07] lg:col-span-7"
            >
             <video
  src="/images/dining.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover transition duration-[1600ms] group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/38 to-black/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_34%)]" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="max-w-2xl rounded-[22px] border border-white/[0.08] bg-black/48 p-6 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-primary">
                    {t("activities.premium.pretitle")}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl">
                    {t("activities.premium.title")}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {t("activities.premium.desc")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="group relative min-h-[360px] overflow-hidden rounded-[30px] border border-white/[0.07] lg:col-span-7"
            >
<video
  src="/images/resort.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover transition duration-[1600ms] group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
              <div className="absolute inset-y-0 left-0 flex max-w-xl items-end p-7 sm:items-center sm:p-9">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-primary">
                    {t("activities.lifetime.pretitle")}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl">
                    {t("activities.lifetime.title")}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/48">
                    {t("activities.lifetime.desc")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.08, ease: easeOutExpo }}
              className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-[linear-gradient(145deg,rgba(212,175,55,0.08),rgba(255,255,255,0.015)_45%,rgba(212,175,55,0.025))] p-7 lg:col-span-5 lg:p-9"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary/10" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/28 bg-primary/[0.06]">
                  <ConciergeBell className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-7 text-[10px] uppercase tracking-[0.34em] text-primary">
                  {t("activities.support.pretitle")}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light text-white sm:text-4xl">
                  {t("activities.support.title")}
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/42">
                  {t("activities.support.desc")}
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    {
                      icon: Hotel,
                      text: t("activities.support.features.f1"),
                    },
                    {
                      icon: UtensilsCrossed,
                      text: t("activities.support.features.f2"),
                    },
                    {
                      icon: ConciergeBell,
                      text: t("activities.support.features.f3"),
                    },
                  ].map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                    >
                      <feature.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-white/48">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEWS — offset editorial cards */}
      <section className="relative border-y border-white/[0.045] bg-[#050505] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("activities.reviews.pretitle")}
            title={t("activities.reviews.title")}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:items-start">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: easeOutExpo }}
                className={`relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080808] p-7 ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <span className="absolute -right-2 -top-10 font-serif text-[9rem] leading-none text-primary/[0.035]">
                  ”
                </span>
                <div className="relative">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 fill-primary" />
                    ))}
                  </div>
                  <p className="mt-6 min-h-[96px] text-sm leading-7 text-white/48">
                    “{review.text}”
                  </p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.04] font-serif text-sm text-primary">
                      {review.name.charAt(0)}
                    </span>
                    <p className="text-sm tracking-wide text-white/72">{review.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — sticky editorial layout */}
      <section className="relative px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={t("activities.faqs.pretitle")}
              title={t("activities.faqs.title")}
              align="left"
            />
            <div className="mt-8 hidden h-36 w-px bg-gradient-to-b from-primary/70 to-transparent lg:block" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.04, ease: easeOutExpo }}
                  className={`overflow-hidden rounded-[22px] border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary/35 bg-primary/[0.045]"
                      : "border-white/[0.065] bg-white/[0.015] hover:border-primary/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-mono transition ${
                          isOpen
                            ? "border-primary/50 bg-primary text-black"
                            : "border-white/10 text-primary/65"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className="font-serif text-base font-light leading-6 text-white/78 sm:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pl-[4.75rem] sm:px-6 sm:pl-[5.25rem]">
                      <div className="h-px w-full bg-gradient-to-r from-primary/18 to-transparent" />
                      <p className="pt-4 text-sm leading-7 text-white/45">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — illuminated access corridor */}
      <section className="relative px-5 pb-24 pt-4 sm:px-7 lg:px-10 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: easeOutExpo }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-primary/24 bg-[#070707] px-6 py-14 text-center shadow-[0_35px_110px_rgba(0,0,0,0.62)] sm:px-10 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(212,175,55,0.18),transparent_52%)]" />
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/65 to-transparent" />
          <div className="absolute left-[8%] top-0 h-full w-px -skew-x-12 bg-gradient-to-b from-primary/0 via-primary/12 to-primary/0" />
          <div className="absolute right-[8%] top-0 h-full w-px skew-x-12 bg-gradient-to-b from-primary/0 via-primary/12 to-primary/0" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.055] shadow-[0_0_45px_rgba(212,175,55,0.12)]">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.38em] text-primary">
              {t("activities.cta.pretitle")}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              {t("activities.cta.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/44 sm:text-base">
              {t("activities.cta.desc")}
            </p>

            <a
              href="/membership"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-primary bg-primary px-8 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-black shadow-[0_16px_45px_rgba(212,175,55,0.18)] transition hover:bg-[#efd477]"
            >
              {t("activities.cta.btn")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}