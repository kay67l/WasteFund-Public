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

const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-number">01</div>
          <div className="section-label">How It Works</div>
          <h2 className="section-title">
            Four steps.{' '}
            <span style={{ color: 'var(--green-500)' }}>Simple to run. Rigorous to track.</span>
          </h2>
          <p className="section-sub">
            Every collection event is documented. Every payout is traceable.
          </p>
        </div>

        <div className="hiw-grid">
          {steps.map((step) => (
            <div key={step.num} className="hiw-card">
              <div className="hiw-number">{step.num}</div>
              <h3 className="hiw-title">{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks