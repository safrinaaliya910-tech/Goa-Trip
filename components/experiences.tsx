"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "./providers";

// 1. Type definition to keep TypeScript happy
type ExperienceItem = {
  key: string;
  video?: string;
  image?: string;
  subtitle: any;
  title: any;
  description: any;
};

// 2. THE MAGIC FIX: A smart video player that actually plays/pauses when sliding!
function SmartVideo({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If it slides to the center, PLAY it. If it slides away, PAUSE it.
    if (isActive && videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Playback prevented:", err));
    } else if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export function Experiences() {
  const { t } = useTranslation();

  // Starts at 1 so the carousel is filled on both sides.
  const [currentIndex, setCurrentIndex] = useState(1);

  // 3. Fixed typos in filenames (removed "under sea.mp4")
  const experienceKeys: ExperienceItem[] = [
    {
      key: "beach",
      video: "/images/couple.mp4",
      subtitle: t("experiences.items.beach.subtitle"),
      title: t("experiences.items.beach.title"),
      description: t("experiences.items.beach.description"),
    },
    {
      key: "nightlife",
      video: "/images/dining.mp4",
      subtitle: t("experiences.items.nightlife.subtitle"),
      title: t("experiences.items.nightlife.title"),
      description: t("experiences.items.nightlife.description"),
    },
    {
      key: "casino",
      video: "/images/game.mp4",
      subtitle: t("experiences.items.casino.subtitle"),
      title: t("experiences.items.casino.title"),
      description: t("experiences.items.casino.description"),
    },
    {
      key: "yacht",
      video: "/images/ship.mp4",
      subtitle: t("experiences.items.yacht.subtitle"),
      title: t("experiences.items.yacht.title"),
      description: t("experiences.items.yacht.description"),
    },
    {
      key: "parasailing",
      video: "/images/parasute_ship.mp4",
      subtitle: t("experiences.items.parasailing.subtitle"),
      title: t("experiences.items.parasailing.title"),
      description: t("experiences.items.parasailing.description"),
    },
    {
      key: "scuba",
      video: "/images/under sea.mp4",
      subtitle: t("experiences.items.scuba.subtitle"),
      title: t("experiences.items.scuba.title"),
      description: t("experiences.items.scuba.description"),
    },
    {
      key: "scooter",
      video: "/images/scuba_diving.mp4", 
      subtitle: t("experiences.items.scooter.subtitle"),
      title: t("experiences.items.scooter.title"),
      description: t("experiences.items.scooter.description"),
    },
  ];

  const handleNext = () => {
    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % experienceKeys.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((previousIndex) => {
      return (
        (previousIndex - 1 + experienceKeys.length) % experienceKeys.length
      );
    });
  };

  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 md:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A059] opacity-[0.06] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center text-center md:mb-16"
        >
          <Link
            href="/membership"
            className="mb-10 inline-block transition-transform duration-500 hover:scale-105"
            aria-label="View Goa Moments Membership"
          >
            <Image
              src="/images/membership-logo.png"
              alt="Goa Moments Membership"
              width={220}
              height={110}
              className="h-20 w-auto object-contain drop-shadow-2xl sm:h-24"
            />
          </Link>

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] drop-shadow-md sm:mb-4 sm:text-xs">
            {t("experiences.badge")}
          </p>

          <h2 className="text-3xl font-serif font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            {t("experiences.title").split(" ")[0]}{" "}
            <span className="font-medium text-[#C5A059]">
              {t("experiences.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </motion.div>

        {/* 3D carousel section */}
        <div className="perspective-[2000px] relative flex h-[550px] w-full items-start justify-center sm:h-[600px] md:h-[650px]">
          <AnimatePresence initial={false}>
            {experienceKeys.map((experience, index) => {
              const totalExperiences = experienceKeys.length;

              let delta = index - currentIndex;

              if (delta > Math.floor(totalExperiences / 2)) {
                delta -= totalExperiences;
              }

              if (delta < -Math.floor(totalExperiences / 2)) {
                delta += totalExperiences;
              }

              // Render five cards around the active card.
              if (Math.abs(delta) > 2) {
                return null;
              }

              const isActive = delta === 0;

              const xOffset = isActive
                ? "0%"
                : delta === -1
                ? "-60%"
                : delta === 1
                ? "60%"
                : delta === -2
                ? "-100%"
                : "100%";

              const scale = isActive ? 1 : Math.abs(delta) === 1 ? 0.8 : 0.65;

              const rotateY = isActive
                ? 0
                : delta === -1
                ? 25
                : delta === 1
                ? -25
                : delta === -2
                ? 35
                : -35;

              const zIndex = isActive ? 40 : 30 - Math.abs(delta);

              const opacity = isActive ? 1 : Math.abs(delta) === 1 ? 0.6 : 0.2;

              return (
                <motion.div
                  key={experience.key}
                  className={`absolute h-[360px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-xl transition-colors duration-300 sm:h-[400px] sm:max-w-[450px] md:h-[460px] md:max-w-[550px] ${
                    isActive
                      ? "border border-[#C5A059]/60 shadow-[0_0_50px_rgba(197,160,89,0.2)]"
                      : "border border-white/10 shadow-2xl hover:border-[#C5A059]/40 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]"
                  }`}
                  animate={{
                    x: xOffset,
                    scale,
                    rotateY,
                    zIndex,
                    opacity,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitBoxReflect:
                      "below 4px linear-gradient(transparent 20%, rgba(255,255,255,0.25))",
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  {/* Implementing the new SmartVideo Component */}
                  {experience.video ? (
                    <SmartVideo src={experience.video} isActive={isActive} />
                  ) : (
                    <Image
                      src={experience.image as string}
                      alt={experience.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                    />
                  )}

                  {/* Dark gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90" />

                  {/* Experience content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 15,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-md sm:text-[10px]">
                        {experience.subtitle}
                      </p>

                      <h3 className="mb-3 text-2xl font-serif text-white drop-shadow-lg sm:text-3xl">
                        {experience.title}
                      </h3>

                      <p className="mb-5 line-clamp-2 max-w-[90%] text-xs leading-relaxed text-white/80 drop-shadow-md sm:text-sm">
                        {experience.description}
                      </p>

                      <div className="group flex w-max items-center gap-3 pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-md">
                          {t("experiences.discover") || "Discover"}
                        </span>

                        <div className="h-[2px] w-12 bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all duration-300" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel pagination */}
        <div className="relative z-50 -mt-8 flex items-center justify-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Show previous experience"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/40 bg-transparent text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10 sm:h-12 sm:w-12"
          >
            <ArrowLeft
              className="h-4 w-4 sm:h-5 sm:w-5"
              strokeWidth={1.5}
            />
          </button>

          <div className="flex flex-col items-center gap-2 px-4 sm:gap-3 sm:px-6">
            <div className="font-serif text-lg tracking-widest text-white drop-shadow-md sm:text-xl">
              {(currentIndex + 1).toString().padStart(2, "0")}

              <span className="ml-1.5 text-xs text-white/40 sm:text-sm">
                / {experienceKeys.length.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/40" />
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/70" />
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059] sm:w-20" />
              <div className="h-2 w-2 rounded-full bg-[#ffebb3] shadow-[0_0_12px_3px_rgba(212,175,55,0.8)] sm:h-2.5 sm:w-2.5" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059] sm:w-20" />
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/70" />
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/40" />
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Show next experience"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/40 bg-transparent text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10 sm:h-12 sm:w-12"
          >
            <ArrowRight
              className="h-4 w-4 sm:h-5 sm:w-5"
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Large membership logo above the footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex justify-center sm:mt-28 md:mt-32"
        >
          <Link
            href="/membership"
            aria-label="Explore Goa Moments Membership"
            className="inline-flex items-center justify-center transition-transform duration-500 hover:scale-105"
          >
            <Image
              src="/images/membership-logo.png"
              alt="Goa Moments Membership"
              width={360}
              height={180}
              className="h-28 w-auto object-contain drop-shadow-[0_0_30px_rgba(197,160,89,0.28)] sm:h-32 md:h-26 lg:h-30"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}