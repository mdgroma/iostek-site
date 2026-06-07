import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "I servizi di iOStek: software su misura (app mobile e SaaS), automazione AI e agenti su misura, gestione di infrastrutture IT, integrazione enterprise EAI/BPM.",
  alternates: { canonical: "/servizi" },
};

export default function ServiziPage() {
  return (
    <>
      <section className="glow-paper relative overflow-hidden">
        <div className="absolute inset-0 dotgrid"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-accent">Servizi</p>
          <h1 className="mt-3 max-w-3xl text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl">
            Progettiamo, costruiamo, <span className="text-accent">integriamo</span> e manteniamo.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            Un partner tecnico unico per il software della tua azienda — dall&apos;idea alla
            produzione, fino alla manutenzione. Con un focus particolare su quello che oggi
            fa davvero la differenza: l&apos;automazione con l&apos;AI.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">

        <section id="software" className="border-b border-ink/5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow text-accent">01 — Sviluppo</div>
              <h2 className="mt-2 text-3xl font-semibold">Software su misura</h2>
              <p className="mt-3 leading-relaxed text-stone-600">App mobile, piattaforme SaaS e gestionali costruiti sulle esigenze reali della tua azienda — non template adattati a forza.</p>
            </div>
            <div className="rounded-3xl border border-ink/5 bg-white p-7 ring-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><h3 className="font-semibold">Cosa costruiamo</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• App iOS native (Swift/SwiftUI) e Android</li><li>• App cross-platform (Flutter)</li><li>• Piattaforme SaaS e dashboard web</li><li>• Gestionali, portali e backend/API</li></ul></div>
                <div><h3 className="font-semibold">Come lavoriamo</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• Analisi requisiti e architettura</li><li>• Design UX/UI</li><li>• Sviluppo, test e deployment</li><li>• Manutenzione ed evoluzione</li></ul></div>
              </div>
              <p className="mt-5 border-t border-ink/5 pt-4 text-sm text-stone-500">Esperienza reale: mobile banking UK (Mobank), forza vendita e gestione contratti (Acqua Dolomia), portali logistici (WnDirect), app enterprise per il fashion (Kering, Luxottica).</p>
            </div>
          </div>
        </section>

        <section id="ai" className="border-b border-ink/5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow text-accent">02 — Il cuore</div>
              <h2 className="mt-2 text-3xl font-semibold">Automazione AI &amp; agenti</h2>
              <p className="mt-3 leading-relaxed text-stone-600">Mettiamo una tua AI in casa: individuiamo i processi automatizzabili e costruiamo l&apos;infrastruttura agentica su misura, con i tuoi dati che restano tuoi.</p>
            </div>
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.05] to-white p-7 ring-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><h3 className="font-semibold">Cosa include</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• Audit dei processi aziendali</li><li>• Design di agenti AI su misura</li><li>• Installazione on-premise / private cloud</li><li>• Integrazione con i tuoi sistemi</li><li>• Manutenzione ed evoluzione</li></ul></div>
                <div><h3 className="font-semibold">Perché con noi</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• I dati non escono dall&apos;azienda</li><li>• Niente lock-in su una scatola nera</li><li>• Collegata a gestionali, mail, documenti, DB</li><li>• Pensata sul tuo lavoro, non generica</li></ul></div>
              </div>
              <p className="mt-5 border-t border-accent/10 pt-4 text-sm font-semibold text-accent">L&apos;AI non è un abbonamento da comprare. È un sistema da progettare intorno alla tua azienda.</p>
            </div>
          </div>
        </section>

        <section id="infra" className="border-b border-ink/5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow text-accent">03 — Operations</div>
              <h2 className="mt-2 text-3xl font-semibold">Infrastrutture IT</h2>
              <p className="mt-3 leading-relaxed text-stone-600">Progettiamo, installiamo e manteniamo l&apos;infrastruttura su cui gira la tua azienda. Cloud, ibrido o on-premise.</p>
            </div>
            <div className="rounded-3xl border border-ink/5 bg-white p-7 ring-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><h3 className="font-semibold">Cosa gestiamo</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• Server fisici, cloud e ibridi</li><li>• Alta affidabilità, failover, load balancing</li><li>• Backup e disaster recovery (NAS/DAS)</li><li>• Virtualizzazione VMware ESXi</li></ul></div>
                <div><h3 className="font-semibold">Sicurezza &amp; reti</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• Firewall e appliance (Fortinet, Barracuda, SonicWall)</li><li>• VPN, DNS, hosting e web service</li><li>• Linux e Windows server</li><li>• AWS · Azure · Hetzner</li></ul></div>
              </div>
              <p className="mt-5 border-t border-ink/5 pt-4 text-sm text-stone-500">Continuità operativa e sicurezza gestite end-to-end: la teniamo in piedi noi, tu pensi al business.</p>
            </div>
          </div>
        </section>

        <section id="integrazione" className="py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow text-accent">04 — Enterprise</div>
              <h2 className="mt-2 text-3xl font-semibold">Integrazione enterprise (EAI/BPM)</h2>
              <p className="mt-3 leading-relaxed text-stone-600">Far parlare i sistemi che oggi non si parlano. Oltre vent&apos;anni su middleware di integrazione e processi enterprise, anche in ambito bancario.</p>
            </div>
            <div className="rounded-3xl border border-ink/5 bg-white p-7 ring-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><h3 className="font-semibold">Cosa colleghiamo</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• ERP, CRM e gestionali</li><li>• Database enterprise (Oracle, DB2, SQL Server)</li><li>• Gateway di messaggistica (SWIFT/FIN)</li><li>• Sistemi legacy e mainframe</li></ul></div>
                <div><h3 className="font-semibold">Competenza certificata</h3><ul className="mt-2 space-y-1.5 text-sm text-stone-600"><li>• Middleware EAI/BPM (Vitria, Oracle/SeeBeyond)</li><li>• Business Intelligence (MicroStrategy)</li><li>• Architetture per banche, telco, grandi gruppi</li><li>• Migrazioni di sistemi informativi</li></ul></div>
              </div>
              <p className="mt-5 border-t border-ink/5 pt-4 text-sm text-stone-500">Esperienza su Fastweb, BNL, BancaIMI, Banca Generali, CSE Bologna, Gruppo Gucci.</p>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="overflow-hidden rounded-[2rem] relative text-paper" style={{ background: "#1A1813" }}>
            <div className="px-8 py-16 text-center sm:px-16">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Qual è il tuo prossimo progetto?</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300">Raccontacelo: capiamo insieme se e come possiamo aiutarti. Senza impegno.</p>
              <Link href="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]">Contattaci →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
