import type { CSSProperties } from 'react';

/* Fine-line "blueprint" illustrations for portfolio products. Each scene is a
   hand-drawn technical sketch themed to the product, rendered as thin SVG
   strokes that draw themselves in when the card scrolls into view
   (see the .la-* rules in index.css). All paths carry pathLength={1} so a
   single dasharray animation works for every shape. */

export type ArtScene =
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

/* Draw-in stroke with a staggered delay (seconds) */
const d = (delay: number): { className: string; pathLength: number; style: CSSProperties } => ({
  className: 'la-draw',
  pathLength: 1,
  style: { animationDelay: `${delay}s` },
});

/* Pop-in filled dot */
const p = (delay: number): { className: string; style: CSSProperties } => ({
  className: 'la-pop',
  style: { animationDelay: `${delay}s` },
});

const Scene = ({ scene, accent }: { scene: ArtScene; accent: string }) => {
  switch (scene) {
    case 'boarding': // Voyage — paper plane, flight path, globe, boarding pass
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* paper plane */}
            <path d="M74 156 L206 94 L152 168 L132 140 Z" {...d(0.2)} />
            <path d="M206 94 L132 140" {...d(0.5)} />
            {/* flight path */}
            <path d="M212 88 C 258 62, 310 58, 364 38" strokeDasharray="5 6" {...d(0.7)} />
            {/* boarding pass */}
            <rect x="42" y="42" width="92" height="50" rx="7" {...d(0.4)} />
            <path d="M104 42 V92" strokeDasharray="3 4" {...d(0.7)} />
            <path d="M112 52 V82 M118 52 V82 M124 52 V82" {...d(0.9)} strokeWidth="1.1" />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round">
            {/* globe */}
            <circle cx="322" cy="152" r="40" {...d(0.5)} />
            <ellipse cx="322" cy="152" rx="17" ry="40" {...d(0.8)} />
            <path d="M284 142 H360 M286 164 H358" {...d(1)} />
            {/* pass lines */}
            <path d="M52 56 H92 M52 66 H84 M52 76 H90" {...d(1.1)} />
            {/* runway */}
            <path d="M40 196 H196" {...d(0.3)} />
            <path d="M60 196 H80 M100 196 H120 M140 196 H160" strokeWidth="2" {...d(0.6)} />
          </g>
          <circle cx="364" cy="38" r="3" fill={accent} {...p(1.5)} />
          <circle cx="258" cy="66" r="2" fill={accent} {...p(1.3)} />
        </>
      );
    case 'roster': // MACTR — open-pit terraces, plane shuttle, camp, bus
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* open-pit terraces */}
            <path d="M28 118 Q104 118 118 160 Q126 184 104 196 H50" {...d(0.2)} />
            <path d="M46 132 Q96 132 108 164 Q112 178 98 184 H62" {...d(0.45)} />
            <path d="M62 146 Q88 146 96 166 Q98 172 90 174 H70" {...d(0.7)} />
            {/* shuttle plane */}
            <path d="M226 58 L262 46 L246 66 L238 58 Z" {...d(0.9)} />
            <path d="M150 92 C 180 74, 202 66, 222 60" strokeDasharray="5 6" {...d(0.6)} />
            {/* bus */}
            <rect x="252" y="152" width="82" height="34" rx="8" {...d(0.5)} />
            <path d="M264 152 V168 M286 152 V168 M308 152 V168 M252 168 H334" {...d(0.8)} strokeWidth="1.1" />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* mountain ridge */}
            <path d="M232 128 L268 88 L296 116 L322 78 L368 128" {...d(0.35)} />
            {/* camp huts */}
            <path d="M348 178 v-16 l12 -10 l12 10 v16 z M348 196 h68 M382 178 v-14 l10 -8 l10 8 v14 z" {...d(1)} />
            {/* road */}
            <path d="M240 196 H340" strokeDasharray="4 6" {...d(1.1)} />
          </g>
          <circle cx="278" cy="192" r="5" stroke={accent} fill="none" strokeWidth="1.4" className="la-draw" pathLength={1} style={{ animationDelay: '1s' }} />
          <circle cx="312" cy="192" r="5" stroke={accent} fill="none" strokeWidth="1.4" className="la-draw" pathLength={1} style={{ animationDelay: '1.1s' }} />
          <circle cx="150" cy="92" r="3" fill={accent} {...p(1.4)} />
        </>
      );
    case 'pipeline': // Oasis — document flowing through approvals to a seal
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* document with folded corner */}
            <path d="M56 58 H122 L142 78 V172 H56 Z" {...d(0.2)} />
            <path d="M122 58 V78 H142" {...d(0.5)} />
            {/* approval nodes */}
            <circle cx="208" cy="114" r="17" {...d(0.7)} />
            <path d="M200 114 l6 6 l11 -12" {...d(1)} />
            <circle cx="276" cy="114" r="17" {...d(0.9)} />
            <path d="M268 114 l6 6 l11 -12" {...d(1.2)} />
            {/* seal */}
            <circle cx="348" cy="114" r="26" {...d(1.1)} />
            <circle cx="348" cy="114" r="17" {...d(1.3)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round">
            {/* text lines */}
            <path d="M70 84 H126 M70 98 H118 M70 112 H126 M70 126 H110" {...d(0.6)} />
            {/* flow arrows */}
            <path d="M148 114 H186" strokeDasharray="4 5" {...d(0.8)} />
            <path d="M228 114 H254" strokeDasharray="4 5" {...d(1)} />
            <path d="M296 114 H318" strokeDasharray="4 5" {...d(1.2)} />
            {/* gear */}
            <circle cx="330" cy="44" r="11" {...d(1.4)} />
            <path d="M330 29 v6 M330 53 v6 M315 44 h6 M339 44 h6 M319 33 l4 4 M337 51 l4 4 M341 33 l-4 4 M323 51 l-4 4" {...d(1.6)} />
          </g>
          <path d="M340 106 l6 8 l12 -14" stroke={accent} fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="la-draw" pathLength={1} style={{ animationDelay: '1.5s' }} />
        </>
      );
    case 'hr': // OnlineHR — fingerprint arcs + ID card + clock
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* fingerprint */}
            <path d="M78 148 a44 44 0 1 1 88 0" {...d(0.2)} />
            <path d="M92 148 a30 30 0 1 1 60 0 v14" {...d(0.45)} />
            <path d="M106 148 a16 16 0 1 1 32 0 v26" {...d(0.7)} />
            <path d="M122 148 a2 2 0 1 1 0.1 0 v18" {...d(0.95)} />
            <path d="M78 148 v16 M92 148 v22 M166 148 v16" {...d(1.1)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* ID card */}
            <rect x="228" y="62" width="128" height="86" rx="10" {...d(0.4)} />
            <rect x="242" y="78" width="34" height="38" rx="5" {...d(0.7)} />
            <circle cx="259" cy="90" r="6" {...d(0.95)} />
            <path d="M248 110 a11 8 0 0 1 22 0" {...d(1.1)} />
            <path d="M288 84 H342 M288 98 H330 M288 112 H342 M242 130 H342" {...d(1.2)} />
            {/* clock */}
            <circle cx="316" cy="182" r="16" {...d(1.4)} />
            <path d="M316 172 v10 l8 5" {...d(1.6)} />
          </g>
          <path d="M172 118 C 196 104, 208 100, 224 96" stroke={accent} strokeDasharray="4 5" fill="none" strokeWidth="1.2" className="la-draw" pathLength={1} style={{ animationDelay: '1.3s' }} />
          <circle cx="224" cy="96" r="2.5" fill={accent} {...p(1.7)} />
        </>
      );
    case 'chat': // Chatbot.mn — robot head + chat bubbles + circuit traces
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* robot head */}
            <rect x="156" y="76" width="96" height="76" rx="16" {...d(0.2)} />
            <circle cx="186" cy="108" r="7" {...d(0.6)} />
            <circle cx="222" cy="108" r="7" {...d(0.7)} />
            <path d="M188 132 q16 10 32 0" {...d(0.9)} />
            {/* antenna */}
            <path d="M204 76 V58" {...d(0.5)} />
            <circle cx="204" cy="52" r="5" {...d(0.65)} />
            {/* ears */}
            <path d="M156 104 h-10 v22 h10 M252 104 h10 v22 h-10" {...d(0.8)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* left bubble */}
            <path d="M46 66 h84 a8 8 0 0 1 8 8 v26 a8 8 0 0 1 -8 8 h-64 l-12 12 v-12 h-8 a8 8 0 0 1 -8 -8 v-26 a8 8 0 0 1 8 -8 z" {...d(0.5)} />
            <path d="M56 82 H126 M56 94 H108" {...d(0.9)} />
            {/* right bubble */}
            <path d="M282 130 h64 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-6 v11 l-11 -11 h-47 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8 z" {...d(0.8)} />
            <path d="M292 144 H344 M292 156 H328" {...d(1.2)} />
            {/* circuit traces */}
            <path d="M204 152 v22 h-52 M204 174 h52" {...d(1.1)} />
          </g>
          <circle cx="152" cy="174" r="3" fill={accent} {...p(1.5)} />
          <circle cx="256" cy="174" r="3" fill={accent} {...p(1.6)} />
          <path d="M130 96 C 142 96, 148 92, 156 90" stroke={accent} strokeDasharray="4 5" fill="none" strokeWidth="1.2" className="la-draw" pathLength={1} style={{ animationDelay: '1.3s' }} />
        </>
      );
    case 'parking': // Easy Parking — car, barrier gate, P sign, QR
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* car */}
            <path d="M58 168 h-8 a6 6 0 0 1 -6 -6 v-14 a10 10 0 0 1 10 -10 h16 l20 -22 h52 l16 22 h14 a10 10 0 0 1 10 10 v14 a6 6 0 0 1 -6 6 h-8" {...d(0.2)} />
            <path d="M96 168 h44" {...d(0.6)} />
            <circle cx="78" cy="168" r="13" {...d(0.7)} />
            <circle cx="78" cy="168" r="5" {...d(0.95)} />
            <circle cx="158" cy="168" r="13" {...d(0.8)} />
            <circle cx="158" cy="168" r="5" {...d(1.05)} />
            <path d="M96 138 l16 -18 h34 l13 18 z" {...d(0.5)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* barrier */}
            <rect x="268" y="132" width="16" height="50" rx="4" {...d(0.5)} />
            <path d="M280 138 L372 108" {...d(0.8)} />
            <path d="M300 132 l3 9 M322 125 l3 9 M344 118 l3 9" {...d(1.1)} />
            <circle cx="280" cy="138" r="4" {...d(1)} />
            {/* ground */}
            <path d="M36 182 H388" {...d(0.4)} />
            <path d="M204 182 v-38" strokeDasharray="4 5" {...d(1.2)} />
          </g>
          {/* P sign */}
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="318" y="42" width="44" height="44" rx="9" {...d(1)} />
            <path d="M332 76 V52 h12 a8 8 0 0 1 0 16 h-12" {...d(1.3)} />
            <path d="M340 86 v18" {...d(1.5)} />
          </g>
          <circle cx="372" cy="108" r="3" fill={accent} {...p(1.6)} />
        </>
      );
    case 'map': // Fleex — truck + satellite signals + route pins
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* truck */}
            <rect x="52" y="118" width="104" height="50" rx="6" {...d(0.2)} />
            <path d="M156 132 h34 l18 20 v16 h-52 z" {...d(0.5)} />
            <path d="M162 138 h22 l10 14 h-32 z" {...d(0.8)} strokeWidth="1.1" />
            <circle cx="82" cy="172" r="11" {...d(0.7)} />
            <circle cx="82" cy="172" r="4" {...d(0.95)} />
            <circle cx="186" cy="172" r="11" {...d(0.85)} />
            <circle cx="186" cy="172" r="4" {...d(1.1)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* satellite */}
            <rect x="306" y="46" width="26" height="18" rx="3" transform="rotate(-14 319 55)" {...d(0.5)} />
            <path d="M300 60 l-20 8 M338 47 l20 -8" {...d(0.8)} />
            <path d="M278 64 l-4 10 l14 2 M360 37 l4 -10 l-14 -2" {...d(1)} />
            {/* signal arcs */}
            <path d="M296 84 a34 34 0 0 1 -12 24 M306 96 a52 52 0 0 1 -18 36" strokeDasharray="3 5" {...d(1.2)} />
            {/* ground */}
            <path d="M40 184 H240" {...d(0.4)} />
          </g>
          {/* route with pins */}
          <g stroke={accent} fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M226 96 C 258 78, 292 130, 336 118 S 372 156, 380 162" strokeDasharray="5 6" {...d(0.9)} />
            <path d="M226 96 m0 -14 a10 10 0 1 1 -0.1 0 M226 92 l0 0" {...d(1.3)} />
            <path d="M336 118 m0 -14 a10 10 0 1 1 -0.1 0" {...d(1.5)} />
          </g>
          <circle cx="226" cy="87" r="3" fill={accent} {...p(1.7)} />
          <circle cx="336" cy="109" r="3" fill={accent} {...p(1.8)} />
        </>
      );
    case 'gauges': // Flux — fuel dispenser, hose, underground tank, gauge
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* dispenser */}
            <rect x="86" y="58" width="74" height="112" rx="9" {...d(0.2)} />
            <rect x="98" y="72" width="50" height="30" rx="4" {...d(0.5)} />
            <path d="M98 116 h50 M98 130 h34" {...d(0.8)} strokeWidth="1.1" />
            {/* hose + nozzle */}
            <path d="M160 92 h16 v54 c0 14 12 18 20 10 l10 -10" {...d(0.7)} />
            <path d="M206 146 l14 -8 l8 10 l-10 10 z" {...d(1.1)} />
            {/* base */}
            <path d="M78 170 h90 v12 h-90 z" {...d(0.95)} />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* ground + buried tank */}
            <path d="M36 190 H388" strokeDasharray="6 5" {...d(0.6)} />
            <path d="M262 202 h84 a12 12 0 0 1 0 24 h-84 a12 12 0 0 1 0 -24 z" transform="translate(0,-14)" {...d(1)} />
            <path d="M270 200 q10 -6 21 0 t21 0 t21 0" {...d(1.4)} />
            <path d="M304 188 v-30" {...d(1.2)} />
            {/* gauge */}
            <path d="M296 64 a30 30 0 0 1 60 0" {...d(1.1)} />
            <path d="M296 64 h60" {...d(1.3)} />
            <path d="M326 64 l16 -18" {...d(1.5)} />
            <path d="M302 52 l4 3 M326 40 v5 M350 52 l-4 3" {...d(1.6)} />
          </g>
          {/* drop */}
          <path d="M236 76 c0 -8 8 -14 8 -20 c0 6 8 12 8 20 a8 8 0 0 1 -16 0 z" stroke={accent} fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="la-draw" pathLength={1} style={{ animationDelay: '1.4s' }} />
          <circle cx="326" cy="64" r="3" fill={accent} {...p(1.7)} />
        </>
      );
    case 'analytics': // INTELLEXI — data layers feeding a neural network
      return (
        <>
          <g stroke={accent} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {/* isometric data layers */}
            <path d="M60 150 l56 -24 l56 24 l-56 24 z" {...d(0.2)} />
            <path d="M60 128 l56 -24 l56 24 l-56 24 z" {...d(0.5)} />
            <path d="M60 106 l56 -24 l56 24 l-56 24 z" {...d(0.8)} />
            <path d="M60 128 v22 M172 128 v22 M116 152 v22 M60 150 v0" {...d(1)} strokeWidth="1.1" />
          </g>
          <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1.1" strokeLinecap="round">
            {/* network edges */}
            <path d="M256 84 L306 70 M256 84 L306 112 M256 84 L306 154 M256 128 L306 70 M256 128 L306 112 M256 128 L306 154 M256 170 L306 112 M256 170 L306 154 M306 70 L354 96 M306 112 L354 96 M306 154 L354 96 M306 112 L354 140 M306 154 L354 140" {...d(0.9)} />
            {/* flow from stack */}
            <path d="M180 118 C 208 110, 224 106, 244 96" strokeDasharray="4 5" {...d(0.7)} />
          </g>
          <g stroke={accent} fill="none" strokeWidth="1.3">
            <circle cx="256" cy="84" r="8" {...d(1.1)} />
            <circle cx="256" cy="128" r="8" {...d(1.2)} />
            <circle cx="256" cy="170" r="8" {...d(1.3)} />
            <circle cx="306" cy="70" r="8" {...d(1.4)} />
            <circle cx="306" cy="112" r="8" {...d(1.5)} />
            <circle cx="306" cy="154" r="8" {...d(1.6)} />
            <circle cx="354" cy="96" r="10" {...d(1.7)} />
            <circle cx="354" cy="140" r="10" {...d(1.8)} />
          </g>
          <circle cx="354" cy="96" r="3" fill={accent} {...p(2)} />
          <path d="M338 44 l6 6 m0 -6 l-6 6 M84 60 l6 6 m0 -6 l-6 6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeLinecap="round" className="la-draw" pathLength={1} style={{ animationDelay: '1.9s' }} />
        </>
      );
    default:
      return null;
  }
};

const ProductArt = ({
  scene,
  accentColor,
  label,
  figure,
}: {
  scene: ArtScene;
  accentColor: string;
  label: string;
  figure: number;
}) => {
  const accent = ACCENTS[accentColor] || ACCENTS.blue;
  return (
    <div className="la-frame" aria-hidden="true">
      <svg className="la-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet">
        {/* faint blueprint grid */}
        <g stroke="rgba(255,255,255,0.045)" strokeWidth="1">
          {[45, 90, 135, 180].map((y) => <line key={y} x1="0" y1={y} x2="400" y2={y} />)}
          {[80, 160, 240, 320].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="225" />)}
        </g>
        {/* corner ticks */}
        <g stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M14 26 v-12 h12 M386 14 h-12 M386 14 v12 M14 199 v12 h12 M386 211 h-12 v-12" fill="none" />
        </g>
        <Scene scene={scene} accent={accent} />
      </svg>
      <div className="la-label">
        <span style={{ color: accent }}>FIG. {String(figure).padStart(2, '0')}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default ProductArt;
