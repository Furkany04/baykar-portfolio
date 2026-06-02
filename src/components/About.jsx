import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Code2, Database, Layers, Target, Users, BookOpen } from 'lucide-react'
import { translations } from '../data/translations'

const HIGHLIGHT_ICONS = [Code2, Layers, Database, Target, Users, BookOpen]

function HighlightCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="card-hover p-5 rounded-lg"
      style={{ background: 'rgba(13,31,60,0.6)', border: '1px solid rgba(6,182,212,0.1)' }}
    >
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center mb-3"
        style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
      >
        <Icon size={16} style={{ color: '#06b6d4' }} />
      </div>
      <h4 className="text-sm font-semibold mb-1.5" style={{ color: '#e2e8f0' }}>{title}</h4>
      <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
    </motion.div>
  )
}

export default function About({ lang }) {
  const t = translations[lang].about
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const highlights = t.highlights.map((h, i) => ({ ...h, icon: HIGHLIGHT_ICONS[i] }))

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: '#020817' }}
    >
      <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(6,182,212,0.3)' }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t.sectionLabel}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#f1f5f9', lineHeight: 1.2 }}
          >
            {t.heading1}{' '}
            <span style={{ color: '#06b6d4' }}>{t.headingAccent}</span>
            {t.heading2 ? ` ${t.heading2}` : ''}
          </h2>
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{t.para1}</p>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{t.para2}</p>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>{t.para3}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} {...item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {t.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-5 rounded-lg"
              style={{
                background: 'rgba(13,31,60,0.4)',
                border: '1px solid rgba(6,182,212,0.08)',
              }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: '#475569' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
