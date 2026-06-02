import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── SVG path data ──────────────────────────────────────── */
// All coordinates in a 800 × 560 viewBox, top-down UAV silhouette

const PATHS = {
  // Centre fuselage – narrow elongated lozenge
  fuselage: 'M400 60 C415 90 422 160 424 240 C426 310 420 390 400 500 C380 390 374 310 376 240 C378 160 385 90 400 60 Z',

  // Canopy / sensor dome at nose
  sensor: 'M400 60 C410 75 415 95 400 105 C385 95 390 75 400 60 Z',

  // Internal fuselage rib lines (detail)
  ribs: 'M386 180 L414 180 M383 240 L417 240 M384 300 L416 300 M387 360 L413 360',

  // Left swept wing
  wingLeft: 'M384 230 L80 370 L110 395 L200 375 L340 310 L384 270 Z',

  // Right swept wing (mirror)
  wingRight: 'M416 230 L720 370 L690 395 L600 375 L460 310 L416 270 Z',

  // Wing structural spar lines (left)
  sparLeft: 'M370 250 L90 375 M370 270 L130 390',

  // Wing structural spar lines (right)
  sparRight: 'M430 250 L710 375 M430 270 L670 390',

  // Left engine nacelle
  engineLeft:
    'M115 373 C103 373 103 393 115 393 L185 393 C197 393 197 373 185 373 Z M120 368 L180 368 M120 398 L180 398',

  // Right engine nacelle
  engineRight:
    'M615 373 C603 373 603 393 615 393 L685 393 C697 393 697 373 685 373 Z M620 368 L680 368 M620 398 L680 398',

  // Left tail fin
  tailLeft: 'M390 470 L350 520 L370 512 L395 478 Z',

  // Right tail fin
  tailRight: 'M410 470 L450 520 L430 512 L405 478 Z',

  // Data-flow lines (dashed) radiating from centre
  dataLines:
    'M400 280 L60 120 M400 280 L740 120 M400 280 L40 420 M400 280 L760 420 M400 280 L400 545',

  // Centre cross-hair / HUD ring around mid-fuselage
  hud: 'M400 240 m-30 0 l12 0 m36 0 l12 0 M400 240 m0 -30 l0 12 m0 36 l0 12',
}

