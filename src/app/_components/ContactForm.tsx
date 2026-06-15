"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.nome?.trim() || !data.email?.trim() || !data.messaggio?.trim()) {
      setStatus("error");
      setNote("Compila nome, email e messaggio.");
      return;
    }
    setStatus("sending");
    setNote("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("ok");
      setNote("Grazie! Ti rispondiamo entro un giorno lavorativo.");
    } catch {
      setStatus("error");
      setNote("Invio non riuscito. Scrivici direttamente a marco@iostek.com.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="form-label">Nome e cognome *</label>
          <input id="nome" name="nome" className="field mt-1.5" required />
        </div>
        <div>
          <label htmlFor="azienda" className="form-label">Azienda</label>
          <input id="azienda" name="azienda" className="field mt-1.5" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="form-label">Email *</label>
          <input id="email" name="email" type="email" className="field mt-1.5" required />
        </div>
        <div>
          <label htmlFor="telefono" className="form-label">Telefono</label>
          <input id="telefono" name="telefono" className="field mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="tipo" className="form-label">Di cosa hai bisogno?</label>
        <select id="tipo" name="tipo" className="field mt-1.5" defaultValue="Software su misura (app / SaaS / gestionale)">
          <option>Software su misura (app / SaaS / gestionale)</option>
          <option>Automazione AI &amp; agenti</option>
          <option>Infrastruttura IT</option>
          <option>Integrazione enterprise (EAI/BPM)</option>
          <option>Altro / non lo so ancora</option>
        </select>
      </div>
      <div>
        <label htmlFor="messaggio" className="form-label">Messaggio *</label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          className="field mt-1.5"
          required
          placeholder="Raccontaci in due righe cosa vorresti fare…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-[#04211F] shadow-[0_12px_30px_rgba(15,181,174,0.3)] transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? "Invio…" : "Invia richiesta"}
      </button>
      <p
        className={
          status === "ok"
            ? "text-xs text-emerald-600"
            : status === "error"
              ? "text-xs text-rose-600"
              : "text-xs text-slate-400"
        }
      >
        {note || "Inviando accetti di essere ricontattato in merito alla tua richiesta."}
      </p>
    </form>
  );
}
