import { useState, useEffect } from 'react'

interface HeaderProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

export default function Header({ onRegisterSchool, onPartnerInquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          Free registration &middot; Pilot open to 5 schools in Ashanti Region
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" className="header-logo">
            Waste<span>fund</span>
          </a>

          <nav className="header-nav">
            <a href="#how-it-works">How It Works</a>
            <a href="#for-schools">For Schools</a>
            <a href="#programs">Programs</a>
            <a href="#for-partners">For Partners</a>
            <a href="#impact">Impact</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }} onClick={onPartnerInquiry}>
              Partner With Us
            </button>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }} onClick={onRegisterSchool}>
              Register School
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--ink)', fontSize: '1.5rem', cursor: 'pointer', display: 'none', padding: '0.25rem', marginLeft: '0.5rem' }}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--ink)' }}
            >
              &times;
            </button>
            <nav>
              {['How It Works', 'For Schools', 'Programs', 'For Partners', 'Impact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mobile-menu-actions">
              <button className="btn btn-primary" onClick={() => { onRegisterSchool(); setMenuOpen(false) }}>
                Register School
              </button>
              <button className="btn btn-secondary" onClick={() => { onPartnerInquiry(); setMenuOpen(false) }}>
                Partner With Us
              </button>
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .header-nav { display: none !important; }
            .header-actions { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
        `}</style>
      </header>
    </>
  )
}