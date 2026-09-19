import type { FC } from 'react'

interface HeroProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

const stats = [
  { label: 'Pilot Target', value: '5 Schools', note: 'Ashanti Region' },
  { label: 'Est. Revenue/School', value: 'GHS 1,200+', note: 'Per term (pilot)' },
  { label: 'Recycling Partner', value: 'Zoomlion', note: 'Targeted first partner' },
]

export const Hero: FC<HeroProps> = ({ onRegisterSchool, onPartnerInquiry }) => {
  return (
    <section className="hero" id="how-it-works">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 6.5 2.5C4.2 4.3 2 8.5 2 12.2 2 16 8 17.5 8 17.5"/><circle cx="12" cy="9" r="2.5"/></svg>
              Free school waste audits for Ashanti Region schools
            </div>

            <h1 className="hero-title">
              Your School Can
              <span className="highlight">Lead the Shift</span>
            </h1>

            <p className="hero-description">
              Wastefund connects Ghanaian high schools with recycling companies.
              Schools sort and store recyclable waste. Recyclers collect it. Schools receive
              a direct revenue share — no middleman fees, no paperwork overhead.
            </p>

            <div className="hero-cta-row">
              <button className="btn btn-primary btn-lg" onClick={onRegisterSchool}>
                Register Your School
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button className="btn btn-ghost btn-lg" onClick={onPartnerInquiry}>
                Become a Recycling Partner
              </button>
            </div>

            <div className="hero-tagline">
              Exploring future-ready circular waste systems for communities that aim higher.
            </div>

            <div className="hero-stats" style={{ marginTop: '2.5rem' }}>
              {stats.map(s => (
                <div key={s.label} className="hero-stat-glass hero-stat-glass-1">
                  <div className="hero-stat-glass-value">{s.value}</div>
                  <div className="hero-stat-glass-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-glass">
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

            <div className="hero-stat-glass hero-stat-glass-2">
              <div className="hero-stat-glass-value">5,000+</div>
              <div className="hero-stat-glass-label">Students reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero