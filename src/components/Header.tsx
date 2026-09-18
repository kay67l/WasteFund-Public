import { useState, useEffect } from 'react'

interface HeaderProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export default function Header({ onRegisterSchool, onPartnerInquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(250, 250, 247, 0.96)' : 'rgba(250, 250, 247, 0.85)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 0' }}>
        {/* Logo — newspaper name style */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 900,
            fontSize: '1.2rem',
            color: 'var(--ink)',
            letterSpacing: '0.02em',
          }}>
            Waste<span style={{ color: 'var(--green)' }}>fund</span>
          </span>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-4)',
            border: '1px solid var(--rule)',
            padding: '0.1rem 0.35rem',
            borderRadius: '2px',
          }}>
            Ops
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {['How It Works', 'For Schools', 'For Partners', 'Impact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--ink-2)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTAs — newspaper button style */}
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
          <button
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            onClick={onPartnerInquiry}
          >
            Partner With Us
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            onClick={onRegisterSchool}
          >
            Register School
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--ink)', fontSize: '1.25rem', cursor: 'pointer', display: 'none', padding: '0.25rem' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          padding: '1.25rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
        }}>
          {['How It Works', 'For Schools', 'For Partners', 'Impact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--ink-2)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
          <div style={{ borderTop: '1px solid var(--rule-light)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
            <button className="btn btn-primary" onClick={() => { onRegisterSchool(); setMenuOpen(false) }}>
              Register School
            </button>
            <button className="btn btn-secondary" onClick={() => { onPartnerInquiry(); setMenuOpen(false) }} style={{ marginTop: '0.5rem' }}>
              Partner With Us
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          header > div > div:nth-child(3) { display: none !important; }
        }
      `}</style>
    </header>
  )
}
