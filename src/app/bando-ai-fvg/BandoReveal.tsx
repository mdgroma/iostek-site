"use client";

import { useEffect } from "react";

// Reveal-on-scroll per gli elementi .reveal della landing del bando.
export default function BandoReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    document.querySelectorAll(".bando .reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
