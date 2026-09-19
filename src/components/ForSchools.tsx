import type { FC } from 'react'

interface ForSchoolsProps {
  onRegisterSchool: () => void
}

const ForSchools: FC<ForSchoolsProps> = ({ onRegisterSchool }) => {
  const benefits = [
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'Direct Revenue to Your School',
      desc: '60% of each collection\'s value goes directly to the school account. Not a grant with conditions. Not a prize. Earned income from waste you were already generating.',
    },
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'Lower Waste Management Costs',
      desc: 'Recyclable waste is removed on a schedule at no cost to the school. Less waste means fewer skip-hire trips. In some cases, this saves schools money directly.',
    },
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'Simple Coordinator Dashboard',
      desc: 'One school coordinator gets access to the Wastefund ops system. Log collection batches, view earnings history, and track upcoming pickups — no technical skill required.',
    },
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'Impact Recognition',
      desc: 'Schools are listed on Wastefund\'s public impact page by total waste diverted from landfill. First schools in the pilot get founding member status.',
    },
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'Curriculum Integration',
      desc: 'Optional: Wastefund provides lesson plan resources that link waste collection data to environmental science and economics curricula.',
    },
    {
      check: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      ),
      title: 'No Lock-In',
      desc: 'Pilot participation has a one-term trial period. If it doesn\'t work for your school, you\'re not locked in. We earn your continued participation.',
    },
  ]

  return (
    <section id="for-schools" className="section benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {/* Left */}
          <div className="benefits-left">
            <div className="benefits-label">For Schools</div>
            <h2 className="benefits-title">
              Your school generates waste every day.
              <br />
              <span style={{ color: 'var(--green-600)' }}>It should generate income too.</span>
            </h2>
            <div className="benefits-list">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-item">
                  <div className="benefit-check" style={{ color: 'var(--green-600)' }}>{b.check}</div>
                  <div className="benefit-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-lg benefits-cta" onClick={onRegisterSchool} id="for-schools-cta">
              Register Your School
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          {/* Right: image */}
          <div className="benefits-right">
            <div className="benefits-image">
              <img
                src="https://images.unsplash.com/photo-1772419186959-fdb8cc37e149?w=600&h=520&fit=crop&auto=format"
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

        {/* Pilot terms box */}
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
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .benefits-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          position: relative;
        }
        .benefits-image img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }
        .benefits-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 1.5rem 1rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.5));
          color: var(--white);
        }
        .benefits-image-label {
          display: block;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
        }
        .benefits-image-sub {
          display: block;
          font-size: 0.78rem;
          opacity: 0.8;
          margin-top: 0.15rem;
        }
        .pilot-terms {
          margin-top: 2.5rem;
          padding: 1.25rem 1.5rem;
          background: var(--green-50);
          border: 1px solid var(--green-200);
          border-radius: var(--radius-lg);
          max-width: 480px;
        }
        .pilot-terms-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--green-700);
          margin-bottom: 0.75rem;
        }
        .pilot-terms ul {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .pilot-terms li {
          font-size: 0.875rem;
          color: var(--ink-2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pilot-terms svg { color: var(--green-600); flex-shrink: 0; }
      `}</style>
    </section>
  )
}

export default ForSchools