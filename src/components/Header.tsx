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
      <div className="top-bar">
        <div className="container">
          Free registration &middot; Pilot open to 5 schools in Ashanti Region
        </div>
      </div>

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
            <button className="btn btn-ghost btn-sm" onClick={onPartnerInquiry}>
              Partner With Us
            </button>
            <button className="btn btn-primary btn-sm" onClick={onRegisterSchool}>
              Register School
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
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
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
            <nav>
              {['How It Works', 'For Schools', 'Programs', 'For Partners', 'Impact'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </nav>
            <div className="mobile-menu-actions">
              <button className="btn btn-primary" onClick={() => { onRegisterSchool(); setMenuOpen(false) }}>
                Register School
              </button>
              <button className="btn btn-ghost" onClick={() => { onPartnerInquiry(); setMenuOpen(false) }}>
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}