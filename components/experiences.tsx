"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "./providers";

type ExperienceItem = {
  key: string;
  video: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
};

type LoopingVideoProps = {
  src: string;
  poster: string;
  alt: string;
  shouldLoad: boolean;
  shouldPlay: boolean;
  delayMs?: number;
};

/**
 * Loads the video only when the Experience section is near the viewport.
 * The poster image remains visible until the video is ready.
 */
function LoopingVideo({
  src,
  poster,
  alt,
  shouldLoad,
  shouldPlay,
  delayMs = 0,
}: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [sourceAttached, setSourceAttached] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  /**
   * Attach each video source gradually.
   * This prevents all five videos from downloading at exactly the same time.
   */
  useEffect(() => {
    if (!shouldLoad || sourceAttached) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSourceAttached(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [shouldLoad, sourceAttached, delayMs]);

  /**
   * IMPORTANT FIX:
   * After attaching the src dynamically, force the browser to load it.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !sourceAttached) {
      return;
    }

    setVideoFailed(false);
    setVideoReady(false);

    // Make autoplay work reliably.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleLoadedData = () => {
      setVideoReady(true);
    };

    const handleCanPlay = () => {
      setVideoReady(true);
    };

    const handlePlaying = () => {
      setVideoReady(true);
    };

    const handleError = () => {
      const mediaError = video.error;

      console.error("Video loading failed:", {
        src,
        currentSrc: video.currentSrc,
        errorCode: mediaError?.code,
        errorMessage: mediaError?.message,
        networkState: video.networkState,
        readyState: video.readyState,
      });

      setVideoFailed(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);

    /**
     * Critical line:
     * The src was added dynamically, so tell the browser to reload it.
     */
    video.load();

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
    };
  }, [sourceAttached, src]);

  /**
   * Play while the Experience section is visible.
   * Pause when the user leaves the section or changes browser tabs.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !sourceAttached || videoFailed) {
      return;
    }

    let cancelled = false;

    const attemptPlayback = async () => {
      if (cancelled || !shouldPlay) {
        return;
      }

      try {
        video.muted = true;
        video.defaultMuted = true;

        await video.play();
      } catch (error) {
        if (cancelled) {
          return;
        }

        if (error instanceof DOMException) {
          if (error.name === "AbortError") {
            return;
          }

          console.warn("Browser blocked video autoplay:", {
            src,
            errorName: error.name,
            errorMessage: error.message,
          });

          return;
        }

        console.error("Video playback failed:", src, error);
      }
    };

    if (!shouldPlay) {
      video.pause();
      return;
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void attemptPlayback();
    } else {
      const handleCanPlay = () => {
        void attemptPlayback();
      };

      video.addEventListener("canplay", handleCanPlay, {
        once: true,
      });

      return () => {
        cancelled = true;
        video.removeEventListener("canplay", handleCanPlay);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [shouldPlay, sourceAttached, src, videoFailed]);

  /**
   * Pause when this carousel card is removed.
   */
  useEffect(() => {
    return () => {
      videoRef.current?.pause();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070707]">
      {/* Poster appears immediately */}
      <Image
        src={poster}
        alt={alt}
        fill
        quality={68}
        priority={false}
        className={`object-cover transition-opacity duration-500 ${
          videoReady && !videoFailed
            ? "opacity-0"
            : "opacity-100"
        }`}
        sizes="(max-width: 640px) 320px, (max-width: 768px) 450px, 550px"
      />

      {sourceAttached && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={shouldPlay}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoReady && !videoFailed
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      )}

      {/* Development error message */}
      {videoFailed && process.env.NODE_ENV === "development" && (
        <div className="absolute inset-x-3 top-3 z-20 rounded bg-black/80 p-2 text-xs text-red-400">
          Video failed: {src}
        </div>
      )}
    </div>
  );
}

export function Experiences() {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  /**
   * Becomes true once the Experience section approaches the viewport.
   * It remains true afterward so already-downloaded videos stay cached.
   */
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);

  /**
   * Controls whether videos should currently play.
   */
  const [sectionVisible, setSectionVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  /**
   * Mobile: centre plus two side cards = three looping videos.
   * Desktop: centre plus four side cards = five looping videos.
   */
  const [renderRadius, setRenderRadius] = useState(1);

  const experienceKeys: ExperienceItem[] = [
    {
      key: "beach",
      video: "/images/couple.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/hero-beach.jpg",

      subtitle: t("experiences.items.beach.subtitle"),
      title: t("experiences.items.beach.title"),
      description: t("experiences.items.beach.description"),
    },
    {
      key: "nightlife",
      video: "/images/dining.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/nightlife.jpg",

      subtitle: t("experiences.items.nightlife.subtitle"),
      title: t("experiences.items.nightlife.title"),
      description: t("experiences.items.nightlife.description"),
    },
    {
      key: "casino",
      video: "/images/game.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/casino.jpg",

      subtitle: t("experiences.items.casino.subtitle"),
      title: t("experiences.items.casino.title"),
      description: t("experiences.items.casino.description"),
    },
    {
      key: "yacht",
      video: "/images/ship.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/yacht.jpg",

      subtitle: t("experiences.items.yacht.subtitle"),
      title: t("experiences.items.yacht.title"),
      description: t("experiences.items.yacht.description"),
    },
    {
      key: "parasailing",
      video: "/images/parasute_ship.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/parasailing.png",

      subtitle: t("experiences.items.parasailing.subtitle"),
      title: t("experiences.items.parasailing.title"),
      description: t("experiences.items.parasailing.description"),
    },
    {
      key: "scuba",
      video: "/images/under_sea.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/scuba.png",

      subtitle: t("experiences.items.scuba.subtitle"),
      title: t("experiences.items.scuba.title"),
      description: t("experiences.items.scuba.description"),
    },
    {
      key: "scooter",
      video: "/images/scuba_diving.mp4",

      // Change this image filename to your actual image filename.
      image: "/images/scooter.png",

      subtitle: t("experiences.items.scooter.subtitle"),
      title: t("experiences.items.scooter.title"),
      description: t("experiences.items.scooter.description"),
    },
  ];

  /**
   * Detect mobile or desktop.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateRenderRadius = () => {
      setRenderRadius(mediaQuery.matches ? 2 : 1);
    };

    updateRenderRadius();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateRenderRadius);

      return () => {
        mediaQuery.removeEventListener("change", updateRenderRadius);
      };
    }

    mediaQuery.addListener(updateRenderRadius);

    return () => {
      mediaQuery.removeListener(updateRenderRadius);
    };
  }, []);

  /**
   * Start loading videos when the Experience section is about
   * 350px away from the viewport.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideos(true);
      setSectionVisible(true);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideos(true);

          // Loading only needs to be triggered once.
          preloadObserver.disconnect();
        }
      },
      {
        rootMargin: "350px 0px",
        threshold: 0,
      }
    );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      {
        rootMargin: "80px 0px",
        threshold: 0.01,
      }
    );

    preloadObserver.observe(section);
    playbackObserver.observe(section);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, []);

  /**
   * Pause videos when the user changes tabs or minimizes the browser.
   */
  useEffect(() => {
    const updatePageVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };

    updatePageVisibility();

    document.addEventListener(
      "visibilitychange",
      updatePageVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        updatePageVisibility
      );
    };
  }, []);

  const shouldPlayVideos = sectionVisible && pageVisible;

  const handleNext = () => {
    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % experienceKeys.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((previousIndex) => {
      return (
        (previousIndex - 1 + experienceKeys.length) %
        experienceKeys.length
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A059] opacity-[0.06] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
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
              quality={80}
              className="h-20 w-auto object-contain drop-shadow-2xl sm:h-24"
            />
          </Link>

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] drop-shadow-md sm:mb-4 sm:text-xs">
            {t("experiences.badge")}
          </p>

          <h2 className="font-serif text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl">
            {t("experiences.title").split(" ")[0]}{" "}

            <span className="font-medium text-[#C5A059]">
              {t("experiences.title")
                .split(" ")
                .slice(1)
                .join(" ")}
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
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

              /**
               * Mobile renders three cards.
               * Desktop renders five cards.
               */
              if (Math.abs(delta) > renderRadius) {
                return null;
              }

              const isActive = delta === 0;
              const distanceFromCentre = Math.abs(delta);

              const xOffset = isActive
                ? "0%"
                : delta === -1
                  ? "-60%"
                  : delta === 1
                    ? "60%"
                    : delta === -2
                      ? "-100%"
                      : "100%";

              const scale = isActive
                ? 1
                : distanceFromCentre === 1
                  ? 0.8
                  : 0.65;

              const rotateY = isActive
                ? 0
                : delta === -1
                  ? 25
                  : delta === 1
                    ? -25
                    : delta === -2
                      ? 35
                      : -35;

              const zIndex = isActive
                ? 40
                : 30 - distanceFromCentre;

              const opacity = isActive
                ? 1
                : distanceFromCentre === 1
                  ? 0.6
                  : 0.2;

              /**
               * Load the centre video first.
               * Then the nearest side videos.
               * Then the furthest side videos.
               */
              const videoLoadDelay = isActive
                ? 0
                : distanceFromCentre === 1
                  ? 250 + (delta > 0 ? 100 : 0)
                  : 600 + (delta > 0 ? 150 : 0);

              return (
                <motion.div
                  key={experience.key}
                  className={`absolute h-[360px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-xl transition-colors duration-300 sm:h-[400px] sm:max-w-[450px] md:h-[460px] md:max-w-[550px] ${
                    isActive
                      ? "border border-[#C5A059]/60 shadow-[0_0_50px_rgba(197,160,89,0.2)]"
                      : "border border-white/10 shadow-2xl hover:border-[#C5A059]/40 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]"
                  }`}
                  initial={false}
                  animate={{
                    x: xOffset,
                    scale,
                    rotateY,
                    zIndex,
                    opacity,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.55,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  <LoopingVideo
                    src={experience.video}
                    poster={experience.image}
                    alt={`${experience.title} experience`}
                    shouldLoad={shouldLoadVideos}
                    shouldPlay={shouldPlayVideos}
                    delayMs={videoLoadDelay}
                  />

                  {/* Text-readability gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90" />

                  {/* Experience information */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 15,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-md sm:text-[10px]">
                        {experience.subtitle}
                      </p>

                      <h3 className="mb-3 font-serif text-2xl text-white drop-shadow-lg sm:text-3xl">
                        {experience.title}
                      </h3>

                      <p className="mb-5 line-clamp-2 max-w-[90%] text-xs leading-relaxed text-white/80 drop-shadow-md sm:text-sm">
                        {experience.description}
                      </p>

                      <div className="group flex w-max items-center gap-3 pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-md">
                          {t("experiences.discover") ||
                            "Discover"}
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

        {/* Pagination */}
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
              {(currentIndex + 1)
                .toString()
                .padStart(2, "0")}

              <span className="ml-1.5 text-xs text-white/40 sm:text-sm">
                {" "}
                /{" "}
                {experienceKeys.length
                  .toString()
                  .padStart(2, "0")}
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

        {/* Membership logo */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
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
              quality={80}
              className="h-28 w-auto object-contain drop-shadow-[0_0_30px_rgba(197,160,89,0.28)] sm:h-32 md:h-[144px] lg:h-[160px]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}