import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import school from '../assets/wisdomschool.png'

const highlights = [
  'Experienced and passionate teaching staff',
  'Modern classrooms and learning facilities',
  'Holistic development — academic, moral & social',
  'Regular parent-teacher engagements',
]

export default function Welcome() {
  return (
    <section style={{ padding: '88px 24px', background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

        {/* School Image */}
        <div style={{ position: 'relative' }}>
          <img
            src={school}
            alt="Wisdom Land Private School"
            style={{
              width: '100%',
              height: '100vh',
              borderRadius: 12,
              display: 'block',
              objectFit: 'cover',
              boxShadow: '0 8px 40px rgba(26,58,107,0.15)',
            }}
          />
          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: -20, left: -20,
            background: 'var(--color-blue-dark)', color: 'white',
            padding: '16px 22px', borderRadius: 8,
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-gold)' }}>15+</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Years of Excellence</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
            Welcome to Wisdom Land
          </p>
          <h2 className="section-heading" style={{ marginBottom: 8 }}>
            A Foundation Built on Excellence & Values
          </h2>
          <div className="gold-divider gold-divider-left" style={{ marginBottom: 24 }} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: 16 }}>
            At Wisdom Land Private School, we believe every child is uniquely gifted. Our mission is to discover, nurture, and develop those gifts in an environment that is safe, stimulating, and supportive.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: 28 }}>
            From nursery through secondary school, we provide comprehensive education that equips students academically, morally, and socially — preparing them for leadership in a rapidly changing world.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
            {highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                <CheckCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: '#4a4a4a' }}>{h}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}