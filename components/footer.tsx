"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "./providers";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.membership"), href: "/membership" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="/" className="mb-4 flex items-center gap-3 sm:mb-6">
              <Image
                src="/images/logo.png"
                alt="GOA MOMENTS Logo"
                width={70}
                height={70}
                className="h-12 w-auto object-contain sm:h-14"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-medium tracking-wider text-foreground sm:text-lg">
                  GOA MOMENTS
                </span>
                <span className="text-[8px] uppercase tracking-[0.15em] text-primary sm:text-[10px] sm:tracking-[0.2em]">
                  LUXURY LIVING
                </span>
              </div>
            </a>

            <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
              {t("footer.description")}
            </p>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:h-10 sm:w-10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  {t("contact.info.visit.line1")}
                  <br />
                  {t("contact.info.visit.line2")}
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  +91 832 XXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  concierge@goamoments.com
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              {t("footer.newsletter.title")}
            </h4>
            <p className="mb-3 text-xs text-muted-foreground sm:mb-4 sm:text-sm">
              {t("footer.newsletter.description")}
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="border border-border bg-transparent px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:px-4 sm:py-3 sm:text-sm"
              />
              <button className="border border-primary bg-primary px-3 py-2 text-xs uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary sm:px-4 sm:py-3 sm:text-sm">
                {t("footer.newsletter.submit")}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:mt-16 sm:gap-4 sm:pt-8 md:flex-row">
          <p className="text-[10px] text-muted-foreground sm:text-xs">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-[10px] text-muted-foreground transition-colors hover:text-primary sm:text-xs"
            >
              {t("footer.legal.privacy")}
            </a>
            <a
              href="#"
              className="text-[10px] text-muted-foreground transition-colors hover:text-primary sm:text-xs"
            >
              {t("footer.legal.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}