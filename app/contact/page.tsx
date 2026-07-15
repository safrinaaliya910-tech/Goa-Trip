"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Clock3,
  ConciergeBell,
  BadgeCheck,
  Crown,
  Gem,
  Star,
  Sparkles,
  Headphones,
  LockKeyhole,
  CreditCard,
  Loader2, // Added for the loading spinner
} from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();

  // --- NEW: Form State Variables ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Handle input changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Clear the form
        setFormData({ firstName: "", lastName: "", email: "", phone: "", supportType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      setStatus("error");
    }
  };

  const publicContactInfo = [
    {
      icon: Mail,
      label: t("contact.public.info.i1.label"),
      value: "goamoments.com@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.public.info.i2.label"),
      value: "9150216333",
    },
    {
      icon: MapPin,
      label: t("contact.public.info.i3.label"),
      value: t("contact.public.info.i3.value"),
    },
  ];

  const supportPoints = [
    t("contact.help.points.p1"),
    t("contact.help.points.p2"),
    t("contact.help.points.p3"),
    t("contact.help.points.p4"),
  ];

  const memberSupport = [
    {
      icon: Crown,
      title: t("contact.private.support.gold.title"),
      text: t("contact.private.support.gold.desc"),
    },
    {
      icon: Star,
      title: t("contact.private.support.platinum.title"),
      text: t("contact.private.support.platinum.desc"),
    },
    {
      icon: Gem,
      title: t("contact.private.support.diamond.title"),
      text: t("contact.private.support.diamond.desc"),
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-[-150px] top-[40%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-[-150px] top-[58%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative h-[48vh] min-h-[380px] overflow-hidden">
          <Image
            src="/images/contact-hero.jpg"
            alt="GOA MOMENTS concierge support"
            fill
            className="object-cover opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/72 to-background" />

          <div className="relative flex h-full items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.38em] text-primary">
                {t("contact.hero.pretitle")}
              </p>

              <h1 className="mt-6 text-5xl font-light text-foreground md:text-7xl">
                {t("contact.hero.title")}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {t("contact.hero.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-14 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t("contact.public.pretitle")}
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight text-foreground md:text-5xl">
                  {t("contact.public.title")}
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  {t("contact.public.desc")}
                </p>

                <div className="mt-8 rounded-sm border border-primary/20 bg-card/60 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("contact.public.note")}
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  {publicContactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group flex items-center gap-5 border border-border bg-card/50 p-5 transition hover:border-primary"
                    >
                      <div className="flex h-12 w-12 items-center justify-center border border-primary/25">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="mt-1 text-lg text-foreground transition group-hover:text-primary">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border border-border bg-card/60 p-7 md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t("contact.form.pretitle")}
                </p>
                <h3 className="mt-4 text-3xl font-light text-foreground">
                  {t("contact.form.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("contact.form.desc")}
                </p>

                {/* --- UPDATED FORM WITH ONSUBMIT --- */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t("contact.form.firstName")}
                      required
                      aria-label="First Name"
                      className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={t("contact.form.lastName")}
                      aria-label="Last Name"
                      className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email")}
                    required
                    aria-label="Email Address"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.form.phone")}
                    aria-label="Phone Number"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  <label htmlFor="supportType" className="sr-only">
                    {t("contact.form.supportType")}
                  </label>
                  <select
                    id="supportType"
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  >
                    <option className="bg-background" value="">
                      {t("contact.form.options.default")}
                    </option>
                    <option className="bg-background" value="membership">
                      {t("contact.form.options.membership")}
                    </option>
                    <option className="bg-background" value="benefits">
                      {t("contact.form.options.benefits")}
                    </option>
                    <option className="bg-background" value="travel">
                      {t("contact.form.options.travel")}
                    </option>
                    <option className="bg-background" value="experience">
                      {t("contact.form.options.experience")}
                    </option>
                  </select>

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.message")}
                    required
                    aria-label="Message"
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  {/* Feedback Messages */}
                  {status === "success" && (
                    <p className="text-sm text-[#4CAF50]">Message sent successfully! Our team will contact you soon.</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-[#E57373]">Failed to send message. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/30 bg-card/90 dark:bg-[linear-gradient(135deg,rgba(212,175,55,0.14),rgba(0,0,0,0.65),rgba(212,175,55,0.06))] p-6 shadow-[0_0_70px_rgba(212,175,55,0.13)] md:p-10">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                {t("contact.private.pretitle")}
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-light leading-tight text-foreground md:text-5xl">
                {t("contact.private.title1")}{" "}
                <span className="text-primary">{t("contact.private.title2")}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("contact.private.desc")}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {memberSupport.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border border-primary/25 bg-background/35 p-6"
                >
                  <item.icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="flex gap-4 border border-primary/25 bg-background/40 p-5">
                <Headphones className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    {t("contact.private.features.phone.title")}
                  </p>
                  <p className="mt-2 text-lg text-foreground">
                    {t("contact.private.features.phone.subtitle")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.private.features.phone.desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border border-primary/25 bg-background/40 p-5">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    {t("contact.private.features.verification.title")}
                  </p>
                  <p className="mt-2 text-lg text-foreground">
                    {t("contact.private.features.verification.subtitle")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.private.features.verification.desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <CreditCard className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("contact.private.features.cards.c1")}
                </p>
              </div>

              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("contact.private.features.cards.c2")}
                </p>
              </div>

              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("contact.private.features.cards.c3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/40 bg-card/90 dark:bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.78),rgba(212,175,55,0.08))] p-6 shadow-[0_0_90px_rgba(212,175,55,0.18)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-primary">
                  {t("contact.difference.pretitle")}
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight text-foreground md:text-5xl">
                  {t("contact.difference.title1")}{" "}
                  <span className="text-primary">{t("contact.difference.title2")}</span>
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t("contact.difference.desc")}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-primary/25 bg-background/40 p-5">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    {t("contact.difference.general.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.difference.general.desc")}
                  </p>
                </div>

                <div className="border border-primary/25 bg-background/40 p-5">
                  <LockKeyhole className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    {t("contact.difference.memberOnly.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.difference.memberOnly.desc")}
                  </p>
                </div>

                <div className="border border-primary/25 bg-background/40 p-5 md:col-span-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    {t("contact.difference.verified.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.difference.verified.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/20 bg-card/50 p-6 md:p-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {t("contact.help.pretitle")}
                </p>
                <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
                  {t("contact.help.title")}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {t("contact.help.desc")}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {supportPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 border border-border bg-background/30 p-4"
                  >
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <Clock3 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("contact.help.extra1")}
                  </p>
                </div>

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <ConciergeBell className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("contact.help.extra2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}