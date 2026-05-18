import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--color-blue-dark)', color: 'white', paddingTop: 60 }}>
      {/* Main footer content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-blue-dark)' }}>W</div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-gold)' }}>Wisdom Land</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Private School</div>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 20 }}>
            Nurturing young minds with wisdom, discipline, and academic excellence in the heart of Ago-Iwoye.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-blue-dark)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: 18 }}>Quick Links</h4>
          {[
            { label: 'About Us', to: '/about' },
            { label: 'Nursery Section', to: '/nursery' },
            { label: 'Primary Section', to: '/primary' },
            { label: 'Secondary Section', to: '/secondary' },
            { label: 'Admissions', to: '/admissions' },
            { label: 'Contact Us', to: '/contact' },
          ].map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
              <ArrowRight size={13} /> {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: 18 }}>Contact Info</h4>
          {[
            { icon: MapPin, text: '55/58 Onabamiro, Ago-Iwoye, Ogun State, Nigeria' },
            { icon: Phone, text: '+234 000 000 0000' },
            { icon: Mail, text: 'info@wisdomlandschool.edu.ng' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
              <Icon size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* School Hours */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: 18 }}>School Hours</h4>
          {[
            { day: 'Monday – Friday', time: '7:30 AM – 3:30 PM' },
            { day: 'Saturday (Extra lessons)', time: '8:00 AM – 12:00 PM' },
            { day: 'Sunday', time: 'Closed' },
          ].map(({ day, time }, i) => (
            <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-light)', marginBottom: 2 }}>{day}</div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>{time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: 48, borderTop: '1px solid rgba(255,255,255,0.08)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, maxWidth: 1200, margin: '48px auto 0' }}>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
          © {year} Wisdom Land Private School. All rights reserved.
        </p>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
          Shaping Leaders of Tomorrow
        </p>
      </div>
      <div style={{ height: 1 }} />
    </footer>
  )
}
