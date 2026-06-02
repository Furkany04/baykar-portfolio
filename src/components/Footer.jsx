import { Terminal, GitBranch, Link2, Mail } from 'lucide-react'
import { translations } from '../data/translations'
import { profile } from '../data/profile'

export default function Footer({ lang }) {
  const t = translations[lang].footer

  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'rgba(6,182,212,0.1)', background: '#020817' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded border flex items-center justify-center"
            style={{ borderColor: 'rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.06)' }}
          >
            <Terminal size={12} style={{ color: '#06b6d4' }} />
          </div>
          <span
            className="text-sm font-medium"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#475569' }}
          >
            {profile.name}
            <span style={{ color: '#06b6d4' }}> // {t.role}</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded transition-colors duration-200"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.githubUrl}
            className="p-2 rounded transition-colors duration-200"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            aria-label="GitHub"
          >
            <GitBranch size={16} />
          </a>
          <a
            href={profile.linkedinUrl}
            className="p-2 rounded transition-colors duration-200"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            aria-label="LinkedIn"
          >
            <Link2 size={16} />
          </a>
        </div>

        <p className="text-xs" style={{ color: '#334155', fontFamily: 'JetBrains Mono, monospace' }}>
          {t.rights}
        </p>
      </div>
    </footer>
  )
}
