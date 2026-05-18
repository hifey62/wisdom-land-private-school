import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 60%, var(--color-blue-light) 100%)',
      padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
          Join Our Community
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', marginBottom: 16 }}>
          Give Your Child the Wisdom Land Advantage
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Admission forms for the 2025/2026 academic session are open. Secure your child's place today in one of Ago-Iwoye's finest schools.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/admissions" className="btn-primary">Apply Now <ArrowRight size={16} /></Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
