import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/* Lenis inertia scrolling — the single biggest contributor to the "cinematic"
   feel. Wheel input is eased with a gentle lerp so the page glides instead of
   jumping. Disabled entirely for reduced-motion users. */
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    window.__lenis = lenis;

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
