"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./providers";
import React from "react";

// --- 3D Kinematic Tilt Card Component ---
function TiltCard({ exp, index, isLastOddItem, t }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement using physics springs
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation degrees (Max tilt is 8 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate position as a percentage (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`relative h-[420px] w-full sm:h-[460px] md:h-[500px] ${
        isLastOddItem ? "md:col-span-2" : ""
      }`}
      style={{ perspective: 1200 }} // Gives the 3D depth to the parent
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d", // Allows children to pop out in Z-space
        }}
        className="group relative h-full w-full overflow-hidden bg-black rounded-xl shadow-[0_0_0_rgba(197,160,89,0)] transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),_0_0_30px_rgba(197,160,89,0.15)] cursor-pointer"
      >
        {/* Background Image (Slightly scaled so edges don't show when tilted) */}
        <motion.div 
          className="absolute inset-0 z-0 h-full w-full"
          style={{ transform: "translateZ(-20px) scale(1.05)" }} // Pushes image back for depth
        >
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        </motion.div>

        {/* Gradients */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/45 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_35%)] opacity-70" />

        {/* Text Content - Translated forward on the Z-axis to pop OUT of the screen */}
        <motion.div 
          style={{ transform: "translateZ(40px)" }} // The magic Z-index pop
          className="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
          >
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.22em] drop-shadow-md">
              {exp.subtitle}
            </p>

            <h3 className="mb-2 text-xl font-medium tracking-wide text-white sm:text-2xl md:text-[28px] drop-shadow-lg">
              {exp.title}
            </h3>

            <p className="mb-4 text-xs leading-relaxed text-white/70 sm:text-sm max-w-[90%]">
              {exp.description}
            </p>

            <div className="flex items-center gap-2 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] uppercase tracking-widest sm:text-xs font-semibold">
                {t("experiences.discover")}
              </span>
              <div className="h-px w-6 bg-primary transition-all duration-500 group-hover:w-10 sm:w-8 sm:group-hover:w-12 shadow-[0_0_10px_rgba(197,160,89,1)]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Glowing Border overlay */}
        <div className="absolute inset-0 z-30 border border-primary/0 transition-all duration-500 group-hover:border-primary/40 rounded-xl" />
      </motion.div>
    </motion.div>
  );
}

export function Experiences() {
  const { t } = useTranslation();

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

  return (
    <section id="experiences" className="relative bg-background py-14 sm:py-20 md:py-32 z-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center text-center sm:mb-20 md:mb-24"
        >
          {/* --- TOP LOGO --- */}
          <Link href="/membership" className="mb-10 inline-block transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            <Image 
              src="/images/membership-logo.png" 
              alt="Goa Moments Membership" 
              width={500} 
              height={250} 
              className="h-28 w-auto object-contain drop-shadow-2xl sm:h-40 md:h-48"
            />
          </Link>

          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
            {t("experiences.badge")}
          </p>

          <h2 className="mb-6 text-3xl font-light tracking-wide text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            {t("experiences.title").split(" ")[0]}{" "}
            <span className="font-medium text-primary drop-shadow-md">
              {t("experiences.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            {t("experiences.subtitle")}
          </p>

          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent sm:w-24" />
        </motion.div>

        {/* 3D Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {experienceKeys.map((exp, index) => {
            const isLastOddItem = index === experienceKeys.length - 1 && experienceKeys.length % 2 !== 0;
            return (
              <TiltCard 
                key={exp.key} 
                exp={exp} 
                index={index} 
                isLastOddItem={isLastOddItem} 
                t={t} 
              />
            );
          })}
        </div>

        {/* --- BOTTOM LOGO --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20 flex justify-center sm:mt-32"
        >
          <Link href="/membership" className="inline-block transition-all duration-700 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(197,160,89,0.4)]">
            <Image 
              src="/images/membership-logo.png" 
              alt="Goa Moments Membership" 
              width={500} 
              height={250} 
              className="h-32 w-auto object-contain drop-shadow-2xl sm:h-44 md:h-56"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}