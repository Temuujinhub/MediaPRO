/* Stylized micro-UI previews for portfolio products. Each scene is an
   abstract, animated recreation of the product's real interface — rendered
   with pure divs so it stays crisp at any size inside the 3D browser frame.
   Bars, bubbles, and dots animate in when the parent .reveal-stagger enters
   view (see the .pv-* rules in index.css). */

export type PreviewScene =
  | 'roster'
  | 'pipeline'
  | 'hr'
  | 'chat'
  | 'parking'
  | 'map'
  | 'gauges'
  | 'analytics'
  | 'boarding';

const ACCENTS: Record<string, string> = {
  blue: '#38bdf8',
  green: '#34d399',
  purple: '#a5b4fc',
  orange: '#fb923c',
};

const Sidebar = ({ accent }: { accent: string }) => (
  <div className="pv-sidebar">
    <div className="pv-logo" style={{ background: accent }} />
    {[44, 36, 40, 30, 38].map((w, i) => (
      <div key={i} className="pv-navline" style={{ width: `${w}%`, background: i === 0 ? accent : undefined, opacity: i === 0 ? 0.9 : undefined }} />
    ))}
  </div>
);

const StatTiles = ({ accent, count = 4 }: { accent: string; count?: number }) => (
  <div className="pv-tiles">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="pv-tile">
        <div className="pv-tile-num" style={{ background: i === 0 ? accent : 'rgba(255,255,255,0.35)' }} />
        <div className="pv-tile-label" />
      </div>
    ))}
  </div>
);

const Bars = ({ accent, heights, flat }: { accent: string; heights: number[]; flat?: boolean }) => (
  <div className="pv-bars">
    {heights.map((h, i) => (
      <div
        key={i}
        className="pv-bar"
        style={{
          height: `${h}%`,
          background: flat ? 'rgba(255,255,255,0.18)' : accent,
          opacity: flat ? 1 : 0.55 + (h / 100) * 0.45,
          animationDelay: `${300 + i * 90}ms`,
        }}
      />
    ))}
  </div>
);

const Rows = ({ accent, count = 4, pills = true }: { accent: string; count?: number; pills?: boolean }) => (
  <div className="pv-rows">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="pv-row" style={{ animationDelay: `${250 + i * 110}ms` }}>
        <div className="pv-avatar" style={{ background: i % 2 ? 'rgba(255,255,255,0.14)' : accent }} />
        <div className="pv-row-lines">
          <div className="pv-line" style={{ width: `${58 - i * 6}%` }} />
          <div className="pv-line pv-line-dim" style={{ width: `${34 + i * 4}%` }} />
        </div>
        {pills && (
          <div
            className="pv-pill"
            style={{ background: i % 3 === 0 ? 'rgba(251,191,36,0.35)' : `${accent}55`, borderColor: i % 3 === 0 ? 'rgba(251,191,36,0.6)' : accent }}
          />
        )}
      </div>
    ))}
  </div>
);

