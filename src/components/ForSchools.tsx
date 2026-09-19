import type { FC } from 'react'

interface ForSchoolsProps {
  onRegisterSchool: () => void
}

const ForSchools: FC<ForSchoolsProps> = ({ onRegisterSchool }) => {
  const benefits = [
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'Direct Revenue to Your School',
      desc: '60% of each collection\'s value goes directly to the school account. Not a grant with conditions. Not a prize. Earned income from waste you were already generating.',
    },
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'Lower Waste Management Costs',
      desc: 'Recyclable waste is removed on a schedule at no cost to the school. Less waste means fewer skip-hire trips. In some cases, this saves schools money directly.',
    },
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'Simple Coordinator Dashboard',
      desc: 'One school coordinator gets access to the Wastefund ops system. Log collection batches, view earnings history, and track upcoming pickups — no technical skill required.',
    },
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'Impact Recognition',
      desc: 'Schools are listed on Wastefund\'s public impact page by total waste diverted from landfill. First schools in the pilot get founding member status.',
    },
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'Curriculum Integration',
      desc: 'Optional: Wastefund provides lesson plan resources that link waste collection data to environmental science and economics curricula.',
    },
    {
      check: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ),
      title: 'No Lock-In',
      desc: 'Pilot participation has a one-term trial period. If it doesn\'t work for your school, you\'re not locked in. We earn your continued participation.',
    },
  ]

  return (
    <section id="for-schools" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">02</div>
          <div className="section-label">For Schools</div>
          <h2 className="section-title">
            Your school generates waste every day.
            <br />
            <span style={{ color: 'var(--green-500)' }}>It should generate income too.</span>
          </h2>
          <p className="section-sub">
            Wastefund helps Ghanaian schools turn their waste stream into a revenue stream.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefits-left">
            <div className="benefits-list">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-item">
                  <div className="benefit-check">{b.check}</div>
                  <div className="benefit-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-lg benefits-cta" onClick={onRegisterSchool}>
              Register Your School
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>

            <div className="pilot-terms">
              <div className="pilot-terms-label">Pilot Terms — Ashanti Region</div>
              <ul>
                {[
                  'Open to SHS, SHTS, and technical schools',
                  'First 5 schools — founding cohort',
                  'One-term trial, no lock-in',
                  'Coordinator onboarding provided',
                ].map(item => (
                  <li key={item}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="benefits-right">
            <div className="benefits-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1772419186959-fdb8cc37e149?w=600&h=500&fit=crop&auto=format"
                alt="Students in a classroom learning about waste management and sustainability"
                loading="lazy"
              />
              <div className="benefits-image-caption">
                <span className="benefits-image-label">Ashanti Region Schools</span>
                <span className="benefits-image-sub">Pilot participant classrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForSchools