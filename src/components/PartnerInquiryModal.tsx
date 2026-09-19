import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'

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
      const { error } = await supabase
        .from('partner_inquiries')
        .insert({
          company_name: form.company_name,
          company_type: form.company_type,
          contact_name: form.contact_name,
          contact_role: form.contact_role,
          contact_email: form.contact_email,
          contact_phone: form.contact_phone,
          operating_regions: form.operating_regions,
          message: form.message,
        })

      if (error) throw error
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="success-wrap">
            <div className="success-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h2 className="success-title">Inquiry Received</h2>
            <p className="success-text">
              Thanks, <strong>{form.contact_name || 'there'}</strong>. We'll come back to you at{' '}
              <strong>{form.contact_email}</strong> with specifics on school locations, estimated volumes, and pilot partnership terms.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="modal-title">Partnership Inquiry</h2>
            <p className="modal-sub">
              We're actively seeking our first recycling company partner. Tell us about your operation and we'll come back with what a pilot looks like.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company Name <span className="required">*</span></label>
                <input className="form-input" required placeholder="e.g. Zoomlion Ghana Ltd" value={form.company_name} onChange={set('company_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Company Type <span className="required">*</span></label>
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

            <hr className="form-divider" />
            <div className="form-section-label">Your Contact Details</div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name <span className="required">*</span></label>
                <input className="form-input" required placeholder="Name" value={form.contact_name} onChange={set('contact_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Your Role <span className="required">*</span></label>
                <input className="form-input" required placeholder="e.g. Business Development Manager" value={form.contact_role} onChange={set('contact_role')} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email <span className="required">*</span></label>
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
                style={{ minHeight: '90px' }}
              />
            </div>

            {error && (
              <div className="form-error">{error}</div>
            )}

            <button
              className="btn btn-primary submit-btn"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}