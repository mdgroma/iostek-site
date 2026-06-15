import Link from "next/link";
import HeroViz from "./_components/HeroViz";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="glow-paper relative overflow-hidden">
        <div className="absolute inset-0 dotgrid"></div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="eyebrow inline-flex items-center gap-2 text-accent-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span> Studio di consulenza software &amp; IT · dal 1989
            </p>
            <h1 className="mt-5 text-[2.4rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.3rem]">
              Software su misura e <span className="text-accent-deep">automazione AI</span> per la tua azienda.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              Progettiamo e costruiamo software, gestiamo infrastrutture IT e portiamo
              l&apos;intelligenza artificiale <strong className="font-semibold text-ink">dentro</strong> la tua azienda:
              individuiamo i processi da automatizzare e installiamo agenti AI su misura,
              integrati coi tuoi sistemi e con i tuoi dati che restano tuoi.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contatti" className="rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-[#04211F] shadow-[0_12px_30px_rgba(15,181,174,0.28)] transition-transform hover:scale-[1.03]">
                Parliamo del tuo progetto
              </Link>
              <Link href="/#ai" className="rounded-full border border-ink/15 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-ink/5">
                Metti una tua AI in casa →
              </Link>
            </div>
            <p className="mt-8 eyebrow text-slate-500">35 anni · Italia · UK · Silicon Valley</p>
          </div>

          <HeroViz />
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-y border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="eyebrow text-slate-500">Esperienza maturata su progetti e piattaforme per</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-400">
            <span>Kering</span><span>Luxottica</span><span>Safilo</span><span>Gruppo Gucci</span>
            <span>Fastweb</span><span>BNL</span><span>Acqua Dolomia</span><span>Comet · Sime Vignuda</span>
            <span>Banca Generali</span><span>BancaIMI</span><span>Mobank · UK</span>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-accent-deep">Servizi</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Quattro cose che facciamo bene, da molto tempo.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Un partner tecnico senior che progetta, costruisce e manda in
            produzione — e poi rimane a mantenerlo.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="ring-card rounded-3xl border border-ink/5 bg-white p-8">
              <span className="eyebrow text-slate-500">01</span>
              <h3 className="mt-2 text-2xl font-semibold">Software su misura</h3>
              <p className="mt-2 leading-relaxed text-slate-600">App mobile iOS e Android (nativo e cross-platform), piattaforme SaaS, gestionali web e portali. Dalla progettazione dell&apos;architettura al deployment in produzione.</p>
              <p className="mt-4 eyebrow text-slate-500">Swift · SwiftUI · Flutter · Next.js · backend &amp; API</p>
            </div>

            <div className="ring-card rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.05] to-white p-8">
              <span className="eyebrow text-accent-deep">02 · il cuore</span>
              <h3 className="mt-2 text-2xl font-semibold">Automazione AI &amp; agenti</h3>
              <p className="mt-2 leading-relaxed text-slate-600">Individuiamo i processi della tua azienda che l&apos;AI può automatizzare e costruiamo infrastrutture agentiche su misura — on-premise o private cloud. La tua AI, sui tuoi dati, integrata coi tuoi sistemi.</p>
              <p className="mt-4 text-sm font-semibold text-accent-deep">Una tua AI in casa, non un abbonamento a una scatola nera.</p>
            </div>

            <div className="ring-card rounded-3xl border border-ink/5 bg-white p-8">
              <span className="eyebrow text-slate-500">03</span>
              <h3 className="mt-2 text-2xl font-semibold">Infrastrutture IT</h3>
              <p className="mt-2 leading-relaxed text-slate-600">Progettazione, installazione, gestione e manutenzione. Cloud, ibrido o on-premise: alta affidabilità, failover, backup, sicurezza e continuità operativa. Le teniamo in piedi noi.</p>
              <p className="mt-4 eyebrow text-slate-500">AWS · Azure · Hetzner · VMware · Linux · sicurezza</p>
            </div>

            <div className="ring-card rounded-3xl border border-ink/5 bg-white p-8">
              <span className="eyebrow text-slate-500">04</span>
              <h3 className="mt-2 text-2xl font-semibold">Integrazione enterprise</h3>
              <p className="mt-2 leading-relaxed text-slate-600">Far parlare i sistemi che oggi non si parlano: ERP, CRM, database, gateway di messaggistica. Oltre vent&apos;anni su middleware di integrazione e processi enterprise, anche in ambito bancario.</p>
              <p className="mt-4 eyebrow text-slate-500">EAI/BPM · ERP/CRM · SWIFT/FIN · ORACLE · DB2</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI DEEP DIVE */}
      <section id="ai" className="ink-section relative overflow-hidden text-paper">
        <div className="absolute inset-0 dotgrid-light"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-accent2">Automazione AI</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            L&apos;AI non è un chatbot da comprare. È un sistema da progettare <span className="text-accent2">intorno</span> alla tua azienda.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            La maggior parte delle aziende compra abbonamenti AI e li usa al 10%, mandando
            i propri dati su servizi di terzi. Noi facciamo il contrario: studiamo i tuoi
            processi, progettiamo gli agenti che ti servono davvero e li installiamo a casa
            tua — collegati ai tuoi gestionali, alle tue mail, ai tuoi documenti.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-ink p-7"><div className="eyebrow text-accent2">01</div><h3 className="mt-3 text-lg font-semibold">Audit dei processi</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-400">Guardiamo come lavori e troviamo dove l&apos;AI fa risparmiare tempo e soldi davvero.</p></div>
            <div className="bg-ink p-7"><div className="eyebrow text-accent2">02</div><h3 className="mt-3 text-lg font-semibold">Design infrastruttura</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-400">Agenti su misura, non template. Architettura pensata sui tuoi sistemi e vincoli.</p></div>
            <div className="bg-ink p-7"><div className="eyebrow text-accent2">03</div><h3 className="mt-3 text-lg font-semibold">Installazione</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-400">On-premise o private cloud. I tuoi dati restano dentro la tua azienda.</p></div>
            <div className="bg-ink p-7"><div className="eyebrow text-accent2">04</div><h3 className="mt-3 text-lg font-semibold">Integrazione</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-400">Collegata a gestionali, posta, documenti e database. L&apos;AI lavora dove lavori tu.</p></div>
            <div className="bg-ink p-7"><div className="eyebrow text-accent2">05</div><h3 className="mt-3 text-lg font-semibold">Manutenzione</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-400">La teniamo viva, aggiornata e la facciamo crescere con la tua azienda.</p></div>
          </div>

          <div className="mt-10">
            <Link href="/contatti" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-[#04211F] transition-transform hover:scale-[1.03]">
              Valutiamo insieme cosa automatizzare →
            </Link>
          </div>
        </div>
      </section>

      {/* ESPERIENZA */}
      <section id="esperienza" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-accent/10 ring-1 ring-ink/10">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold text-accent-deep font-display">MDG</div>
                </div>
                <div>
                  <div className="font-semibold">Marco De Girolamo</div>
                  <div className="eyebrow text-slate-500">Founder · Senior Software Engineer</div>
                </div>
              </div>
              <p className="eyebrow text-accent-deep">Esperienza</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-[2.7rem] leading-[1.05]">
                Dal mainframe bancario alla Silicon Valley. Oggi, al servizio della tua impresa.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                iOStek è guidata da Marco De Girolamo, senior software engineer con oltre
                trent&apos;anni di esperienza internazionale. Ho progettato sistemi di
                integrazione enterprise per multinazionali della Silicon Valley, sviluppato
                mobile e backend per aziende in Italia, UK e Stati Uniti — e continuo a
                farlo. Quella esperienza oggi è a disposizione della tua azienda.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5"><div className="text-3xl font-semibold text-accent-deep font-display">35+</div><div className="mt-1 text-sm font-medium text-slate-500">anni di esperienza</div></div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5"><div className="text-3xl font-semibold text-accent-deep font-display">IT·UK·US</div><div className="mt-1 text-sm font-medium text-slate-500">progetti internazionali</div></div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5"><div className="text-3xl font-semibold text-accent-deep font-display">20+</div><div className="mt-1 text-sm font-medium text-slate-500">dev coordinati</div></div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-ink/5 bg-white p-6 ring-card"><div className="eyebrow text-accent-deep">2021 → oggi</div><div className="mt-1 text-lg font-semibold">Mobile enterprise &amp; prodotti propri</div><p className="mt-1 text-sm leading-relaxed text-slate-600">App iOS enterprise per il fashion internazionale (Kering, Luxottica, Safilo) e sviluppo di prodotti SaaS proprietari come Mandascan.</p></div>
              <div className="rounded-2xl border border-ink/5 bg-white p-6 ring-card"><div className="eyebrow text-accent-deep">2009 → 2021 · iOStek</div><div className="mt-1 text-lg font-semibold">Software &amp; infrastrutture per Italia e UK</div><p className="mt-1 text-sm leading-relaxed text-slate-600">Mobile banking (Mobank), portali logistici (WnDirect), 100+ siti mobile (Mopowered) coordinando team internazionali; progettazione e gestione di infrastrutture IT in alta affidabilità.</p></div>
              <div className="rounded-2xl border border-ink/5 bg-white p-6 ring-card"><div className="eyebrow text-accent-deep">2000 → 2008 · Silicon Valley</div><div className="mt-1 text-lg font-semibold">Integrazione enterprise (EAI/BPM)</div><p className="mt-1 text-sm leading-relaxed text-slate-600">Solution Engineer per Vitria, SeeBeyond (oggi Oracle) e MicroStrategy: architetture di integrazione e business intelligence per banche, telco e grandi gruppi (Fastweb, BancaIMI, Banca Generali).</p></div>
              <div className="rounded-2xl border border-ink/5 bg-white p-6 ring-card"><div className="eyebrow text-accent-deep">1989 → 2000</div><div className="mt-1 text-lg font-semibold">Sistemi bancari mainframe</div><p className="mt-1 text-sm leading-relaxed text-slate-600">Lead developer su COBOL, CICS/DB2 per gruppi bancari (Banca di Roma, BNL, ICCREA): centrale rischi, estero, migrazioni di sistemi informativi.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* MANDASCAN */}
      <section id="mandascan" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-accent-deep">Prodotti</p>
          <div className="mt-3 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Non parliamo solo di software. Lo costruiamo.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                <strong className="font-semibold">Mandascan</strong> è la nostra piattaforma per studi professionali:
                raccoglie i documenti dei clienti a distanza, li fa firmare con valore legale
                e li organizza in fascicoli cifrati. La prova concreta di cosa sappiamo
                mettere in produzione.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span><strong className="font-semibold text-ink">Full-stack reale:</strong> app mobile native, dashboard Next.js, backend, pagamenti e storage cifrato.</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span><strong className="font-semibold text-ink">Infrastruttura self-hosted</strong> con sicurezza e continuità gestite end-to-end.</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span><strong className="font-semibold text-ink">Automazioni</strong> che tolgono il lavoro ripetitivo — la stessa filosofia che portiamo nella tua azienda.</span></div>
              </div>
              <a href="https://mandascan.com" rel="noopener" className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3.5 text-base font-semibold text-accent-deep transition-colors hover:bg-accent/5">
                Scopri Mandascan →
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://apps.apple.com/it/app/mandascan/id6763728851" rel="noopener" className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-4 py-2.5 text-white transition-transform hover:scale-[1.03]" aria-label="Scarica Mandascan su App Store">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 1.6c0 1.1-.4 2.1-1.2 3-.85.95-1.95 1.5-3 1.4-.12-1.05.42-2.2 1.2-3 .82-.86 2-1.46 3-1.4zM20.3 17c-.5 1.18-.78 1.7-1.5 2.8-1 1.52-2.4 3.4-4.13 3.4-1.5 0-1.9-.98-4-.98-2.07 0-2.5.96-4 1-1.7.04-3-1.66-4-3.18C-.13 16.6-.42 11.4 2 8.7c1.1-1.3 2.6-2.1 4.1-2.1 1.7 0 2.8 1 4.2 1 1.36 0 2.2-1 4.2-1 1.3 0 2.7.7 3.7 2-3.24 1.78-2.72 6.4.1 7.4z"/></svg>
                  <span className="leading-tight text-left"><span className="block text-[10px] text-slate-300">Scarica su</span><span className="block text-sm font-semibold">App Store</span></span>
                </a>
                <span className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-4 py-2.5 text-white opacity-70" aria-label="Mandascan per Android — presto su Google Play">
                  <svg width="18" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00D2FF" d="M3.7 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1L13.4 12z"/><path fill="#FFCE00" d="M16.9 8.8 13.4 12l3.5 3.2 3.9-2.2c.7-.4.7-1.6 0-2z"/><path fill="#FF3D00" d="M3.7 2.3 13.4 12l3.5-3.2L5.6 2c-.7-.4-1.4-.3-1.9.3z"/><path fill="#00C853" d="M3.7 21.7 13.4 12l3.5 3.2L5.6 22c-.7.4-1.4.3-1.9-.3z"/></svg>
                  <span className="leading-tight text-left"><span className="block text-[10px] text-slate-300">Presto su</span><span className="block text-sm font-semibold">Google Play</span></span>
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-white ring-card border border-ink/5">
                <div className="flex items-center gap-1.5 border-b border-ink/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
                  <span className="ml-3 text-xs text-slate-400 font-mono">mandascan.com</span>
                </div>
                <img src="/mandascan-dashboard.png" alt="Dashboard di Mandascan Studio" className="w-full" loading="lazy" />
              </div>
              <img src="/mandascan-mobile.png" alt="App Mandascan su iPhone" className="absolute -bottom-6 -left-5 hidden w-28 rounded-[1.6rem] ring-1 ring-ink/10 shadow-[0_20px_50px_rgba(26,24,19,0.22)] sm:block" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="overflow-hidden rounded-[2rem] ink-section relative text-paper">
            <div className="absolute inset-0 dotgrid-light"></div>
            <div className="relative px-8 py-16 text-center sm:px-16">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Raccontaci cosa vuoi costruire o automatizzare.</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Una chiamata, nessun impegno. Capiamo se possiamo aiutarti davvero e come.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href="mailto:marco@iostek.com?subject=Progetto%20per%20iOStek" className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-[#04211F] shadow-[0_12px_30px_rgba(15,181,174,0.35)] transition-transform hover:scale-[1.03]">Scrivici: marco@iostek.com</a>
                <a href="https://www.linkedin.com/in/mdegirolamo/" rel="noopener" className="rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
