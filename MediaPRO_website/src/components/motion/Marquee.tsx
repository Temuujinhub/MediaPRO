interface MarqueeProps {
  items: string[];
  /* seconds for one full loop */
  speed?: number;
}

/* Infinite horizontal ticker of partner names with soft edge fades —
   content is duplicated so the loop is seamless. */
const Marquee = ({ items, speed = 34 }: MarqueeProps) => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
      {[0, 1].map((copy) => (
        <div key={copy} className="marquee-group">
          {items.map((item) => (
            <span key={`${copy}-${item}`} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