export default function AircraftBlueprint({ containerRef }) {
  const svgRef = useRef(null)
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!svgRef.current || !containerRef?.current) return

    const svg = svgRef.current

    // Helper – set stroke-dasharray + dashoffset to total length
    const prep = (selector) => {
      const els = svg.querySelectorAll(selector)
      els.forEach((el) => {
        try {
          const len = el.getTotalLength ? el.getTotalLength() : 200
          gsap.set(el, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 })
        } catch (_) {
          gsap.set(el, { strokeDasharray: 200, strokeDashoffset: 200, opacity: 1 })
        }
      })
      return els
    }

    // Hide everything initially
    gsap.set(svg.querySelectorAll('path, line'), { opacity: 0 })

    if (prefersReduced) {
      // Just show everything instantly
      gsap.set(svg.querySelectorAll('path, line'), {
        opacity: 1,
        strokeDashoffset: 0,
      })
      return
    }

    // Prepare each group
    const sensorEls = prep('[data-part="sensor"]')
    const fuselageEls = prep('[data-part="fuselage"]')
    const ribEls = prep('[data-part="ribs"]')
    const wingLeftEls = prep('[data-part="wingLeft"]')
    const wingRightEls = prep('[data-part="wingRight"]')
    const sparLeftEls = prep('[data-part="sparLeft"]')
    const sparRightEls = prep('[data-part="sparRight"]')
    const engineLeftEls = prep('[data-part="engineLeft"]')
    const engineRightEls = prep('[data-part="engineRight"]')
    const tailEls = prep('[data-part="tailLeft"], [data-part="tailRight"]')
    const hudEls = prep('[data-part="hud"]')
    const dataEls = prep('[data-part="dataLines"]')

    const draw = (els, dur = 0.8) =>
      gsap.to([...els], { strokeDashoffset: 0, opacity: 1, duration: dur, ease: 'power2.inOut' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.5,
      },
    })

    tl.add(draw(sensorEls, 0.5))                          // nose sensor
      .add(draw(fuselageEls, 1.2), '-=0.2')               // fuselage body
      .add(draw(ribEls, 0.6), '-=0.4')                    // internal ribs
      .add(draw(wingLeftEls, 1), '-=0.3')                 // left wing
      .add(draw(wingRightEls, 1), '<')                    // right wing (same time)
      .add(draw(sparLeftEls, 0.6), '-=0.2')               // spar details
      .add(draw(sparRightEls, 0.6), '<')
      .add(draw(engineLeftEls, 0.7), '-=0.1')             // engines
      .add(draw(engineRightEls, 0.7), '<')
      .add(draw(tailEls, 0.6), '-=0.2')                   // tail fins
      .add(draw(hudEls, 0.4), '-=0.1')                    // HUD ring
      .add(draw(dataEls, 1.2), '-=0.1')                   // data-flow lines

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.trigger === containerRef.current) st.kill()
      })
    }
  }, [containerRef, prefersReduced])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ maxHeight: '480px' }}
      aria-label="Soyut UAV blueprint şeması"
    >
      {/* Blueprint background subtle grid */}
      <defs>
        <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6,182,212,0.06)" strokeWidth="0.5" />
        </pattern>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect width="800" height="560" fill="url(#bp-grid)" />

      {/* Sensor dome */}
      <path
        data-part="sensor"
        d={PATHS.sensor}
        className="blueprint-path"
        style={{ stroke: '#22d3ee', strokeWidth: 1.5, fill: 'rgba(6,182,212,0.08)' }}
      />

      {/* Fuselage */}
      <path
        data-part="fuselage"
        d={PATHS.fuselage}
        className="blueprint-path"
        style={{ stroke: '#06b6d4', strokeWidth: 2, fill: 'rgba(6,182,212,0.05)' }}
      />

      {/* Rib lines */}
      <path
        data-part="ribs"
        d={PATHS.ribs}
        className="blueprint-path"
        style={{ stroke: 'rgba(6,182,212,0.4)', strokeWidth: 1 }}
      />

      {/* Wings */}
      <path
        data-part="wingLeft"
        d={PATHS.wingLeft}
        className="blueprint-path"
        style={{ stroke: '#3b82f6', strokeWidth: 1.8, fill: 'rgba(59,130,246,0.04)' }}
      />
      <path
        data-part="wingRight"
        d={PATHS.wingRight}
        className="blueprint-path"
        style={{ stroke: '#3b82f6', strokeWidth: 1.8, fill: 'rgba(59,130,246,0.04)' }}
      />

      {/* Spar details */}
      <path
        data-part="sparLeft"
        d={PATHS.sparLeft}
        style={{ stroke: 'rgba(59,130,246,0.3)', strokeWidth: 0.8, fill: 'none' }}
      />
      <path
        data-part="sparRight"
        d={PATHS.sparRight}
        style={{ stroke: 'rgba(59,130,246,0.3)', strokeWidth: 0.8, fill: 'none' }}
      />

      {/* Engines */}
      <path
        data-part="engineLeft"
        d={PATHS.engineLeft}
        className="blueprint-path"
        style={{ stroke: '#a78bfa', strokeWidth: 1.5, fill: 'rgba(167,139,250,0.05)' }}
      />
      <path
        data-part="engineRight"
        d={PATHS.engineRight}
        className="blueprint-path"
        style={{ stroke: '#a78bfa', strokeWidth: 1.5, fill: 'rgba(167,139,250,0.05)' }}
      />

      {/* Tail fins */}
      <path
        data-part="tailLeft"
        d={PATHS.tailLeft}
        className="blueprint-path"
        style={{ stroke: '#06b6d4', strokeWidth: 1.5, fill: 'rgba(6,182,212,0.05)' }}
      />
      <path
        data-part="tailRight"
        d={PATHS.tailRight}
        className="blueprint-path"
        style={{ stroke: '#06b6d4', strokeWidth: 1.5, fill: 'rgba(6,182,212,0.05)' }}
      />

      {/* HUD cross-hair */}
      <path
        data-part="hud"
        d={PATHS.hud}
        style={{ stroke: 'rgba(6,182,212,0.5)', strokeWidth: 1, fill: 'none' }}
      />
      <circle
        data-part="hud"
        cx="400" cy="240" r="22"
        style={{
          stroke: 'rgba(6,182,212,0.25)',
          strokeWidth: 0.8,
          fill: 'none',
          strokeDasharray: '4 4',
        }}
      />

      {/* Data-flow lines */}
      <path
        data-part="dataLines"
        d={PATHS.dataLines}
        style={{
          stroke: 'rgba(6,182,212,0.2)',
          strokeWidth: 0.8,
          fill: 'none',
          strokeDasharray: '4 6',
        }}
      />

      {/* Endpoint dots on data lines */}
      {[
        [60, 120], [740, 120], [40, 420], [760, 420], [400, 545],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          data-part="dataLines"
          cx={cx} cy={cy} r="3"
          style={{ fill: 'rgba(6,182,212,0.3)', stroke: 'rgba(6,182,212,0.5)', strokeWidth: 1 }}
        />
      ))}

      {/* Dimension annotation lines */}
      <line
        data-part="fuselage"
        x1="340" y1="55" x2="460" y2="55"
        style={{ stroke: 'rgba(6,182,212,0.2)', strokeWidth: 0.6 }}
      />
      <line
        data-part="fuselage"
        x1="340" y1="505" x2="460" y2="505"
        style={{ stroke: 'rgba(6,182,212,0.2)', strokeWidth: 0.6 }}
      />
    </svg>
  )
}
