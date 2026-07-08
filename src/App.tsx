import { useEffect, useRef } from 'react'
import './App.css'
import './index.css'

const PHONE = 'YOUR_NUMBER'

const services = [
  { icon: '🚿', title: 'Full Exterior Wash & Wax', desc: 'Hand wash with premium products + protective wax coat' },
  { icon: '🧹', title: 'Interior Vacuum & Dusting', desc: 'Deep vacuum of all surfaces, mats, and crevices' },
  { icon: '🔧', title: 'Wheel & Tyre Treatment', desc: 'Detailed rim clean, tyre shine, and brake dust removal' },
  { icon: '✨', title: 'Glass Polish', desc: 'Crystal-clear finish on all windows inside and out' },
  { icon: '🛋️', title: 'Upholstery Shampoo', desc: 'Deep clean seats and carpets on request' },
  { icon: '💎', title: 'Gleaming Finish', desc: 'Final buff and inspection for a showroom-worthy result' },
]

function RainDrops() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="drop"
          style={{
            left: `${(i * 6.2) % 100}%`,
            height: `${40 + (i * 17) % 60}px`,
            animationDuration: `${1.4 + (i * 0.3) % 2}s`,
            animationDelay: `${(i * 0.4) % 2.5}s`,
            opacity: 0.3 + (i % 4) * 0.1,
          }}
        />
      ))}
    </div>
  )
}

