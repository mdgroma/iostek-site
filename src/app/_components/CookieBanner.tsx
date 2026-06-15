"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "iostek_cookie_consent_v1";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* storage non disponibile */
    }
    const reopen = () => {
      try {
        localStorage.removeItem(KEY);
      } catch {
        /* noop */
      }
      setOpen(true);
    };
    window.addEventListener("iostek:cookie", reopen);
    return () => window.removeEventListener("iostek:cookie", reopen);
  }, []);

  function choose(accepted: boolean) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ accepted, ts: Date.now() }));
    } catch {
      /* noop */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Informativa cookie"
      className="fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-xl rounded-2xl border border-white/12 bg-ink p-5 text-paper shadow-[0_24px_60px_rgba(8,15,35,0.45)]"
    >
      <div className="text-[15px] font-semibold">Cookie e privacy</div>
      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300">
        Questo sito usa solo strumenti tecnici necessari al funzionamento e{" "}
        <strong>non</strong> usa cookie di profilazione o di tracciamento. Dettagli nella{" "}
        <Link href="/cookie" className="text-[#2BD4CD] underline">
          Cookie Policy
        </Link>{" "}
        e nella{" "}
        <Link href="/privacy" className="text-[#2BD4CD] underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3.5 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => choose(true)}
          className="min-w-[130px] flex-1 rounded-xl bg-accent px-3.5 py-2.5 text-sm font-semibold text-[#04211F]"
        >
          Accetta
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="min-w-[130px] flex-1 rounded-xl border border-white/25 px-3.5 py-2.5 text-sm font-semibold text-paper"
        >
          Solo necessari
        </button>
      </div>
    </div>
  );
}
