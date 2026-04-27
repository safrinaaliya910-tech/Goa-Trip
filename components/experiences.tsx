"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "./providers";

const experienceKeys = [
  {
    key: "beach",
    image: "/images/hero-beach.jpg",
    subtitle: "Private Beach Access",
    title: "Golden Shores",
    description:
      "Exclusive sunrise and sunset experiences at Goa’s most pristine beaches.",
  },
  {
    key: "nightlife",
    image: "/images/nightlife.jpg",
    subtitle: "Elite Nightlife",
    title: "After Dark",
    description:
      "Skip the lines and access VIP-style nightlife experiences across Goa.",
  },
  {
    key: "casino",
    image: "/images/casino.jpg",
    subtitle: "VIP Casino Privileges",
    title: "High Stakes",
    description:
      "Private tables, dedicated hosts, and premium casino experiences.",
  },
  {
    key: "yacht",
    image: "/images/yacht.jpg",
    subtitle: "Private Yacht Charters",
    title: "Ocean Voyages",
    description:
      "Sail into the sunset with luxury yacht experiences and curated service.",
  },
  {
    key: "parasailing",
    image: "/images/parasailing.png",
    subtitle: "Sky Adventure",
    title: "Parasailing",
    description:
      "Soar above Goa’s coastline with breathtaking golden-hour ocean views.",
  },
  {
    key: "hot-air-balloon",
    image: "/images/hot-air-balloon.png",
    subtitle: "Luxury Sky Ride",
    title: "Hot Air Balloon",
    description:
      "Drift peacefully above scenic coastal views in a premium sunrise ride.",
  },
  {
    key: "scuba",
    image: "/images/scuba.png",
    subtitle: "Ocean Discovery",
    title: "Scuba Diving",
    description:
      "Explore underwater beauty, marine life, and unforgettable blue-water moments.",
  },
  {
    key: "scooter",
    image: "/images/scooter.png",
    subtitle: "High Speed Waters",
    title: "Water Scooter Ride",
    description:
      "Feel the thrill of speed across Goa’s golden waters with a premium ride.",
  },
];

export function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="experiences" className="bg-background py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-14 md:mb-16"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            {t("experiences.badge")}
          </p>

          <h2 className="mb-4 text-3xl font-light tracking-wide text-foreground sm:mb-6 sm:text-4xl md:text-5xl">
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

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {experienceKeys.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative h-[420px] overflow-hidden bg-black sm:h-[460px] md:h-[500px]"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_35%)] opacity-70" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.22em]">
                    {exp.subtitle}
                  </p>

                  <h3 className="mb-2 text-xl font-medium tracking-wide text-foreground sm:text-2xl md:text-[28px]">
                    {exp.title}
                  </h3>

                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-widest sm:text-xs">
                      Discover
                    </span>
                    <div className="h-px w-6 bg-primary transition-all duration-500 group-hover:w-10 sm:w-8 sm:group-hover:w-12" />
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 border border-primary/0 transition-all duration-500 group-hover:border-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}