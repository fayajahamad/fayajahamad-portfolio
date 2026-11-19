"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

// Only presentational elements are enhanced. No content, controls, or
// navigation destinations are modified.
const REVEAL_SELECTOR = [
  ".v4-focus-section .v4-section-head",
  ".v4-focus-section .v4-focus-card",
  ".v4-toolkit-section .v4-section-head",
  ".v4-toolkit-section .v4-toolkit-card",
  ".v4-contact-band .v4-contact-inner",
  ".page-intro.m3-projects-intro",
  ".m5-about-section .about-prose",
  ".m5-contact-section .contact-methods",
].join(", ");

export function PremiumSiteMotion() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (reducedMotion || typeof IntersectionObserver === "undefined") return;

    const running = new Set<Animation>();
    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const element = entry.target as HTMLElement;
          if (element.dataset.pmRevealed === "true") continue;
          element.dataset.pmRevealed = "true";
          if (document.hidden || !element.isConnected) continue;

          const index = Array.from(elements).indexOf(element);
          const offset = index % 4;
          const effect = element.animate(
            [
              { opacity: 0.16, transform: "translate3d(0, 34px, 0) scale(.988)" },
              { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
            ],
            {
              duration: 740,
              delay: offset * 85,
              easing: "cubic-bezier(.2, .72, .22, 1)",
              fill: "none",
            },
          );
          running.add(effect);
          effect.addEventListener("finish", () => running.delete(effect), { once: true });
          effect.addEventListener("cancel", () => running.delete(effect), { once: true });
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    // Pointer-driven depth is intentionally limited to the homepage portrait.
    // The glow is decorative; keyboard, text, and click targets never move.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const hero = pathname === "/" && finePointer
      ? document.querySelector<HTMLElement>(".motion-home-hero")
      : null;
    const portrait = hero?.querySelector<HTMLElement>(".v5-portrait-composition");
    let decorativeGlow: HTMLElement | null = null;
    let animationFrame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (!hero || !portrait || event.pointerType !== "mouse") return;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      const bounds = hero.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        hero.style.setProperty("--pm-pointer-x", `${Math.round(x * 100)}%`);
        hero.style.setProperty("--pm-pointer-y", `${Math.round(y * 100)}%`);
        portrait.style.setProperty("--pm-rotate-x", `${((0.5 - y) * 7).toFixed(2)}deg`);
        portrait.style.setProperty("--pm-rotate-y", `${((x - 0.5) * 9).toFixed(2)}deg`);
      });
    };
    const onPointerLeave = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      hero?.style.removeProperty("--pm-pointer-x");
      hero?.style.removeProperty("--pm-pointer-y");
      portrait?.style.removeProperty("--pm-rotate-x");
      portrait?.style.removeProperty("--pm-rotate-y");
    };

    if (hero && portrait) {
      decorativeGlow = document.createElement("div");
      decorativeGlow.className = "pm-hero-light";
      decorativeGlow.setAttribute("aria-hidden", "true");
      hero.appendChild(decorativeGlow);
      hero.addEventListener("pointermove", onPointerMove, { passive: true });
      hero.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      observer.disconnect();
      running.forEach((effect) => effect.cancel());
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      hero?.removeEventListener("pointermove", onPointerMove);
      hero?.removeEventListener("pointerleave", onPointerLeave);
      onPointerLeave();
      decorativeGlow?.remove();
    };
  }, [pathname, reducedMotion]);

  return (
    <motion.div
      aria-hidden="true"
      className="pm-site-progress"
      style={{ scaleX: reducedMotion ? scrollYProgress : smoothProgress }}
    />
  );
}
