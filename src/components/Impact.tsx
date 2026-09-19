const stats = [
  { value: '5', unit: 'Schools', label: 'Pilot Cohort Target', sublabel: 'Ashanti Region' },
  { value: '~12T', unit: 'Waste/yr', label: 'Estimated Diversion', sublabel: 'From pilot schools combined' },
  { value: 'GHS 6K+', unit: '', label: 'Pilot Revenue Target', sublabel: 'Across all 5 schools, Year 1' },
  { value: '60%', unit: '', label: 'Revenue Share Model', sublabel: 'Of each collection value to schools' },
]

const wasteTypes = [
  { type: 'Plastic', color: '#4caf50', note: 'PET bottles, sachets, containers' },
  { type: 'Paper', color: '#ffc107', note: 'Cardboard, newspapers, exercise books' },
  { type: 'Metal', color: '#9e9e9e', note: 'Cans, scrap metals' },
  { type: 'Glass', color: '#81c784', note: 'Bottles, jars' },
  { type: 'Organics', color: '#66bb6a', note: 'Food waste, leaves (future phase)' },
]

export default function Impact() {
  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">05</div>
          <div className="impact-label">Impact</div>
          <h2 className="impact-title">
            Pilot targets — not projections.
            <br />
            Honest numbers, honestly labelled.
          </h2>
        </div>

        <div className="impact-inner">
          <div>
            <p className="impact-desc">
              These are the numbers we're working toward in the pilot, not achievements yet.
              We'll publish actual data once collection starts.
            </p>

            <div className="impact-stats">
              {stats.map((s, i) => (
                <div key={i} className="impact-stat-card">
                  <div className="impact-stat-value">{s.value}</div>
                  {s.unit && <div className="impact-stat-unit">{s.unit}</div>}
                  <div className="impact-stat-label">{s.label}</div>
                  <div className="impact-stat-sub">{s.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--green-300)', marginBottom: '0.75rem', textAlign: 'center' }}>
              Materials We Handle
            </div>
            <div className="waste-types">
              {wasteTypes.map(w => (
                <div key={w.type} className="waste-chip">
                  <span className="waste-chip-dot" style={{ background: w.color }} />
                  {w.type}
                  <span style={{ fontSize: '0.65rem', opacity: 0.55, marginLeft: '0.2rem' }}>— {w.note}</span>
                </div>
              ))}
            </div>

            <div className="impact-note">
              <p>
                <strong>On transparency:</strong> Wastefund will publish quarterly impact reports showing actual waste collected,
                actual revenue distributed, and actual school participation numbers. We won't inflate numbers.
                If the pilot underperforms, we'll say that too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}