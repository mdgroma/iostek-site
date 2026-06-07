"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl border-t border-ink/10 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Logo size={24} textClass="text-lg" />
            <p className="mt-2 text-sm text-stone-500">
              Studio di consulenza software &amp; IT — di Marco De Girolamo
            </p>
          </div>
          <div className="text-sm text-stone-500">
            <div>marco@iostek.com</div>
            <div className="mt-1">P.IVA 10552601006</div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-ink/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/cookie" className="hover:text-ink">Cookie</Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("iostek:cookie"))}
              className="hover:text-ink"
            >
              Gestisci cookie
            </button>
          </div>
          <p className="text-xs text-stone-400">© 2026 iOStek. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
