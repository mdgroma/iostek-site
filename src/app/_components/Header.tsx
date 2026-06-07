"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/servizi", label: "Servizi" },
  { href: "/#ai", label: "AI in azienda" },
  { href: "/#esperienza", label: "Esperienza" },
  { href: "/#mandascan", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="iOStek — home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-500 md:flex">
          {NAV.map((i) => {
            const active = i.href.startsWith("/") && !i.href.includes("#") && path === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={active ? "text-ink" : "transition-colors hover:text-ink"}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contatti"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
        >
          Parliamone
        </Link>
      </div>
    </header>
  );
}
