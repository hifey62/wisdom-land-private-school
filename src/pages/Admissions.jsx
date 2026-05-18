import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react'

const SERVICE_ID  = 'service_ki5xfu6'
const TEMPLATE_ID = 'template_i9o8uoa'
const PUBLIC_KEY  = 'XSUMjFgoZQeeIC_o5'
 const SHEET_URL = 'https://script.google.com/macros/s/AKfycbynPR0iZQklh4Q3lvMzK1klOa9AtlhyxhxQKmdbTZit4FWB8apcepgKe04eobXViXjVnA/exec'

const steps = [
  { num: 1, title: 'Fill Application Form', desc: 'Complete the online form below with accurate information about the applicant.' },
  { num: 2, title: 'Receive Confirmation',  desc: 'You will receive a confirmation email with the next steps within 24 hours.' },
  { num: 3, title: 'Assessment & Interview', desc: 'Applicant attends a brief assessment and parent interview at the school.' },
  { num: 4, title: 'Admission Offered',      desc: 'Successful candidates receive an official admission letter and fee schedule.' },
]

export default function Admissions() {
  const [form, setForm]     = useState({ parentName: '', studentName: '', email: '', phone: '', section: '', dob: '', message: '', currentSchool: '', currentClass: '', stateOfOrigin: '', lga: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
   
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        parent_name:   form.parentName,
        student_name:  form.studentName,
        email:         form.email,
        phone:         form.phone,
        section:       form.section,
        dob:           form.dob,
        message:       form.message,
        current_school: form.currentSchool,
        current_class:  form.currentClass,
        state_of_origin: form.stateOfOrigin,
        lga: form.lga,
        
      }, PUBLIC_KEY)

       await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors', // required for Apps Script
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      setStatus('success')
      setForm({ parentName: '', studentName: '', email: '', phone: '', section: '', dob: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Admissions | Wisdom Land Private School</title>
        <meta name="description" content="Apply for admission to Wisdom Land Private School, Ago-Iwoye. Nursery, Primary and Secondary openings available." />
      </Helmet>

      <div className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>Join Our Community</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'white', marginBottom: 14 }}>Admissions</h1>
          <div className="gold-divider" />
        </div>
      </div>

      {/* Process */}
      <section style={{ padding: '80px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 className="section-heading">Admission Process</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 24 }}>
            {steps.map(({ num, title, desc }, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 10, padding: '28px 22px', position: 'relative', boxShadow: '0 4px 20px rgba(26,58,107,0.07)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>{num}</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-blue)', marginBottom: 8 }}>{title}</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', color: '#5a5a5a', lineHeight: 1.7 }}>{desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight size={18} style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gold)', zIndex: 2, display: 'none' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-heading">Application Form</h2>
            <div className="gold-divider" />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: '#666', marginTop: 16 }}>Fill in the form below and we will be in touch within 24 hours.</p>
          </div>

          {status === 'success' ? (
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 10, padding: '36px', textAlign: 'center' }}>
              <CheckCircle size={48} style={{ color: '#22c55e', margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#15803d', marginBottom: 10 }}>Application Submitted!</h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: '#4a4a4a' }}>Thank you for applying to Wisdom Land Private School. We will review your application and contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { label: "Parent/Guardian's Full Name", name: 'parentName', type: 'text', placeholder: 'e.g. Mr Adewale Okafor' },
                  { label: "Student's Full Name", name: 'studentName', type: 'text', placeholder: 'e.g. Chidera Okafor' },
                  {label:'state of origin', name:'stateOfOrigin', type:'text', placeholder:'e.g. Ogun State'},
                  {label:'local government area (LGA)', name:'lga', type:'text', placeholder:'e.g. Ijebu North'},
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+234 800 000 0000' },
                  {label:'current school (if applicable)', name:'currentSchool', type:'text', placeholder:'e.g. St. Mary’s Primary School or null if none'},
                  {label:'current class/grade', name:'currentClass', type:'text', placeholder:'e.g. Primary 4'},

            
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 6 }}>{label}</label>
                    <input type={type} name={name} placeholder={placeholder} required value={form[name]} onChange={handleChange} className="form-input" />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 6 }}>Section Applying For</label>
                  <select name="section" required value={form.section} onChange={handleChange} className="form-input">
                    <option value="">Select section…</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary (JSS)">Secondary – JSS</option>
                    <option value="Secondary (SSS)">Secondary – SSS</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 6 }}>Student's Date of Birth</label>
                  <input type="date" name="dob" required value={form.dob} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 6 }}>Additional Information (optional)</label>
                <textarea name="message" rows={4} placeholder="Any additional information you'd like us to know…" value={form.message} onChange={handleChange} className="form-input" style={{ resize: 'vertical' }} />
              </div>

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#dc2626', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', background: '#fef2f2', padding: '12px 16px', borderRadius: 6, border: '1px solid #fecaca' }}>
                  <AlertCircle size={16} /> Submission failed. Please try again or call us directly.
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Submitting…' : <><Send size={15} /> Submit Application</>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Requirements */}
      <section style={{ padding: '64px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: 8 }}>Documents Required</h2>
          <div className="gold-divider" style={{ marginBottom: 28 }} />
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Birth certificate or age declaration',
              'Previous school report card (if applicable)',
              'Passport photograph (2 copies)',
              'Parent/guardians valid ID card',
              'Proof of address',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.06)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#4a4a4a' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
