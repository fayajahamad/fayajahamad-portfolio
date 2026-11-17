"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: {children: ReactNode; className?: string; delay?: number}) {
  const el = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!el.current || typeof IntersectionObserver === "undefined") { return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.09 });
    observer.observe(el.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={el} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
