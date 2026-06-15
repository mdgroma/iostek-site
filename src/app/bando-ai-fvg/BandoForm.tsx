"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

// Tracciamento Umami (cookieless): no-op se Umami non è caricato.
function track(event: string) {
  (window as unknown as { umami?: { track: (e: string) => void } }).umami?.track(event);
}

// Form "AI Check" della landing → invia a /api/contact (Resend), come il sito.
export default function BandoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const nome = data.nome?.trim() || "";
    const email = data.email?.trim() || "";
    if (!nome || !email) {
      setStatus("error");
      setNote("Inserisci nome/attività ed email.");
      return;
    }

    setStatus("sending");
    setNote("");
    const messaggio =
      `Richiesta AI Check — Bando IA FVG 2026\n` +
      `Tipo attività: ${data.tipo?.trim() || "—"}\n\n` +
      `Cosa fa perdere più tempo:\n${data.messaggio?.trim() || "—"}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          tipo: data.tipo,
          messaggio,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("ok");
      setNote("Grazie! Ti ricontattiamo per fissare l'AI Check entro un giorno lavorativo.");
      track("bando-form-submit");
    } catch {
      setStatus("error");
      setNote("Invio non riuscito. Scrivici direttamente a marco@iostek.com.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="b-nome">Nome e attività</label>
        <input id="b-nome" name="nome" type="text" placeholder="Mario Rossi — Studio Rossi" required />
      </div>
      <div className="form-field">
        <label htmlFor="b-email">Email</label>
        <input id="b-email" name="email" type="email" placeholder="mario@studio.it" required />
      </div>
      <div className="form-field">
        <label htmlFor="b-tipo">Tipo di attività</label>
        <select id="b-tipo" name="tipo" defaultValue="Commercialista / Studio">
          <option>Commercialista / Studio</option>
          <option>Avvocato</option>
          <option>Amministratore di condominio</option>
          <option>PMI / Impresa</option>
          <option>Libero professionista</option>
          <option>Altro</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="b-msg">Cosa ti fa perdere più tempo? (facoltativo)</label>
        <textarea
          id="b-msg"
          name="messaggio"
          placeholder="Es. preparo preventivi a mano recuperando prezzi da progetti vecchi..."
        />
      </div>
      <button
        type="submit"
        className="btn"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "sending"}
        data-umami-event="bando-form-click"
      >
        {status === "sending" ? "Invio…" : "Invia e prenota l'AI Check"} <span className="arr">&rarr;</span>
      </button>
      <p
        className="form-status"
        style={{
          color:
            status === "ok" ? "var(--accent-deep)" : status === "error" ? "#c0392b" : "var(--ink-faint)",
        }}
      >
        {note || "Inviando accetti di essere ricontattato in merito alla tua richiesta."}
      </p>
    </form>
  );
}
