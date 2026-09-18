import type { } from 'react'

interface HeroProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export default function Hero({ onRegisterSchool, onPartnerInquiry }: HeroProps) {
  return (
    <section style={{
      minHeight: 'auto',
      paddingTop: '6rem',
      paddingBottom: '3rem',
      background: 'var(--paper)',
    }}>
      <div className="container">
        {/* Newspaper masthead */}
        <div className="masthead">
          <div className="masthead-ear">
            <h1 className="newspaper-name h-display h-display-1" style={{ margin: '0.5rem 0' }}>
              Waste<span className="accent">fund</span>
            </h1>
          </div>
          <p className="masthead-tagline">
            Ghana's Student-Led Waste Recovery Network
          </p>
          <p className="dateline">
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            {' · '}
            Kumasi, Ashanti Region
          </p>
          <div className="newspaper-header-rule" style={{ marginTop: '1rem' }}>
            <div className="line-left" />
            <div className="center-mark" />
            <div className="line-right" />
          </div>
        </div>

        {/* Main headline area */}
        <div style={{ maxWidth: 720, margin: '2.5rem auto 0' }}>
          {/* Eyebrow */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge badge-green">
              <span>🌱</span>
              Pilot Launch — Ashanti Region
            </span>
          </div>

          {/* Main headline */}
          <h1 className="h-display h-display-1" style={{ marginBottom: '1.25rem', animation: 'fadeInUp 0.5s ease forwards' }}>
            Schools collect waste.{' '}
            <span style={{ color: 'var(--green)' }}>
              Schools earn money.
            </span>
          </h1>

          {/* Lead paragraph */}
          <p className="lead" style={{ marginBottom: '2rem', animation: 'fadeInUp 0.5s 0.1s ease both' }}>
            Wastefund connects Ghanaian high schools with recycling companies.
            Schools sort and store recyclable waste. Recyclers collect it. Schools receive
            a direct revenue share — no middleman fees, no paperwork overhead.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: '0.875rem',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.5s 0.2s ease both',
          }}>
            <button className="btn btn-primary btn-lg" onClick={onRegisterSchool} id="hero-register-cta">
              Register Your School
              <span>→</span>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={onPartnerInquiry} id="hero-partner-cta">
              Become a Recycling Partner
            </button>
          </div>

          {/* Trust indicators — newspaper stat style */}
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.5s 0.3s ease both',
          }}>
            {[
              { label: 'Pilot Target', value: '5 Schools', note: 'Ashanti Region' },
              { label: 'Est. Revenue/School', value: 'GHS 1,200+', note: 'Per term (pilot)' },
              { label: 'Recycling Partner', value: 'Zoomlion', note: 'Targeted first partner' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                  fontWeight: 900,
                  color: 'var(--ink)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginTop: '0.4rem',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--ink-4)',
                  marginTop: '0.2rem',
                  fontStyle: 'italic',
                }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
