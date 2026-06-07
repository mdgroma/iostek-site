import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CookieBanner from "./_components/CookieBanner";
import RevealInit from "./_components/RevealInit";

// Font self-hostati al build (nessuna richiesta a Google a runtime → GDPR pulito)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://iostek.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iOStek — Software su misura e automazione AI per le aziende",
    template: "%s — iOStek",
  },
  description:
    "Studio di consulenza software e IT. Progettiamo software su misura, gestiamo infrastrutture e portiamo l'automazione AI dentro la tua azienda — la tua AI, sui tuoi dati. 35 anni di esperienza tra Italia, UK e Silicon Valley.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "iOStek",
    title: "iOStek — Software su misura e automazione AI per le aziende",
    description:
      "Studio di consulenza software e IT con focus sull'automazione AI: una tua AI in casa, sui tuoi dati.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "iOStek — Software su misura e automazione AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iOStek — Software su misura e automazione AI per le aziende",
    description:
      "Studio di consulenza software e IT con focus sull'automazione AI: una tua AI in casa, sui tuoi dati.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${interTight.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <RevealInit />
      </body>
    </html>
  );
}
