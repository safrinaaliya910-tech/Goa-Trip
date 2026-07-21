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

  const partnerTextColor = isPaymentPage ? "text-black/90 font-bold" : (resolvedTheme === "dark" ? "text-white/90" : "text-black/80");
  
  const startupLogo = isPaymentPage 
    ? "/images/startup_logo_white.png" 
    : (resolvedTheme === "dark" ? "/images/startup_logo_black.png" : "/images/startup_logo_white.png");

  const ministryLogo = isPaymentPage
    ? "/images/ministry_logo_black.png"
    : (resolvedTheme === "dark" ? "/images/ministry_logo_white.png" : "/images/ministry_logo_black.png");
    
  // NIDHI Logo logic
  const nidhiLogo = isPaymentPage
    ? "/images/nidhi_white_theme.png"
    : (resolvedTheme === "dark" ? "/images/nidhi_black_theme.png" : "/images/nidhi_white_theme.png");
  
  const textColor = isPaymentPage ? "text-black" : "text-foreground";
  const mutedTextColor = isPaymentPage ? "text-gray-600 hover:text-black" : "text-muted-foreground hover:text-foreground";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isPaymentPage 
    ? "bg-[#FDFBF7] border-b border-[#D4AF37]/30 shadow-sm pb-2" 
    : (isScrolled ? "bg-background/95 backdrop-blur-md pb-2" : "bg-transparent pb-2");

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 flex flex-col transition-all duration-500 ${headerBg}`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="GOA MOMENTS Logo"
              width={140}
              height={140}
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />

            <div className="flex flex-col leading-tight">
              <div className="sm:hidden">
                <span className={`block whitespace-nowrap text-xs font-medium tracking-wider ${textColor}`}>
                  GOA MOMENTS
                </span>
                <span className="block whitespace-nowrap text-[7px] uppercase tracking-[0.2em] text-[#C5A059]">
                  LUXURY LIVING
                </span>
              </div>

              <div className="hidden flex-col sm:flex">
                <span className={`text-base font-medium tracking-wider sm:text-lg ${textColor}`}>
                  GOA MOMENTS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
                  LUXURY LIVING
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-xs uppercase tracking-widest transition-colors xl:text-sm ${mutedTextColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {!isPaymentPage && <LanguageSwitcher />}
            {!isPaymentPage && <ThemeToggle />}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {!isPaymentPage && <LanguageSwitcher />}
            {!isPaymentPage && <ThemeToggle />}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 ml-2"
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

        {/* Secondary Navigation / Partner Bar */}
        <div className="hidden w-full lg:block">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-4 sm:px-6">
            <div className="flex items-center">
              
              <div className="flex items-center gap-3 pr-2">
                <svg width="28" height="34" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
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

                <div className="flex flex-col justify-center font-serif">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-[2px]">
                    Official
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#d4af37]">
                    Tourism Partner
                  </span>
                </div>
              </div>

              <div className={`mx-3 h-14 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* Goa Tourism */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-20 flex items-center justify-center">
                    <Image src="/images/goa_tourism.png" alt="Goa Tourism" width={160} height={90} className="h-20 w-auto object-contain drop-shadow-md" />
                  </div>
                  <span className={`mt-1.5 text-[10px] tracking-wide ${partnerTextColor}`}>
                    Goa Tourism
                  </span>
                </div>
              </div>

              <div className={`mx-3 h-14 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* Startup India */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-20 flex items-center justify-center">
                    <Image src={startupLogo} alt="Startup India" width={160} height={90} className="h-20 w-auto object-contain drop-shadow-md" />
                  </div>
                  <span className={`mt-1.5 text-[10px] tracking-wide ${partnerTextColor}`}>
                    Startup India
                  </span>
                </div>
              </div>

              <div className={`mx-3 h-14 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* NIDHI - Perfect Alignment */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center justify-center">
                  {/* Fixed h-20 wrapper guarantees text alignment, while image stays h-13 */}
                  <div className="h-20 flex items-center justify-center">
                    <Image src={nidhiLogo} alt="NIDHI" width={160} height={90} className="h-13 w-auto object-contain drop-shadow-md" />
                  </div>
                  <span className={`mt-1.5 text-[10px] tracking-wide ${partnerTextColor}`}>
                    Nidhi
                  </span>
                </div>
              </div>

              <div className={`mx-3 h-14 w-px ${isPaymentPage ? 'bg-gray-300' : 'bg-white/20'}`} />

              {/* Ministry of Tourism */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-center justify-center px-2 relative">
                  <span className="absolute -top-3.5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37] whitespace-nowrap z-10 drop-shadow-md">
                    Powered By
                  </span>
                  <div className="h-20 flex items-center justify-center">
                    <Image src={ministryLogo} alt="Ministry of Tourism" width={160} height={90} className="h-20 w-auto object-contain drop-shadow-md scale-[1.5]" />
                  </div>
                  <span className={`mt-1.5 text-[10px] tracking-wide ${partnerTextColor}`}>
                    Ministry of Tourism
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 backdrop-blur-lg lg:hidden ${isPaymentPage ? 'bg-[#FDFBF7]/98' : 'bg-background/98'}`}
          >
            <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 sm:gap-8">
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-center text-lg uppercase tracking-widest transition-colors hover:text-[#C5A059] sm:text-2xl ${textColor}`}
                  >
                    {link.label}
                  </motion.a>
                </Link>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className={`mt-8 flex w-full max-w-[380px] flex-col items-center gap-6 border-t pt-8 ${isPaymentPage ? 'border-gray-300' : 'border-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <svg width="24" height="29" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
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

                  <div className="flex flex-col text-left font-serif">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">Official</span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#d4af37]">Tourism Partner</span>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 w-full">
                  
                  {/* Goa Tourism Mobile */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-14 flex items-center justify-center">
                      <Image src="/images/goa_tourism.png" alt="Goa Tourism" width={100} height={60} className="h-14 w-auto object-contain" />
                    </div>
                    <span className={`text-center text-[9px] tracking-wide ${partnerTextColor}`}>Goa<br/>Tourism</span>
                  </div>

                  {/* Startup India Mobile */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-14 flex items-center justify-center">
                      <Image src={startupLogo} alt="Startup India" width={100} height={60} className="h-14 w-auto object-contain" />
                    </div>
                    <span className={`text-center text-[9px] tracking-wide ${partnerTextColor}`}>Startup<br/>India</span>
                  </div>

                  {/* NIDHI Mobile */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-14 flex items-center justify-center">
                      <Image src={nidhiLogo} alt="NIDHI" width={100} height={60} className="h-10 w-auto object-contain" />
                    </div>
                    <span className={`text-center text-[9px] tracking-wide ${partnerTextColor}`}>NIDHI</span>
                  </div>

                  {/* Ministry of Tourism Mobile */}
                  <div className="flex flex-col items-center gap-1.5 relative mt-2 sm:mt-0">
                    <span className="absolute -top-3 text-[8px] font-bold uppercase tracking-[0.3em] text-[#d4af37] whitespace-nowrap z-10 drop-shadow-md">
                      Powered By
                    </span>
                    <div className="h-14 flex items-center justify-center">
                      <Image src={ministryLogo} alt="Ministry of Tourism" width={100} height={60} className="h-14 w-auto object-contain scale-[1.45]" />
                    </div>
                    <span className={`text-center text-[9px] tracking-wide ${partnerTextColor}`}>Ministry of<br/>Tourism</span>
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