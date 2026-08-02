import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import "./globals.css";

/*
 * DM Sans:
 * Navigation, paragraphs, buttons, labels, forms and numbers.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

/*
 * Playfair Display:
 * Premium and luxury headings.
 */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "GOA MOMENTS | Luxury Lifestyle Membership",
  description:
    "Experience premium Goa with exclusive membership access to curated stays, dining, nightlife, travel, and luxury privileges.",
  generator: "v0.app",
  verification: {
    google: "cKmc-hEP2MYewTKPZrkffCK2SivxCjr_28ATvxWHDEc",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f5f3ef",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#141414",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>{children}</Providers>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}