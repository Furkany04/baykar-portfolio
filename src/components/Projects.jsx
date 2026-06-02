import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ExternalLink, ChevronRight, Tag } from 'lucide-react'
import { projects } from '../data/projects'
import { translations } from '../data/translations'

function ProjectCard({ project, projectT, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col p-6 rounded-xl transition-all duration-300 cursor-default"
      style={{ background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(6,182,212,0.1)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(6,182,212,0.1), 0 0 0 1px rgba(6,182,212,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)' }}
      />

      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-bold"
          style={{ color: 'rgba(6,182,212,0.4)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {String(project.id).padStart(2, '0')}
        </span>
        <div
          className="w-7 h-7 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(6,182,212,0.1)' }}
        >
          <ExternalLink size={12} style={{ color: '#06b6d4' }} />
        </div>
      </div>

      <h3 className="text-base font-semibold mb-3 leading-snug" style={{ color: '#e2e8f0' }}>
        {projectT.title}
      </h3>

      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>
        {projectT.desc}
      </p>

      <div
        className="flex items-center gap-2 text-xs mb-5 py-2 px-3 rounded"
        style={{
          background: 'rgba(6,182,212,0.05)',
          border: '1px solid rgba(6,182,212,0.1)',
          color: '#475569',
        }}
      >
        <ChevronRight size={11} style={{ color: '#06b6d4', flexShrink: 0 }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{projectT.highlight}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded"
            style={{
              background: 'rgba(6,182,212,0.07)',
              border: '1px solid rgba(6,182,212,0.12)',
              color: '#64748b',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-xs" style={{ color: '#334155' }}>
        <Tag size={10} />
        <span>{projectT.relevance}</span>
      </div>
    </motion.div>
  )
}

export default function Projects({ lang }) {
  const t = translations[lang].projects
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, #040e1f 0%, #020817 100%)' }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectT={t.items[project.id]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
