export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="cta-banner-overlay" />
      <div className="container cta-banner-content">
        <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--green-300)', marginBottom: '0.75rem' }}>
          Join the Movement
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 800,
          color: 'var(--white)',
          marginBottom: '0.75rem',
          lineHeight: 1.25,
        }}>
          Your school\'s waste is someone else\'s raw material.
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--green-200)', maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
          Whether you\'re a school that wants to earn from waste, or a recycling company that wants reliable supply — Wastefund is building the bridge.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg">
            Register Your School
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}