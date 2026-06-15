import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy di iOStek: solo storage tecnico, nessun cookie di profilazione né tracciamento.",
  alternates: { canonical: "/cookie" },
  robots: { index: false, follow: true },
};

export default function CookiePage() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow text-accent-deep">Legale</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Cookie Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Ultimo aggiornamento: 7 giugno 2026</p>

      <p className="mt-6">
        I cookie e le tecnologie simili sono piccoli file o informazioni salvati sul tuo dispositivo.
        Possono essere &quot;tecnici&quot; (necessari al funzionamento) oppure &quot;di profilazione&quot;
        (per tracciare le tue attività a fini pubblicitari o statistici).
      </p>

      <h2>Cosa usa questo sito</h2>
      <p>
        Questo sito ha un approccio essenziale alla privacy:{" "}
        <strong>non utilizza cookie di profilazione né strumenti di tracciamento</strong>. Le sole
        statistiche di utilizzo sono raccolte in forma anonima e senza cookie (vedi{" "}
        <em>Statistiche e analytics</em> più sotto). L&apos;unico dato salvato sul tuo dispositivo è la
        tua scelta sull&apos;informativa cookie,
        memorizzata nello <em>storage locale</em> del browser (non un cookie di tracciamento) per non
        riproporti il banner ad ogni visita.
      </p>

      <table>
        <thead>
          <tr>
            <th>Strumento</th>
            <th>Tipo</th>
            <th>Finalità</th>
            <th>Durata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iostek_cookie_consent</td>
            <td>Tecnico (localStorage)</td>
            <td>Memorizza la tua scelta sul banner cookie</td>
            <td>Fino a cancellazione</td>
          </tr>
        </tbody>
      </table>

      <h2>Risorse di terze parti</h2>
      <p>
        Il sito serve tutte le risorse (caratteri tipografici, stili, immagini) direttamente dal proprio
        dominio: <strong>non</strong> carichiamo font o librerie da CDN esterne, quindi non avvengono
        trasferimenti del tuo indirizzo IP verso terze parti durante la navigazione.
      </p>

      <h2>Modulo di contatto</h2>
      <p>
        Quando invii il modulo di contatto, i dati vengono inoltrati via email tramite il nostro provider
        di posta. Si tratta di un trattamento necessario a darti riscontro, descritto nella{" "}
        <Link href="/privacy">Privacy Policy</Link>; non comporta l&apos;uso di cookie di profilazione.
      </p>

      <h2>Statistiche e analytics</h2>
      <p>
        Per capire come viene utilizzato il sito usiamo <strong>Umami</strong>, uno strumento di
        statistica <strong>senza cookie</strong> e privacy-friendly. Umami{" "}
        <strong>non installa cookie</strong>, non salva identificatori sul tuo dispositivo e raccoglie
        solo dati aggregati e anonimi (es. pagine viste, provenienza generica, tipo di dispositivo),
        senza profilazione né tracciamento tra siti diversi. Per questo motivo non è richiesto il tuo
        consenso e lo strumento è attivo per tutti i visitatori; resta comunque indicato qui per
        trasparenza.
      </p>

      <h2>Come gestire le preferenze</h2>
      <p>
        Puoi rivedere la tua scelta in qualsiasi momento con il link <strong>Gestisci cookie</strong>{" "}
        presente nel footer, oppure cancellando i dati del sito dalle impostazioni del tuo browser.
      </p>
    </main>
  );
}
