import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Luxe Homes Royale",
  description:
    "Construction, renovations, and house flipping with premium craftsmanship and clear timelines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}