import type { FC } from 'react'

interface ForRecyclersProps {
  onPartnerInquiry: () => void
}

const ForRecyclers: FC<ForRecyclersProps> = ({ onPartnerInquiry }) => {
  const valueProps = [
    {
      title: 'Aggregated Volume from Schools You Don\'t Currently Reach',
      desc: 'Individual households produce small, scattered quantities. Schools produce concentrated, predictable volumes on a schedule. Wastefund aggregates school-level supply into collection runs worth your truck\'s time.',
    },
    {
      title: 'Pre-Sorted Waste Streams',
      desc: 'Schools sort by material type before collection — plastic, paper, metal, glass separately. You receive pre-classified waste, reducing your sorting cost per tonne and improving the value of what you receive.',
    },
    {
      title: 'Digital Manifests — Built For You',
      desc: 'Every collection event is digitally logged: school, date, waste type, weight, collector ID. You get structured data without building the system yourself. Your dispatchers get a clean pickup queue.',
    },
    {
      title: 'Route-Optimised Collections',
      desc: 'Wastefund groups school pickups by proximity and volume. We schedule collection runs that fit your existing fleet routes — not extra trips for marginal loads.',
    },
  ]

  return (
    <section id="for-partners" className="section partners-section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">04</div>
          <div className="section-label">For Recycling Partners</div>
          <h2 className="section-title">
            The waste is already being generated.
            <br />
            <span style={{ color: 'var(--green-400)' }}>We make it worth collecting.</span>
          </h2>
          <p className="section-sub">
            Wastefund is built for recycling companies that want to expand school-sector sourcing
            without building the community outreach infrastructure from scratch.
          </p>
        </div>

        <div className="partners-grid">
          {valueProps.map((vp, i) => (
            <div key={i} className="partner-card">
              <div className="partner-card-label">Benefit {i + 1}</div>
              <h3 className="partner-card-title">{vp.title}</h3>
              <p className="partner-card-desc">{vp.desc}</p>
            </div>
          ))}
        </div>

        <div className="partners-cta-panel">
          <div>
            <div className="partners-cta-label">Partnership Inquiry</div>
            <h3 className="partners-cta-title">Interested in partnering with Wastefund?</h3>
            <p className="partners-cta-desc">
              We're in the pilot phase and actively looking for our first recycling company partner.
              Send us a message — we'll respond with specifics on school locations, estimated volumes,
              and what a pilot partnership looks like.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={onPartnerInquiry}
            >
              Send Inquiry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForRecyclers