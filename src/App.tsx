import { useEffect, useRef, useState } from 'react'
import './App.css'
import './index.css'

const PHONE = 'YOUR_NUMBER'

const services = [
  { icon: '🚿', title: 'Full Exterior Wash & Wax', desc: 'Hand wash with premium products + protective wax coat for lasting shine' },
  { icon: '🧹', title: 'Interior Vacuum & Dusting', desc: 'Deep vacuum of all surfaces, mats, door pockets and crevices' },
  { icon: '🔧', title: 'Wheel & Tyre Treatment', desc: 'Detailed rim clean, tyre shine and brake dust removal' },
  { icon: '✨', title: 'Glass Polish', desc: 'Crystal-clear streak-free finish on all windows inside and out' },
  { icon: '🛋️', title: 'Upholstery Shampoo', desc: 'Deep clean of seats and carpets — available on request' },
  { icon: '💎', title: 'Gleaming Finish', desc: 'Final buff and full inspection for a showroom-worthy result' },
]

const faqs = [
  {
    q: 'What areas do you cover?',
    a: 'We currently serve High Wycombe, Amersham, Chesham, Beaconsfield, Hazlemere, Flackwell Heath, Loudwater, Penn, and surrounding areas. Not sure if we cover you? Just get in touch and we\'ll let you know.',
  },
  {
    q: 'Do I need to be home during the valet?',
    a: 'Not necessarily! As long as we have access to your vehicle and a water supply nearby, we can get to work. Many of our customers simply leave the keys and return to a spotless car.',
  },
  {
    q: 'How long does a full valet take?',
    a: 'A standard exterior wash and wax takes around 45–60 minutes. A full interior and exterior valet typically takes 1.5–2.5 hours depending on the size and condition of the vehicle.',
  },
  {
    q: 'Do you bring your own equipment and water?',
    a: 'We bring all our own professional-grade products, cloths, and equipment. For water we do need access to an outdoor tap — if that\'s an issue, just let us know in advance.',
  },
  {
    q: 'How do I claim the 10% off my first wash?',
    a: 'Just mention it when you call to book. We\'ll apply it automatically to your first appointment. This offer is available for a limited time only, so don\'t miss out!',
  },
  {
    q: 'How much does a mobile car wash cost?',
    a: 'Prices vary by vehicle size and the services chosen. Call us for a quick, no-obligation quote — we pride ourselves on fair, transparent pricing with no hidden charges.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash and bank transfer. Payment is taken on the day once you\'re happy with the result.',
  },
  {
    q: 'Can you valet a van or large SUV?',
    a: 'Absolutely — we cater for all vehicle types including cars, SUVs, MPVs and vans. Larger vehicles may be priced slightly higher. Just mention your vehicle when booking.',
  },
]

const areas = [
  'High Wycombe', 'Amersham', 'Chesham', 'Beaconsfield',
  'Hazlemere', 'Flackwell Heath', 'Loudwater', 'Penn',
  'Little Chalfont', 'Great Missenden', 'Holmer Green', 'Tylers Green',
]

