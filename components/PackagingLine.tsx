'use client'

/**
 * Animated packaging line — a stylised flowpack machine.
 * Pure SVG + CSS keyframes (defined in globals.css) so it loops smoothly
 * and respects prefers-reduced-motion. Sits on the dark hero background.
 */
export default function PackagingLine() {
  // Stagger several products so the belt looks continuously fed.
  const products = [0, 1, 2, 3, 4]
  const cycle = 6 // seconds for one product to cross the line

  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* ambient glow behind the machine */}
      <div
        className="anim-float-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,184,212,0.35), transparent 70%)' }}
      />

      <svg
        viewBox="0 0 560 360"
        className="relative w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="pkgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cfeef5" />
          </linearGradient>
          <linearGradient id="filmGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,184,212,0.55)" />
            <stop offset="100%" stopColor="rgba(0,184,212,0.15)" />
          </linearGradient>
          <linearGradient id="beltGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a3349" />
            <stop offset="100%" stopColor="#0c1925" />
          </linearGradient>
          <clipPath id="packClip">
            <rect x="0" y="0" width="48" height="40" rx="6" />
          </clipPath>
        </defs>

        {/* ───── Film spool feeding the line ───── */}
        <g transform="translate(250 44)">
          <circle r="30" fill="none" stroke="rgba(0,184,212,0.35)" strokeWidth="2" />
          <g className="anim-spool">
            <circle r="30" fill="rgba(0,184,212,0.10)" />
            <circle r="20" fill="rgba(0,184,212,0.18)" />
            <circle r="6" fill="#00B8D4" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <line
                key={a}
                x1="0"
                y1="0"
                x2={20 * Math.cos((a * Math.PI) / 180)}
                y2={20 * Math.sin((a * Math.PI) / 180)}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
              />
            ))}
          </g>
          {/* film curtain coming down to the sealing zone */}
          <rect x="-26" y="28" width="52" height="120" fill="url(#filmGrad)" opacity="0.5" />
        </g>

        {/* ───── Conveyor belt ───── */}
        <g transform="translate(20 250)">
          {/* belt body */}
          <rect x="0" y="0" width="520" height="34" rx="17" fill="url(#beltGrad)" />
          {/* moving tread */}
          <rect
            x="10"
            y="8"
            width="500"
            height="18"
            rx="9"
            className="anim-belt"
            fill="transparent"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 4px, transparent 4px 28px)',
            }}
          />
          {/* tread drawn as SVG dashes (reliable cross-browser) */}
          <line
            x1="14"
            y1="17"
            x2="506"
            y2="17"
            stroke="rgba(0,184,212,0.55)"
            strokeWidth="14"
            strokeDasharray="3 25"
            strokeLinecap="round"
            className="anim-belt"
          />
          {/* rollers */}
          {[18, 502].map((cx) => (
            <g key={cx} transform={`translate(${cx} 17)`}>
              <circle r="15" fill="#13283a" stroke="rgba(0,184,212,0.4)" strokeWidth="2" />
              <g className="anim-roller">
                <line x1="-9" y1="0" x2="9" y2="0" stroke="rgba(0,184,212,0.7)" strokeWidth="2.5" />
                <line x1="0" y1="-9" x2="0" y2="9" stroke="rgba(0,184,212,0.7)" strokeWidth="2.5" />
              </g>
            </g>
          ))}
          {/* support legs */}
          <rect x="60" y="34" width="6" height="56" rx="2" fill="#13283a" />
          <rect x="454" y="34" width="6" height="56" rx="2" fill="#13283a" />
        </g>

        {/* ───── Products travelling + getting wrapped ───── */}
        {products.map((i) => (
          <g
            key={i}
            transform="translate(20 222)"
            style={{
              animation: `product-travel ${cycle}s linear infinite`,
              animationDelay: `${(-cycle / products.length) * i}s`,
            }}
          >
            <g clipPath="url(#packClip)">
              <rect width="48" height="40" rx="6" fill="url(#pkgGrad)" />
              {/* flowpack seal fins */}
              <rect x="0" y="0" width="5" height="40" fill="rgba(0,184,212,0.45)" />
              <rect x="43" y="0" width="5" height="40" fill="rgba(0,184,212,0.45)" />
              <rect x="0" y="17" width="48" height="2.5" fill="rgba(0,184,212,0.5)" />
            </g>
            {/* shine sweep */}
            <g clipPath="url(#packClip)">
              <rect
                width="20"
                height="40"
                fill="rgba(255,255,255,0.7)"
                style={{ animation: `shine-sweep ${cycle}s ease-in-out infinite`, animationDelay: `${(-cycle / products.length) * i}s` }}
              />
            </g>
          </g>
        ))}

        {/* ───── Sealing head (centre) ───── */}
        <g transform="translate(244 150)">
          {/* frame */}
          <rect x="-8" y="-110" width="80" height="14" rx="4" fill="#13283a" />
          <rect x="-8" y="-110" width="10" height="150" fill="#13283a" />
          <rect x="62" y="-110" width="10" height="150" fill="#13283a" />
          {/* upper jaw */}
          <g className="anim-jaw-top">
            <rect x="6" y="40" width="52" height="20" rx="4" fill="#00B8D4" />
            <rect x="6" y="56" width="52" height="5" rx="2" fill="#ffffff" opacity="0.6" />
          </g>
          {/* lower jaw */}
          <g className="anim-jaw-bottom">
            <rect x="6" y="84" width="52" height="20" rx="4" fill="#00B8D4" />
            <rect x="6" y="84" width="52" height="5" rx="2" fill="#ffffff" opacity="0.6" />
          </g>
          {/* seal flash */}
          <circle cx="32" cy="74" r="16" fill="rgba(255,255,255,0.9)" className="anim-seal-flash" />
        </g>
      </svg>
    </div>
  )
}
