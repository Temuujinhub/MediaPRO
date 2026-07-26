import { useEffect, useRef } from 'react';

interface ParallaxProps {
  children?: React.ReactNode;
  className?: string;
  /* -1..1 — negative drifts up as you scroll down, positive drifts down */
  speed?: number;
}

/* Scroll-linked parallax drift. Offset is computed from the element's
   distance to the viewport center and applied on rAF — no re-renders. */
const Parallax = ({ children, className = '', speed = -0.15 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${center * speed}px, 0)`;
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
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
