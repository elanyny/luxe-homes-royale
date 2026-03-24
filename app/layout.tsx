import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Luxe Homes Royale | Premium Residential Construction on Long Island",
    template: "%s | Luxe Homes Royale",
  },
  description:
    "Custom home building, renovations, and full home transformations across Long Island, NY. Premium craftsmanship with clear timelines and detail-focused execution.",
  keywords: [
    "luxury home builder",
    "Long Island construction",
    "home renovation",
    "home transformation",
    "custom home building",
    "Oceanside NY contractor",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luxe Homes Royale",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-clip`}>
      <body className="min-h-screen overflow-x-clip bg-black font-sans text-white antialiased">
        <div className="max-w-[100vw] overflow-x-clip">
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <SiteHeader />
          <div id="main-content">
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
