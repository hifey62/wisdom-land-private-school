import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const contactInfo = [
  { icon: MapPin, label: 'Address',      value: '55/58 Onabamiro, Ago-Iwoye, Ogun State, Nigeria' },
  { icon: Phone,  label: 'Phone',        value: '+234 000 000 0000' },
  { icon: Mail,   label: 'Email',        value: 'info@wisdomlandschool.edu.ng' },
  { icon: Clock,  label: 'Office Hours', value: 'Mon – Fri: 7:30 AM – 4:00 PM' },
]

const fields = [
  { label: 'Full Name',     name: 'name',    type: 'text',  placeholder: 'Your full name' },
  { label: 'Email Address', name: 'email',   type: 'email', placeholder: 'your@email.com' },
  { label: 'Phone Number',  name: 'phone',   type: 'tel',   placeholder: '+234 800 000 0000' },
  { label: 'Subject',       name: 'subject', type: 'text',  placeholder: 'What is this about?' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form }, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Wisdom Land Private School</title>
        <meta name="description" content="Contact Wisdom Land Private School in Ago-Iwoye, Ogun State. Phone, email or visit us today." />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '70vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px', overflow: 'hidden',
        backgroundImage: `
          linear-gradient(rgba(8,20,44,0.82), rgba(8,20,44,0.86)),
          url('https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', top: 80, left: -80, width: 260, height: 260, borderRadius: '50%', background: 'rgba(212,175,55,0.12)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', filter: 'blur(120px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 800, textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '10px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)', marginBottom: 28,
          }}>
            <Mail size={16} color="var(--color-gold)" />
            <span style={{ color: 'white', fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Get in Touch
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
            lineHeight: 1.05, color: 'white', marginBottom: 22,
          }}>
            We'd Love to Hear From You
          </h1>

          <p style={{
            maxWidth: 620, margin: '0 auto',
            color: 'rgba(255,255,255,0.76)',
            lineHeight: 1.9, fontSize: '1.05rem',
          }}>
            Whether you have a question about admissions, want to visit the school, or simply want to learn more — our team is always ready to help.
          </p>
        </motion.div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section style={{
        padding: '80px 24px 0',
        background: 'linear-gradient(135deg, #102347 0%, #1A3A6B 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,175,55,0.08)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(120px)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, paddingBottom: 80 }}>
            {contactInfo.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 24, padding: '36px 24px',
                  textAlign: 'center', backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: 'rgba(212,175,55,0.07)' }} />
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(255,255,255,0.06))',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                }}>
                  <Icon size={22} color="var(--color-gold)" />
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                  {label}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.65 }}>
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section style={{ padding: '100px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56 }}>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
              Send a Message
            </p>
            <h2 className="section-heading" style={{ marginBottom: 8 }}>How Can We Help You?</h2>
            <div className="gold-divider gold-divider-left" style={{ marginBottom: 36 }} />

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'white', borderRadius: 24,
                  padding: '48px 36px', textAlign: 'center',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}
              >
                <CheckCircle size={52} style={{ color: '#22c55e', margin: '0 auto 18px', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#15803d', marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: '#4a4a4a', lineHeight: 1.7 }}>Thank you for reaching out. We will respond to your enquiry within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {fields.slice(0, 2).map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 7 }}>{label}</label>
                      <input type={type} name={name} placeholder={placeholder} required value={form[name]} onChange={handleChange} className="form-input" />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {fields.slice(2).map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 7 }}>{label}</label>
                      <input type={type} name={name} placeholder={placeholder} required value={form[name]} onChange={handleChange} className="form-input" />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-blue)', marginBottom: 7 }}>Message</label>
                  <textarea name="message" rows={6} required placeholder="Type your message here…" value={form.message} onChange={handleChange} className="form-input" style={{ resize: 'vertical' }} />
                </div>

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#dc2626', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', background: '#fef2f2', padding: '14px 18px', borderRadius: 10, border: '1px solid #fecaca' }}>
                    <AlertCircle size={16} /> Failed to send. Please call or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1, boxShadow: '0 12px 32px rgba(212,175,55,0.3)' }}
                >
                  {status === 'sending' ? 'Sending…' : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
              Our Location
            </p>
            <h2 className="section-heading" style={{ marginBottom: 8 }}>Find Us Here</h2>
            <div className="gold-divider gold-divider-left" style={{ marginBottom: 36 }} />

            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 50px rgba(26,58,107,0.14)', border: '1px solid rgba(26,58,107,0.08)' }}>
              <iframe
                title="Wisdom Land Private School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.123456789!2d3.9412!3d6.9812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOnabamiro+Street%2C+Ago-Iwoye%2C+Ogun+State!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address tag under map */}
            <div style={{
              marginTop: 16, padding: '18px 22px', background: 'white', borderRadius: 16,
              display: 'flex', alignItems: 'flex-start', gap: 14,
              boxShadow: '0 8px 28px rgba(26,58,107,0.08)',
              borderLeft: '4px solid var(--color-gold)',
            }}>
              <MapPin size={18} style={{ color: 'var(--color-blue)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-blue)', marginBottom: 3 }}>Wisdom Land Private School</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#5a5a5a', lineHeight: 1.6 }}>
                  55/58 Onabamiro Street, Ago-Iwoye, Ogun State, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}