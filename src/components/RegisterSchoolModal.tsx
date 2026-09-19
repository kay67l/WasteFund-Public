import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'

interface Props { onClose: () => void }

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const GHANA_REGIONS = [
  'Ashanti', 'Brong-Ahafo', 'Central', 'Eastern', 'Greater Accra',
  'Northern', 'Upper East', 'Upper West', 'Volta', 'Western',
  'Ahafo', 'Bono', 'Bono East', 'North East', 'Oti',
  'Savannah', 'Western North',
]

const SCHOOL_TYPES = ['Senior High School (SHS)', 'SHTS / Technical', 'Vocational', 'JHS (Special cases)']

export default function RegisterSchoolModal({ onClose }: Props) {
  const [form, setForm] = useState({
    school_name: '', school_type: '', region: '',
    district: '', contact_name: '', contact_role: '',
    contact_email: '', contact_phone: '', how_heard: '',
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
        .from('registrations')
        .insert({
          school_name: form.school_name,
          region: form.region,
          district: form.district,
          contact_name: form.contact_name,
          contact_role: form.contact_role,
          contact_email: form.contact_email,
          contact_phone: form.contact_phone,
          how_heard: form.how_heard,
        })

      if (error) throw error
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="success-wrap">
            <div className="success-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h2 className="success-title">Registration Received!</h2>
            <p className="success-text">
              We'll review your school's details and reach out to <strong>{form.contact_name || 'you'}</strong> at{' '}
              <strong>{form.contact_email}</strong> within 3–5 working days to discuss next steps.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="modal-title">Register Your School</h2>
            <p className="modal-sub">
              Pilot spots are limited to 5 schools. We'll confirm eligibility and contact you within 3–5 days.
            </p>

            <div className="form-group">
              <label className="form-label">School Name <span className="required">*</span></label>
              <input className="form-input" required placeholder="e.g. Kumasi Academy" value={form.school_name} onChange={set('school_name')} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">School Type <span className="required">*</span></label>
                <select className="form-select" required value={form.school_type} onChange={set('school_type')}>
                  <option value="">Select type</option>
                  {SCHOOL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Region <span className="required">*</span></label>
                <select className="form-select" required value={form.region} onChange={set('region')}>
                  <option value="">Select region</option>
                  {GHANA_REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">District / Town</label>
              <input className="form-input" placeholder="e.g. Kumasi Metro" value={form.district} onChange={set('district')} />
            </div>

            <hr className="form-divider" />
            <div className="form-section-label">Contact Person</div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name <span className="required">*</span></label>
                <input className="form-input" required placeholder="Ms. Ama Asante" value={form.contact_name} onChange={set('contact_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Role at School <span className="required">*</span></label>
                <input className="form-input" required placeholder="e.g. Assistant Headmistress" value={form.contact_role} onChange={set('contact_role')} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address <span className="required">*</span></label>
                <input className="form-input" type="email" required placeholder="contact@school.edu.gh" value={form.contact_email} onChange={set('contact_email')} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input className="form-input" type="tel" placeholder="024 XXX XXXX" value={form.contact_phone} onChange={set('contact_phone')} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">How did you hear about Wastefund?</label>
              <input className="form-input" placeholder="Social media, colleague, event…" value={form.how_heard} onChange={set('how_heard')} />
            </div>

            {error && (
              <div className="form-error">{error}</div>
            )}

            <button
              className="btn btn-primary submit-btn"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting…' : 'Submit Registration'}
            </button>

            <p className="form-footer-note">
              We do not share your details with third parties. You'll only hear from us about your registration.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}