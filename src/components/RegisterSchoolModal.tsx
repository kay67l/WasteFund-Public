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
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Registration Received!
            </h2>
            <p style={{ color: 'var(--slate-400)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We'll review your school's details and reach out to {form.contact_name || 'you'} at{' '}
              <strong style={{ color: 'var(--green-400)' }}>{form.contact_email}</strong>{' '}
              within 3–5 working days to discuss next steps.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Register Your School
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)' }}>
                Pilot spots are limited to 5 schools. We'll confirm eligibility and contact you within 3–5 days.
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">School Name *</label>
              <input className="form-input" required placeholder="e.g. Kumasi Academy" value={form.school_name} onChange={set('school_name')} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">School Type *</label>
                <select className="form-select" required value={form.school_type} onChange={set('school_type')}>
                  <option value="">Select type</option>
                  {SCHOOL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Region *</label>
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

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Contact Person
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-input" required placeholder="Ms. Ama Asante" value={form.contact_name} onChange={set('contact_name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Role at School *</label>
                <input className="form-input" required placeholder="e.g. Assistant Headmistress" value={form.contact_role} onChange={set('contact_role')} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
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
              {status === 'submitting' ? 'Submitting…' : 'Submit Registration'}
            </button>

            <p style={{ fontSize: '0.75rem', color: 'var(--slate-600)', textAlign: 'center' }}>
              We do not share your details with third parties. You'll only hear from us about your registration.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
