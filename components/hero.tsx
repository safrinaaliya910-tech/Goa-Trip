"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./providers";

export function Hero() {
  const { t } = useTranslation();

  return (
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

        {/* Same luxury soft overlay */}
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
  );
}