const steps = [
  { num: '01', title: 'Call to Book', desc: 'Give us a quick call or text to arrange a time that suits you. We\'ll confirm your slot same day.' },
  { num: '02', title: 'We Come to You', desc: 'Our team arrives at your door with everything needed — no need to drive anywhere.' },
  { num: '03', title: 'Drive Away Gleaming', desc: 'We clean, polish and inspect your car until it\'s showroom-ready. You just enjoy the result.' },
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
        {[
          [30, 20, 8], [15, 40, 5], [45, 10, 6], [160, 25, 7],
          [175, 45, 5], [155, 10, 4], [50, 30, 4],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="rgba(125,211,252,0.6)" strokeWidth="1.5"
            style={{ animation: `float ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <ellipse cx="100" cy="72" rx="72" ry="8" fill="rgba(14,165,233,0.15)" />
        <rect x="30" y="55" width="140" height="22" rx="4" fill="#1e293b" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        <path d="M55 55 L70 32 L130 32 L145 55 Z" fill="#1e3a5f" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        <path d="M72 53 L78 36 L100 36 L100 53 Z" fill="rgba(56,189,248,0.25)" stroke="rgba(125,211,252,0.4)" strokeWidth="0.8" />
        <path d="M104 53 L104 36 L122 36 L128 53 Z" fill="rgba(56,189,248,0.25)" stroke="rgba(125,211,252,0.4)" strokeWidth="0.8" />
        <circle cx="60" cy="76" r="12" fill="#0f172a" stroke="rgba(56,189,248,0.6)" strokeWidth="2" />
        <circle cx="60" cy="76" r="6" fill="#1e293b" stroke="rgba(125,211,252,0.4)" strokeWidth="1" />
        <circle cx="140" cy="76" r="12" fill="#0f172a" stroke="rgba(56,189,248,0.6)" strokeWidth="2" />
        <circle cx="140" cy="76" r="6" fill="#1e293b" stroke="rgba(125,211,252,0.4)" strokeWidth="1" />
        <path d="M80 40 Q100 35 120 40" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
        <path d="M145 60 Q160 45 175 55 Q165 50 170 65" stroke="rgba(56,189,248,0.7)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M148 58 Q163 42 178 52" stroke="rgba(125,211,252,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M170 30 L172 35 L177 37 L172 39 L170 44 L168 39 L163 37 L168 35 Z" fill="rgba(255,255,255,0.9)" />
      </svg>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-sky-400/20 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-sky-500/5 hover:bg-sky-500/10 transition-colors"
      >
        <span className="text-white font-semibold text-sm md:text-base">{q}</span>
        <span className="text-sky-400 text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 py-4 border-t border-sky-400/10">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">{a}</p>
        </div>
      )}
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
              Wycombe, Amersham &amp; Surrounding Areas
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

      {/* How It Works */}
      <section className="py-20 px-4" style={{ background: '#040c1a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-2">
              How It Works
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
            <p className="text-slate-400 mt-4 text-sm">Three simple steps to a spotless car</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="service-card rounded-2xl p-8 text-center relative">
                <div className="text-5xl font-black zl-text opacity-20 absolute top-4 right-5">{step.num}</div>
                <div className="text-4xl font-black zl-text mb-3">{step.num}</div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #040c1a 0%, #071428 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-2">
              Premium Valeting Services
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
            <p className="text-slate-400 mt-4 text-sm max-w-xl mx-auto">
              Every service is carried out by hand using professional-grade products.
              No automated machines — just proper care, every time.
            </p>
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

      {/* Stats */}
      <section className="py-16 px-4" style={{ background: '#040c1a' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '100%', label: 'Mobile Service', sub: 'We come straight to your door' },
              { stat: '5★', label: 'Quality Every Time', sub: 'Showroom finish guaranteed' },
              { stat: '10%', label: 'Off Your First Wash', sub: 'Limited time offer' },
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

      {/* Areas We Cover */}
      <section id="areas" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #040c1a 0%, #071428 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-2">
            Areas We Cover
          </h2>
          <div className="section-divider mb-6 max-w-xs mx-auto" />
          <p className="text-slate-400 text-sm mb-10 max-w-xl mx-auto">
            Based in the Wycombe area, we travel across the surrounding towns and villages.
            Not on the list? Give us a call — we may still be able to reach you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="border border-sky-400/25 text-sky-300 text-sm font-semibold px-4 py-2 rounded-full bg-sky-500/5"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4" style={{ background: '#040c1a' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sky-400 font-black text-xl md:text-2xl tracking-widest uppercase mb-2">
              Frequently Asked Questions
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-24 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #040c1a 0%, #071428 100%)' }}>
        <RainDrops />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="script-font text-sky-300 text-2xl mb-3">Ready for a spotless car?</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Book Your Valet Today
          </h2>
          <p className="text-slate-400 mb-8 text-base">
            Serving <span className="text-sky-300 font-semibold">Wycombe, Amersham &amp; Surrounding Areas</span> — we come to your door
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
      <footer className="border-t border-sky-400/10 py-10 px-4" style={{ background: '#02060f' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-black zl-text text-xl">ZL</span>
                <span className="font-black text-white text-xl">SCRUBZ</span>
              </div>
              <p className="text-slate-500 text-xs max-w-xs">
                Premium mobile car wash &amp; valeting service. We bring the showroom finish to your front door.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sky-400 font-semibold text-sm mb-1">Service Areas</p>
              <p className="text-slate-500 text-xs">Wycombe · Amersham · Chesham</p>
              <p className="text-slate-500 text-xs">Beaconsfield · Hazlemere &amp; more</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sky-400 font-semibold text-sm mb-1">Quick Links</p>
              <div className="flex flex-col gap-1">
                <a href="#services" className="text-slate-500 hover:text-sky-400 text-xs transition-colors">Our Services</a>
                <a href="#areas" className="text-slate-500 hover:text-sky-400 text-xs transition-colors">Areas We Cover</a>
                <a href="#faq" className="text-slate-500 hover:text-sky-400 text-xs transition-colors">FAQs</a>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-400/10 pt-6 text-center">
            <p className="text-slate-600 text-xs">© {new Date().getFullYear()} ZL Scrubz. All rights reserved. · Mobile Car Wash &amp; Valeting · Wycombe, Amersham &amp; Surrounding Areas</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
