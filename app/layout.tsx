import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GOA MOMENTS | Luxury Lifestyle Membership",
  description:
    "Experience premium Goa with exclusive membership access to curated stays, dining, nightlife, travel, and luxury privileges.",
  generator: "v0.app",
  // REMOVED: Old Vercel icon arrays so Next.js defaults to your new app/icon.png automatically
  verification: {
    google: "cKmc-hEP2MYewTKPZrkffCK2SivxCjr_28ATvxWHDEc", // <-- ADDED FOR VERIFICATION
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}