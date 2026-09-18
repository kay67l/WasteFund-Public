interface FooterProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export default function Footer({ onRegisterSchool, onPartnerInquiry }: FooterProps) {
  return (
    <footer style={{
      background: 'var(--slate-900)',
      borderTop: '1px solid var(--border)',
      paddingBlock: '4rem 2rem',
    }}>
      <div className="container">
        {/* Top CTA */}
        <div style={{
          textAlign: 'center',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border)',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 900,
            marginBottom: '1rem',
          }}>
            Ready to turn waste into value?
          </h2>
          <p style={{ color: 'var(--slate-400)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
            Whether you're a school looking to earn from recyclable waste, or a recycling company
            looking to expand school-sector sourcing — let's talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={onRegisterSchool}>
              Register a School
            </button>
            <button className="btn btn-secondary btn-lg" onClick={onPartnerInquiry}>
              Become a Partner
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32,
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}>
                ♻️
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.125rem' }}>
                Waste<span style={{ color: 'var(--green-400)' }}>fund</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: 1.65, maxWidth: 280 }}>
              Ghana's student-led waste recovery network. Connecting schools, students,
              and recycling companies for a circular economy.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '1rem' }}>
              Ashanti Region · Ghana
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--slate-500)', marginBottom: '1rem' }}>
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['How It Works', 'For Schools', 'For Partners', 'Impact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    style={{ color: 'var(--slate-400)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--green-400)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-400)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--slate-500)', marginBottom: '1rem' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ fontSize: '0.9rem', color: 'var(--slate-400)' }}>hello@wastefund.org</li>
              <li style={{ fontSize: '0.9rem', color: 'var(--slate-400)' }}>Kumasi, Ashanti Region</li>
            </ul>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['𝕏', 'in', 'f'].map(icon => (
                <div key={icon} style={{
                  width: 36, height: 36,
                  background: 'var(--slate-800)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.875rem',
                  color: 'var(--slate-500)',
                  cursor: 'pointer',
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)' }}>
            © {new Date().getFullYear()} Wastefund. Independent initiative.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)', fontStyle: 'italic' }}>
            Pilot phase — Ashanti Region, Ghana.
          </p>
        </div>
      </div>
    </footer>
  )
}
