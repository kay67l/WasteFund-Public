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
      background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem',
            boxShadow: '0 0 16px rgba(22,163,74,0.4)',
          }}>
            ♻️
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>
            Waste<span style={{ color: 'var(--green-400)' }}>fund</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {['How It Works', 'For Schools', 'For Partners', 'Impact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              style={{
                color: 'var(--slate-400)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-400)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            onClick={onPartnerInquiry}
          >
            Partner With Us
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            onClick={onRegisterSchool}
          >
            Register School
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--slate-900)',
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {['How It Works', 'For Schools', 'For Partners', 'Impact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--slate-300)', textDecoration: 'none', fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
          <button className="btn btn-primary" onClick={() => { onRegisterSchool(); setMenuOpen(false) }}>
            Register School
          </button>
          <button className="btn btn-secondary" onClick={() => { onPartnerInquiry(); setMenuOpen(false) }}>
            Partner With Us
          </button>
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
