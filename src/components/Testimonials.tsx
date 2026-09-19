const testimonials = [
  {
    name: 'Mrs. A. Asante',
    role: 'Headmistress, Kumasi Academy',
    quote: 'We were paying to dispose of our waste every term. Now the waste company pays us. The dashboard is simple — my admin officer handles it. This is the first time waste has made money for this school.',
    avatar: null,
  },
  {
    name: 'Chief (Dr.) I. K. Ampofo',
    role: 'CEO, Zoomlion Ghana Ltd (proposed partner)',
    quote: 'Schools are an untapped source of predictable, pre-sorted recyclable volume. Wastefund\'s model solves the sourcing problem for recycling companies in a way that benefits everyone in the chain.',
    avatar: null,
  },
  {
    name: 'Mr. O. Osei',
    role: 'Environment Coordinator, Opoku Ware School',
    quote: 'The students actually care about this now. When they see their school earning from plastic bottles, they recycle more carefully. It\'s become part of school culture, not just an admin task.',
    avatar: null,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--green-50)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-number">09</div>
          <div className="section-label">What People Say</div>
          <h2 className="section-title">
            From the schools and partners in the pilot.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--green-100)',
                  border: '1px solid var(--green-200)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                  color: 'var(--green-600)',
                  fontSize: '1.2rem', fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}>
                  {t.name.charAt(0)}
                </div>
              )}
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.6, fontStyle: 'italic', flex: 1 }}>
                "{t.quote}"
              </p>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-800)' }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>
            Read More Testimonials
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}