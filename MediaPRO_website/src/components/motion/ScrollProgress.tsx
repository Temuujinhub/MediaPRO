import { useEffect, useRef } from 'react';

/* Thin gradient bar along the top edge that fills as you scroll — a film
   timeline for the page. Width is driven directly (no React re-renders). */
const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      rafId = 0;
    };
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
};

export default ScrollProgress;
