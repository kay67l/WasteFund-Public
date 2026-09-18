interface ForRecyclersProps { onPartnerInquiry: () => void }

export default function ForRecyclers({ onPartnerInquiry }: ForRecyclersProps) {
  const valueProps = [
    {
      icon: '📦',
      title: 'Aggregated Volume from Schools You Don\'t Currently Reach',
      desc: 'Individual households produce small, scattered quantities. Schools produce concentrated, predictable volumes on a schedule. Wastefund aggregates school-level supply into collection runs worth your truck\'s time.',
    },
    {
      icon: '🔀',
      title: 'Pre-Sorted Waste Streams',
      desc: 'Schools sort by material type before collection — plastic, paper, metal, glass separately. You receive pre-classified waste, reducing your sorting cost per tonne and improving the value of what you receive.',
    },
    {
      icon: '📋',
      title: 'Digital Manifests — Built For You',
      desc: 'Every collection event is digitally logged: school, date, waste type, weight, collector ID. You get structured data without building the system yourself. Your dispatchers get a clean pickup queue.',
    },
    {
      icon: '🗺️',
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
          <div className="section-label"><span>🏭</span> For Recycling Partners</div>
          <h2 className="section-title font-display">
            The waste is already being generated.
            <br />
            <span className="text-gradient">We make it worth collecting.</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Wastefund is built for recycling companies that want to expand school-sector sourcing
            without building the community outreach infrastructure from scratch.
            We aggregate, pre-sort, and schedule — you collect.
          </p>
        </div>

        {/* Value props */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {valueProps.map((vp, i) => (
            <div key={i} className="card" style={{ borderLeft: '3px solid var(--green-700)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{vp.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.35 }}>
                {vp.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', lineHeight: 1.65 }}>{vp.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA panel */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(22,163,74,0.1) 0%, rgba(15,23,42,0.8) 100%)',
          border: '1px solid rgba(22,163,74,0.25)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Interested in partnering with Wastefund?
            </h3>
            <p style={{ color: 'var(--slate-400)', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: 480 }}>
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
              Send a Partnership Inquiry
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #for-partners > div > div:last-child { grid-template-columns: 1fr !important; }
          #for-partners > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
