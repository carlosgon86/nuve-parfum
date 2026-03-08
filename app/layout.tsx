import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nuvé Parfum — Find Your Aura",
  description:
    "Nuvé Parfum. Luxury fragrances crafted with industry leading concentration. Discover your signature scent.",
  keywords: "luxury fragrance, perfume, Nuvé Parfum, pour elle, pour lui",
  openGraph: {
    title: "Nuvé Parfum — Find Your Aura",
    description:
      "Luxury fragrances crafted with industry leading concentration. Discover your signature scent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
