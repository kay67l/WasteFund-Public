export default function About() {
  const values = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 6.5 2.5C4.2 4.3 2 8.5 2 12.2 2 16 8 17.5 8 17.5"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
      title: 'Directly Funded by Waste',
      desc: 'Schools earn income from the waste they generate — not from grants or donations. Wastefund turns a cost centre into a revenue stream.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
      title: 'Built for the Ghanaian Context',
      desc: 'No imported solutions that don\'t fit. Wastefund was designed for Ghanaian high schools, local recycling companies, and mobile-money payouts.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Transparent by Default',
      desc: 'Every collection event, every weight, every payout is logged digitally. Schools and recyclers can see exactly what happened. No black boxes.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Independent Initiative',
      desc: 'Wastefund is not a government program, not an NGO project, not a corporate CSR exercise. It is a standalone social enterprise building a real waste market.',
    },
  ]

  return (
    <section id="about" className="section" style={{ background: 'var(--green-50)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-number">08</div>
          <div className="section-label">About Wastefund</div>
          <h2 className="section-title">
            Waste doesn\'t have to be a cost.
            <br />
            <span style={{ color: 'var(--green-500)' }}>It can be income.</span>
          </h2>
          <p className="section-sub">
            Wastefund is Ghana\'s student-led waste recovery network. We connect high schools
            with recycling companies so that waste becomes a commodity — and schools get paid for it.
          </p>
        </div>

        <div className="about-grid">
          {values.map((v, i) => (
            <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '1.5rem 1.25rem' }}>
              <div style={{ color: 'var(--green-500)', marginBottom: '0.75rem' }}>{v.icon}</div>
              <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--green-800)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mission-box">
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.65 }}>
            <strong>Our goal:</strong> By the end of the pilot, 5 Ashanti Region schools will be earning
            direct revenue from their waste — and we\'ll have published the data publicly.
            If we can\'t make that happen honestly, we\'ll say so.
          </p>
        </div>
      </div>
    </section>
  )
}