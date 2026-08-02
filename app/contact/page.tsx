"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
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
  Loader2,
  type LucideIcon,
} from "lucide-react";

type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type MemberSupportItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 42 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="h-px bg-primary"
      />
      <p className="text-[10px] uppercase tracking-[0.38em] text-primary sm:text-xs">
        {children}
      </p>
    </div>
  );
}

function ContactRailItem({
  item,
  index,
}: {
  item: ContactInfoItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.65 + index * 0.1 }}
      className="group relative flex min-w-0 items-center gap-4 px-5 py-4 sm:px-6"
    >
      {index > 0 && (
        <span className="absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 bg-white/10 md:block" />
      )}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-black/30 text-primary transition duration-500 group-hover:border-primary group-hover:bg-primary/10">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
          {item.label}
        </p>
        <p className="mt-1 truncate text-sm text-white/80 transition group-hover:text-primary sm:text-base">
          {item.value}
        </p>
      </div>
    </motion.div>
  );
}

function SupportTierRow({
  item,
  index,
}: {
  item: MemberSupportItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      whileHover={{ x: 8 }}
      className="group relative grid gap-4 border-t border-white/[0.07] py-7 first:border-t-0 sm:grid-cols-[92px_1fr] sm:items-center"
    >
      <div className="flex items-center gap-4 sm:block">
        <span className="font-serif text-4xl font-light text-primary/20 sm:text-5xl">
          0{index + 1}
        </span>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.05] text-primary transition duration-500 group-hover:rotate-6 group-hover:border-primary/60 group-hover:bg-primary/10 sm:mt-3">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-2xl font-light text-foreground transition group-hover:text-primary sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
          {item.text}
        </p>
      </div>

      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-transparent"
        initial={{ width: "0%" }}
        whileInView={{ width: "34%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      />
    </motion.div>
  );
}

export default function ContactPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportType: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          supportType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      setStatus("error");
    }
  };

  const publicContactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      label: t("contact.public.info.i1.label"),
      value: "goamoments.com@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.public.info.i2.label"),
      value: "+91 9150216333",
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

  const memberSupport: MemberSupportItem[] = [
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

  const fieldClassName =
    "peer w-full border-0 border-b border-white/10 bg-transparent px-0 pb-3 pt-7 font-sans text-sm text-foreground outline-none transition duration-300 placeholder:text-transparent focus:border-primary";

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Global architectural background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(212,175,55,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[150px]" />
        <div className="absolute -left-40 top-[45%] h-80 w-80 rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute -right-40 top-[67%] h-80 w-80 rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero — cinematic but uncluttered */}
        <section className="relative isolate min-h-[500px] overflow-hidden border-b border-white/[0.06] sm:min-h-[560px] lg:min-h-[620px]">
          <motion.div
            className="absolute inset-0 -z-30"
            animate={{ scale: [1.02, 1.07, 1.02] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/contact-hero.jpg"
              alt="GOA MOMENTS concierge support"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-70"
            />
          </motion.div>

          <div className="absolute inset-0 -z-20 bg-black/45" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/65 via-background/55 to-background" />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_38%,rgba(212,175,55,0.16),transparent_37%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-background to-transparent" />

          {/* Fine luxury frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute inset-x-5 bottom-6 top-5 border border-white/[0.07] sm:inset-x-8 sm:bottom-8 sm:top-7 lg:inset-x-12"
          />
          <span className="pointer-events-none absolute left-5 top-5 h-16 w-16 border-l border-t border-primary/40 sm:left-8 sm:top-7 lg:left-12" />
          <span className="pointer-events-none absolute right-5 top-5 h-16 w-16 border-r border-t border-primary/40 sm:right-8 sm:top-7 lg:right-12" />

          <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 pb-28 pt-24 sm:min-h-[560px] sm:pb-32 lg:min-h-[620px] lg:px-10">
            <div className="mx-auto w-full max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center gap-4"
              >
                <span className="h-px w-10 bg-primary/70" />
                <p className="text-[10px] uppercase tracking-[0.45em] text-primary sm:text-xs">
                  {t("contact.hero.pretitle")}
                </p>
                <span className="h-px w-10 bg-primary/70" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.12 }}
                className="mx-auto mt-7 max-w-5xl font-serif text-5xl font-light leading-[1.03] text-foreground sm:text-6xl md:text-7xl lg:text-[5.6rem]"
              >
                {t("contact.hero.title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.28 }}
                className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 md:text-lg"
              >
                {t("contact.hero.subtitle")}
              </motion.p>
            </div>
          </div>

          {/* Contact rail becomes the bridge into the page */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid overflow-hidden border border-white/[0.08] bg-black/55 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl md:grid-cols-3">
                {publicContactInfo.map((item, index) => (
                  <ContactRailItem key={item.label} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Public support + form — asymmetric concierge workspace */}
        <section className="relative px-5 py-20 sm:px-6 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <Eyebrow>{t("contact.public.pretitle")}</Eyebrow>

                <h2 className="mt-7 max-w-xl font-serif text-4xl font-light leading-[1.14] text-foreground sm:text-5xl lg:text-6xl">
                  {t("contact.public.title")}
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {t("contact.public.desc")}
                </p>

                <div className="relative mt-9 overflow-hidden border-l border-primary/70 bg-gradient-to-r from-primary/[0.08] to-transparent px-5 py-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      {t("contact.public.note")}
                    </p>
                  </div>
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-y-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
                  />
                </div>

                <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-white/25">
                  <span className="h-px flex-1 bg-white/[0.07]" />
                  <span>Goa Moments</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, delay: 0.05 }}
                className="relative"
              >
                <div className="absolute -inset-4 -z-10 bg-[radial-gradient(circle_at_85%_10%,rgba(212,175,55,0.13),transparent_36%)] blur-2xl" />

                <div className="relative overflow-hidden border border-primary/25 bg-card/70 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
                  <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 border-r border-t border-primary/45" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-b border-l border-primary/20" />
                  <span className="pointer-events-none absolute right-7 top-7 font-serif text-7xl text-white/[0.025]">
                    01
                  </span>

                  <Eyebrow>{t("contact.form.pretitle")}</Eyebrow>

                  <h3 className="mt-6 max-w-2xl font-serif text-3xl font-light text-foreground sm:text-4xl">
                    {t("contact.form.title")}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {t("contact.form.desc")}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="grid gap-x-6 gap-y-2 md:grid-cols-2">
                      <div className="relative">
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder={t("contact.form.firstName")}
                          required
                          aria-label="First Name"
                          className={fieldClassName}
                        />
                        <label
                          htmlFor="firstName"
                          className="pointer-events-none absolute left-0 top-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition peer-focus:text-primary"
                        >
                          {t("contact.form.firstName")}
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder={t("contact.form.lastName")}
                          aria-label="Last Name"
                          className={fieldClassName}
                        />
                        <label
                          htmlFor="lastName"
                          className="pointer-events-none absolute left-0 top-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition peer-focus:text-primary"
                        >
                          {t("contact.form.lastName")}
                        </label>
                      </div>

                      <div className="relative md:col-span-2">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.email")}
                          required
                          aria-label="Email Address"
                          className={fieldClassName}
                        />
                        <label
                          htmlFor="email"
                          className="pointer-events-none absolute left-0 top-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition peer-focus:text-primary"
                        >
                          {t("contact.form.email")}
                        </label>
                      </div>

                      <div className="relative md:col-span-2">
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("contact.form.phone")}
                          aria-label="Phone Number"
                          className={fieldClassName}
                        />
                        <label
                          htmlFor="phone"
                          className="pointer-events-none absolute left-0 top-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition peer-focus:text-primary"
                        >
                          {t("contact.form.phone")}
                        </label>
                      </div>

                      <div className="relative md:col-span-2">
                        <label
                          htmlFor="supportType"
                          className="pointer-events-none absolute left-0 top-2 z-10 text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
                        >
                          {t("contact.form.supportType")}
                        </label>
                        <select
                          id="supportType"
                          name="supportType"
                          value={formData.supportType}
                          onChange={handleChange}
                          className="w-full appearance-none border-0 border-b border-white/10 bg-transparent pb-3 pt-7 font-sans text-sm text-foreground outline-none transition focus:border-primary"
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
                        <span className="pointer-events-none absolute bottom-4 right-0 h-2 w-2 rotate-45 border-b border-r border-primary/70" />
                      </div>

                      <div className="relative md:col-span-2">
                        <textarea
                          id="message"
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.form.message")}
                          required
                          aria-label="Message"
                          className="peer w-full resize-none border-0 border-b border-white/10 bg-transparent px-0 pb-3 pt-8 font-sans text-sm leading-7 text-foreground outline-none transition placeholder:text-transparent focus:border-primary"
                        />
                        <label
                          htmlFor="message"
                          className="pointer-events-none absolute left-0 top-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition peer-focus:text-primary"
                        >
                          {t("contact.form.message")}
                        </label>
                      </div>
                    </div>

                    <div className="mt-5 min-h-6">
                      {status === "success" && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-[#62c982]"
                        >
                          Message sent successfully! Our team will contact you soon.
                        </motion.p>
                      )}
                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-[#E57373]"
                        >
                          Failed to send message. Please try again or email us directly.
                        </motion.p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative mt-5 flex w-full items-center justify-center gap-3 overflow-hidden border border-primary bg-primary px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition duration-500 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                      <span className="relative flex items-center gap-3">
                        {status === "loading" ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <>
                            {t("contact.form.submit")}
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Private member support — one editorial support ledger, not repeated cards */}
        <section className="relative border-y border-white/[0.05] bg-card/20 px-5 py-20 sm:px-6 md:py-24 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(212,175,55,0.08),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <Eyebrow>{t("contact.private.pretitle")}</Eyebrow>

                <h2 className="mt-7 font-serif text-4xl font-light leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
                  {t("contact.private.title1")} {" "}
                  <span className="text-primary">
                    {t("contact.private.title2")}
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {t("contact.private.desc")}
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="group flex gap-4 border-l border-primary/60 bg-primary/[0.045] p-4 transition hover:bg-primary/[0.08]">
                    <Headphones className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.26em] text-primary">
                        {t("contact.private.features.phone.title")}
                      </p>
                      <p className="mt-2 text-base text-foreground">
                        {t("contact.private.features.phone.subtitle")}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {t("contact.private.features.phone.desc")}
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 border-l border-primary/60 bg-primary/[0.045] p-4 transition hover:bg-primary/[0.08]">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.26em] text-primary">
                        {t("contact.private.features.verification.title")}
                      </p>
                      <p className="mt-2 text-base text-foreground">
                        {t("contact.private.features.verification.subtitle")}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {t("contact.private.features.verification.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative border-y border-white/[0.08]">
                {memberSupport.map((item, index) => (
                  <SupportTierRow key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>

            <div className="mt-14 grid overflow-hidden border border-white/[0.07] bg-background/30 md:grid-cols-3">
              {[
                {
                  icon: CreditCard,
                  text: t("contact.private.features.cards.c1"),
                },
                {
                  icon: LockKeyhole,
                  text: t("contact.private.features.cards.c2"),
                },
                {
                  icon: Sparkles,
                  text: t("contact.private.features.cards.c3"),
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative flex gap-4 px-5 py-5 md:px-6"
                  >
                    {index > 0 && (
                      <span className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/[0.08] md:block" />
                    )}
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Difference — comparison ledger */}
        <section className="relative px-5 py-20 sm:px-6 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
            >
              <div>
                <Eyebrow>{t("contact.difference.pretitle")}</Eyebrow>
                <h2 className="mt-7 font-serif text-4xl font-light leading-[1.12] text-foreground sm:text-5xl">
                  {t("contact.difference.title1")} {" "}
                  <span className="text-primary">
                    {t("contact.difference.title2")}
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {t("contact.difference.desc")}
                </p>
              </div>

              <div className="border-t border-white/[0.08]">
                {[
                  {
                    icon: Mail,
                    title: t("contact.difference.general.title"),
                    description: t("contact.difference.general.desc"),
                  },
                  {
                    icon: LockKeyhole,
                    title: t("contact.difference.memberOnly.title"),
                    description: t("contact.difference.memberOnly.desc"),
                  },
                  {
                    icon: ShieldCheck,
                    title: t("contact.difference.verified.title"),
                    description: t("contact.difference.verified.desc"),
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="group grid gap-4 border-b border-white/[0.08] py-7 sm:grid-cols-[70px_1fr] sm:items-start"
                    >
                      <div className="flex items-center gap-3 sm:block">
                        <span className="font-serif text-3xl text-primary/25">
                          0{index + 1}
                        </span>
                        <Icon className="h-5 w-5 text-primary sm:mt-3" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-light text-foreground transition group-hover:text-primary sm:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help — compact service map */}
        <section className="relative px-5 pb-24 sm:px-6 md:pb-28 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden border border-primary/20 bg-card/45">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative border-b border-white/[0.07] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.13),transparent_48%)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10"
              >
                <Eyebrow>{t("contact.help.pretitle")}</Eyebrow>
                <h2 className="mt-7 font-serif text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
                  {t("contact.help.title")}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                  {t("contact.help.desc")}
                </p>

                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border border-primary/10"
                />
              </motion.div>

              <div className="grid sm:grid-cols-2">
                {[
                  ...supportPoints.map((point) => ({
                    icon: BadgeCheck,
                    text: point,
                  })),
                  {
                    icon: Clock3,
                    text: t("contact.help.extra1"),
                  },
                  {
                    icon: ConciergeBell,
                    text: t("contact.help.extra2"),
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`group relative flex min-h-[128px] gap-4 p-6 transition hover:bg-primary/[0.035] ${
                        index % 2 === 0 ? "sm:border-r sm:border-white/[0.07]" : ""
                      } ${index < 4 ? "border-b border-white/[0.07]" : ""}`}
                    >
                      <span className="font-serif text-2xl text-primary/18">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}