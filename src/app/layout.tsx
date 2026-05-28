import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morii Beads - The Curated Keepsake",
  description: "Handcrafted in the heart of Bali, our beads are more than ornaments—they are vessels of memories and artisanal heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-stone-800 bg-[#FAF9F6] selection:bg-stone-800 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
