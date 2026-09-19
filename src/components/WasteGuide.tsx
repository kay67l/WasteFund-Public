const guides = [
  {
    tag: 'Guide 01',
    title: 'Plastic Waste Management for Schools',
    desc: 'How to set up plastic collection points, teach students to identify PET vs HDPE, and store bottles safely until collection day. Includes a printable sorting poster.',
    image: 'https://images.unsplash.com/photo-1760307837830-5d5d31fcf25f?w=500&h=340&fit=crop&auto=format',
    imageAlt: 'Colorful plastic bottle caps ready for recycling',
  },
  {
    tag: 'Guide 02',
    title: 'Paper & Cardboard Recovery',
    desc: 'Exercise books, newspapers, cardboard boxes — paper is the highest-volume recyclable in most schools. Learn how to flatten, stack, and protect paper from rain until pickup.',
    image: 'https://images.unsplash.com/photo-1771172195332-3bc9ded9f3b5?w=500&h=340&fit=crop&auto=format',
    imageAlt: 'Recycling bins with categories for mixed recyclables',
  },
  {
    tag: 'Guide 03',
    title: 'Building a School Waste Committee',
    desc: 'A successful waste program needs student ownership. This guide walks through forming a waste committee, assigning roles, and keeping momentum across a school term.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=340&fit=crop&auto=format',
    imageAlt: 'Green field representing a sustainable future',
  },
]

export default function WasteGuide() {
  return (
    <section id="waste-guide" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">06</div>
          <div className="section-label">Waste Guide</div>
          <h2 className="section-title">Practical resources for schools.</h2>
          <p className="section-sub">
            Free downloadable guides to help your school start and run a waste recovery program.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((g, i) => (
            <div key={i} className="guide-card">
              <div className="guide-card-image">
                <img src={g.image} alt={g.imageAlt} loading="lazy" />
              </div>
              <div className="guide-card-body">
                <div className="guide-card-tag">{g.tag}</div>
                <h3 className="guide-card-title">{g.title}</h3>
                <p className="guide-card-desc">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}