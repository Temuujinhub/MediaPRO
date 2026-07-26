import { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /* max tilt in degrees */
  max?: number;
}

/* 3D perspective tilt that follows the cursor, plus a glow spot tracked via
   CSS vars (--mx/--my) consumed by .tilt-glow. Pointer-only; touch and
   reduced-motion users get a static card. */
const TiltCard = ({ children, className = '', max = 5 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-3px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  };

  return (
    <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="tilt-glow" aria-hidden="true" />
      {children}
    </div>
  );
};

export default TiltCard;
