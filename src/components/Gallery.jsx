const items = [
  {
    label: 'Science Lab',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    // download: photo by Jeswin Thomas on Unsplash
  },
  {
    label: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80',
    // download: photo by Janko Ferlič on Unsplash
  },
  {
    label: 'Sports Field',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
    // download: photo by Braden Collum on Unsplash
  },
  {
    label: 'ICT Lab',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80',
    // download: photo by Ales Nesetril on Unsplash
  },
  {
    label: 'Art & Craft Room',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    // download: photo by Khara Woods on Unsplash
  },
  {
    label: 'Assembly Hall',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    // download: photo by Product School on Unsplash
  },
]

export default function Gallery() {
  return (
    <section style={{ padding: '88px 24px', background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
            Our Facilities
          </p>
          <h2 className="section-heading">A World-Class Learning Environment</h2>
          <div className="gold-divider" />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {items.map(({ label, image }, i) => (
            <div
              key={i}
              className="gallery-card"
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(26,58,107,0.12)',
              }}
            >
              {/* Photo */}
              <img
                src={image}
                alt={label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="gallery-img"
              />

              {/* Overlay — always slightly visible, stronger on hover */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(13,31,69,0.85) 0%, rgba(13,31,69,0.2) 60%, transparent 100%)',
                  transition: 'opacity 0.35s ease',
                }}
              />

              {/* Gold top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light))',
              }} />

              {/* Label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 18px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-serif)', fontWeight: 600,
                  fontSize: '1.05rem', color: 'white',
                  textShadow: '0 1px 8px rgba(0,0,0,0.4)',
                }}>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.07);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1.3;
          background: linear-gradient(to top, rgba(13,31,69,0.92) 0%, rgba(13,31,69,0.35) 60%, transparent 100%);
        }
      `}</style>
    </section>
  )
}