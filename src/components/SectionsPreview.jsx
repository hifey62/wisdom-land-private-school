import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    title: 'Nursery Section',
    tag: 'Ages 2 – 5',
    desc: 'A warm, play-based environment where our youngest learners discover the joy of learning through structured play, storytelling, and creative activities.',
    to: '/nursery',
   image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80',
// download: toddlers in a classroom — Unsplash
    overlayColor: 'rgba(42, 82, 152, 0.75)',
    accentColor: 'var(--color-blue-light)',
  },
  {
    title: 'Primary Section',
    tag: 'Primary 1 – 6',
    desc: 'Building strong foundations in literacy, numeracy, science and the arts with dedicated teachers who inspire a lifelong love of learning.',
    to: '/primary',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',
    // download: primary school kids studying — Unsplash
    overlayColor: 'rgba(160, 120, 40, 0.75)',
    accentColor: 'var(--color-gold)',
  },
  {
    title: 'Secondary Section',
    tag: 'JSS 1 – SSS 3',
    desc: 'Rigorous academic preparation leading to WAEC/NECO certification, with emphasis on critical thinking, leadership and career readiness.',
    to: '/secondary',
   image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80',
// download: secondary school students in class — Unsplash
    overlayColor: 'rgba(13, 31, 69, 0.75)',
    accentColor: 'var(--color-blue)',
  },
]

export default function SectionsPreview() {
  return (
    <section style={{ padding: '88px 24px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
            Our Academic Sections
          </p>
          <h2 className="section-heading">Learning for Every Stage of Life</h2>
          <div className="gold-divider" style={{ marginTop: 14 }} />
        </div>

        {/* Cards */}
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
  {sections.map(({ title, tag, desc, to, image, overlayColor }, i) => (
    <Link
      key={i}
      to={to}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="section-card"
        style={{
          borderRadius: 12, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(26,58,107,0.10)',
          background: 'white',
          display: 'flex', flexDirection: 'column', flex: 1,
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,58,107,0.18)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,58,107,0.10)'
        }}
      >
        {/* Photo area */}
        <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            className="section-card-img"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to top, ${overlayColor} 0%, transparent 60%)`,
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light))',
          }} />
          <div style={{
            position: 'absolute', bottom: 14, left: 18,
            padding: '4px 12px', borderRadius: 20,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 600,
              fontSize: '0.75rem', color: 'white', letterSpacing: '0.06em',
            }}>
              {tag}
            </span>
          </div>
        </div>

        {/* Text content */}
        <div style={{ padding: '26px 26px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontSize: '1.3rem',
            color: 'var(--color-blue)', marginBottom: 10,
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
            color: '#5a5a5a', lineHeight: 1.75, marginBottom: 20, flex: 1,
          }}>
            {desc}
          </p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.88rem',
            color: 'var(--color-blue)',
          }}>
            Learn More <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>

      <style>{`
        .section-card:hover .section-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  )
}