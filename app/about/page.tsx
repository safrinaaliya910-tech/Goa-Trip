"use client";

import type { MouseEvent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/providers";

const particles = [
  { left: "7%", top: "18%", delay: 0, duration: 5 },
  { left: "15%", top: "72%", delay: 1.2, duration: 6 },
  { left: "27%", top: "28%", delay: 0.7, duration: 7 },
  { left: "38%", top: "82%", delay: 2, duration: 6 },
  { left: "52%", top: "18%", delay: 1.5, duration: 5 },
  { left: "63%", top: "67%", delay: 0.4, duration: 7 },
  { left: "74%", top: "26%", delay: 2.2, duration: 6 },
  { left: "86%", top: "74%", delay: 1, duration: 5 },
  { left: "94%", top: "38%", delay: 1.8, duration: 7 },
] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 46 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-[#d6b45a]"
      />

      <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#d6b45a] sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function LuxuryOrb() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#d6b45a]/20 bg-black/40 shadow-[0_35px_100px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:min-h-[380px] lg:min-h-[400px]"
      style={{
        perspective: "1200px",
        background:
          "radial-gradient(circle at center, rgba(214,180,90,0.13) 0%, rgba(6,6,6,0.94) 55%, #020202 100%)",
      }}
    >
      {/* Inner frame */}
      <div className="absolute inset-5 rounded-[1.5rem] border border-white/[0.04]" />

      {/* Top information */}
      <span className="absolute right-7 top-6 text-[8px] uppercase tracking-[0.45em] text-[#d6b45a]/45 sm:right-8 sm:top-7 sm:text-[9px]">
        Est. Goa
      </span>

      <span className="absolute bottom-6 left-7 text-[8px] uppercase tracking-[0.45em] text-white/25 sm:bottom-7 sm:left-8 sm:text-[9px]">
        Luxury Living
      </span>

      {/* Large orbital ring */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotateX: [55, 62, 55],
                rotateY: [0, 360],
              }
        }
        transition={{
          rotateX: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute h-56 w-56 rounded-full border border-[#d6b45a]/35 sm:h-64 sm:w-64"
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 0 70px rgba(214,180,90,0.08), inset 0 0 50px rgba(214,180,90,0.05)",
        }}
      />

      {/* Second orbital ring */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotateX: [10, 370],
                rotateZ: [20, 380],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-44 w-44 rounded-full border border-[#f1d88b]/25 sm:h-52 sm:w-52"
      />

      {/* Third orbital ring */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotateY: [0, -360],
                rotateZ: [70, 430],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-32 w-32 rounded-full border border-white/15 sm:h-40 sm:w-40"
      />

      {/* Rotating dotted orbit */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-64 w-64 rounded-full border border-dashed border-[#d6b45a]/15 sm:h-72 sm:w-72"
      />

      {/* Logo glow */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.2, 0.65, 0.2],
                scale: [0.85, 1.15, 0.85],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-48 w-48 rounded-full bg-[#d6b45a]/10 blur-3xl"
      />

      {/* Central logo container */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [0.96, 1.04, 0.96],
                boxShadow: [
                  "0 0 35px rgba(214,180,90,0.18)",
                  "0 0 75px rgba(214,180,90,0.38)",
                  "0 0 35px rgba(214,180,90,0.18)",
                ],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#f0d683]/40 bg-black/75 p-4 backdrop-blur-xl sm:h-40 sm:w-40"
      >
        <div className="absolute inset-2 rounded-full border border-[#d6b45a]/15" />

        <div className="absolute inset-5 rounded-full bg-[#d6b45a]/5 blur-lg" />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -3, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="Goa Moments logo"
            width={220}
            height={150}
            className="h-auto w-[115px] object-contain mix-blend-screen brightness-110 contrast-125 sm:w-[132px]"
          />
        </motion.div>
      </motion.div>

      {/* Small orbit points */}
      <motion.span
        animate={
          reduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-56 w-56 rounded-full sm:h-64 sm:w-64"
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#efd67f] shadow-[0_0_12px_rgba(239,214,127,0.9)]" />
      </motion.span>

      <motion.span
        animate={
          reduceMotion
            ? {}
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-44 w-44 rounded-full sm:h-52 sm:w-52"
      >
        <span className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </motion.span>
    </div>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

function ValueCard({ title, description, index }: ValueCardProps) {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  const rotateX = useSpring(rotateXValue, {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 180,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const percentageX = mouseX / rect.width - 0.5;
    const percentageY = mouseY / rect.height - 0.5;

    rotateYValue.set(percentageX * 13);
    rotateXValue.set(percentageY * -13);
  }

  function resetCard() {
    rotateXValue.set(0);
    rotateYValue.set(0);
  }

  return (
    <div className="group" style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -12 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetCard}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative min-h-[390px] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#070707] p-8 shadow-[0_35px_80px_rgba(0,0,0,0.55)] transition-colors duration-500 hover:border-[#d6b45a]/45 sm:p-10"
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(214,180,90,0.19), transparent 58%)",
          }}
        />

        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#d6b45a]/10 transition-transform duration-700 group-hover:scale-125" />

        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/[0.04]" />

        <div
          className="relative z-10 flex h-full flex-col"
          style={{ transform: "translateZ(45px)" }}
        >
          <div className="flex items-start justify-between">
            <span className="font-serif text-7xl font-light text-[#d6b45a]/20">
              0{index + 1}
            </span>

            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.7 }}
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b45a]/25"
            >
              <span className="h-px w-4 bg-[#d6b45a]" />
              <span className="absolute h-4 w-px bg-[#d6b45a]" />
            </motion.div>
          </div>

          <div className="mt-auto pt-20">
            <div className="mb-6 h-px w-full overflow-hidden bg-white/[0.07]">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.25 + index * 0.15,
                }}
                className="h-full w-1/3 bg-gradient-to-r from-[#8d6b20] to-[#efd67f]"
              />
            </div>

            <h3 className="font-serif text-2xl uppercase tracking-[0.12em] text-white">
              {title}
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-all duration-1000 group-hover:left-[120%]" />
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const values = [
    {
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      title: t("about.values.exclusivity.title"),
      description: t("about.values.exclusivity.description"),
    },
    {
      title: t("about.values.authenticity.title"),
      description: t("about.values.authenticity.description"),
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020202] text-white">
      <Navigation />

      {/* Reduced-height cinematic hero */}
      <section className="relative isolate flex h-[78svh] min-h-[560px] max-h-[760px] items-center justify-center overflow-hidden border-b border-[#d6b45a]/10">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1.02, 1.08, 1.02],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about-hero.jpg"
            alt="Aerial view of a luxury Goa resort"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#020202]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-[#efd67f]"
              style={{
                left: particle.left,
                top: particle.top,
                boxShadow: "0 0 14px rgba(239,214,127,0.9)",
              }}
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -35, 0],
                      opacity: [0.15, 0.9, 0.15],
                      scale: [0.7, 1.4, 0.7],
                    }
              }
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Luxury frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-5 border border-white/[0.08] sm:inset-8 lg:inset-12"
        />

        <div className="absolute left-5 top-5 h-14 w-14 border-l border-t border-[#d6b45a]/45 sm:left-8 sm:top-8 lg:left-12 lg:top-12" />

        <div className="absolute right-5 top-5 h-14 w-14 border-r border-t border-[#d6b45a]/45 sm:right-8 sm:top-8 lg:right-12 lg:top-12" />

        <div className="absolute bottom-5 left-5 h-14 w-14 border-b border-l border-[#d6b45a]/45 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12" />

        <div className="absolute bottom-5 right-5 h-14 w-14 border-b border-r border-[#d6b45a]/45 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{
              opacity: 0,
              letterSpacing: "0.1em",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "0.5em",
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
            }}
            className="mb-6 text-[10px] uppercase text-[#e2c36a] sm:text-xs"
          >
            {t("about.whoWeAre")}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-7 h-px w-24 bg-gradient-to-r from-transparent via-[#e3c56d] to-transparent"
          />

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.3,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-5xl font-light uppercase leading-none tracking-[0.14em] text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[7rem]"
          >
            {t("about.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="mx-auto mt-7 max-w-xl text-[10px] uppercase leading-7 tracking-[0.3em] text-white/55 sm:text-xs"
          >
            Goa Moments · Luxury Living
          </motion.p>
        </div>

        {/* Discover scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/40">
            Discover
          </span>

          <div className="relative h-10 w-px overflow-hidden bg-white/15">
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: ["-100%", "180%"],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-1/2 w-full bg-gradient-to-b from-transparent via-[#efd67f] to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Story and mission section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:px-10 lg:py-32">
        <div
          className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "rgba(214,180,90,0.07)",
          }}
        />

        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d6b45a]/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto w-full max-w-[520px] lg:col-span-5"
          >
            <LuxuryOrb />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-7"
          >
            <span className="pointer-events-none absolute -right-4 -top-24 font-serif text-[10rem] leading-none text-white/[0.025] sm:text-[14rem]">
              01
            </span>

            <SectionLabel>{t("about.whoWeAre")}</SectionLabel>

            <h2 className="mt-8 max-w-4xl font-serif text-4xl font-light leading-[1.18] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("about.missionTitle1")}

              <span className="mt-3 block bg-gradient-to-r from-[#9a7628] via-[#f3dc8b] to-[#b68e35] bg-clip-text text-transparent">
                {t("about.missionTitle2")}
              </span>
            </h2>

            <div className="mt-9 flex gap-5">
              <div className="mt-2 h-24 w-px flex-none bg-gradient-to-b from-[#d6b45a] to-transparent" />

              <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
                {t("about.missionDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#040404] px-6 py-24 sm:py-32 lg:px-10 lg:py-36">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(214,180,90,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(214,180,90,0.025) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
          >
            <div>
              <SectionLabel>{t("about.ourValues")}</SectionLabel>

              <h2 className="mt-7 max-w-3xl font-serif text-4xl font-light text-white sm:text-5xl lg:text-6xl">
                {t("about.pillarsTitle")}
              </h2>
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <span className="h-px w-20 bg-white/10" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                Goa Moments
              </span>
            </div>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value, index) => (
              <ValueCard
                key={`${value.title}-${index}`}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="relative isolate min-h-[760px] overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1.05, 1.13, 1.05],
                  x: [0, -15, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-black/75" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at center, rgba(214,180,90,0.12), transparent 55%)",
          }}
        />

        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#d6b45a]/20 bg-black/55 px-7 py-16 text-center shadow-[0_40px_140px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:px-12 sm:py-20 lg:px-20 lg:py-24"
          >
            <div className="absolute inset-4 rounded-[1.5rem] border border-white/[0.04]" />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      x: ["-120%", "220%"],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#efd67f] to-transparent"
            />

            <div className="relative">
              <div className="flex justify-center">
                <SectionLabel>{t("about.ourVision")}</SectionLabel>
              </div>

              <h2 className="mx-auto mt-9 max-w-4xl font-serif text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">
                {t("about.visionTitle1")}{" "}
                <span className="bg-gradient-to-r from-[#a37c2c] via-[#f2d984] to-[#b89039] bg-clip-text text-transparent">
                  {t("about.visionTitle2")}
                </span>
              </h2>

              <div className="mx-auto my-10 flex max-w-xs items-center gap-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d6b45a]/60" />

                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          rotate: 360,
                        }
                  }
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-3 w-3 rotate-45 border border-[#e4c66d]"
                />

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d6b45a]/60" />
              </div>

              <p className="mx-auto max-w-3xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
                {t("about.visionDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA section */}
      <section className="relative overflow-hidden px-6 pb-28 pt-10 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#d6b45a]/20 bg-[#070707] px-6 py-20 text-center shadow-[0_35px_120px_rgba(0,0,0,0.65)] sm:px-12 lg:py-28"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 120%, rgba(214,180,90,0.18), transparent 55%)",
              }}
            />

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d6b45a]/70 to-transparent" />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-44 -top-44 h-96 w-96 rounded-full border border-[#d6b45a]/10"
            />

            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#d6b45a] sm:text-xs">
                Goa Moments
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("about.ctaTitle")}
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/45">
                {t("about.ctaDesc")}
              </p>

              <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/membership"
                  className="group/button relative min-w-[220px] overflow-hidden border border-[#d6b45a] bg-[#d6b45a] px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(214,180,90,0.35)]"
                >
                  <span className="relative z-10">
                    {t("about.ctaBtn1")}
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-[#f0d77e] transition-transform duration-500 group-hover/button:translate-x-0" />
                </Link>

                <Link
                  href="/contact"
                  className="relative min-w-[220px] border border-white/15 bg-white/[0.02] px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-[#d6b45a]/70 hover:bg-[#d6b45a]/5 hover:text-[#e6ca74]"
                >
                  {t("about.ctaBtn2")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}