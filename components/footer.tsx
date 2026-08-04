"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "./providers";
import { useTheme } from "next-themes";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/goamoments_official",
    label: "Instagram",
  },
];

const legalLinks = [
  {
    label: "Terms and Conditions",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Cancellation & Refund Policy",
    href: "/refund-policy",
  },
  {
    label: "Copyright & Intellectual Property Policy",
    href: "/copyright",
  },
  {
    label: "Data Collection & Permissions Policy",
    href: "/data-collection-permissions",
  },
  {
    label: "Community Guidelines",
    href: "/community-guidelines",
  },
  {
    label: "Data Deletion Policy",
    href: "/data-deletion-policy",
  },
];

export function Footer() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const quickLinks = [
    {
      label: t("nav.home"),
      href: "/",
    },
    {
      label: t("nav.about"),
      href: "/about",
    },
    {
      label: t("nav.membership"),
      href: "/membership",
    },
    {
      label: "Membership Activities",
      href: "/membership-activities",
    },
    {
      label: t("nav.contact"),
      href: "/contact",
    },
  ];

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  const subTextColor = isDark
    ? "text-white/60"
    : "text-muted-foreground";

  const startupLogo = isDark
    ? "/images/startup_logo_black.png"
    : "/images/startup_logo_white.png";

  const nidhiLogo = isDark
    ? "/images/nidhi_black_theme.png"
    : "/images/nidhi_white_theme.png";

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-1"
          >
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex w-fit items-center gap-3 sm:mb-6"
              aria-label="Open Goa Moments home page in a new tab"
            >
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
            </Link>

            <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
              {t("footer.description")}
            </p>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${social.label} in a new tab`}
                    className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:h-10 sm:w-10"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              {t("footer.quickLinks")}
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              Legal
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs leading-relaxed text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              {t("footer.contact")}
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Panjim%2C+Goa%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 sm:gap-3"
                  aria-label="Open Panjim, Goa location in a new tab"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                    Panjim
                    <br />
                    Goa, India
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919150216333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3"
                  aria-label="Call Goa Moments"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />

                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                    +91 9150216333
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:goamoments.com@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 sm:gap-3"
                  aria-label="Send an email to Goa Moments"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <span className="break-all text-xs text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                    goamoments.com@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Partners and Recognitions */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="lg:col-span-1"
          >
            <h4 className="mb-4 text-center font-serif text-[11px] uppercase tracking-[0.15em] text-[#C5A059] sm:mb-6 sm:text-xs">
              Partners & Recognitions
            </h4>

            <div className="w-full rounded-xl border border-[#C5A059] bg-background/50 p-4 shadow-[0_0_15px_rgba(197,160,89,0.3)] sm:p-5">
              <div className="grid grid-cols-3 gap-1">
                {/* Goa Tourism */}
                <div className="flex flex-col items-center justify-start border-r border-[#C5A059]/30 pr-1 text-center">
                  <Image
                    src="/images/goa_tourism.png"
                    alt="Goa Tourism Development Corporation Ltd."
                    width={80}
                    height={45}
                    className="h-8 w-auto object-contain opacity-100 drop-shadow-md sm:h-9"
                  />

                  <span
                    className={`mt-1.5 text-center text-[6px] font-medium leading-tight sm:text-[7px] ${subTextColor}`}
                  >
                    Goa Tourism
                    <br />
                    Development
                    <br />
                    Corporation Ltd.
                  </span>
                </div>

                {/* Startup India */}
                <div className="flex flex-col items-center justify-start border-r border-[#C5A059]/30 px-1 text-center">
                  <Image
                    src={startupLogo}
                    alt="Startup India"
                    width={80}
                    height={45}
                    className="h-8 w-auto object-contain opacity-100 drop-shadow-md sm:h-9"
                  />

                  <span
                    className={`mt-2 text-center text-[7px] font-medium leading-[1.3] sm:text-[8px] ${subTextColor}`}
                  >
                    Recognized
                    <br />
                    by DPIIT
                  </span>
                </div>

                {/* NIDHI */}
                <div className="flex flex-col items-center justify-start pl-1 text-center">
                  <Image
                    src={nidhiLogo}
                    alt="NIDHI"
                    width={80}
                    height={45}
                    className="my-1 h-6 w-auto object-contain opacity-100 drop-shadow-md sm:h-7"
                  />

                  <span
                    className={`mt-2 text-center text-[7px] font-medium leading-[1.3] sm:text-[8px] ${subTextColor}`}
                  >
                    NIDHI
                    <br />
                    Database
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-border pt-6 sm:mt-16 sm:pt-8">
          <p className="text-center text-[10px] text-muted-foreground sm:text-xs">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}