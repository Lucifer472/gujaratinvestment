import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Script from "next/script";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import PopupAd from "@/components/ads/pop-up";
import InterstitialAd from "@/components/ads/interstitial-ad";
import AnchorAd from "@/components/ads/anchor-ad";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://emi-calculator.ojasinfo.in"),
  title: {
    default: "EMI Calculator",
    template: "%s | EMI Calculator",
  },
  description:
    "EMI Calculator - Calculate Equated Monthly Installment (EMI) for Home Loan / Housing Loan, Car Loan & Personal Loan in India (with interactive charts)",
  twitter: {
    card: "summary_large_image",
    images: ["/open-graph-image.png"],
  },
  openGraph: {
    images: ["/open-graph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingWrapper />
        <Script
          strategy="beforeInteractive"
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          id="google-ads"
        />
        <Toaster position="top-center" />
        {children}
        <ClientWrapper>
          <>
            <AnchorAd />
            <PopupAd />
            <InterstitialAd />
          </>
        </ClientWrapper>
      </body>
    </html>
  );
}
