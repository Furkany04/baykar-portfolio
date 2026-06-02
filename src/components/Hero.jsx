import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronDown, ArrowRight, Code2 } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { translations } from '../data/translations'

gsap.registerPlugin(useGSAP)

const CODE_LINES = [
  'public async Task<IActionResult> GetMissions()',
  '[Authorize(Roles = "Admin,Engineer")]',
  'await _repository.BulkInsertAsync(payload);',
  'services.AddScoped<IMissionService>();',
  'return Ok(new ApiResponse { Data = result });',
  'builder.Services.AddDbContext<AppDbContext>();',
  'var token = _jwtService.GenerateToken(user);',
  '[HttpGet("{id}")] // GET /api/mission/{id}',
  'await _cache.SetAsync(key, data, expiry);',
  'throw new DomainException("Unauthorized");',
  'modelBuilder.HasIndex(x => x.TrackingCode);',
  'services.AddStackExchangeRedisCache(opts);',
]

const TECH_STACK = ['ASP.NET Core', 'C#', 'SQL', 'REST API', 'Entity Framework']

function FloatingCodeLine({ text, style }) {
  return (
    <div
      className="absolute whitespace-nowrap text-xs select-none pointer-events-none"
      style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(6,182,212,0.18)', ...style }}
    >
      {text}
    </div>
  )
}

export default function Hero({ lang }) {
  const t = translations[lang].hero
  const glowRef = useRef(null)
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) return
    const handleMouseMove = (e) => {
      if (!glowRef.current) return
      gsap.to(glowRef.current, {
        x: e.clientX - 300,
        y: e.clientY - 300,
        duration: 1.2,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReduced])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut', delay },
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#020817' }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)',
        }}
      />

      {!prefersReduced && (
        <div
          ref={glowRef}
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
            top: 0,
            left: 0,
          }}
        />
      )}

      {!prefersReduced && CODE_LINES.map((line, i) => (
        <FloatingCodeLine
          key={i}
          text={line}
          style={{
            top: `${8 + i * 7.5}%`,
            left: i % 2 === 0 ? `${2 + (i % 3) * 3}%` : 'auto',
            right: i % 2 !== 0 ? `${2 + (i % 3) * 3}%` : 'auto',
            animation: `float-code ${4 + i * 0.3}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {!prefersReduced && (
        <div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)',
            animation: 'scanline 6s linear infinite',
            top: '30%',
          }}
        />
      )}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.25)',
            color: '#06b6d4',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#06b6d4', animation: 'pulse 2s infinite' }}
          />
          <Code2 size={11} />
          {t.badge}
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-bold tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.1, color: '#f1f5f9' }}
        >
          {t.name}{' '}
          <span style={{ color: '#06b6d4', textShadow: '0 0 30px rgba(6,182,212,0.4)' }}>
            {t.lastName}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div {...fadeUp(0.3)} className="mb-6">
          <span
            className="text-xl font-medium uppercase"
            style={{
              color: '#94a3b8',
              letterSpacing: '0.2em',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {t.subtitle}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-base md:text-lg leading-relaxed mb-10 mx-auto"
          style={{ color: '#64748b', maxWidth: '620px' }}
        >
          {t.desc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-300"
            style={{
              background: 'rgba(6,182,212,0.12)',
              border: '1px solid rgba(6,182,212,0.4)',
              color: '#06b6d4',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6,182,212,0.2)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(6,182,212,0.12)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {t.btn1}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-300"
            style={{
              background: 'transparent',
              border: '1px solid rgba(148,163,184,0.2)',
              color: '#94a3b8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'
              e.currentTarget.style.color = '#f1f5f9'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'
              e.currentTarget.style.color = '#94a3b8'
            }}
          >
            {t.btn2}
          </button>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          {...fadeUp(0.75)}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded"
              style={{
                background: 'rgba(15,39,68,0.8)',
                border: '1px solid rgba(6,182,212,0.12)',
                color: '#475569',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: '#334155' }}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em' }}>
          SCROLL
        </span>
        <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
      </motion.div>

      <style>{`
        @keyframes float-code { from { transform: translateY(0px); } to { transform: translateY(-8px); } }
        @keyframes scanline { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
      `}</style>
    </section>
  )
}
