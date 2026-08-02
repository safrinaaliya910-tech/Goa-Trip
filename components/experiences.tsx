"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "./providers";

export function Experiences() {
  const { t } = useTranslation();
  // Starts at 1 (second item) so the circle is instantly full on both sides
  const [currentIndex, setCurrentIndex] = useState(1);

  const experienceKeys = [
    {
      key: "beach",
      image: "/images/hero-beach.jpg",
      subtitle: t("experiences.items.beach.subtitle"),
      title: t("experiences.items.beach.title"),
      description: t("experiences.items.beach.description"),
    },
    {
      key: "nightlife",
      image: "/images/nightlife.jpg",
      subtitle: t("experiences.items.nightlife.subtitle"),
      title: t("experiences.items.nightlife.title"),
      description: t("experiences.items.nightlife.description"),
    },
    {
      key: "casino",
      image: "/images/casino.jpg",
      subtitle: t("experiences.items.casino.subtitle"),
      title: t("experiences.items.casino.title"),
      description: t("experiences.items.casino.description"),
    },
    {
      key: "yacht",
      image: "/images/yacht.jpg",
      subtitle: t("experiences.items.yacht.subtitle"),
      title: t("experiences.items.yacht.title"),
      description: t("experiences.items.yacht.description"),
    },
    {
      key: "parasailing",
      image: "/images/parasailing.png",
      subtitle: t("experiences.items.parasailing.subtitle"),
      title: t("experiences.items.parasailing.title"),
      description: t("experiences.items.parasailing.description"),
    },
    {
      key: "scuba",
      image: "/images/scuba.png",
      subtitle: t("experiences.items.scuba.subtitle"),
      title: t("experiences.items.scuba.title"),
      description: t("experiences.items.scuba.description"),
    },
    {
      key: "scooter",
      image: "/images/scooter.png",
      subtitle: t("experiences.items.scooter.subtitle"),
      title: t("experiences.items.scooter.title"),
      description: t("experiences.items.scooter.description"),
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experienceKeys.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experienceKeys.length) % experienceKeys.length);
  };

  return (
    <section id="experiences" className="relative bg-[#050505] py-20 sm:py-28 md:py-32 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[#C5A059] rounded-full blur-[180px] opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center text-center md:mb-16"
        >
          <Link href="/membership" className="mb-10 inline-block transition-transform duration-500 hover:scale-105">
            <Image 
              src="/images/membership-logo.png" 
              alt="Goa Moments Membership" 
              width={200} 
              height={100} 
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-2xl"
            />
          </Link>

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] sm:mb-4 sm:text-xs drop-shadow-md">
            {t("experiences.badge")}
          </p>

          <h2 className="text-3xl font-serif font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            {t("experiences.title").split(" ")[0]}{" "}
            <span className="font-medium text-[#C5A059]">
              {t("experiences.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </motion.div>

        {/* --- 3D Carousel Section with Glass Floor Reflection --- */}
        <div className="relative h-[550px] sm:h-[600px] md:h-[650px] w-full flex items-start justify-center perspective-[2000px]">
          <AnimatePresence initial={false}>
            {experienceKeys.map((exp, index) => {
              
              // TRUE CIRCULAR MATH: Connects the end of the array to the beginning seamlessly
              const n = experienceKeys.length;
              let delta = index - currentIndex;
              if (delta > Math.floor(n / 2)) delta -= n;
              if (delta < -Math.floor(n / 2)) delta += n;
              
              // We render 5 items (-2, -1, 0, 1, 2) to completely fill the left and right sides
              if (Math.abs(delta) > 2) return null;

              const isActive = delta === 0;
              const isLeft = delta < 0;
              
              // Cinematic 3D Depth Positioning
              const xOffset = isActive ? "0%" : delta === -1 ? "-60%" : delta === 1 ? "60%" : delta === -2 ? "-100%" : "100%";
              const scale = isActive ? 1 : Math.abs(delta) === 1 ? 0.8 : 0.65;
              const rotateY = isActive ? 0 : delta === -1 ? 25 : delta === 1 ? -25 : delta === -2 ? 35 : -35;
              const zIndex = isActive ? 40 : 30 - Math.abs(delta);
              
              // Smooth fading into the shadows
              const opacity = isActive ? 1 : Math.abs(delta) === 1 ? 0.6 : 0.2;

              return (
                <motion.div
                  key={exp.key}
                  // REMOVED pointer-events-none and ADDED hover effects so side cards glow when touched
                  className={`absolute w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] h-[360px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                    isActive 
                      ? "border border-[#C5A059]/60 shadow-[0_0_50px_rgba(197,160,89,0.2)]" 
                      : "border border-white/10 shadow-2xl hover:border-[#C5A059]/40 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]"
                  }`}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    rotateY: rotateY,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1], // Custom physics for weightless cinematic sliding
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    // THE MAGIC GLASS REFLECTION: Mirrors the card with a fading gradient
                    WebkitBoxReflect: "below 4px linear-gradient(transparent 20%, rgba(255,255,255,0.25))"
                  }}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(index);
                  }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />

                  {/* Dark Gradients for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90" />
                  
                  {/* Content Block */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#C5A059] sm:text-[10px] drop-shadow-md">
                        {exp.subtitle}
                      </p>

                      <h3 className="mb-3 text-2xl font-serif text-white sm:text-3xl drop-shadow-lg">
                        {exp.title}
                      </h3>

                      <p className="mb-5 text-xs leading-relaxed text-white/80 sm:text-sm line-clamp-2 max-w-[90%] drop-shadow-md">
                        {exp.description}
                      </p>

                      {/* --- THE DISCOVER LINE (Visible by default, expands on hover) --- */}
                      <div className="group flex w-max items-center gap-3 pt-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold drop-shadow-md">
                          {t("experiences.discover") || "Discover"}
                        </span>
                        <div className="h-[2px] w-6 bg-[#C5A059] transition-all duration-300 group-hover:w-12 shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                      </div>

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- Custom Precision Pagination (Exactly matching the reference image) --- */}
        <div className="relative z-50 -mt-8 flex items-center justify-center gap-4 sm:gap-8">
          
          {/* Thin Circular Left Arrow */}
          <button 
            onClick={handlePrev}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#C5A059]/40 bg-transparent text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          {/* Golden Timeline Center Block */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 px-4 sm:px-6">
            
            {/* Number Indicator */}
            <div className="font-serif text-lg sm:text-xl tracking-widest text-white drop-shadow-md">
              {(currentIndex + 1).toString().padStart(2, '0')} 
              <span className="text-white/40 text-xs sm:text-sm ml-1.5">/ {experienceKeys.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Glowing Custom Dots and Line */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Left Outer Dots */}
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/40" />
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/70" />
              
              {/* Left Gradient Line */}
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C5A059]" />
              
              {/* Glowing Center Sun-Dot */}
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#ffebb3] shadow-[0_0_12px_3px_rgba(212,175,55,0.8)]" />
              
              {/* Right Gradient Line */}
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C5A059]" />
              
              {/* Right Outer Dots */}
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/70" />
              <div className="h-[3px] w-[3px] rounded-full bg-[#C5A059]/40" />
            </div>
          </div>

          {/* Thin Circular Right Arrow */}
          <button 
            onClick={handleNext}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#C5A059]/40 bg-transparent text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

        </div>

      </div>
    </section>
  );
}