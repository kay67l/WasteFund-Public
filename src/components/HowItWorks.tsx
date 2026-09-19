import type { FC } from 'react'

const steps = [
  {
    num: '01',
    title: 'Schools Separate & Store',
    desc: 'Registered schools set up designated collection points. Students and staff sort recyclable waste — plastic bottles, paper, metals — into provided bins. Coordinators log each collection batch.',
  },
  {
    num: '02',
    title: 'Recycler Collects & Weighs',
    desc: 'Our recycling partner dispatches a truck on the agreed schedule. Waste is weighed at the school. The weight and waste type is recorded in the Wastefund system by both parties.',
  },
  {
    num: '03',
    title: 'Schools Receive Revenue',
    desc: 'Based on the confirmed weight and current recyclable commodity rates, the school receives 60% of the total value directly — via mobile money or bank transfer — within 48 hours of collection.',
  },
  {
    num: '04',
    title: 'Data Closes the Loop',
    desc: 'Every collection event is logged with timestamp, weight, waste type, and payout. Schools track their environmental impact and earnings. Wastefund publishes aggregate impact data quarterly.',
  },
]

export const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">How It Works</div>
          <h2>
            Four steps.{' '}
            <span style={{ color: 'var(--green-600)' }}>Simple to run. Rigorous to track.</span>
          </h2>
          <p className="section-sub">
            Every collection event is documented. Every payout is traceable.
          </p>
        </div>

        <div className="features-grid">
          {steps.map((step) => (
            <div key={step.num} className="hiw-card">
              <div className="hiw-number">{step.num}</div>
              <h3 className="hiw-title">{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-head {
          text-align: center;
          margin-bottom: 1rem;
        }
        .section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--green-600);
          margin-bottom: 0.75rem;
        }
        .section-head h2 {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 700;
          color: var(--green-900);
          margin-bottom: 0.75rem;
        }
        .section-sub {
          font-size: 0.9rem;
          color: var(--ink-3);
          max-width: 480px;
          margin: 0 auto;
        }
        .hiw-card { text-align: center; }
        .hiw-number {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--green-200);
          line-height: 1;
          margin-bottom: 0.75rem;
        }
        .hiw-icon {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }
      `}</style>
    </section>
  )
}

export default HowItWorks