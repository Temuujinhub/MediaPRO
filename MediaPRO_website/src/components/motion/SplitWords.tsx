import { Fragment } from 'react';
import { useInViewOnce } from './useInViewOnce';

interface SplitWordsProps {
  text: string;
  className?: string;
  /* ms before the first word starts */
  delay?: number;
  /* ms between each word */
  step?: number;
}

/* Cinematic headline reveal: each word rises out of its own overflow mask,
   one after another — the signature "film title" effect. */
const SplitWords = ({ text, className = '', delay = 0, step = 70 }: SplitWordsProps) => {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>(0.4);
  const words = text.split(' ');

  return (
    <span ref={ref} className={`split-words ${inView ? 'is-in' : ''} ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="split-word" aria-hidden="true">
            <span
              className="split-word-inner"
              style={{ transitionDelay: `${delay + i * step}ms` }}
            >
              {word}
            </span>
          </span>
          {/* the space must live OUTSIDE the overflow mask or it collapses */}
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  );
};

export default SplitWords;
