import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Terminal } from 'lucide-react'
import { translations } from '../data/translations'

export default function Navbar({ lang, setLang }) {
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.about,     href: '#about' },
    { label: t.skills,    href: '#skills' },
    { label: t.journey,   href: '#journey' },
    { label: t.projects,  href: '#projects' },
    { label: t.baykarFit, href: '#baykar-fit' },
    { label: t.contact,   href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(2, 8, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.12)' : 'none',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
        >
          <div
            className="w-8 h-8 rounded border flex items-center justify-center"
            style={{ borderColor: 'rgba(6,182,212,0.4)', background: 'rgba(6,182,212,0.08)' }}
          >
            <Terminal size={14} style={{ color: '#06b6d4' }} />
          </div>
          <span
            className="font-semibold text-sm tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#f1f5f9' }}
          >
            FY<span style={{ color: '#06b6d4' }}>.dev</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => (e.target.style.color = '#06b6d4')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
            >
              {link.label}
            </button>
          ))}

          {/* Language toggle */}
          <div
            className="flex items-center text-xs font-semibold overflow-hidden rounded"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              border: '1px solid rgba(6,182,212,0.2)',
              background: 'rgba(6,182,212,0.04)',
            }}
          >
            <button
              onClick={() => setLang('tr')}
              className="px-2.5 py-1.5 transition-all duration-200"
              style={{
                color: lang === 'tr' ? '#06b6d4' : '#475569',
                background: lang === 'tr' ? 'rgba(6,182,212,0.14)' : 'transparent',
              }}
            >
              TR
            </button>
            <div className="w-px h-3.5" style={{ background: 'rgba(6,182,212,0.2)' }} />
            <button
              onClick={() => setLang('en')}
              className="px-2.5 py-1.5 transition-all duration-200"
              style={{
                color: lang === 'en' ? '#06b6d4' : '#475569',
                background: lang === 'en' ? 'rgba(6,182,212,0.14)' : 'transparent',
              }}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language toggle (mobile) */}
          <div
            className="flex items-center text-xs font-semibold overflow-hidden rounded"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              border: '1px solid rgba(6,182,212,0.2)',
              background: 'rgba(6,182,212,0.04)',
            }}
          >
            <button
              onClick={() => setLang('tr')}
              className="px-2 py-1 transition-all duration-200"
              style={{
                color: lang === 'tr' ? '#06b6d4' : '#475569',
                background: lang === 'tr' ? 'rgba(6,182,212,0.14)' : 'transparent',
              }}
            >
              TR
            </button>
            <div className="w-px h-3" style={{ background: 'rgba(6,182,212,0.2)' }} />
            <button
              onClick={() => setLang('en')}
              className="px-2 py-1 transition-all duration-200"
              style={{
                color: lang === 'en' ? '#06b6d4' : '#475569',
                background: lang === 'en' ? 'rgba(6,182,212,0.14)' : 'transparent',
              }}
            >
              EN
            </button>
          </div>

          <button
            className="p-1.5 rounded"
            style={{ color: '#94a3b8' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(2, 8, 23, 0.97)',
              borderBottom: '1px solid rgba(6,182,212,0.12)',
            }}
            className="md:hidden overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium py-2 border-b"
                  style={{ color: '#94a3b8', borderColor: 'rgba(6,182,212,0.08)' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