function CarIcon() {
  return (
    <div className="float-card relative mx-auto w-64 h-40 flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]">
        {/* Bubbles */}
        {[
          [30, 20, 8], [15, 40, 5], [45, 10, 6], [160, 25, 7],
          [175, 45, 5], [155, 10, 4], [50, 30, 4],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="rgba(125,211,252,0.6)" strokeWidth="1.5"
            style={{ animation: `float ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {/* Car body */}
        <ellipse cx="100" cy="72" rx="72" ry="8" fill="rgba(14,165,233,0.15)" />
        <rect x="30" y="55" width="140" height="22" rx="4" fill="#1e293b" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        <path d="M55 55 L70 32 L130 32 L145 55 Z" fill="#1e3a5f" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        {/* Windows */}
        <path d="M72 53 L78 36 L100 36 L100 53 Z" fill="rgba(56,189,248,0.25)" stroke="rgba(125,211,252,0.4)" strokeWidth="0.8" />
        <path d="M104 53 L104 36 L122 36 L128 53 Z" fill="rgba(56,189,248,0.25)" stroke="rgba(125,211,252,0.4)" strokeWidth="0.8" />
        {/* Wheels */}
        <circle cx="60" cy="76" r="12" fill="#0f172a" stroke="rgba(56,189,248,0.6)" strokeWidth="2" />
        <circle cx="60" cy="76" r="6" fill="#1e293b" stroke="rgba(125,211,252,0.4)" strokeWidth="1" />
        <circle cx="140" cy="76" r="12" fill="#0f172a" stroke="rgba(56,189,248,0.6)" strokeWidth="2" />
        <circle cx="140" cy="76" r="6" fill="#1e293b" stroke="rgba(125,211,252,0.4)" strokeWidth="1" />
        {/* Highlights */}
        <path d="M80 40 Q100 35 120 40" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
        {/* Water splash */}
        <path d="M145 60 Q160 45 175 55 Q165 50 170 65" stroke="rgba(56,189,248,0.7)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M148 58 Q163 42 178 52" stroke="rgba(125,211,252,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Star sparkle */}
        <path d="M170 30 L172 35 L177 37 L172 39 L170 44 L168 39 L163 37 L168 35 Z" fill="rgba(255,255,255,0.9)" />
      </svg>
    </div>
  )
}

export default function App() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.style.opacity = window.scrollY > 10 ? '1' : '0.95'
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Sticky Nav */}
      <nav ref={navRef} className="nav-blur fixed top-0 left-0 right-0 z-50 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black zl-text tracking-wide">ZL</span>
            <span className="text-xl font-black text-white tracking-wide">SCRUBZ</span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="glow-btn bg-sky-500 hover:bg-sky-400 text-white font-bold px-5 py-2 rounded-full text-sm transition-all"
          >
            📞 Call to Book
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center">
        <RainDrops />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="script-font text-sky-300 text-2xl md:text-3xl mb-6 drop-shadow-lg">
            Mobile Door-to-Door Premium Service
          </p>

          <CarIcon />

          <div className="mt-6 mb-2">
            <div className="flex items-center justify-center gap-3">
              <span className="text-5xl md:text-7xl font-black zl-text tracking-tight">ZL</span>
              <span className="text-5xl md:text-7xl font-black shimmer-text tracking-tight">SCRUBZ</span>
            </div>
            <p className="text-sky-300 font-semibold tracking-[0.3em] text-sm md:text-base uppercase mt-1">
              Premium Car Wash &amp; Valeting
            </p>
          </div>

          <div className="section-divider my-6 mx-auto max-w-xs" />

          <div className="bg-sky-500/10 border border-sky-400/30 rounded-2xl px-8 py-5 inline-block">
            <p className="text-sm text-sky-300 font-semibold tracking-widest uppercase mb-1">Now Serving</p>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Chesham &amp; Amersham
            </h1>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="glow-btn bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all inline-flex items-center gap-2 justify-center"
            >
              📞 Call to Book Now
            </a>
            <a
              href="#services"
              className="border border-sky-400/50 hover:border-sky-400 text-sky-300 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all inline-flex items-center gap-2 justify-center"
            >
              Our Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <div className="offer-banner py-4 px-6 text-center">
        <p className="text-white font-black text-base md:text-xl tracking-wide">
          🎉 SPECIAL OFFER: GET <span className="text-yellow-300">10% OFF</span> YOUR FIRST WASH!{' '}
          <span className="font-normal opacity-90 text-sm md:text-base">(Limited Availability)</span>
        </p>
      </div>

      {/* Our Story */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #040c1a 0%, #071428 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-4">
            Our Story — Young &amp; Driven
          </h2>
          <div className="section-divider mb-8 max-w-xs mx-auto" />
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Founded by an ambitious young couple{' '}
            <span className="text-sky-300 font-semibold">(Age 13)</span>{' '}
            with a massive passion for pristine cars. Support local entrepreneurial spirit and get an attention
            to detail that is second to none!{' '}
            <span className="text-white font-semibold">
              We're not just scrubbing; we're redefining clean.
            </span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4" style={{ background: '#040c1a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-2">
              Premium Valeting Services
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="service-card rounded-2xl p-6">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #040c1a 0%, #071428 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '100%', label: 'Mobile Service', sub: 'We come to you' },
              { stat: '5★', label: 'Quality Finish', sub: 'Every single time' },
              { stat: '10%', label: 'First Wash Off', sub: 'Limited offer' },
            ].map((item) => (
              <div key={item.stat} className="border border-sky-400/20 rounded-2xl p-6 bg-sky-500/5">
                <div className="text-4xl font-black zl-text mb-1">{item.stat}</div>
                <div className="text-white font-bold text-sm">{item.label}</div>
                <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-24 px-4 text-center relative overflow-hidden" style={{ background: '#040c1a' }}>
        <RainDrops />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="script-font text-sky-300 text-2xl mb-3">Ready for a spotless car?</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Book Your Valet Today
          </h2>
          <p className="text-slate-400 mb-8 text-base">
            Serving <span className="text-sky-300 font-semibold">Chesham &amp; Amersham</span> — we come to your door
          </p>
          <a
            href={`tel:${PHONE}`}
            className="glow-btn inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-black px-10 py-5 rounded-full text-xl transition-all"
          >
            📞 <span>Call to Book</span>
          </a>
          <p className="text-slate-500 text-sm mt-6">Don't forget — 10% off your first wash!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sky-400/10 py-8 px-4 text-center" style={{ background: '#02060f' }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-black zl-text text-lg">ZL</span>
          <span className="font-black text-white text-lg">SCRUBZ</span>
        </div>
        <p className="text-slate-500 text-xs">Premium Mobile Car Wash &amp; Valeting · Chesham &amp; Amersham</p>
        <p className="text-slate-600 text-xs mt-1">© {new Date().getFullYear()} ZL Scrubz. All rights reserved.</p>
      </footer>

    </div>
  )
}
