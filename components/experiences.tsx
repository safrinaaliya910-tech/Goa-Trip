"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "./providers";

const experienceKeys = [
  { key: "beach", image: "/images/hero-beach.jpg" },
  { key: "nightlife", image: "/images/nightlife.jpg" },
  { key: "casino", image: "/images/casino.jpg" },
  { key: "yacht", image: "/images/yacht.jpg" },
];

export function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="experiences" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16 md:mb-24"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            {t("experiences.badge")}
          </p>
          <h2 className="mb-4 text-3xl font-light tracking-wide text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {t("experiences.title").split(" ")[0]}{" "}
            <span className="font-medium text-primary">
              {t("experiences.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t("experiences.subtitle")}
          </p>
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent sm:w-24" />
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {experienceKeys.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden sm:aspect-[4/5]"
            >
              {/* Image */}
              <Image
                src={exp.image}
                alt={t(`experiences.items.${exp.key}.title`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-primary sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
                    {t(`experiences.items.${exp.key}.subtitle`)}
                  </p>
                  <h3 className="mb-2 text-xl font-medium tracking-wide text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
                    {t(`experiences.items.${exp.key}.title`)}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
                    {t(`experiences.items.${exp.key}.description`)}
                  </p>
                  <div className="flex items-center gap-2 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-widest sm:text-xs">
                      Discover
                    </span>
                    <div className="h-px w-6 bg-primary transition-all duration-500 group-hover:w-10 sm:w-8 sm:group-hover:w-12" />
                  </div>
                </motion.div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 border border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
