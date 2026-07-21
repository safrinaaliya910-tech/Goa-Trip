"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin } from "lucide-react"; 
import { useTranslation } from "./providers";
import { useTheme } from "next-themes";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/goamoments_official", 
    label: "Instagram" 
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
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.membership"), href: "/membership" },
    { label: "Membership Activities", href: "/membership-activities" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isDark = mounted && resolvedTheme === "dark";
  const subTextColor = isDark ? "text-white/60" : "text-muted-foreground";
  
  const startupLogo = isDark ? "/images/startup_logo_black.png" : "/images/startup_logo_white.png";
  const nidhiLogo = isDark ? "/images/nidhi_black_theme.png" : "/images/nidhi_white_theme.png";

  if (!mounted) {
    return null;
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        {/* Grid layout */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-5">
          
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="mb-4 flex items-center gap-3 sm:mb-6">
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:h-10 sm:w-10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
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
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-widest text-foreground sm:mb-6 sm:text-sm">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                >
                  {t("footer.legal.terms") || "Terms of Service"}
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                >
                  {t("footer.legal.privacy") || "Privacy Policy"}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
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
                  {t("Panji")}
                  <br />
                  {t("Goa, India")}
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  +91 9150216333
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  goamoments.com@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Official Tourism Partners & Recognitions Section - 3-Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h4 className="mb-4 text-center font-serif text-[11px] uppercase tracking-[0.15em] text-[#C5A059] sm:mb-6 sm:text-xs">
              Partners & Recognitions
            </h4>
            
            <div className="w-full rounded-xl border border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.3)] bg-background/50 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-1">
                
               {/* 1. Goa Tourism Development Corporation Ltd. */}
                <div className="flex flex-col items-center justify-start text-center border-r border-[#C5A059]/30 pr-1">
                  <Image
                    src="/images/goa_tourism.png"
                    alt="Goa Tourism Development Corporation Ltd."
                    width={80}
                    height={45}
                    className="h-8 sm:h-9 w-auto object-contain opacity-100 drop-shadow-md"
                  />
                  <span className={`mt-1.5 text-center text-[6px] font-medium leading-tight sm:text-[7px] ${subTextColor}`}>
                    Goa Tourism<br />Development<br />Corporation Ltd.
                  </span>
                </div>

                {/* 2. Startup India */}
                <div className="flex flex-col items-center justify-start text-center border-r border-[#C5A059]/30 px-1">
                  <Image
                    src={startupLogo}
                    alt="Startup India"
                    width={80}
                    height={45}
                    className="h-8 sm:h-9 w-auto object-contain opacity-100 drop-shadow-md"
                  />
                  <span className={`mt-2 text-center text-[7px] font-medium leading-[1.3] sm:text-[8px] ${subTextColor}`}>
                    Recognized<br/>by DPIIT
                  </span>
                </div>

                {/* 3. NIDHI */}
                <div className="flex flex-col items-center justify-start text-center pl-1">
                  <Image
                    src={nidhiLogo}
                    alt="NIDHI"
                    width={80}
                    height={45}
                    className="h-6 sm:h-7 w-auto object-contain opacity-100 drop-shadow-md my-1"
                  />
                  <span className={`mt-2 text-center text-[7px] font-medium leading-[1.3] sm:text-[8px] ${subTextColor}`}>
                    Nidhi<br/>Database
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