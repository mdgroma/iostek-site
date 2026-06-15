import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import CookieBanner from "./_components/CookieBanner";
import RevealInit from "./_components/RevealInit";
import WhatsAppFab from "./_components/WhatsAppFab";

// Font self-hostati al build (nessuna richiesta a Google a runtime → GDPR pulito)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

// Umami — analytics cookieless e anonimo. Si attiva solo se le env sono valorizzate
// (NEXT_PUBLIC_UMAMI_SRC + NEXT_PUBLIC_UMAMI_WEBSITE_ID).
const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

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
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <WhatsAppFab />
        <RevealInit />
        {umamiSrc && umamiWebsiteId && (
          <Script
            src={umamiSrc}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
            defer
          />
        )}
      </body>
    </html>
  );
}
