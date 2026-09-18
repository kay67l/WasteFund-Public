export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: '🏫',
      title: 'Schools Separate & Store',
      desc: 'Registered schools set up designated collection points. Students and staff sort recyclable waste — plastic bottles, paper, metals — into provided bins. Coordinators log each collection batch.',
      detail: 'Schools get: labelled bins, a coordinator account, and a collection schedule.',
    },
    {
      num: '02',
      icon: '🚛',
      title: 'Recycler Collects & Weighs',
      desc: 'Our recycling partner dispatches a truck on the agreed schedule. Waste is weighed at the school (or at a weighbridge). The weight and waste type is recorded in the Wastefund system by both parties.',
      detail: 'Verified by: digital collection logs, both parties confirm weight.',
    },
    {
      num: '03',
      icon: '💰',
      title: 'Schools Receive Revenue',
      desc: 'Based on the confirmed weight and current recyclable commodity rates, the school receives 60% of the total value directly — via mobile money or bank transfer — within 48 hours of collection.',
      detail: 'Revenue split: 60% to school · 40% to Wastefund operations (pilot rate).',
    },
    {
      num: '04',
      icon: '📊',
      title: 'Data Closes the Loop',
      desc: 'Every collection event is logged with timestamp, weight, waste type, and payout. Schools track their environmental impact and earnings. Wastefund publishes aggregate impact data quarterly.',
      detail: 'Coming: public school leaderboard by waste diverted from landfill.',
    },
  ]

  return (
    <section id="how-it-works" className="section" style={{ position: 'relative' }}>
      {/* Subtle separator line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 80,
        background: 'linear-gradient(to bottom, transparent, var(--green-800), transparent)',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>⚙️</span> The Model
          </div>
          <h2 className="section-title font-display" style={{ textAlign: 'center' }}>
            Simple enough to run in a school.
            <br />
            <span className="text-gradient">Rigorous enough to scale.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Four steps. Every collection event is documented. Every payout is traceable.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{ position: 'relative', paddingTop: '2rem' }}
            >
              {/* Step number watermark */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1.25rem',
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                fontWeight: 900,
                color: 'rgba(22,163,74,0.08)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {step.num}
              </div>

              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-400)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {step.desc}
              </p>
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--green-400)',
                background: 'rgba(22,163,74,0.08)',
                border: '1px solid rgba(22,163,74,0.15)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem 0.75rem',
                fontWeight: 500,
              }}>
                {step.detail}
              </div>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--green-700)',
                  fontSize: '1.25rem',
                  zIndex: 2,
                  display: 'none', // hidden on mobile, shown on large grid
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center', marginTop: '2.5rem',
          fontSize: '0.8rem', color: 'var(--slate-600)',
          fontStyle: 'italic',
        }}>
          Revenue split and commodity rates are pilot estimates. Final rates will be confirmed in partnership agreements before launch.
        </p>
      </div>
    </section>
  )
}
