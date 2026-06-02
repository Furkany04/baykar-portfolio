import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Mail, GitBranch, Link2, FileText, ArrowRight, Send } from 'lucide-react'
import { translations } from '../data/translations'
import { profile } from '../data/profile'

const LINK_ICONS = [Mail, GitBranch, Link2]
const LINK_COLORS = ['#06b6d4', '#94a3b8', '#3b82f6']
const LINK_HREFS = [
  `mailto:${profile.email}`,
  profile.githubUrl,
  profile.linkedinUrl,
]
const LINK_VALUES = [profile.email, profile.githubUrl.replace('https://', ''), profile.linkedinUrl.replace('https://', '')]

function ContactCard({ icon: Icon, label, value, href, color, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300"
      style={{ background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(6,182,212,0.1)', textDecoration: 'none' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <Icon size={18} style={{ color }} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-xs mb-0.5" style={{ color: '#475569' }}>{label}</div>
        <div
          className="text-sm font-medium truncate"
          style={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {value}
        </div>
        <div className="text-xs mt-0.5" style={{ color: '#334155' }}>{desc}</div>
      </div>

      <ArrowRight
        size={14}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
        style={{ color }}
      />
    </motion.a>
  )
}

export default function Contact({ lang }) {
  const t = translations[lang].contact
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const linkKeys = ['email', 'github', 'linkedin']

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: '#020817' }}
    >
      <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: '500px', height: '150px', background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
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
          <p className="text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>{t.subtext}</p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4 mb-8">
          {linkKeys.map((key, i) => (
            <ContactCard
              key={key}
              icon={LINK_ICONS[i]}
              label={t.links[key].label}
              value={LINK_VALUES[i]}
              href={LINK_HREFS[i]}
              color={LINK_COLORS[i]}
              desc={t.links[key].desc}
              index={i}
            />
          ))}
        </div>

        {/* CV Download — add your CV as public/cv.pdf */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href={profile.cvUrl}
            download
            className="group flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              background: 'rgba(6,182,212,0.1)',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06b6d4',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6,182,212,0.18)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(6,182,212,0.1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FileText size={16} />
            {t.cvBtn}
            <Send size={13} className="opacity-60 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{
              background: 'rgba(52,211,153,0.08)',
              border: '1px solid rgba(52,211,153,0.2)',
              color: '#34d399',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#34d399', animation: 'pulse 2s infinite' }}
            />
            {t.availability}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
