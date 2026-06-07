import type { Metadata } from "next";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Parla con iOStek del tuo progetto software, della tua infrastruttura o di un'automazione AI. Nessun impegno.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <section className="glow-paper relative overflow-hidden">
        <div className="absolute inset-0 dotgrid"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow text-accent">Contatti</p>
          <h1 className="mt-3 max-w-3xl text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl">Parliamo del tuo <span className="text-accent">progetto</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">Software da costruire, un&apos;infrastruttura da sistemare o un processo da automatizzare con l&apos;AI? Raccontacelo: una prima call è gratuita e senza impegno.</p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          <div id="form" className="rounded-3xl border border-ink/5 bg-white p-7 ring-card sm:p-9">
            <h2 className="text-2xl font-semibold">Scrivici due righe</h2>
            <p className="mt-1 text-sm text-stone-500">Rispondiamo entro un giorno lavorativo.</p>

            <ContactForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-ink/5 bg-white p-7 ring-card">
              <h3 className="font-semibold">Contatti diretti</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="mailto:marco@iostek.com" className="flex items-center gap-3 text-stone-700 hover:text-accent"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">@</span>marco@iostek.com</a>
                <a href="https://www.linkedin.com/in/mdegirolamo/" rel="noopener" className="flex items-center gap-3 text-stone-700 hover:text-accent"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold">in</span>linkedin.com/in/mdegirolamo</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink/5">
              <h3 className="font-semibold">iOStek</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Studio di consulenza software &amp; IT di Marco De Girolamo. 35 anni di esperienza tra Italia, UK e Silicon Valley.</p>
              <p className="mt-4 eyebrow text-stone-400">P.IVA 10552601006</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
