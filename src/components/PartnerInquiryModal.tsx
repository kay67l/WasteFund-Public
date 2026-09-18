import { useState, type FormEvent } from 'react'

interface Props { onClose: () => void }
type FormState = 'idle' | 'submitting' | 'success' | 'error'

const COMPANY_TYPES = [
  'Recycling Company', 'Waste Collection / Hauling',
  'Materials Recovery Facility', 'Environmental NGO',
  'Government Agency', 'Other',
]

export default function PartnerInquiryModal({ onClose }: Props) {
  const [form, setForm] = useState({
    company_name: '', company_type: '', contact_name: '',
    contact_role: '', contact_email: '', contact_phone: '',
    operating_regions: '', message: '',
  })
  const [status, setStatus] = useState<FormState>('idle')
  const [error, setError] = useState('')

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      await new Promise(r => setTimeout(r, 1200))
      console.log('Partner inquiry submitted:', form)
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Inquiry Received
            </h2>
            <p style={{ color: 'var(--slate-400)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thanks, {form.contact_name || 'there'}. We'll come back to you at{' '}
              <strong style={{ color: 'var(--green-400)' }}>{form.contact_email}</strong>{' '}
              with specifics on school locations, estimated volumes, and pilot partnership terms.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Partnership Inquiry
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)' }}>
                We're actively seeking our first recycling company partner. Tell us about your operation
                and we'll come back with what a pilot looks like.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input className="form-input" required placeholder="e.g. Zoomlion Ghana Ltd" value={form.company_name} onChange={set('company_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Company Type *</label>
                <select className="form-select" required value={form.company_type} onChange={set('company_type')}>
                  <option value="">Select type</option>
                  {COMPANY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Regions You Currently Operate In</label>
              <input className="form-input" placeholder="e.g. Ashanti, Greater Accra, Central" value={form.operating_regions} onChange={set('operating_regions')} />
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Your Contact Details
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-input" required placeholder="Name" value={form.contact_name} onChange={set('contact_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Your Role *</label>
                <input className="form-input" required placeholder="e.g. Business Development Manager" value={form.contact_role} onChange={set('contact_role')} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input className="form-input" type="email" required placeholder="you@company.com" value={form.contact_email} onChange={set('contact_email')} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input className="form-input" type="tel" placeholder="024 XXX XXXX" value={form.contact_phone} onChange={set('contact_phone')} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Anything you'd like us to know upfront?</label>
              <textarea
                className="form-textarea"
                placeholder="Your current collection capacity, types of materials you process, questions about the model…"
                value={form.message}
                onChange={set('message')}
                style={{ minHeight: '100px' }}
              />
            </div>

            {error && (
              <p style={{ color: '#f87171', fontSize: '0.875rem', background: 'rgba(248,113,113,0.1)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                {error}
              </p>
            )}

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === 'submitting'}
              style={{ width: '100%', justifyContent: 'center', opacity: status === 'submitting' ? 0.7 : 1 }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
