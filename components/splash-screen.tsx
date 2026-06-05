"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // If they have, immediately hide it
      setIsVisible(false);
    } else {
      // Prevent scrolling while splash screen is active
      document.body.style.overflow = "hidden";

      // Increased duration to 4.5 seconds for professional, cinematic pacing
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Save to session storage so it doesn't run again on navigation
        sessionStorage.setItem("hasSeenSplash", "true");
        document.body.style.overflow = "unset";
      }, 4500);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  // Prevent hydration flash by waiting until the component is mounted
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#000000]"
        >
         {/* Subtle Dark Gold Radial Glow - Matched perfectly to theme #C5A059 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-[40vh] w-[40vh] rounded-full bg-[#b68f24] opacity-[0.08] blur-[100px] sm:h-[60vh] sm:w-[60vh] sm:opacity-[0.07] sm:blur-[120px]" 
            />
          </div>

          {/* Top spacer to push content to middle & bottom */}
          <div className="flex-1" />

          {/* Center: Main Logo & Booming Effect */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/logo.png"
                alt="GOA MOMENTS Logo"
                width={350}
                height={350}
                className="h-auto w-64 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] sm:w-80 md:w-96"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Bolder text with drop shadows for maximum visibility */}
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#d4af37] drop-shadow-md sm:text-xs sm:tracking-[0.5em]">
                Exclusive Membership
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80 sm:w-24" />
              <span className="font-serif text-[12px] font-medium tracking-[0.25em] text-white/95 drop-shadow-md sm:text-sm">
                LUXURY LIVING REIMAGINED
              </span>
            </motion.div>
          </div>

          {/* Bottom: Official Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            className="relative z-10 flex flex-1 flex-col justify-end pb-12 sm:pb-16"
          >
            <div className="flex items-center justify-center gap-6 sm:gap-10">
              
              {/* Shield Badge + Official Tourism Partner Text */}
              <div className="flex items-center gap-3">
                <svg width="24" height="30" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                  <defs>
                    <linearGradient id="shieldGradSplash" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8a6125" />
                      <stop offset="50%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#5c3f13" />
                    </linearGradient>
                    <linearGradient id="shieldInnerGradSplash" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f6d365" />
                      <stop offset="100%" stopColor="#b38222" />
                    </linearGradient>
                  </defs>
                  <path d="M18 0L36 8V21C36 31.5 28.5 41 18 44C7.5 41 0 31.5 0 21V8L18 0Z" fill="url(#shieldGradSplash)" />
                  <path d="M18 2.5L33.5 9.5V21C33.5 29.5 27 38 18 40.5C9 38 2.5 29.5 2.5 21V9.5L18 2.5Z" fill="url(#shieldInnerGradSplash)" />
                  <path d="M11 21L15.5 26L25 15" stroke="#231709" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex flex-col justify-center text-left font-serif">
                  <span className="mb-[2px] text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] drop-shadow-md sm:text-[11px]">
                    Official
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#d4af37] drop-shadow-md sm:text-[13px]">
                    Tourism Partner
                  </span>
                </div>
              </div>

              {/* Goa Tourism Logo */}
              <div className="flex flex-col items-center gap-1.5">
                <Image
                  src="/images/goa_tourism.png"
                  alt="Goa Tourism"
                  width={90}
                  height={50}
                  className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] sm:h-12"
                />
                <span className="text-center text-[9px] font-medium leading-tight tracking-wide text-white/90 drop-shadow-md sm:text-[10px]">
                  Goa<br/>Tourism
                </span>
              </div>

            </div>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}