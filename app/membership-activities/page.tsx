"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";
import {
  ArrowRight,
  BadgeCheck,
  ConciergeBell,
  Hotel,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TicketPercent,
  UtensilsCrossed,
  HelpCircle,
  ChevronDown,
  Crown,
  Gem,
  Users,
  Plane,
  Martini,
  Zap,
  Check,
  LockKeyhole,
} from "lucide-react";

const supportPhone = "+91 98765 43210";
const supportEmail = "support@goamoments.com";

export default function MembershipActivitiesPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Moved arrays inside the component to access the translation hook
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
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1500px] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-1/2 top-0 h-full w-[90%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18),rgba(212,175,55,0.08)_38%,transparent_72%)]" />
        <div className="absolute left-[3%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[3%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute left-[8%] top-[36%] h-[24rem] w-[24rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[8%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-3xl" />
      </div>

      <Navigation />

      <section className="relative px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.16]">
            <Image
              src="/images/membership-hero.jpg"
              alt="GOA MOMENTS membership activities"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/76 via-background/86 to-background" />
          <div className="absolute left-1/2 top-[12%] h-[560px] w-[980px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.22),rgba(212,175,55,0.08)_42%,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.38em] text-primary"
          >
            {t("activities.hero.pretitle")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl xl:text-7xl"
          >
            {t("activities.hero.title1")}{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.45)]">
              {t("activities.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl"
          >
            {t("activities.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/membership"
              className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
            >
              {t("activities.hero.btnBuy")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#benefits"
              className="border border-primary/30 bg-background/30 px-8 py-4 text-sm uppercase tracking-[0.22em] text-foreground backdrop-blur-sm transition hover:border-primary hover:text-primary"
            >
              {t("activities.hero.btnExplore")}
            </a>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(212,175,55,0.015)_32%,rgba(212,175,55,0.02)_52%,rgba(212,175,55,0.015)_72%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.015),transparent_40%),radial-gradient(circle_at_right,rgba(212,175,55,0.015),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("activities.benefits.pretitle")}
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              {t("activities.benefits.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-primary/30 bg-background/55 p-6 shadow-[0_0_55px_rgba(212,175,55,0.14)] backdrop-blur-md transition hover:border-primary/70 hover:bg-background/65"
              >
                <benefit.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-2xl font-light text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              {t("activities.access.pretitle")}
            </p>
            <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl">
              {t("activities.access.title1")}{" "}
              <span className="text-primary">
                {t("activities.access.title2")}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("activities.access.subtitle")}
            </p>
          </div>

          <div className="space-y-10">
            {detailedMemberships.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`relative overflow-hidden border p-6 backdrop-blur-md md:p-10 ${
                  item.name.includes(t("activities.memberships.diamond.name"))
                    ? "border-primary bg-card/90 dark:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.80),rgba(212,175,55,0.08))] shadow-[0_0_90px_rgba(212,175,55,0.20)]"
                    : "border-primary/30 bg-card/75 shadow-[0_0_55px_rgba(212,175,55,0.08)]"
                }`}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 border-r border-t border-primary/40" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 border-b border-l border-primary/30" />

                <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center border border-primary/40 bg-primary/10">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-4xl font-light text-foreground md:text-5xl">
                      {item.name}
                    </h3>

                    <h4 className="mt-4 text-2xl font-light text-primary">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <div className="border border-primary/20 bg-background/35 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary">
                          {t("activities.access.memberAccessLabel")}
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {item.access}
                        </p>
                      </div>
                      <div className="border border-primary/20 bg-background/35 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary">
                          {t("activities.access.supportLevelLabel")}
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {item.support}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border border-primary/25 bg-background/35 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        {t("activities.access.whyValuableLabel")}
                      </p>

                      <ul className="mt-6 space-y-4">
                        {item.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 border-l-2 border-primary bg-primary/10 p-5">
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="text-primary">{t("activities.access.bestChoiceLabel")} </span>
                        {item.highlight}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        <Hotel className="h-5 w-5 text-primary" />
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {t("activities.access.icons.hotels")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes(t("activities.memberships.gold.name")) ? (
                          <Plane className="h-5 w-5 text-primary" />
                        ) : (
                          <UtensilsCrossed className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes(t("activities.memberships.gold.name")) ? t("activities.access.icons.travel") : t("activities.access.icons.dining")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes(t("activities.memberships.gold.name")) ? (
                          <Users className="h-5 w-5 text-primary" />
                        ) : (
                          <Martini className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes(t("activities.memberships.gold.name")) ? t("activities.access.icons.u4") : t("activities.access.icons.clubs")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes(t("activities.memberships.diamond.name")) ? (
                          <Zap className="h-5 w-5 text-primary" />
                        ) : (
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes(t("activities.memberships.diamond.name"))
                            ? t("activities.access.icons.hp")
                            : t("activities.access.icons.support")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/membership"
              className="group inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
            >
              {t("activities.access.btnChoose")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-primary/35 bg-card/90 dark:bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(0,0,0,0.55),rgba(212,175,55,0.08))] p-6 shadow-[0_0_80px_rgba(212,175,55,0.16)] backdrop-blur-md md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {t("activities.discounts.pretitle")}
              </p>
              <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
                {t("activities.discounts.title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("activities.discounts.desc")}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {venues.map((venue, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-primary/20 bg-background/35 p-4 backdrop-blur-sm"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {venue}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden border border-primary/25 bg-card/70 shadow-[0_0_60px_rgba(212,175,55,0.10)] backdrop-blur-md"
            >
              <div className="relative h-[520px] w-full">
                <Image
                  src="/images/nightlife.jpg"
                  alt="Goa premium venues"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.30),transparent_30%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {t("activities.premium.pretitle")}
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-foreground md:text-4xl">
                    {t("activities.premium.title")}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t("activities.premium.desc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(212,175,55,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden border border-primary/25 bg-card/70 shadow-[0_0_60px_rgba(212,175,55,0.10)] backdrop-blur-md">
              <div className="relative h-[460px] w-full">
                <Image
                  src="/images/resort.jpg"
                  alt="Luxury Goa resort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.30),transparent_30%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    {t("activities.lifetime.pretitle")}
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-foreground">
                    {t("activities.lifetime.title")}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t("activities.lifetime.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-primary/30 bg-card/75 p-6 shadow-[0_0_60px_rgba(212,175,55,0.12)] backdrop-blur-md md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {t("activities.support.pretitle")}
              </p>
              <h2 className="mt-4 text-4xl font-light text-foreground">
                {t("activities.support.title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("activities.support.desc")}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <Hotel className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t("activities.support.features.f1")}
                  </p>
                </div>
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <UtensilsCrossed className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t("activities.support.features.f2")}
                  </p>
                </div>
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <ConciergeBell className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    {t("activities.support.features.f3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("activities.reviews.pretitle")}
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              {t("activities.reviews.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-primary/25 bg-card/75 p-6 shadow-[0_0_45px_rgba(212,175,55,0.08)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </p>
                <p className="mt-5 text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {t("activities.faqs.pretitle")}
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              {t("activities.faqs.title")}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="overflow-hidden border border-primary/25 bg-card/75 shadow-[0_0_45px_rgba(212,175,55,0.08)] backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-lg font-light text-foreground">
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 pt-10 sm:px-6 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl border border-primary/35 bg-card/90 dark:bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(0,0,0,0.50),rgba(212,175,55,0.08))] p-8 text-center shadow-[0_0_90px_rgba(212,175,55,0.16)] backdrop-blur-md md:p-12">
          <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-l border-t border-primary/70" />
          <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-r border-t border-primary/70" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-b border-l border-primary/70" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b border-r border-primary/70" />

          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("activities.cta.pretitle")}
          </p>
          <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
            {t("activities.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("activities.cta.desc")}
          </p>

          <a
            href="/membership"
            className="group mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
          >
            {t("activities.cta.btn")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}