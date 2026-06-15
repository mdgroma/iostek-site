"use client";

import { useMemo, useState } from "react";

const MIN = 2000;
const MAX = 25000;
const fmt = (n: number) => "€ " + Math.round(n).toLocaleString("it-IT");

// Calcolatore del contributo regionale (signature della landing).
export default function BandoCalculator() {
  const [spesa, setSpesa] = useState(12000);

  const { grant, you, pct, fill, capHit } = useMemo(() => {
    const grant = Math.min(spesa * 0.75, 10000);
    const you = spesa - grant;
    const pct = Math.round((grant / spesa) * 100);
    const fill = ((spesa - MIN) / (MAX - MIN)) * 100;
    return { grant, you, pct, fill, capHit: spesa * 0.75 > 10000 };
  }, [spesa]);

  return (
    <div className="calc" role="group" aria-label="Calcolatore del contributo regionale">
      <span className="cap">Calcola il tuo costo reale</span>
      <h3>Quanto ti costa davvero un progetto AI</h3>
      <div className="spesa-val">{fmt(spesa)}</div>
      <div className="spesa-lab">Spesa stimata del progetto</div>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={500}
        value={spesa}
        onChange={(e) => setSpesa(+e.target.value)}
        style={{ ["--fill" as string]: fill + "%" }}
        aria-label="Spesa stimata del progetto in euro"
      />
      <div className="splitbar" aria-hidden="true">
        <div className="seg-grant" style={{ width: pct + "%" }} />
      </div>
      <div className="rows">
        <div className="row grant">
          <span className="k">
            <span className="dot" style={{ background: "var(--accent)" }} />
            Contributo Regione (75%, max 10k)
          </span>
          <span className="v">{fmt(grant)}</span>
        </div>
        <div className="row you">
          <span className="k">
            <span className="dot" style={{ background: "#5b6877" }} />
            Quanto paghi tu
          </span>
          <span className="v">{fmt(you)}</span>
        </div>
      </div>
      <p className={capHit ? "note cap-hit" : "note"}>
        {capHit
          ? "Hai raggiunto il massimale: oltre ~13.333 € di spesa il contributo resta fisso a 10.000 €, il resto è a tuo carico."
          : "Stima indicativa. Il contributo a fondo perduto vale il 75% della spesa ammissibile fino a 10.000 €."}
      </p>
    </div>
  );
}
