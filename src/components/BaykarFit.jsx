import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { CheckCircle2, Cpu, Shield, Layers, Database, Code2, Zap, Users } from 'lucide-react'
import AircraftBlueprint from './AircraftBlueprint'
import { translations } from '../data/translations'

const POINT_ICONS = [Code2, Layers, Zap, Shield, Database, Cpu, Users]
const POINT_COLORS = ['#06b6d4', '#3b82f6', '#a78bfa', '#34d399', '#fb923c', '#06b6d4', '#3b82f6']

function FitPoint({ point, icon: Icon, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="flex gap-4 items-start py-4 border-b"
      style={{ borderColor: 'rgba(6,182,212,0.07)' }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${color}12`, border: `1px solid ${color}28` }}
      >
        <Icon size={15} style={{ color }} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold mb-1" style={{ color: '#e2e8f0' }}>{point.title}</h4>
        <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{point.desc}</p>
      </div>

      <CheckCircle2
        size={14}
        className="flex-shrink-0 mt-1"
        style={{ color: `${color}80` }}
      />
    </motion.div>
  )
}

export default function BaykarFit({ lang }) {
  const t = translations[lang].baykarFit
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="baykar-fit"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #040e1f 50%, #020817 100%)' }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom right, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      {/* Corner marks */}
      {[
        'absolute top-8 left-8',
        'absolute top-8 right-8 flex flex-col items-end',
        'absolute bottom-8 left-8 flex flex-col justify-end',
        'absolute bottom-8 right-8 flex flex-col items-end justify-end',
      ].map((cls, i) => (
        <div key={i} className={`${cls} pointer-events-none`}>
          {i < 2 ? (
            <>
              <div className="w-6 h-px" style={{ background: 'rgba(6,182,212,0.3)' }} />
              <div className="w-px h-6" style={{ background: 'rgba(6,182,212,0.3)' }} />
            </>
          ) : (
            <>
              <div className="w-px h-6" style={{ background: 'rgba(6,182,212,0.3)' }} />
              <div className="w-6 h-px" style={{ background: 'rgba(6,182,212,0.3)' }} />
            </>
          )}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'rgba(6,182,212,0.3)' }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t.sectionLabel}
            </span>
            <div className="h-px w-12" style={{ background: 'rgba(6,182,212,0.3)' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f1f5f9', lineHeight: 1.2 }}>
            {t.heading1}{' '}
            <span style={{ color: '#06b6d4' }}>{t.headingAccent}</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#64748b' }}>{t.subtext}</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Blueprint panel */}
          <div className="relative">
            <div
              className="relative p-6 rounded-xl"
              style={{ background: 'rgba(6,182,212,0.02)', border: '1px solid rgba(6,182,212,0.12)' }}
            >
              <div
                className="flex items-center gap-2 mb-4 pb-3 border-b"
                style={{ borderColor: 'rgba(6,182,212,0.1)' }}
              >
                <div className="flex gap-1.5">
                  {['rgba(6,182,212,0.4)', 'rgba(59,130,246,0.4)', 'rgba(167,139,250,0.4)'].map((bg, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: bg }} />
                  ))}
                </div>
                <span
                  className="text-xs ml-2"
                  style={{ color: 'rgba(6,182,212,0.5)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {t.panelTitle}
                </span>
              </div>

              <div className="relative">
                <AircraftBlueprint containerRef={sectionRef} />

                {/* Part labels */}
                {[
                  { label: 'SENSOR', top: '10%', left: '50%', transform: 'translateX(-50%)', color: '#22d3ee' },
                  { label: 'L-WING', top: '38%', left: '10%', color: '#3b82f6' },
                  { label: 'R-WING', top: '38%', right: '10%', color: '#3b82f6' },
                  { label: 'ENGINE', bottom: '18%', left: '18%', color: '#a78bfa' },
                  { label: 'ENGINE', bottom: '18%', right: '18%', color: '#a78bfa' },
                ].map((lbl, i) => (
                  <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{ top: lbl.top, bottom: lbl.bottom, left: lbl.left, right: lbl.right, transform: lbl.transform }}
                  >
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: `${lbl.color}18`,
                        border: `1px solid ${lbl.color}30`,
                        color: lbl.color,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '9px',
                      }}
                    >
                      {lbl.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-3 px-4 py-2 rounded text-xs flex items-center justify-between"
              style={{
                background: 'rgba(6,182,212,0.04)',
                border: '1px solid rgba(6,182,212,0.08)',
                color: '#334155',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span>{t.statusLeft}</span>
              <span>{t.statusRight}</span>
            </div>
          </div>

          {/* Fit points */}
          <div>
            <div
              className="mb-4 pb-3 flex items-center gap-3 border-b"
              style={{ borderColor: 'rgba(6,182,212,0.1)' }}
            >
              <span
                className="text-xs font-medium"
                style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t.analysisLabel}
              </span>
              <div className="h-px flex-1" style={{ background: 'rgba(6,182,212,0.15)' }} />
              <span
                className="text-xs"
                style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
              >
                7 / 7
              </span>
            </div>

            <div>
              {t.points.map((point, i) => (
                <FitPoint
                  key={point.title}
                  point={point}
                  icon={POINT_ICONS[i]}
                  color={POINT_COLORS[i]}
                  index={i}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 rounded-lg flex items-center gap-3"
              style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.2)' }}
            >
              <CheckCircle2 size={20} style={{ color: '#06b6d4', flexShrink: 0 }} />
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                {t.summaryText}{' '}
                <span style={{ color: '#06b6d4', fontWeight: 600 }}>{t.summaryAccent}</span>{' '}
                {t.summaryEnd}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
