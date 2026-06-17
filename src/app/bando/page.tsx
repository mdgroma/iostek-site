import type { Metadata } from "next";

// Alias breve della landing del bando (/bando) che rende la stessa pagina.
// Serve anche come URL "fresco" per le anteprime social (LinkedIn mette in cache
// in modo aggressivo l'URL canonico): avendo un canonical proprio, le piattaforme
// rileggono l'immagine OG aggiornata. Non indicizzato per non competere con la
// landing principale su Google.
export { default } from "../bando-ai-fvg/page";

export const metadata: Metadata = {
  title: "AI su misura per la tua azienda, con il bando IA FVG 2026",
  description:
    "Bando IA Friuli Venezia Giulia 2026: fino al 75% a fondo perduto, max 10.000€. iOStek ti aiuta a costruire un progetto AI su misura. I tuoi dati restano a casa tua.",
  alternates: { canonical: "/bando" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://iostek.com/bando",
    siteName: "iOStek",
    title: "AI su misura per la tua azienda, con il bando IA FVG 2026",
    description:
      "Fino al 75% a fondo perduto (max 10.000€) per software IA, consulenza e formazione. Una tua AI in casa, sui tuoi dati.",
    images: [
      {
        url: "/og-bando.png",
        width: 2400,
        height: 1260,
        alt: "Bando IA FVG 2026 — 75% a fondo perduto per la tua AI aziendale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI su misura per la tua azienda, con il bando IA FVG 2026",
    description:
      "Fino al 75% a fondo perduto (max 10.000€) per software IA, consulenza e formazione. Una tua AI in casa, sui tuoi dati.",
    images: ["/og-bando.png"],
  },
};
