import type { Metadata } from "next";
import "./bando.css";
import BandoCalculator from "./BandoCalculator";
import BandoForm from "./BandoForm";
import BandoReveal from "./BandoReveal";

export const metadata: Metadata = {
  title: "AI su misura per la tua azienda, con il bando IA FVG 2026",
  description:
    "Bando IA Friuli Venezia Giulia 2026: fino al 75% a fondo perduto, max 10.000€. iOStek ti aiuta a costruire un progetto AI su misura. I tuoi dati restano a casa tua.",
  alternates: { canonical: "/bando-ai-fvg" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://iostek.com/bando-ai-fvg",
    siteName: "iOStek",
    title: "AI su misura per la tua azienda, con il bando IA FVG 2026",
    description:
      "Fino al 75% a fondo perduto (max 10.000€) per software IA, consulenza e formazione. Una tua AI in casa, sui tuoi dati.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "iOStek — Bando IA FVG 2026" }],
  },
};

export default function BandoAiFvgPage() {
  return (
    <div className="bando">
      <header className="bar">
        <div className="wrap">
          <div className="brand">
            <b>iOS</b>tek
          </div>
          <nav>
            <a className="lnk" href="#cosa">
              Cosa finanzi
            </a>
            <a className="lnk" href="#privacy">
              I tuoi dati
            </a>
            <a className="lnk" href="#come">
              Come funziona
            </a>
            <a className="btn" href="#contatto" data-umami-event="bando-cta-header">
              Prenota l&apos;AI Check
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Bando IA FVG 2026 · fondo perduto 75%</span>
            <h1>
              L&apos;intelligenza artificiale nella tua azienda,{" "}
              <em>pagata per tre quarti dalla Regione.</em>
            </h1>
            <p className="lead">
              Il bando IA del Friuli Venezia Giulia copre fino al 75% di software, consulenza e
              formazione, con un massimo di 10.000&nbsp;€ a fondo perduto. Ti aiutiamo a trasformarlo
              in un progetto AI concreto e su misura: una tua AI in casa, sui tuoi dati.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contatto" data-umami-event="bando-cta-hero">
                Prenota l&apos;AI Check gratuito <span className="arr">&rarr;</span>
              </a>
              <a className="btn btn--ghost" href="#cosa">
                Cosa puoi finanziare
              </a>
            </div>
          </div>

          <BandoCalculator />
        </div>
      </section>

      {/* COSA FINANZI */}
      <section id="cosa">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Cosa copre il bando</span>
            <h2>Tre voci finanziabili. Le seguiamo tutte noi.</h2>
            <p>
              Il bando finanzia software IA, consulenza specialistica e formazione del personale.
              Sono esattamente le cose che facciamo — il che semplifica la domanda: un solo
              interlocutore, un solo progetto coerente.
            </p>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="tag">Consulenza</span>
              <h3>Analisi e progettazione</h3>
              <p>
                Partiamo dal tuo processo, non dalla tecnologia. Individuiamo dove l&apos;AI fa
                risparmiare ore vere e progettiamo la soluzione giusta — niente di generico.
              </p>
            </div>
            <div className="card reveal">
              <span className="tag">Software IA</span>
              <h3>Soluzione su misura</h3>
              <p>
                Non un abbonamento da rivendere, ma uno strumento costruito sul tuo lavoro e
                integrato con i sistemi che già usi.
              </p>
            </div>
            <div className="card reveal">
              <span className="tag">Formazione</span>
              <h3>Il team che la usa</h3>
              <p>
                Uno strumento serve solo se le persone lo usano. Formiamo te e i tuoi collaboratori
                perché entri davvero nella routine quotidiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="privacy" id="privacy">
        <div className="wrap">
          <svg className="lockmark reveal" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <rect x="22" y="44" width="56" height="42" rx="8" stroke="#0FB5AE" strokeWidth="4" />
            <path d="M34 44V34a16 16 0 0 1 32 0v10" stroke="#0FB5AE" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="62" r="6" fill="#0FB5AE" />
            <rect x="48" y="64" width="4" height="11" rx="2" fill="#0FB5AE" />
          </svg>
          <div className="reveal">
            <span className="eyebrow">Il punto che fa la differenza</span>
            <h2>Una tua AI in casa, sui tuoi dati.</h2>
            <p>
              Non un abbonamento a una scatola nera: i modelli girano in locale, on-premise o private
              cloud, integrati coi sistemi che già usi. Niente cloud di terzi, niente dati fuori
              dall&apos;UE. Se gestisci dati fiscali, legali o personali, questo non è un dettaglio
              tecnico — è la differenza tra usare l&apos;AI e cederle il controllo di tutto ciò che sai.
            </p>
          </div>
        </div>
      </section>

      {/* CASI D'USO */}
      <section id="casi">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Esempi concreti</span>
            <h2>Dove l&apos;AI ti fa guadagnare tempo</h2>
            <p>
              &quot;AI in azienda&quot; non significa niente da solo. Significa togliere ore alle
              attività ripetitive che fai ogni settimana. Qualche esempio, per categoria.
            </p>
          </div>
          <div className="uc-list">
            <div className="uc reveal">
              <div className="who">Commercialisti e studi</div>
              <div className="what">
                Estrazione dati da documenti e fatture, classificazione, bozze di risposta ai clienti
                — con i dati che non lasciano lo studio.
              </div>
            </div>
            <div className="uc reveal">
              <div className="who">Avvocati</div>
              <div className="what">
                Ricerca e sintesi su atti e documentazione, prime bozze, ricerca interna sul tuo
                archivio — in locale, riservato.
              </div>
            </div>
            <div className="uc reveal">
              <div className="who">Amministratori di condominio</div>
              <div className="what">
                Gestione delle comunicazioni, verbali, risposte ai proprietari anche in più lingue per
                immobili turistici.
              </div>
            </div>
            <div className="uc reveal">
              <div className="who">PMI e imprese</div>
              <div className="what">
                Preventivazione automatica dal tuo storico, supporto clienti, automazione di attività
                ripetitive che mangiano ore.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Il percorso</span>
            <h2>Dall&apos;idea alla domanda alla realizzazione</h2>
            <p>
              Tre passi chiari. Il primo è gratuito e senza impegno: serve a capire se vale davvero la
              pena fare domanda.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="num">Passo 01</div>
              <h3>AI Check — 30 min, gratis</h3>
              <p>
                Una call in cui individuiamo uno o due casi d&apos;uso reali. Se non conviene fare
                domanda, te lo diciamo onestamente.
              </p>
            </div>
            <div className="step reveal">
              <div className="num">Passo 02</div>
              <h3>Progetto su misura</h3>
              <p>
                Ti consegniamo una bozza con use case, stima dei costi e contributo atteso — pronta da
                allegare alla domanda di contributo.
              </p>
            </div>
            <div className="step reveal">
              <div className="num">Passo 03</div>
              <h3>Realizzazione e formazione</h3>
              <p>
                Sviluppiamo la soluzione, la integriamo e formiamo il team. Inferenza locale, dati in
                azienda. Da lì in poi, è tua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof">
        <div className="wrap reveal">
          <span className="eyebrow">Chi c&apos;è dietro</span>
          <h2 style={{ fontSize: "clamp(24px,3vw,32px)", margin: "14px 0 22px" }}>
            Dal mainframe bancario alla Silicon Valley. Oggi, al servizio della tua impresa.
          </h2>
          <p>
            iOStek è guidata da Marco De Girolamo, senior software engineer con oltre 35 anni di
            esperienza tra Italia, UK e Silicon Valley: architetture di integrazione enterprise per
            multinazionali, mobile e backend per aziende internazionali, e oggi automazione AI portata
            dentro le imprese del territorio.
          </p>
          <p>
            Un partner tecnico senior che progetta, costruisce e manda in produzione — e poi resta a
            mantenerlo. La prova concreta è Mandascan, la nostra piattaforma per studi professionali:
            documenti raccolti a distanza, firmati con valore legale e archiviati cifrati.
          </p>
          <div className="clients-lab">Esperienza su progetti per</div>
          <div className="clients">
            <span>Kering</span>
            <span>Luxottica</span>
            <span>Safilo</span>
            <span>Gruppo Gucci</span>
            <span>Fastweb</span>
            <span>BNL</span>
            <span>Banca Generali</span>
          </div>
          <div className="sig">
            Marco De Girolamo
            <small>iOStek · Friuli Venezia Giulia</small>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <div className="urgency">
        <div className="wrap">
          <strong>Sportello aperto, fondi limitati.</strong>
          <span>
            1 milione di euro per tutta la regione, contributi fino a 10.000&nbsp;€ ciascuno: a
            esaurimento, chiude. Per arrivare in tempo serve un progetto già pronto — il momento di
            costruirlo è adesso.
          </span>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact" id="contatto">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">Primo passo</span>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", margin: "14px 0 16px" }}>
              Prenota l&apos;AI Check gratuito
            </h2>
            <p style={{ fontSize: "17px", color: "var(--ink-soft)" }}>
              30 minuti, senza impegno. Capiamo insieme se c&apos;è un caso d&apos;uso sensato per te e
              se rientri nel bando. Esci dalla call con una direzione chiara.
            </p>
            <p className="alt">
              Preferisci messaggiare?{" "}
              <a
                href="https://wa.me/393801708583?text=Ciao%2C%20vorrei%20informazioni%20sul%20bando%20IA%20FVG"
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="bando-whatsapp"
              >
                Scrivici su WhatsApp &rarr;
              </a>{" "}
              ·{" "}
              <a href="https://www.linkedin.com/in/mdegirolamo/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              · <a href="mailto:marco@iostek.com">marco@iostek.com</a>
            </p>
          </div>
          <div className="reveal">
            <BandoForm />
          </div>
        </div>
      </section>

      <footer className="bnd">
        <div className="wrap">
          <div className="brand">
            <b>iOS</b>tek
          </div>
          <p className="disc">
            iOStek non è l&apos;ente erogatore del contributo. Il bando IA FVG 2026 (L.R. 19/2025, art.
            2 commi 16-19) è a sportello e i fondi sono limitati: non è possibile garantire
            l&apos;ottenimento del contributo, ma possiamo aiutarti a costruire un progetto
            finanziabile. Informazioni a scopo divulgativo, da verificare sulla documentazione
            ufficiale della Regione Friuli Venezia Giulia.
          </p>
          <p>
            iOStek di Marco De Girolamo · P.IVA 10552601006 ·{" "}
            <a href="mailto:marco@iostek.com">marco@iostek.com</a> · <a href="/privacy">Privacy</a> ·{" "}
            <a href="/cookie">Cookie</a>
          </p>
        </div>
      </footer>

      <BandoReveal />
    </div>
  );
}
