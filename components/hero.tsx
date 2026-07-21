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

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const textColor = isDark ? "text-white" : "text-foreground";
  const subTextColor = isDark ? "text-white/60" : "text-muted-foreground";

  const startupLogo = isDark ? "/images/startup_logo_black.png" : "/images/startup_logo_white.png";
  const ministryLogo = isDark ? "/images/ministry_logo_white.png" : "/images/ministry_logo_black.png";
  
  // NIDHI Logo theme logic
  const nidhiLogo = isDark ? "/images/nidhi_black_theme.png" : "/images/nidhi_white_theme.png";

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
              {t("hero.pretitle")}
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
                href="/membership"
                className="group relative w-full max-w-[360px] overflow-hidden rounded-none border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-primary sm:w-auto sm:max-w-none sm:px-10 sm:py-4"
              >
                <span className="relative z-10">{t("hero.cta2")}</span>
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
                {t("hero.scroll")}
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent sm:h-12" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner Section - UPGRADED TO 7-COLUMN GRID */}
      <section className="relative z-20 w-full bg-background px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            /* 7-Column Grid to fit the new NIDHI logo beautifully */
            className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 xl:gap-y-0 rounded-2xl border border-[#C5A059]/60 bg-card/90 py-8 px-4 shadow-[0_4px_25px_rgba(197,160,89,0.15)] backdrop-blur-sm"
          >
            
            {/* 1. Goa Tourism */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <Image src="/images/goa_tourism.png" alt="Goa Tourism" width={140} height={90} className="max-h-full max-w-full object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    Goa Tourism
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Official Partner<br />Promoting Goa
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Startup India */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <Image src={startupLogo} alt="Startup India" width={140} height={90} className="max-h-full max-w-full object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    Startup India
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Recognized<br />by DPIIT
                  </span>
                </div>
              </div>
            </div>

            {/* 3. NIDHI */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  {/* Visually scaled down using h-8 / sm:h-10 so it matches perfectly */}
                  <Image src={nidhiLogo} alt="NIDHI" width={140} height={90} className="h-8 sm:h-10 w-auto object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    NIDHI
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Hospitality<br />Database
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Ministry of Tourism */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <Image src={ministryLogo} alt="Ministry of Tourism" width={140} height={90} className="max-h-full max-w-full object-contain drop-shadow-md scale-[1.9]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    Powered By
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Government<br />of India
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Trusted & Secured */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <ShieldCheck className="h-10 w-10 sm:h-11 sm:w-11 text-[#C5A059]" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    Trusted &<br className="hidden xl:block" /> Secured
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Government<br />Verified
                  </span>
                </div>
              </div>
            </div>

            {/* 6. Premium Experiences */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-11 sm:w-11 text-[#C5A059]">
                    <path d="M12 17C16.4183 17 20 13.4183 20 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M12 17C7.58172 17 4 13.4183 4 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M8 4L9.5 6.5L12 3L14.5 6.5L16 4L15 8H9L8 4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M18 11C19.5 10 20 9 20 9C20 9 19 9.5 18 11Z" fill="currentColor" />
                    <path d="M16 13C17.5 12 18 11 18 11C18 11 17 11.5 16 13Z" fill="currentColor" />
                    <path d="M14 15C15.5 14 16 13 16 13C16 13 15 13.5 14 15Z" fill="currentColor" />
                    <path d="M6 11C4.5 10 4 9 4 9C4 9 5 9.5 6 11Z" fill="currentColor" />
                    <path d="M8 13C6.5 12 6 11 6 11C6 11 7 11.5 8 13Z" fill="currentColor" />
                    <path d="M10 15C8.5 14 8 13 8 13C8 13 9 13.5 10 15Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    Premium<br className="hidden xl:block" /> Experiences
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Curated for<br />Members
                  </span>
                </div>
              </div>
            </div>

            {/* 7. 24x7 Concierge */}
            <div className="flex w-full justify-start sm:justify-center px-1 xl:px-4 xl:border-r border-[#C5A059]/30 [&:nth-child(7)]:border-0">
              <div className="flex w-full max-w-[220px] items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-[76px] sm:h-16 sm:w-[84px] shrink-0 items-center justify-center">
                  <Headphones className="h-10 w-10 sm:h-11 sm:w-11 text-[#C5A059]" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`font-serif text-[11px] lg:text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor}`}>
                    24x7<br className="hidden xl:block" /> Concierge
                  </span>
                  <span className={`mt-1 text-[10px] leading-[1.3] ${subTextColor}`}>
                    Personalized<br />Assistance
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}