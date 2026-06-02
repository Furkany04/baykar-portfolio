import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Server, Layers, Database, Wrench, Cpu } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { translations } from '../data/translations'

const ICON_MAP = { Server, Layers, Database, Wrench, Cpu }

function SkillTag({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="px-3 py-1.5 text-xs rounded font-medium transition-all duration-200 cursor-default"
      style={{
        background: 'rgba(6,182,212,0.07)',
        border: '1px solid rgba(6,182,212,0.15)',
        color: '#94a3b8',
        fontFamily: 'JetBrains Mono, monospace',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(6,182,212,0.15)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'
        e.currentTarget.style.color = '#06b6d4'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(6,182,212,0.07)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.15)'
        e.currentTarget.style.color = '#94a3b8'
      }}
    >
      {name}
    </motion.span>
  )
}

function CategoryCard({ category, title, advancedNote, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = ICON_MAP[category.icon] || Server
  const isAdvanced = category.id === 'advanced'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="card-hover p-6 rounded-xl"
      style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(6,182,212,0.1)' }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
        >
          <Icon size={18} style={{ color: '#06b6d4' }} />
        </div>
        <h3 className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillTag key={skill} name={skill} index={i} />
        ))}
      </div>

      {isAdvanced && (
        <p className="mt-4 text-xs leading-relaxed" style={{ color: '#334155', fontStyle: 'italic' }}>
          {advancedNote}
        </p>
      )}
    </motion.div>
  )
}

export default function Skills({ lang }) {
  const t = translations[lang].skills
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #040e1f 100%)' }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#f1f5f9', lineHeight: 1.2 }}>
            {t.heading1}{' '}
            <span style={{ color: '#06b6d4' }}>{t.headingAccent}</span>
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: '#64748b' }}>{t.subtext}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              title={t.categories[cat.id]}
              advancedNote={t.advancedNote}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
