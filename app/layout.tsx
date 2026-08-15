import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CRTOverlay } from "@/components/ui/CRTOverlay";

export const metadata: Metadata = {
  title: "Yashwanth Paleti | Systems Builder",
  description: "Exploring intelligent systems, data-driven problem solving, finance, and the intersection of technology and business.",
  keywords: ["Yashwanth Paleti", "Systems Builder", "Data Science", "AI Systems", "Quantitative Finance", "Robotics"],
  authors: [{ name: "Yashwanth Paleti" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="crt-container min-h-screen flex flex-col antialiased">
        <CRTOverlay />
        {children}
      </body>
    </html>
  );
}
