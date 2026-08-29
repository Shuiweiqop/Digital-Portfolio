import { useEffect, useRef, useState } from 'react'

// Keyboard rows drawn under the monitor. Each key maps to real characters so a
// physical keypress can light the matching key up.
const ROWS = [
  { y: 0, keys: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'] },
  { y: 1, keys: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'] },
  { y: 2, keys: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'] },
]

const KEY_W = 15
const KEY_H = 11
const GAP = 2.5
const ROW_INDENT = [0, 4, 8]
const KB_X = 16
const KB_Y = 104

function keyRect(rowIndex, colIndex) {
  return {
    x: KB_X + ROW_INDENT[rowIndex] + colIndex * (KEY_W + GAP),
    y: KB_Y + rowIndex * (KEY_H + GAP),
  }
}

/**
 * Hand-drawn desk setup. The keyboard responds to real typing: whatever key you
 * press lights up, and the screen echoes the characters. Decorative, so the
 * whole thing is aria-hidden — it adds nothing for screen reader users.
 */
export default function SketchDesk({ className = '' }) {
  const [active, setActive] = useState(() => new Set())
  const [typed, setTyped] = useState('')
  const [everTyped, setEverTyped] = useState(false)
  const timers = useRef(new Map())
  const svgRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    function onKeyDown(e) {
      // Ignore shortcuts and typing inside real inputs.
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      if (target && target.isContentEditable) return

      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key

      if (k === 'Backspace') {
        setTyped((t) => t.slice(0, -1))
        setEverTyped(true)
        return
      }
      if (e.key.length !== 1) return

      // Space scrolls the page by default, which fights with typing on the
      // sketch. Only suppress it while the illustration is actually on screen.
      if (e.key === ' ' && svgRef.current) {
        const r = svgRef.current.getBoundingClientRect()
        if (r.bottom > 0 && r.top < window.innerHeight) e.preventDefault()
      }

      setEverTyped(true)
      setTyped((t) => (t + e.key).slice(-22))

      if (reduced) return
      setActive((prev) => {
        const next = new Set(prev)
        next.add(k)
        return next
      })
      clearTimeout(timers.current.get(k))
      timers.current.set(
        k,
        setTimeout(() => {
          setActive((prev) => {
            const next = new Set(prev)
            next.delete(k)
            return next
          })
          timers.current.delete(k)
        }, 220)
      )
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      timers.current.forEach((t) => clearTimeout(t))
      timers.current.clear()
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 150"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <filter id="sketch" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <g
        filter="url(#sketch)"
        fill="none"
        stroke="var(--bp-sketch)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* monitor */}
        <path d="M22 12h156a5 5 0 0 1 5 5v66a5 5 0 0 1-5 5H22a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5Z" />
        {/* stand */}
        <path d="M92 88v9M78 97h44" />
        {/* screen inner edge */}
        <path d="M26 19h148v58H26Z" opacity="0.55" />

        {/* code lines on screen — static squiggles suggesting text */}
        <g opacity="0.75" strokeWidth="1.4">
          <path d="M34 29h30M70 29h22" />
          <path d="M38 37h18M60 37h34" />
          <path d="M38 45h40M82 45h14" />
          <path d="M34 53h26" />
        </g>

        {/* what you type, echoed on screen */}
        {typed && (
          <text
            x="34"
            y="68"
            fill="var(--bp-accent)"
            stroke="none"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
          >
            {typed}
          </text>
        )}
        {!everTyped && (
          <text
            x="34"
            y="68"
            fill="var(--bp-sketch)"
            stroke="none"
            fontSize="8"
            fontFamily="ui-monospace, monospace"
            opacity="0.85"
          >
            try typing…
          </text>
        )}

        {/* keyboard body */}
        <path d="M12 100h176a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4Z" />

        {/* keys */}
        {ROWS.map((row, ri) =>
          row.keys.map((k, ci) => {
            const { x, y } = keyRect(ri, ci)
            const on = active.has(k)
            return (
              <rect
                key={k}
                x={x}
                y={y}
                width={KEY_W}
                height={KEY_H}
                rx="2"
                fill={on ? 'var(--bp-accent)' : 'transparent'}
                stroke="var(--bp-sketch)"
                strokeWidth="1.2"
                opacity={on ? 1 : 0.7}
              />
            )
          })
        )}

        {/* space bar */}
        <rect
          x="52"
          y={KB_Y + 3 * (KEY_H + GAP)}
          width="96"
          height={KEY_H}
          rx="2"
          fill={active.has(' ') ? 'var(--bp-accent)' : 'transparent'}
          stroke="var(--bp-sketch)"
          strokeWidth="1.2"
          opacity={active.has(' ') ? 1 : 0.7}
        />
      </g>
    </svg>
  )
}
