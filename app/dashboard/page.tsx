"use client";

import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CarTaxiFront,
  Hotel,
  UtensilsCrossed,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  ConciergeBell,
  TicketPercent,
  Star,
  ArrowRight,
} from "lucide-react";

// We keep these specific variables global as they are fixed contact details
const supportPhone = "+91 98765 43210";
const supportEmail = "support@goamoments.com";
const conciergeEmail = "concierge@goamoments.com";

export default function DashboardPage() {
  const params = useSearchParams();
  const { t } = useTranslation();

  const name = params.get("name") || t("dashboard.defaultName");
  const membershipId = params.get("membershipId") || "GM-XXX-000000";
  const plan = params.get("plan") || t("dashboard.defaultPlan");
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const city = params.get("city") || t("dashboard.defaultCity");
  const amountPaid = params.get("amountPaid") || "0";
  const validity = params.get("validity") || t("dashboard.defaultValidity");

  const serviceSections = [
    {
      title: t("dashboard.services.s1.title"),
      description: t("dashboard.services.s1.desc"),
      icon: CarTaxiFront,
    },
    {
      title: t("dashboard.services.s2.title"),
      description: t("dashboard.services.s2.desc"),
      icon: Hotel,
    },
    {
      title: t("dashboard.services.s3.title"),
      description: t("dashboard.services.s3.desc"),
      icon: UtensilsCrossed,
    },
    {
      title: t("dashboard.services.s4.title"),
      description: t("dashboard.services.s4.desc"),
      icon: ConciergeBell,
    },
  ];

  const benefitPoints = [
    t("dashboard.premium.features.f1"),
    t("dashboard.premium.features.f2"),
    t("dashboard.premium.features.f3"),
    t("dashboard.premium.features.f4"),
  ];

  const reviews = [
    {
      name: "Rhea & Karthik",
      title: t("dashboard.reviews.r1.title"),
      text: t("dashboard.reviews.r1.text"),
    },
    {
      name: "Aarav Mehta",
      title: t("dashboard.reviews.r2.title"),
      text: t("dashboard.reviews.r2.text"),
    },
    {
      name: "Naina Joseph",
      title: t("dashboard.reviews.r3.title"),
      text: t("dashboard.reviews.r3.text"),
    },
  ];

  return (
    <main className="relative bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-1/2 top-0 h-full w-[82%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),rgba(212,175,55,0.03)_38%,transparent_72%)]" />
        <div className="absolute left-1/2 top-[140px] h-[620px] w-[84%] -translate-x-1/2 rounded-[40px] border border-primary/8 bg-[linear-gradient(180deg,rgba(212,175,55,0.05),rgba(212,175,55,0.02),rgba(212,175,55,0.03))] shadow-[0_0_180px_rgba(212,175,55,0.05)]" />
        <div className="absolute left-1/2 top-[120px] h-[900px] w-[900px] -translate-x-1/2 opacity-[0.10]">
          <Image src="/images/gold-blur-bg.png" alt="gold texture" fill className="object-cover" />
        </div>
        <div className="absolute left-[8%] top-[12%] h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[6%] top-[18%] h-96 w-96 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute left-[24%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[18%] bottom-[10%] h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute left-1/2 top-[220px] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute left-1/2 bottom-[180px] h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
      </div>

      <Navigation />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.08]">
            <Image src="/images/membership-hero.jpg" alt="Goa luxury background" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/78 via-background/86 to-background" />
          <div className="absolute left-[12%] top-[8%] h-[480px] w-[480px] rounded-full bg-primary/12 blur-[110px]" />
          <div className="absolute left-[26%] top-[14%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute right-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]" />
          <div className="absolute left-[8%] top-[6%] h-[520px] w-[760px] opacity-[0.22]">
            <Image src="/images/gold-blur-bg.png" alt="gold texture" fill className="object-cover" />
          </div>
          <div className="absolute right-[4%] top-[8%] h-[480px] w-[520px] opacity-[0.15]">
            <Image src="/images/gold-blur-bg.png" alt="gold texture" fill className="object-cover" />
          </div>
          <div className="absolute left-1/2 top-[8%] h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),rgba(212,175,55,0.03)_42%,transparent_75%)]" />
          <div className="absolute left-1/2 top-[120px] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-xs uppercase tracking-[0.38em] text-primary">
                {t("dashboard.hero.pretitle")}
              </p>

              <h1 className="mt-5 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl xl:text-7xl">
                {t("dashboard.hero.title1")} <span className="text-primary">{t("dashboard.hero.title2")}</span>, {name}
              </h1>

              <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-xl">
                {t("dashboard.hero.subtitle")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em]">
                <span className="border border-primary/30 bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm">
                  {t("dashboard.hero.tags.t1")}
                </span>
                <span className="border border-border bg-background/30 px-4 py-2 text-muted-foreground backdrop-blur-sm">
                  {t("dashboard.hero.tags.t2")}
                </span>
                <span className="border border-border bg-background/30 px-4 py-2 text-muted-foreground backdrop-blur-sm">
                  {t("dashboard.hero.tags.t3")}
                </span>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-[1fr_0.9fr]">
                <div className="overflow-hidden border border-primary/20 bg-card/70 shadow-[0_0_50px_rgba(212,175,55,0.08)] backdrop-blur-md">
                  <div className="border-b border-border px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary">
                      {t("dashboard.card.pretitle")}
                    </p>
                    <p className="mt-2 text-xl text-foreground">
                      {plan} {t("dashboard.card.titleSuffix")}
                    </p>
                  </div>

                  <div className="p-5">
                    <div className="relative h-[220px] w-full overflow-hidden bg-black/30 sm:h-[280px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                      <Image src="/images/membership-card.png" alt="GOA MOMENTS membership card" fill className="object-contain" />
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-card/70 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-light text-foreground">{t("dashboard.profile.title")}</h2>
                    <BadgeCheck className="h-5 w-5 text-primary" />
                  </div>

                  <div className="mt-6 space-y-5 text-sm text-muted-foreground">
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.name")}</span>
                      <span className="text-right text-foreground">{name}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.email")}</span>
                      <span className="break-all text-right text-foreground">{email}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.phone")}</span>
                      <span className="text-right text-foreground">{phone}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.city")}</span>
                      <span className="text-right text-foreground">{city}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.membershipId")}</span>
                      <span className="text-right text-foreground">{membershipId}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.plan")}</span>
                      <span className="text-right text-foreground">{plan}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>{t("dashboard.profile.fields.amountPaid")}</span>
                      <span className="text-right text-foreground">${amountPaid}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                      <span>{t("dashboard.profile.fields.validity")}</span>
                      <span className="text-right text-foreground">{validity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6">
              <div className="border border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.10),rgba(0,0,0,0.55),rgba(212,175,55,0.04))] p-6 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">{t("dashboard.support.pretitle")}</p>
                <h2 className="mt-3 text-3xl font-light text-foreground">{t("dashboard.support.title")}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("dashboard.support.desc")}</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">{t("dashboard.support.contact.phoneLabel")}</p>
                      <p className="mt-1 text-foreground">{supportPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">{t("dashboard.support.contact.emailLabel")}</p>
                      <p className="mt-1 text-foreground">{supportEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">{t("dashboard.support.contact.conciergeLabel")}</p>
                      <p className="mt-1 text-foreground">{conciergeEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">{t("dashboard.support.contact.assistanceLabel")}</p>
                      <p className="mt-1 text-foreground">{t("dashboard.support.contact.assistanceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden border border-border bg-card/70 backdrop-blur-md">
                <div className="relative h-[280px] w-full">
                  <Image src="/images/resort.jpg" alt="Luxury Goa resort" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.20),transparent_35%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary">{t("dashboard.premium.pretitle")}</p>
                    <h3 className="mt-2 text-2xl font-light text-foreground">{t("dashboard.premium.title")}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{t("dashboard.premium.desc")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.05),transparent_28%),radial-gradient(circle_at_right,rgba(212,175,55,0.04),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border border-border bg-card/70 p-6 md:p-8 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">{t("dashboard.services.pretitle")}</p>
              <h2 className="mt-3 text-4xl font-light text-foreground">{t("dashboard.services.title")}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t("dashboard.services.desc")}</p>

              <div className="mt-8 space-y-4">
                {benefitPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <TicketPercent className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-lg text-foreground">{t("dashboard.feeling.title")}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("dashboard.feeling.desc")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="overflow-hidden border border-border bg-card/70 backdrop-blur-md">
              <div className="relative h-[520px] w-full">
                <Image src="/images/nightlife.jpg" alt="Goa nightlife and lifestyle" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_28%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">{t("dashboard.premium.pretitle")}</p>
                  <h3 className="mt-3 text-3xl font-light text-foreground md:text-4xl">{t("dashboard.premium.title")}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("dashboard.premium.desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">{t("dashboard.services.pretitle")}</p>
            <h2 className="mt-3 text-4xl font-light text-foreground">{t("dashboard.services.title")}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t("dashboard.services.desc")}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceSections.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="border border-border bg-card/70 p-6 backdrop-blur-md transition hover:border-primary/40">
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-2xl font-light text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.06),rgba(0,0,0,0.35),rgba(212,175,55,0.02))] p-8 md:p-10 backdrop-blur-md">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{t("dashboard.promise.pretitle")}</p>
                <h2 className="mt-3 text-4xl font-light text-foreground md:text-5xl">{t("dashboard.promise.title")}</h2>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{t("dashboard.promise.desc")}</p>
              </div>

              <div className="space-y-4">
                <a href={`tel:${supportPhone}`} className="flex items-center justify-between border border-primary bg-primary px-5 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90">
                  {t("dashboard.promise.btnPhone")} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${supportEmail}`} className="flex items-center justify-between border border-border bg-background/30 px-5 py-4 text-sm uppercase tracking-[0.22em] text-foreground transition hover:border-primary hover:text-primary">
                  {t("dashboard.promise.btnEmail")} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${conciergeEmail}`} className="flex items-center justify-between border border-border bg-background/30 px-5 py-4 text-sm uppercase tracking-[0.22em] text-foreground transition hover:border-primary hover:text-primary">
                  {t("dashboard.promise.btnConcierge")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}