import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dhuri Catering & Decorations | Mumbai Events",
    template: "%s | Dhuri Catering & Decorations",
  },
  description:
    "Bespoke event décor, celebration catering and end-to-end event production in Mumbai. Creating memorable weddings and social celebrations since 2015.",
  keywords: ["Mumbai event decorators", "wedding decorators Mumbai", "catering Borivali", "event planning Mumbai", "Dhuri Decorations"],
  openGraph: {
    title: "Dhuri Catering & Decorations",
    description: "Bespoke celebrations, thoughtfully composed since 2015.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#173d34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
