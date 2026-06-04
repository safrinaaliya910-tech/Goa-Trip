"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Headphones } from "lucide-react";
import { useTranslation } from "./providers";
import { useTheme } from "next-themes";

export function Hero() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by ensuring component is mounted before checking theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine theme values safely
  const isDark = mounted && resolvedTheme === "dark";

  const governmentLogo = isDark
    ? "/images/government_logo_white.png"
    : "/images/government_logo_black.png";

  const textColor = isDark ? "text-white" : "text-foreground";
  const subTextColor = isDark ? "text-white/60" : "text-muted-foreground";

  // Prevent rendering theme-dependent UI until mounted to avoid flashing
  if (!mounted) {
    return null; 
  }

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-[96%_center] sm:object-[60%_center]"
          >
            <source src="/images/goa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Luxury soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-28 text-center sm:px-6 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-4xl -translate-y-3 sm:translate-y-0"
          >
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent sm:mb-8 sm:w-24"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-5 text-[11px] uppercase tracking-[0.22em] text-primary sm:mb-4 sm:text-sm sm:tracking-[0.3em]"
            >
              Exclusive Membership
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-5 text-[clamp(2.8rem,8vw,4.25rem)] font-light leading-[1.05] tracking-wide text-foreground sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl"
            >
              <span className="text-balance">{t("hero.title1")}</span>
              <br />
              <span className="font-medium text-primary">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mx-auto mb-8 max-w-[340px] text-pretty text-[15px] leading-8 text-foreground/70 sm:mb-12 sm:max-w-2xl sm:text-lg sm:text-muted-foreground md:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-40 flex flex-col items-center gap-4 sm:mb-0 sm:flex-row sm:justify-center sm:gap-4"
            >
              <a
                href="/coming-soon"
                className="group relative w-full max-w-[360px] overflow-hidden rounded-none border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-primary sm:w-auto sm:max-w-none sm:px-10 sm:py-4"
              >
                <span className="relative z-10">{t("hero.cta1")}</span>
              </a>

              <a
                href="/membership"
                className="w-full max-w-[360px] rounded-none border border-muted-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.18em] text-foreground transition-all duration-500 hover:border-primary hover:text-primary sm:w-auto sm:max-w-none sm:px-10 sm:py-4"
              >
                {t("hero.cta2")}
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                Scroll
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent sm:h-12" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner Section */}
      <section className="relative z-20 w-full bg-background px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8 rounded-2xl border border-[#C5A059]/60 shadow-[0_4px_25px_rgba(197,160,89,0.15)] bg-card/90 backdrop-blur-sm px-6 py-10 text-card-foreground xl:flex-row xl:justify-between xl:px-12 xl:py-8"
          >
            
            {/* 1. Government of Goa */}
            <div className="flex items-center gap-4 xl:w-auto">
              <Image
                src={governmentLogo}
                alt="Government of Goa"
                width={65}
                height={65}
                className="h-14 w-auto object-contain drop-shadow-md"
              />
              <div className="flex flex-col pt-1">
                <span className={`font-serif text-[15px] tracking-wide ${textColor}`}>
                  Government of Goa
                </span>
                <span className={`mt-1 text-[11px] leading-[1.5] ${subTextColor}`}>
                  Officially Integrated<br />
                  with the Department of<br />
                  Tourism, Government of Goa
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-[#C5A059]/30 xl:block" />
            <div className="h-px w-3/4 bg-[#C5A059]/30 xl:hidden" />

            {/* 2. Goa Tourism */}
            <div className="flex items-center gap-4 xl:w-auto">
              <Image
                src="/images/goa_tourism.png"
                alt="Goa Tourism"
                width={95}
                height={55}
                className="h-10 w-auto object-contain drop-shadow-md"
              />
              <div className="flex flex-col pt-1">
                <span className={`font-serif text-[15px] uppercase tracking-wide ${textColor}`}>
                  Goa Tourism
                </span>
                <span className={`mt-1 text-[11px] leading-[1.5] ${subTextColor}`}>
                  Official Tourism Partner<br />
                  Promoting Goa Worldwide
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-[#C5A059]/30 xl:block" />
            <div className="h-px w-3/4 bg-[#C5A059]/30 xl:hidden" />

            {/* 3. Trusted & Secured */}
            <div className="flex items-center gap-4 xl:w-auto">
              <ShieldCheck className="h-10 w-10 text-[#C5A059]" strokeWidth={1.2} />
              <div className="flex flex-col pt-1">
                <span className={`font-serif text-[14px] tracking-wide ${textColor}`}>
                  Trusted & Secured
                </span>
                <span className={`mt-1 text-[11px] leading-[1.5] ${subTextColor}`}>
                  Government Integrated<br />
                  & Verified
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-[#C5A059]/30 xl:block" />
            <div className="h-px w-3/4 bg-[#C5A059]/30 xl:hidden" />

            {/* 4. Premium Experiences */}
            <div className="flex items-center gap-4 xl:w-auto">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A059]">
                <path d="M12 17C16.4183 17 20 13.4183 20 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M12 17C7.58172 17 4 13.4183 4 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M8 4L9.5 6.5L12 3L14.5 6.5L16 4L15 8H9L8 4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M18 11C19.5 10 20 9 20 9C20 9 19 9.5 18 11Z" fill="currentColor"/>
                <path d="M16 13C17.5 12 18 11 18 11C18 11 17 11.5 16 13Z" fill="currentColor"/>
                <path d="M14 15C15.5 14 16 13 16 13C16 13 15 13.5 14 15Z" fill="currentColor"/>
                <path d="M6 11C4.5 10 4 9 4 9C4 9 5 9.5 6 11Z" fill="currentColor"/>
                <path d="M8 13C6.5 12 6 11 6 11C6 11 7 11.5 8 13Z" fill="currentColor"/>
                <path d="M10 15C8.5 14 8 13 8 13C8 13 9 13.5 10 15Z" fill="currentColor"/>
              </svg>
              <div className="flex flex-col pt-1">
                <span className={`font-serif text-[14px] leading-tight tracking-wide ${textColor}`}>
                  Premium<br />Experiences
                </span>
                <span className={`mt-1 text-[11px] leading-[1.5] ${subTextColor}`}>
                  Curated for Members
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-[#C5A059]/30 xl:block" />
            <div className="h-px w-3/4 bg-[#C5A059]/30 xl:hidden" />

            {/* 5. 24x7 Concierge */}
            <div className="flex items-center gap-4 xl:w-auto">
              <Headphones className="h-10 w-10 text-[#C5A059]" strokeWidth={1.2} />
              <div className="flex flex-col pt-1">
                <span className={`font-serif text-[14px] tracking-wide ${textColor}`}>
                  24x7 Concierge
                </span>
                <span className={`mt-1 text-[11px] leading-[1.5] ${subTextColor}`}>
                  Personalized<br />
                  Assistance
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}