const Scene = ({ scene, accent }: { scene: PreviewScene; accent: string }) => {
  switch (scene) {
    case 'analytics': // INTELLEXI — stat tiles + segment bar chart
      return (
        <>
          <StatTiles accent={accent} />
          <div className="pv-panel pv-grow">
            <div className="pv-panel-title" style={{ background: accent }} />
            <Bars accent={accent} heights={[42, 88, 74, 92, 30, 58, 66]} />
          </div>
        </>
      );
    case 'boarding': // Voyage — flight strip + manifest rows + boarding progress
      return (
        <>
          <div className="pv-tiles">
            {['OT-102', '4A', '42/128'].map((t, i) => (
              <div key={t} className="pv-tile pv-tile-text">
                <span style={{ color: i === 0 ? accent : 'rgba(255,255,255,0.85)' }}>{t}</span>
                <div className="pv-tile-label" />
              </div>
            ))}
          </div>
          <div className="pv-progress">
            <div className="pv-progress-fill" style={{ background: accent }} />
          </div>
          <div className="pv-fill">
            <Rows accent={accent} count={4} />
          </div>
        </>
      );
    case 'chat': // Chatbot.mn — conversation bubbles
      return (
        <div className="pv-chat">
          <div className="pv-bubble pv-bubble-left" style={{ animationDelay: '250ms' }} />
          <div className="pv-bubble pv-bubble-right" style={{ background: `${accent}cc`, animationDelay: '450ms' }} />
          <div className="pv-bubble pv-bubble-left pv-bubble-wide" style={{ animationDelay: '650ms' }} />
          <div className="pv-bubble pv-bubble-right pv-bubble-sm" style={{ background: `${accent}cc`, animationDelay: '850ms' }} />
          <div className="pv-bubble pv-bubble-left" style={{ animationDelay: '1050ms' }} />
          <div className="pv-bubble pv-bubble-right pv-bubble-wide" style={{ background: `${accent}cc`, animationDelay: '1250ms' }} />
          <div className="pv-chat-input">
            <div className="pv-line pv-line-dim" style={{ width: '40%' }} />
            <div className="pv-send" style={{ background: accent }} />
          </div>
        </div>
      );
    case 'map': // Fleex — live fleet map with route + vehicle dots
      return (
        <div className="pv-map">
          <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="pv-map-svg">
            <path d="M0 30 H200 M0 62 H200 M40 0 V100 M104 0 V100 M158 0 V100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <path d="M10 82 C 50 70, 70 40, 104 44 S 170 28, 194 14" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="6 5" className="pv-route" />
          </svg>
          {[
            { x: '18%', y: '72%' }, { x: '48%', y: '44%' }, { x: '72%', y: '35%' }, { x: '90%', y: '18%' },
          ].map((p, i) => (
            <span key={i} className="pv-dot" style={{ left: p.x, top: p.y, background: accent, animationDelay: `${i * 0.5}s` }} />
          ))}
          <div className="pv-map-card">
            <div className="pv-line" style={{ width: '70%' }} />
            <div className="pv-line pv-line-dim" style={{ width: '50%' }} />
          </div>
        </div>
      );
    case 'gauges': // Flux — fuel tank levels
      return (
        <>
          <StatTiles accent={accent} count={3} />
          <div className="pv-tanks pv-grow">
            {[72, 45, 88, 30].map((lvl, i) => (
              <div key={i} className="pv-tank">
                <div
                  className="pv-tank-fill"
                  style={{ height: `${lvl}%`, background: lvl < 35 ? '#f87171' : accent, animationDelay: `${300 + i * 120}ms` }}
                />
              </div>
            ))}
          </div>
        </>
      );
    case 'parking': // Easy Parking — weekly revenue bars + occupancy meter
      return (
        <>
          <StatTiles accent={accent} count={3} />
          <div className="pv-panel pv-grow">
            <div className="pv-panel-title" style={{ background: accent }} />
            <Bars accent={accent} heights={[80, 62, 55, 48, 38, 20, 66]} />
          </div>
          <div className="pv-progress">
            <div className="pv-progress-fill" style={{ background: accent, width: '32%' }} />
          </div>
        </>
      );
    case 'hr': // OnlineHR — staff rows + payroll mini-bars
      return (
        <>
          <Rows accent={accent} count={3} />
          <div className="pv-panel pv-grow">
            <div className="pv-panel-title" style={{ background: accent }} />
            <Bars accent={accent} heights={[55, 70, 45, 85, 60, 75, 50]} />
          </div>
        </>
      );
    case 'pipeline': // Oasis — multi-step approval flow
      return (
        <>
          <div className="pv-pipeline">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="pv-step" style={{ animationDelay: `${250 + i * 160}ms` }}>
                <div className="pv-step-dot" style={{ background: i < 3 ? accent : 'rgba(255,255,255,0.2)' }} />
                {i < 3 && <div className="pv-step-link" style={{ background: `${accent}66` }} />}
              </div>
            ))}
          </div>
          <div className="pv-fill">
            <Rows accent={accent} count={4} pills={false} />
          </div>
        </>
      );
    case 'roster': // MACTR — shift roster blocks
    default:
      return (
        <>
          <StatTiles accent={accent} />
          <div className="pv-roster pv-grow">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className="pv-cell"
                style={{
                  background: [2, 5, 8, 9, 13, 16, 19, 22, 24, 27].includes(i) ? `${accent}99` : 'rgba(255,255,255,0.08)',
                  animationDelay: `${200 + i * 30}ms`,
                }}
              />
            ))}
          </div>
        </>
      );
  }
};

const ProductPreview = ({ scene, accentColor }: { scene: PreviewScene; accentColor: string }) => {
  const accent = ACCENTS[accentColor] || ACCENTS.blue;
  return (
    <div className="pv-screen" aria-hidden="true">
      <Sidebar accent={accent} />
      <div className="pv-content">
        <Scene scene={scene} accent={accent} />
      </div>
    </div>
  );
};

export default ProductPreview;
