"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "./providers";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const pathname = usePathname();
  const isPaymentPage = pathname === "/payment";

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.membership"), href: "/membership" },
    { label: t("nav.membershipActivities"), href: "/membership-activities" },
    { label: t("nav.contact"), href: "/contact" },
  ];
  
  const { resolvedTheme } = useTheme();

  const partnerTextColor = isPaymentPage ? "text-black/80 font-semibold" : (resolvedTheme === "dark" ? "text-white/80" : "text-black/70");
  
  const startupLogo = isPaymentPage 
    ? "/images/startup_logo_white.png" 
    : (resolvedTheme === "dark" ? "/images/startup_logo_black.png" : "/images/startup_logo_white.png");
    
  // NIDHI Logo logic
  const nidhiLogo = isPaymentPage
    ? "/images/nidhi_white_theme.png"
    : (resolvedTheme === "dark" ? "/images/nidhi_black_theme.png" : "/images/nidhi_white_theme.png");
  
  const textColor = isPaymentPage ? "text-black" : "text-foreground";
  const mutedTextColor = isPaymentPage ? "text-gray-600 hover:text-black" : "text-muted-foreground hover:text-foreground";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isPaymentPage 
    ? "bg-[#FDFBF7] border-b border-[#D4AF37]/30 shadow-sm" 
    : (isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-white/5" : "bg-gradient-to-b from-background/80 to-transparent");

  return (
    <>
     <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 flex flex-col transition-colors duration-500 ${headerBg}`}
      >
        {/* Secondary Navigation / Transparent Trust Ribbon (Left & Right Split) */}
        <motion.div 
          initial={false}
          animate={{ 
            height: isScrolled ? 0 : "auto", 
            opacity: isScrolled ? 0 : 1,
          }}
          className={`hidden w-full overflow-hidden lg:block border-b relative z-50 transition-colors duration-500 ${
            isPaymentPage ? 'bg-[#FDFBF7] border-[#d4af37]/30' : 'bg-transparent border-white/15'
          }`}
        >
          {/* Very Subtle, Slow Golden Light Sweep */}
          <motion.div 
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
            
            {/* LEFT SIDE: Official Tourism Partner */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2.5"
            >
              <svg width="18" height="22" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8a6125" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#5c3f13" />
                  </linearGradient>
                  <linearGradient id="shieldInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f6d365" />
                    <stop offset="100%" stopColor="#b38222" />
                  </linearGradient>
                </defs>
                <path d="M18 0L36 8V21C36 31.5 28.5 41 18 44C7.5 41 0 31.5 0 21V8L18 0Z" fill="url(#shieldGrad)" />
                <path d="M18 2.5L33.5 9.5V21C33.5 29.5 27 38 18 40.5C9 38 2.5 29.5 2.5 21V9.5L18 2.5Z" fill="url(#shieldInnerGrad)" />
                <path d="M11 21L15.5 26L25 15" stroke="#231709" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] drop-shadow-md whitespace-nowrap pt-0.5">
                Official Tourism Partner
              </span>
            </motion.div>

            {/* RIGHT SIDE: The Proof Badges */}
            <div className="flex items-center space-x-7">
              
              {/* Goa Tourism */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2.5"
              >
                <Image src="/images/goa_tourism.png" alt="Goa Tourism" width={55} height={28} className="h-7 w-auto object-contain opacity-100 drop-shadow-md" />
                <span className={`text-[10px] font-medium leading-tight tracking-widest whitespace-nowrap ${isPaymentPage ? 'text-black/80' : 'text-white/90 drop-shadow-md'}`}>
                  Goa Tourism<br />Dev. Corp.
                </span>
              </motion.div>

              <div className={`h-5 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* Startup India */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-2.5"
              >
                <Image src={startupLogo} alt="Startup India" width={55} height={28} className="h-7 w-auto object-contain opacity-100 drop-shadow-md" />
                <span className={`text-[10px] font-medium tracking-widest whitespace-nowrap pt-0.5 ${isPaymentPage ? 'text-black/80' : 'text-white/90 drop-shadow-md'}`}>
                  Startup India
                </span>
              </motion.div>

              <div className={`h-5 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* NIDHI */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2.5"
              >
                <Image src={nidhiLogo} alt="NIDHI" width={45} height={22} className="h-6 w-auto object-contain opacity-100 drop-shadow-md" />
                <span className={`text-[10px] font-medium tracking-widest whitespace-nowrap pt-0.5 ${isPaymentPage ? 'text-black/80' : 'text-white/90 drop-shadow-md'}`}>
                  NIDHI
                </span>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Main Navigation */}

        {/* Main Navigation */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 transition-transform hover:opacity-90">
            <Image
              src="/images/logo.png"
              alt="GOA MOMENTS Logo"
              width={140}
              height={140}
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className={`block whitespace-nowrap text-[13px] sm:text-[15px] font-medium tracking-wider ${textColor}`}>
                GOA MOMENTS
              </span>
              <span className="block whitespace-nowrap text-[7px] sm:text-[8px] uppercase tracking-[0.25em] text-[#C5A059]">
                LUXURY LIVING
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8 mt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[11px] font-medium uppercase tracking-widest transition-colors xl:text-xs ${mutedTextColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {!isPaymentPage && <LanguageSwitcher />}
            {!isPaymentPage && <ThemeToggle />}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {!isPaymentPage && <LanguageSwitcher />}
            {!isPaymentPage && <ThemeToggle />}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 ml-2 p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${textColor}`} />
              ) : (
                <Menu className={`h-6 w-6 ${textColor}`} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 backdrop-blur-xl lg:hidden ${isPaymentPage ? 'bg-[#FDFBF7]/98' : 'bg-background/95'}`}
          >
            <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-10 pb-8">
              
              {/* Mobile Navigation Links */}
              <div className="flex flex-col items-center gap-8 mb-12 w-full">
                {navLinks.map((link, index) => (
                  <Link key={link.href} href={link.href} passHref legacyBehavior>
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-center text-lg uppercase tracking-[0.2em] transition-colors hover:text-[#C5A059] sm:text-xl ${textColor}`}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                ))}
              </div>

              {/* Mobile Partner Grid (Clean & Neat) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className={`mt-auto flex w-full max-w-[320px] flex-col items-center gap-6 border-t pt-8 ${isPaymentPage ? 'border-gray-300' : 'border-white/10'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="22" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="shieldGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8a6125" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#5c3f13" />
                      </linearGradient>
                      <linearGradient id="shieldInnerGradMob" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f6d365" />
                        <stop offset="100%" stopColor="#b38222" />
                      </linearGradient>
                    </defs>
                    <path d="M18 0L36 8V21C36 31.5 28.5 41 18 44C7.5 41 0 31.5 0 21V8L18 0Z" fill="url(#shieldGradMob)" />
                    <path d="M18 2.5L33.5 9.5V21C33.5 29.5 27 38 18 40.5C9 38 2.5 29.5 2.5 21V9.5L18 2.5Z" fill="url(#shieldInnerGradMob)" />
                    <path d="M11 21L15.5 26L25 15" stroke="#231709" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex flex-col text-left font-serif leading-none">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-[2px]">Official</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">Tourism Partner</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full place-items-center">
                  <div className="flex flex-col items-center gap-2">
                    <Image src="/images/goa_tourism.png" alt="Goa Tourism" width={80} height={40} className="h-8 w-auto object-contain opacity-80" />
                    <span className={`text-center text-[7px] leading-tight tracking-wider ${partnerTextColor}`}>Goa Tourism</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-l border-r border-white/10 px-4 w-full">
                    <Image src={startupLogo} alt="Startup India" width={80} height={40} className="h-8 w-auto object-contain opacity-80" />
                    <span className={`text-center text-[7px] tracking-wider ${partnerTextColor}`}>Startup India</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image src={nidhiLogo} alt="NIDHI" width={80} height={40} className="h-6 w-auto object-contain opacity-80 mt-1" />
                    <span className={`text-center text-[7px] tracking-wider ${partnerTextColor}`}>NIDHI</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}