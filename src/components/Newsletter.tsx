export default function Newsletter() {
  return (
    <section className="section newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-label">Stay Updated</div>
          <h2 className="newsletter-title">Be the first to know.</h2>
          <p className="newsletter-sub">
            Get updates on the Wastefund pilot — new schools, collection milestones,
            and impact data when we publish it.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button className="newsletter-btn" type="submit">
              Sign Up
            </button>
          </form>
          <p className="newsletter-fine">
            No spam. Unsubscribe anytime. We only send pilot updates.
          </p>
        </div>
      </div>
    </section>
  )
}