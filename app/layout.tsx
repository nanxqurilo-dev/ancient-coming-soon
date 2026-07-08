import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ancient India - Premium Spiritual Offerings",
  description: "Crafted with Devotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${cinzel.variable} ${inter.variable} bg-dark-bg text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}