// Visualizzazione hero: rete di sistemi (icone) collegati al core "AI".
// SVG statico (animazioni via CSS in globals.css + animateMotion) iniettato come
// markup grezzo per evitare la conversione manuale di tutti gli attributi in JSX.

const VIZ_SVG = `
<svg viewBox="0 0 420 380" class="w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="core" cx="50%" cy="42%" r="58%"><stop offset="0%" stop-color="#5fe6df"/><stop offset="60%" stop-color="#0FB5AE"/><stop offset="100%" stop-color="#0a7e78"/></radialGradient>
    <filter id="ds" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#131922" flood-opacity="0.10"/></filter>
    <g id="ic-grid" stroke="#0FB5AE" stroke-width="1.5" fill="none"><rect x="-8" y="-8" width="7" height="7" rx="1.6"/><rect x="1" y="-8" width="7" height="7" rx="1.6"/><rect x="-8" y="1" width="7" height="7" rx="1.6"/><rect x="1" y="1" width="7" height="7" rx="1.6"/></g>
    <g id="ic-mail" stroke="#0FB5AE" stroke-width="1.5" fill="none" stroke-linejoin="round"><rect x="-9" y="-6.5" width="18" height="13" rx="2.5"/><path d="M-9 -4.5 L0 2 L9 -4.5"/></g>
    <g id="ic-doc" stroke="#0FB5AE" stroke-width="1.5" fill="none" stroke-linejoin="round" stroke-linecap="round"><path d="M-6 -9 H2.5 L7 -4.5 V9 H-6 Z"/><path d="M2.5 -9 V-4.5 H7"/><path d="M-2.5 1 H3.5 M-2.5 5 H3.5"/></g>
    <g id="ic-db" stroke="#0FB5AE" stroke-width="1.5" fill="none"><path d="M-7 -6 C-7 -8.6 7 -8.6 7 -6 L7 6 C7 8.6 -7 8.6 -7 6 Z"/><path d="M-7 -6 C-7 -3.4 7 -3.4 7 -6"/><path d="M-7 0 C-7 2.6 7 2.6 7 0"/></g>
    <g id="ic-crm" stroke="#0FB5AE" stroke-width="1.5" fill="none" stroke-linecap="round"><circle cx="-4" cy="-3.5" r="3.1"/><path d="M-9.5 7 C-9.5 2.5 1.5 2.5 1.5 7"/><circle cx="5.2" cy="-2" r="2.5"/><path d="M2.5 7 C2.5 3.6 9.7 3.6 9.7 7"/></g>
  </defs>

  <circle cx="210" cy="186" r="50" fill="#0FB5AE" opacity="0.08"/>

  <g stroke="#0FB5AE" stroke-width="1.4" opacity="0.30">
    <path id="e1" d="M84 80 L210 186"/>
    <path id="e2" d="M336 80 L210 186"/>
    <path id="e3" d="M74 250 L210 186"/>
    <path id="e4" d="M346 250 L210 186"/>
    <path id="e5" d="M210 316 L210 186"/>
  </g>

  <circle class="spin" cx="210" cy="186" r="60" fill="none" stroke="#0FB5AE" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="1.5 9"/>
  <circle class="ring" cx="210" cy="186" r="28" fill="none" stroke="#0FB5AE" stroke-opacity="0.5" stroke-width="1.3"/>
  <circle class="ring" cx="210" cy="186" r="28" fill="none" stroke="#0FB5AE" stroke-opacity="0.5" stroke-width="1.3" style="animation-delay:-1.7s"/>

  <g fill="#0FB5AE">
    <circle r="3"><animateMotion dur="2.3s" begin="0s"   repeatCount="indefinite"><mpath href="#e1"/></animateMotion></circle>
    <circle r="3"><animateMotion dur="2.3s" begin="0.5s" repeatCount="indefinite"><mpath href="#e2"/></animateMotion></circle>
    <circle r="3"><animateMotion dur="2.3s" begin="1s"   repeatCount="indefinite"><mpath href="#e3"/></animateMotion></circle>
    <circle r="3"><animateMotion dur="2.3s" begin="1.5s" repeatCount="indefinite"><mpath href="#e4"/></animateMotion></circle>
    <circle r="3"><animateMotion dur="2.3s" begin="0.8s" repeatCount="indefinite"><mpath href="#e5"/></animateMotion></circle>
  </g>

  <circle cx="210" cy="186" r="26" fill="url(#core)"/>
  <text x="210" y="190" text-anchor="middle" font-family="'IBM Plex Sans', sans-serif" font-size="12" font-weight="600" fill="#fff">AI</text>

  <g>
    <g transform="translate(84,80)"><rect x="-18" y="-18" width="36" height="36" rx="11" fill="#fff" stroke="#0FB5AE" stroke-opacity="0.16" filter="url(#ds)"/><use href="#ic-grid"/></g>
    <g transform="translate(336,80)"><rect x="-18" y="-18" width="36" height="36" rx="11" fill="#fff" stroke="#0FB5AE" stroke-opacity="0.16" filter="url(#ds)"/><use href="#ic-mail"/></g>
    <g transform="translate(74,250)"><rect x="-18" y="-18" width="36" height="36" rx="11" fill="#fff" stroke="#0FB5AE" stroke-opacity="0.16" filter="url(#ds)"/><use href="#ic-doc"/></g>
    <g transform="translate(346,250)"><rect x="-18" y="-18" width="36" height="36" rx="11" fill="#fff" stroke="#0FB5AE" stroke-opacity="0.16" filter="url(#ds)"/><use href="#ic-db"/></g>
    <g transform="translate(210,316)"><rect x="-18" y="-18" width="36" height="36" rx="11" fill="#fff" stroke="#0FB5AE" stroke-opacity="0.16" filter="url(#ds)"/><use href="#ic-crm"/></g>
  </g>

  <g font-family="'IBM Plex Mono', monospace" font-size="11" font-weight="500" letter-spacing="0.5" fill="#8A94A1">
    <text x="84"  y="48"  text-anchor="middle">GESTIONALE</text>
    <text x="336" y="48"  text-anchor="middle">EMAIL</text>
    <text x="74"  y="284" text-anchor="middle">DOCUMENTI</text>
    <text x="346" y="284" text-anchor="middle">DATABASE</text>
    <text x="210" y="350" text-anchor="middle">CRM</text>
  </g>
</svg>`;

export default function HeroViz() {
  return (
    <div className="relative hidden lg:block">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-ink/5 bg-white p-5 ring-card">
        <div dangerouslySetInnerHTML={{ __html: VIZ_SVG }} />
        <p className="px-2 pb-1 text-center text-xs text-slate-500">
          Una tua AI, collegata ai sistemi che usi ogni giorno.
        </p>
      </div>
    </div>
  );
}
