interface HeroProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export default function Hero({ onRegisterSchool, onPartnerInquiry }: HeroProps) {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '10%', left: '5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Eyebrow badge */}
          <div style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.5s ease forwards' }}>
            <span className="badge badge-green">
              <span>🌱</span>
              Ghana's Student-Led Waste Recovery Network
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              animation: 'fadeInUp 0.6s 0.1s ease both',
            }}
          >
            Schools collect waste.{' '}
            <span className="text-gradient">Schools earn money.</span>
          </h1>

          {/* Sub-headline */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--slate-400)',
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: '2.5rem',
            animation: 'fadeInUp 0.6s 0.2s ease both',
          }}>
            Wastefund connects Ghanaian high schools with recycling companies.
            Schools sort and store recyclable waste. Recyclers collect it. Schools receive
            a direct revenue share — no middleman fees, no paperwork overhead.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            animation: 'fadeInUp 0.6s 0.3s ease both',
          }}>
            <button className="btn btn-primary btn-lg" onClick={onRegisterSchool} id="hero-register-cta">
              Register Your School
              <span>→</span>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={onPartnerInquiry} id="hero-partner-cta">
              Become a Recycling Partner
            </button>
          </div>

          {/* Trust indicators */}
          <div style={{
            display: 'flex', gap: '2.5rem', marginTop: '3.5rem', flexWrap: 'wrap',
            animation: 'fadeInUp 0.6s 0.4s ease both',
          }}>
            {[
              { label: 'Pilot Target', value: '5 Schools', note: 'Ashanti Region' },
              { label: 'Est. Revenue/School', value: 'GHS 1,200+', note: 'Per term (pilot)' },
              { label: 'Recycling Partner', value: 'Zoomlion', note: 'Targeted first partner' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--green-400)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--slate-600)' }}>{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
