export default function Impact() {
  const stats = [
    { value: '5', unit: 'Schools', label: 'Pilot Cohort Target', sublabel: 'Ashanti Region' },
    { value: '~12T', unit: 'Waste/yr', label: 'Estimated Diversion', sublabel: 'From pilot schools combined' },
    { value: 'GHS 6K+', unit: '', label: 'Pilot Revenue Target', sublabel: 'Across all 5 schools, Year 1' },
    { value: '60%', unit: '', label: 'Revenue Share Model', sublabel: 'Of each collection value to schools' },
  ]

  const wasteTypes = [
    { type: 'Plastic', color: '#3b82f6', note: 'PET bottles, sachets, containers' },
    { type: 'Paper', color: '#f59e0b', note: 'Cardboard, newspapers, exercise books' },
    { type: 'Metal', color: '#6b7280', note: 'Cans, scrap metals' },
    { type: 'Glass', color: '#10b981', note: 'Bottles, jars' },
    { type: 'Organics', color: '#22c55e', note: 'Food waste, leaves (future phase)' },
  ]

  return (
    <section id="impact" className="section impact-section">
      <div className="container impact-inner">
        {/* Header */}
        <div className="impact-header">
          <div className="impact-label">Impact</div>
          <h2 className="impact-title">
            Pilot targets — not projections.
            <br />
            Honest numbers, honestly labelled.
          </h2>
          <p className="impact-sub">
            These are the numbers we're working toward in the pilot, not achievements yet.
            We'll publish actual data once collection starts.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-card-value">
                {s.value}
                {s.unit && (
                  <span className="stat-card-unit">{s.unit}</span>
                )}
              </div>
              <div className="stat-card-label">{s.label}</div>
              <div className="stat-card-sub">{s.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Waste types */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--green-300)', marginBottom: '1rem', textAlign: 'center' }}>
            Materials We Handle
          </div>
          <div className="waste-types">
            {wasteTypes.map(w => (
              <div key={w.type} className="waste-chip">
                <span className="waste-chip-dot" style={{ background: w.color }} />
                {w.type}
                <span style={{ fontSize: '0.7rem', opacity: 0.6, marginLeft: '0.25rem' }}>— {w.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <div className="impact-note">
          <p>
            <strong>On transparency:</strong> Wastefund will publish quarterly impact reports showing actual waste collected,
            actual revenue distributed, and actual school participation numbers. We won't inflate numbers.
            If the pilot underperforms, we'll say that too.
          </p>
        </div>
      </div>
    </section>
  )
}