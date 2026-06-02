import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { journeySteps } from '../data/journey'
import { translations } from '../data/translations'

function TimelineItem({ step, stepT, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLast = index === total - 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="flex gap-6 md:gap-10"
    >
      {/* Timeline stem */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{
            background: inView ? 'rgba(6,182,212,0.15)' : 'rgba(15,39,68,0.5)',
            border: `2px solid ${inView ? 'rgba(6,182,212,0.5)' : 'rgba(6,182,212,0.15)'}`,
            color: '#06b6d4',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            transition: 'all 0.5s ease',
            boxShadow: inView ? '0 0 16px rgba(6,182,212,0.15)' : 'none',
          }}
        >
          {stepT.year.slice(0, 4)}
        </div>

        {!isLast && (
          <div className="flex-1 w-px mt-3" style={{ minHeight: '40px' }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
              className="h-full w-full origin-top"
              style={{
                background: 'linear-gradient(180deg, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0.05) 100%)',
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="flex-1 mb-10 p-6 rounded-xl"
        style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(6,182,212,0.1)' }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-base font-semibold" style={{ color: '#e2e8f0' }}>{stepT.title}</h3>
          <span
            className="text-xs whitespace-nowrap px-2 py-0.5 rounded"
            style={{
              color: '#06b6d4',
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.15)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {stepT.year}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{stepT.desc}</p>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded"
              style={{
                background: 'rgba(6,182,212,0.06)',
                border: '1px solid rgba(6,182,212,0.12)',
                color: '#475569',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Journey({ lang }) {
  const t = translations[lang].journey
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="journey" className="section-padding relative" style={{ background: '#020817' }}>
      <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'rgba(6,182,212,0.3)' }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#f1f5f9', lineHeight: 1.2 }}>
            {t.heading1}{' '}
            <span style={{ color: '#06b6d4' }}>{t.headingAccent}</span>
          </h2>
          <p className="mt-4 text-sm max-w-xl" style={{ color: '#64748b' }}>{t.subtext}</p>
        </motion.div>

        <div>
          {journeySteps.map((step, i) => (
            <TimelineItem
              key={step.id}
              step={step}
              stepT={t.steps[step.id]}
              index={i}
              total={journeySteps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
