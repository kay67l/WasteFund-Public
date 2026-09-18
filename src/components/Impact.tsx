export default function Impact() {
  const stats = [
    { value: '5', unit: 'Schools', label: 'Pilot cohort target', sublabel: 'Ashanti Region' },
    { value: '~12T', unit: 'Waste/yr', label: 'Estimated diversion', sublabel: 'From pilot schools combined' },
    { value: 'GHS 6K+', unit: '', label: 'Pilot revenue target', sublabel: 'Across all 5 schools, Year 1' },
    { value: '60%', unit: 'to Schools', label: 'Revenue share model', sublabel: 'Of each collection value' },
  ]

  const wasteTypes = [
    { type: 'Plastic', icon: '🧴', color: '#3b82f6', note: 'PET bottles, sachets, containers' },
    { type: 'Paper', icon: '📄', color: '#f59e0b', note: 'Cardboard, newspapers, exercise books' },
    { type: 'Metal', icon: '🥫', color: '#6b7280', note: 'Cans, scrap metals' },
    { type: 'Glass', icon: '🫙', color: '#10b981', note: 'Bottles, jars' },
    { type: 'E-Waste', icon: '💻', color: '#8b5cf6', note: 'Batteries, small electronics (future phase)' },
  ]

  return (
    <section id="impact" className="section" style={{ background: 'rgba(15,23,42,0.6)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>📊</span> Impact
          </div>
          <h2 className="section-title font-display" style={{ textAlign: 'center' }}>
            Pilot targets — not projections.
            <br />
            <span className="text-gradient">Honest numbers, honestly labelled.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            These are the numbers we're working toward in the pilot, not achievements yet.
            We'll publish actual data once collection starts.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{ textAlign: 'center', padding: '2rem 1.5rem' }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--green-400)',
                lineHeight: 1,
              }}>
                {s.value}
                {s.unit && (
                  <span style={{ fontSize: '0.7em', color: 'var(--green-600)', marginLeft: '0.2em' }}>
                    {s.unit}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, marginTop: '0.6rem', marginBottom: '0.25rem' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{s.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Waste types we collect */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
            Materials We Handle
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {wasteTypes.map((w) => (
              <div
                key={w.type}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1.25rem',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{w.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{w.type}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>{w.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <div style={{
          background: 'rgba(22,163,74,0.06)',
          border: '1px solid rgba(22,163,74,0.15)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--green-400)' }}>On transparency:</strong>{' '}
            Wastefund will publish quarterly impact reports showing actual waste collected, actual revenue distributed,
            and actual school participation numbers. We won't inflate numbers.
            If the pilot underperforms, we'll say that too.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #impact > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #impact > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
