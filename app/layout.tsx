import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header/Header";
import "aos/dist/aos.css";
import AosProvider from "@/components/AosProvider";
import Footer from "@/layouts/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import QuickContact from "@/components/QuickContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BISO JICA VN",
  description: "Công nghệ enzyme Nhật Bản",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <Header />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosProvider />
        {children}
        <QuickContact />
      </body>
      <Footer />
      <ScrollToTop />
    </html>
  );
}
