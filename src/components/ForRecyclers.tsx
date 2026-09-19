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
    <section id="for-partners" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 65%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ maxWidth: 700, marginBottom: '3.5rem' }}>
          <div className="benefits-label">For Recycling Partners</div>
          <h2 className="benefits-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}>
            The waste is already being generated.
            <br />
            <span style={{ color: 'var(--green-600)' }}>We make it worth collecting.</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: '1rem' }}>
            Wastefund is built for recycling companies that want to expand school-sector sourcing
            without building the community outreach infrastructure from scratch.
            We aggregate, pre-sort, and schedule — you collect.
          </p>
        </div>

        {/* Value props grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {valueProps.map((vp, i) => (
            <div key={i} className="benefit-item" style={{ padding: '1.25rem', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--green-600)', marginBottom: '0.6rem' }}>
                Benefit {i + 1}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                {vp.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{vp.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA panel */}
        <div style={{
          background: 'var(--green-900)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--green-300)', marginBottom: '0.6rem' }}>
              Partnership Inquiry
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)', marginBottom: '0.75rem' }}>
              Interested in partnering with Wastefund?
            </h3>
            <p style={{ color: 'var(--green-200)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 440 }}>
              We're in the pilot phase and actively looking for our first recycling company partner.
              Send us a message — we'll respond with specifics on school locations, estimated volumes,
              and what a pilot partnership looks like.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={onPartnerInquiry}
              id="for-recyclers-cta"
              style={{ whiteSpace: 'nowrap' }}
            >
              Send Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #for-partners > div > div:first-child { grid-template-columns: 1fr !important; }
          #for-partners > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default ForRecyclers