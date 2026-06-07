"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RevealInit() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("section h2, .ring-card").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
