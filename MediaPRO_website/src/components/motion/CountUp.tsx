import { useEffect, useState } from 'react';
import { useInViewOnce } from './useInViewOnce';

/* Parses display values like "10+", "99.9%", "1M+", "3,500+" and counts up
   to them with an ease-out curve once scrolled into view. */
const parseValue = (value: string) => {
  const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const target = parseFloat(num.replace(/,/g, ''));
  if (Number.isNaN(target)) return null;
  const decimals = num.includes('.') ? (num.split('.')[1] || '').length : 0;
  const grouped = num.includes(',');
  return { prefix, target, suffix, decimals, grouped };
};

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

const CountUp = ({ value, duration = 1600 }: { value: string; duration?: number }) => {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>(0.6);
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (!inView || !parsed) {
      if (!parsed) setDisplay(value);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    let rafId: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const current = parsed.target * easeOutExpo(t);
      let num = current.toFixed(parsed.decimals);
      if (parsed.grouped) num = Number(num).toLocaleString('en-US');
      setDisplay(`${parsed.prefix}${num}${parsed.suffix}`);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
};

export default CountUp;
