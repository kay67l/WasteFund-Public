import type { FC } from 'react'

interface ProgramsProps {
  onRegisterSchool: () => void
  onPartnerInquiry: () => void
}

const programs = [
  {
    name: 'School Registration',
    tag: 'For Schools',
    desc: 'Enroll your school in the Wastefund pilot. We provide bins, coordinator training, and collection scheduling. Your school starts earning from day one of the first collection.',
    features: [
      'Free collection bins provided',
      'Coordinator onboarding & dashboard access',
      'Scheduled pickups by our recycling partner',
      'Direct revenue share — 60% to school',
    ],
    image: 'https://images.unsplash.com/photo-1772419186959-fdb8cc37e149?w=500&h=360&fit=crop&auto=format',
    imageAlt: 'Students in a Ghanaian classroom',
    cta: 'Register Your School',
    ctaOnClick: 'register' as const,
  },
  {
    name: 'Recycling Partnership',
    tag: 'For Partners',
    desc: 'Become a Wastefund collection partner. We aggregate school-level waste supply into volume your fleet can profitably collect. Pre-sorted streams, digital manifests, and route optimisation included.',
    features: [
      'Aggregated school waste volumes',
      'Pre-sorted material streams',
      'Digital collection manifests',
      'Route-optimised pickup scheduling',
    ],
    image: 'https://images.unsplash.com/photo-1761479578277-b11d0092699d?w=500&h=360&fit=crop&auto=format',
    imageAlt: 'Garbage truck collecting waste',
    cta: 'Send Partnership Inquiry',
    ctaOnClick: 'partner' as const,
  },
  {
    name: 'Community Composting',
    tag: 'Coming Soon',
    desc: 'Organic waste composting program for schools with kitchens and gardens. Turn food scraps into compost that feeds school gardens — closing the loop on organic waste.',
    features: [
      'Kitchen & garden waste collection',
      'On-site compost training for students',
      'Compost returned to school gardens',
      'Environmental science curriculum tie-in',
    ],
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&h=360&fit=crop&auto=format',
    imageAlt: 'Green leaf representing organic waste composting',
    cta: 'Join Waitlist',
    ctaOnClick: 'waitlist' as const,
    disabled: true,
  },
]

const Programs: FC<ProgramsProps> = ({ onRegisterSchool, onPartnerInquiry }) => {
  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">03</div>
          <div className="section-label">Programs</div>
          <h2 className="section-title">Pick the program that fits.</h2>
          <p className="section-sub">
            Whether you're a school, a recycling company, or a community organisation —
            Wastefund has a starting point for you.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div key={i} className="program-card">
              <div className="program-card-image">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className="program-card-body">
                <div className="program-card-tag">{p.tag}</div>
                <h3 className="program-card-name">{p.name}</h3>
                <p className="program-card-desc">{p.desc}</p>
                <ul className="program-card-features">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button
                  className={`btn btn-primary program-card-cta ${p.disabled ? 'btn-ghost' : ''}`}
                  onClick={
                    p.disabled
                      ? undefined
                      : p.ctaOnClick === 'register'
                        ? onRegisterSchool
                        : onPartnerInquiry
                  }
                  disabled={p.disabled}
                  style={p.disabled ? { opacity: 0.5, cursor: 'not-allowed', background: 'transparent', border: '1.5px solid #ccc', color: '#999' } : {}}
                >
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs