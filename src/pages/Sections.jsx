import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Baby, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'

const sections = [
  {
    icon: Baby,
    title: 'Nursery Section',
    tag: 'Ages 2 – 5',
    desc: 'Our nursery provides a warm, stimulating start to school life. Through structured play, songs, storytelling and hands-on activities, we ignite curiosity and build essential early skills.',
    features: ['Playgroup, Pre-Nursery & Nursery 1–2', 'Phonics & early literacy', 'Number recognition & basic numeracy', 'Creative arts & music', 'Outdoor play sessions'],
    to: '/nursery',
    gradient: 'linear-gradient(135deg, #1A3A6B, #2A5298)',
  },
  {
    icon: BookOpen,
    title: 'Primary Section',
    tag: 'Primary 1 – 6',
    desc: 'Our primary school builds solid academic foundations through a rich, engaging curriculum aligned to the Nigerian Educational Research and Development Council (NERDC) standards.',
    features: ['English Language & Mathematics', 'Basic Science & Technology', 'Social Studies & Civic Education', 'Cultural & Creative Arts', 'Computer Studies'],
    to: '/primary',
    gradient: 'linear-gradient(135deg, #A07828, #C9A84C)',
  },
  {
    icon: GraduationCap,
    title: 'Secondary Section',
    tag: 'JSS 1 – SSS 3',
    desc: 'Our secondary school prepares students for WAEC, NECO and JAMB with experienced subject teachers, well-equipped laboratories and a culture of academic excellence.',
    features: ['Science, Arts & Commercial tracks', 'Well-equipped laboratories', 'WAEC/NECO & JAMB preparation', 'Debate, quiz & competitions', 'Career guidance & counselling'],
    to: '/secondary',
    gradient: 'linear-gradient(135deg, #0D1F45, #1A3A6B)',
  },
]

export default function Sections() {
  return (
    <>
      <Helmet>
        <title>Our Sections | Wisdom Land Private School</title>
        <meta name="description" content="Wisdom Land Private School offers Nursery, Primary and Secondary education in Ago-Iwoye, Ogun State." />
      </Helmet>

      <div className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>Our Academics</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'white', marginBottom: 14 }}>School Sections</h1>
          <div className="gold-divider" />
        </div>
      </div>

      <section style={{ padding: '88px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          {sections.map(({ icon: Icon, title, tag, desc, features, to, gradient }, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              {/* Visual */}
              <div style={{ direction: 'ltr' }}>
                <div style={{ borderRadius: 12, background: gradient, padding: '52px 40px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.05)' }} />
                  <Icon size={80} style={{ opacity: 0.25, marginBottom: 16 }} />
                  <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.6rem', marginBottom: 6 }}>{title}</div>
                  <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.4)', fontSize: '0.82rem', fontFamily: 'var(--font-sans)' }}>{tag}</div>
                </div>
              </div>
              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{tag}</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-blue)', marginBottom: 8 }}>{title}</h2>
                <div className="gold-divider gold-divider-left" style={{ marginBottom: 20 }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: 22 }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
                  {features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: '#4a4a4a' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to={to} className="btn-primary">Explore {title.split(' ')[0]} <ArrowRight size={15} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
