import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Crimson_Text, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "River Nguyen — Portfolio",
  description:
    "Modern dark-mode portfolio by Nguyễn Hà (River Nguyen) — frontend, backend, infra, and product thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${crimsonText.variable} ${cormorantGaramond.variable} antialiased app-shell relative`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

