interface ForSchoolsProps { onRegisterSchool: () => void }

export default function ForSchools({ onRegisterSchool }: ForSchoolsProps) {
  const benefits = [
    {
      icon: '💵',
      title: 'Direct Revenue to Your School',
      desc: '60% of each collection\'s value goes directly to the school account. Not a grant with conditions. Not a prize. Earned income from waste you were already generating.',
    },
    {
      icon: '📉',
      title: 'Lower Waste Management Costs',
      desc: 'Recyclable waste is removed on a schedule at no cost to the school. Less waste means fewer skip-hire trips. In some cases, this saves schools money directly.',
    },
    {
      icon: '📲',
      title: 'Simple Coordinator Dashboard',
      desc: 'One school coordinator gets access to the Wastefund ops system. Log collection batches, view earnings history, and track upcoming pickups — no technical skill required.',
    },
    {
      icon: '🏆',
      title: 'Impact Recognition',
      desc: 'Schools are listed on Wastefund\'s public impact page by total waste diverted from landfill. First schools in the pilot get founding member status.',
    },
    {
      icon: '🎓',
      title: 'Curriculum Integration',
      desc: 'Optional: Wastefund provides lesson plan resources that link waste collection data to environmental science and economics curricula.',
    },
    {
      icon: '🤝',
      title: 'No Lock-In',
      desc: 'Pilot participation has a one-term trial period. If it doesn\'t work for your school, you\'re not locked in. We earn your continued participation.',
    },
  ]

  return (
    <section id="for-schools" className="section" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left: header and CTA */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div className="section-label">
              <span>🏫</span> For Schools
            </div>
            <h2 className="section-title font-display">
              Your school generates waste every day.
              <br />
              <span className="text-gradient">It should generate income too.</span>
            </h2>
            <div className="divider" />
            <p className="section-subtitle">
              Wastefund asks for one coordinator, a few collection bins, and a willingness to try.
              We handle the logistics, the recycler relationship, and the payout.
            </p>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.2)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--green-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Pilot Terms (Ashanti Region)
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Open to SHS, SHTS, and technical schools',
                  'First 5 schools — founding cohort',
                  'One-term trial, no lock-in',
                  'Coordinator onboarding provided',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--slate-300)' }}>
                    <span style={{ color: 'var(--green-400)', marginTop: '0.1rem' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="btn btn-primary btn-lg"
              style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}
              onClick={onRegisterSchool}
              id="for-schools-cta"
            >
              Register Your School
              <span>→</span>
            </button>
          </div>

          {/* Right: benefits grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: '1.75rem', flexShrink: 0,
                  width: 48, height: 48,
                  background: 'rgba(22,163,74,0.1)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {b.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #for-schools > div > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          #for-schools > div > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
