import type { FC } from 'react'

interface HeroProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export const Hero: FC<HeroProps> = ({ onRegisterSchool, onPartnerInquiry }) => {
  return (
    <section className="hero">
      {/* Background orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          {/* Left: text */}
          <div>
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Pilot Launch — Ashanti Region, Ghana
            </div>

            <h1 className="hero-title">
              Schools collect waste.
              <span>Schools earn money.</span>
            </h1>

            <p className="hero-sub">
              Wastefund connects Ghanaian high schools with recycling companies.
              Schools sort and store recyclable waste. Recyclers collect it. Schools receive
              a direct revenue share — no middleman fees, no paperwork overhead.
            </p>

            <div className="hero-cta-row">
              <button className="btn-hero-primary" onClick={onRegisterSchool} id="hero-register-cta">
                Register Your School
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button className="btn-hero-secondary" onClick={onPartnerInquiry} id="hero-partner-cta">
                Become a Recycling Partner
              </button>
            </div>

            <div className="hero-stats">
              {[
                { label: 'Pilot Target', value: '5 Schools', note: 'Ashanti Region' },
                { label: 'Est. Revenue/School', value: 'GHS 1,200+', note: 'Per term (pilot)' },
                { label: 'Recycling Partner', value: 'Zoomlion', note: 'Targeted first partner' },
              ].map(stat => (
                <div key={stat.label} className="hero-stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-note">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="hero-image-wrap">
            <div className="hero-image-inner">
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=500&fit=crop&auto=format"
                alt="Green field representing Ghana's sustainable future through waste recovery"
                loading="eager"
              />
              <div className="hero-image-caption">
                <span className="hero-image-label">Ghana's green future</span>
                <span className="hero-image-sub">Starts with what we throw away</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero-image-wrap {
          display: flex;
          justify-content: center;
        }
        .hero-image-inner {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          position: relative;
          max-width: 400px;
        }
        .hero-image-inner img {
          width: 100%;
          height: 380px;
          object-fit: cover;
        }
        .hero-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.25rem 0.875rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.55));
          color: var(--white);
        }
        .hero-image-label {
          display: block;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
        }
        .hero-image-sub {
          display: block;
          font-size: 0.72rem;
          opacity: 0.8;
          margin-top: 0.15rem;
        }
      `}</style>
    </section>
  )
}

export default Hero