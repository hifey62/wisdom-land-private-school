import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
  {
    date: 'May 10, 2025',
    category: 'Announcement',
    title: '2025/2026 Admission Forms Now Available',
    excerpt: 'We are pleased to announce that admission forms for the 2025/2026 academic session are now available. Visit our admissions page to apply.',
  },
  {
    date: 'April 22, 2025',
    category: 'Achievement',
    title: 'Wisdom Land Students Excel at State Quiz Competition',
    excerpt: 'Our secondary school students clinched 2nd position at the Ogun State Inter-School Quiz Competition. We are proud of their outstanding performance.',
  },
  {
    date: 'March 15, 2025',
    category: 'Event',
    title: 'Annual Cultural Day & Prize Giving Ceremony',
    excerpt: 'The school held its annual cultural day celebration and prize giving ceremony. Outstanding students were recognised for academic and co-curricular achievements.',
  },
]

export default function NewsSection() {
  return (
    <section style={{ padding: '88px 24px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
              Latest Updates
            </p>
            <h2 className="section-heading">News & Announcements</h2>
            <div className="gold-divider gold-divider-left" />
          </div>
          <Link to="/contact" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {news.map(({ date, category, title, excerpt }, i) => (
            <div key={i} className="card" style={{ padding: 0 }}>
              {/* Coloured top */}
              <div style={{ height: 5, background: i === 0 ? 'var(--color-gold)' : i === 1 ? 'var(--color-blue)' : 'var(--color-blue-light)' }} />
              <div style={{ padding: '26px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem',
                    fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.05em',
                    background: i === 0 ? 'rgba(201,168,76,0.12)' : 'rgba(26,58,107,0.1)',
                    color: i === 0 ? 'var(--color-gold-dark)' : 'var(--color-blue)',
                  }}>{category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#888', fontFamily: 'var(--font-sans)' }}>
                    <Calendar size={12} /> {date}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-blue)', marginBottom: 10, lineHeight: 1.4 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#5a5a5a', lineHeight: 1.7 }}>
                  {excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
