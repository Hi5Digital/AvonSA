import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Join Avon South Africa | Become an Avon Representative",
  description:
    "Become your own boss, earn extra income and build a flexible business that fits your lifestyle, backed by the trusted Avon brand. Join Avon SA today.",
  keywords: [
    "Avon",
    "Representative",
    "South Africa",
    "Business opportunity",
    "Extra income",
  ],
  openGraph: {
    title: "Join Avon South Africa | Become an Avon Representative",
    description:
      "Become your own boss, earn extra income and build a flexible business that fits your lifestyle, backed by the trusted Avon brand.",
    type: "website",
    locale: "en_ZA",
    url: "https://www.joinavonsa.co.za",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Avon South Africa | Become an Avon Representative",
    description:
      "Become your own boss, earn extra income and build a flexible business that fits your lifestyle, backed by the trusted Avon brand.",
  },
  robots: "index, follow",
  canonical: "https://www.joinavonsa.co.za",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.joinavonsa.co.za" />
      </head>
      <body className="min-h-full flex flex-col bg-cream-light">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
