import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy di iOStek (GDPR): titolare, dati raccolti, finalità, conservazione, diritti.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow text-accent">Legale</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-stone-500">Ultimo aggiornamento: 7 giugno 2026</p>

      <p className="mt-6">
        La presente informativa descrive come iOStek tratta i dati personali degli utenti che visitano
        questo sito o ci contattano, ai sensi del Regolamento (UE) 2016/679 (GDPR).
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        iOStek di Marco De Girolamo — P.IVA 10552601006 — email:{" "}
        <a href="mailto:marco@iostek.com">marco@iostek.com</a>. Per qualsiasi richiesta relativa ai tuoi
        dati puoi scriverci a questo indirizzo.
      </p>

      <h2>Quali dati trattiamo</h2>
      <ul>
        <li>
          <strong>Dati che ci invii tramite il modulo di contatto:</strong> nome e cognome, azienda,
          email, telefono (facoltativo) e il contenuto del messaggio.
        </li>
        <li>
          <strong>Dati tecnici di navigazione:</strong> dati minimi raccolti automaticamente dai sistemi
          (es. indirizzo IP nei log del server) per la sicurezza e il funzionamento del sito.
        </li>
      </ul>
      <p>Non raccogliamo categorie particolari di dati e non effettuiamo profilazione.</p>

      <h2>Finalità e base giuridica</h2>
      <ul>
        <li>
          <strong>Rispondere alle tue richieste</strong> ed eventuali contatti precontrattuali — base
          giuridica: misure precontrattuali su tua richiesta (art. 6.1.b) e legittimo interesse a gestire
          le comunicazioni (art. 6.1.f).
        </li>
        <li>
          <strong>Sicurezza e funzionamento del sito</strong> — legittimo interesse (art. 6.1.f).
        </li>
        <li>
          <strong>Adempimenti di legge</strong> (es. fiscali e contabili, se instauriamo un rapporto) —
          obbligo legale (art. 6.1.c).
        </li>
      </ul>

      <h2>Come trattiamo i dati del modulo</h2>
      <p>
        Quando invii il modulo di contatto, i dati vengono trasmessi al nostro server e inoltrati via
        email alla casella di iOStek tramite il nostro provider di posta transazionale. Non creiamo
        profili e non usiamo i dati per finalità diverse dalla gestione della tua richiesta.
      </p>

      <h2>Conservazione</h2>
      <p>
        Conserviamo i dati per il tempo necessario a gestire la tua richiesta. Se diventi cliente, i dati
        relativi al rapporto sono conservati secondo gli obblighi di legge (in genere 10 anni per i
        documenti fiscali e contabili).
      </p>

      <h2>Destinatari e terze parti</h2>
      <p>
        I dati possono essere trattati da fornitori che ci supportano in qualità di responsabili del
        trattamento: il provider di hosting (server in UE) e il provider di posta elettronica utilizzato
        per recapitarci i messaggi del modulo. Il sito <strong>non</strong> carica risorse da CDN di terze
        parti: i caratteri tipografici e gli stili sono serviti direttamente dal nostro dominio. Non
        vendiamo né cediamo i tuoi dati a terzi per finalità di marketing.
      </p>

      <h2>Trasferimenti extra-UE</h2>
      <p>
        Il provider di posta utilizzato per il modulo di contatto può trattare i dati anche al di fuori
        dello Spazio Economico Europeo. In tali casi il trasferimento avviene sulla base di garanzie
        adeguate previste dal GDPR (clausole contrattuali standard e/o EU-US Data Privacy Framework).
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Hai diritto di accedere ai tuoi dati, rettificarli, cancellarli, limitarne o opporti al
        trattamento e alla portabilità (artt. 15-22 GDPR). Puoi esercitare questi diritti scrivendo a{" "}
        <a href="mailto:marco@iostek.com">marco@iostek.com</a>. Hai inoltre diritto di proporre reclamo
        all&apos;Autorità Garante per la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>).
      </p>

      <h2>Cookie</h2>
      <p>
        Per le tecnologie utilizzate da questo sito consulta la <Link href="/cookie">Cookie Policy</Link>.
      </p>
    </main>
  );
}
