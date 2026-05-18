import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'



// ─────────────────────────────────────────────────────────────
// Place your student photos inside the /public folder, e.g.:
//   public/hero-1.jpg
//   public/hero-2.jpg
//   public/hero-3.jpg
// Then update the `image` paths below.
// ─────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: hero1,                    // ← your student photo
    overlay: 'rgba(13, 31, 69, 0.65)',       // deep blue tint over image
    title: 'Where Wisdom Begins',
    subtitle: 'Nurturing Excellence, Building Futures',
    description: 'Wisdom Land Private School provides a world-class education rooted in African values, academic rigour, and character development for every child.',
    cta: 'Explore Our School',
    ctaLink: '/about',
    accent: 'Nursery • Primary • Secondary',
  },
  {
    id: 2,
    image: hero2,                    // ← your student photo
    overlay: 'rgba(10, 26, 74, 0.60)',
    title: 'Raising Future Leaders',
    subtitle: 'Academic Excellence & Character Development',
    description: 'Our dedicated teachers inspire curiosity, creativity, and confidence in every student — from nursery through secondary school.',
    cta: 'Admission Open',
    ctaLink: '/admissions',
    accent: 'Enrol Today',
  },
  {
    id: 3,
    image: hero3,                    // ← your student photo
    overlay: 'rgba(13, 31, 69, 0.68)',
    title: 'A School Like No Other',
    subtitle: 'Excellence • Integrity • Wisdom',
    description: 'Set in the heart of Ago-Iwoye, we combine modern teaching methods with timeless values to produce well-rounded graduates.',
    cta: 'Contact Us',
    ctaLink: '/contact',
    accent: 'Ago-Iwoye, Ogun State',
  },
]

export default function Hero() {
  const [current, setCurrent]     = useState(0)
  const [animating, setAnimating] = useState(false)

  // Preload all slide images on mount so transitions feel instant
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image()
      img.src = slide.image
    })
  }, [])

  const go = (dir) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => (c + dir + slides.length) % slides.length)
      setAnimating(false)
    }, 400)
  }

  useEffect(() => {
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [animating])

  const slide = slides[current]

  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* ── Background image layers — one per slide, crossfade between them ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: `url("${s.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            // Fade + slow Ken-Burns zoom on the active slide
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1.03)' : 'scale(1)',
            transition: 'opacity 0.9s ease, transform 7s ease',
            willChange: 'opacity, transform',
          }}
        />
      ))}

      {/* ── Colour overlay — tints the photo so text is legible ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: slide.overlay,
        transition: 'background 0.9s ease',
      }} />

      {/* ── Subtle gold dot-pattern on top of overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* ── Decorative gold rings (right side) ── */}
      <div style={{
        position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)',
        width: '55vw', height: '55vw', maxWidth: 700, maxHeight: 700,
        borderRadius: '50%', border: '2px solid rgba(201,168,76,0.10)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '40vw', height: '40vw', maxWidth: 520, maxHeight: 520,
        borderRadius: '50%', border: '1px solid rgba(201,168,76,0.07)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* ── Bottom vignette so dots/text don't clash with photo ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, zIndex: 2,
        background: 'linear-gradient(to top, rgba(10,26,74,0.55) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Slide content ── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '120px 40px 100px',
        position: 'relative', zIndex: 3, width: '100%',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(18px)' : 'translateY(0)',
        transition: 'opacity 0.45s ease, transform 0.45s ease',
      }}>
        <div style={{ maxWidth: 680 }}>

          {/* Animated badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 20,
            border: '1px solid rgba(201,168,76,0.45)',
            background: 'rgba(201,168,76,0.12)',
            marginBottom: 24, backdropFilter: 'blur(4px)',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', animation: 'pulse-gold 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {slide.accent}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 800,
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            color: 'white', lineHeight: 1.1, marginBottom: 16,
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
          }}>
            {slide.title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: 'var(--color-gold-light)', marginBottom: 16, fontStyle: 'italic',
          }}>
            {slide.subtitle}
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '1rem',
            color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 36, maxWidth: 560,
          }}>
            {slide.description}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to={slide.ctaLink} className="btn-primary">{slide.cta}</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </div>

   
      {/* ── Arrow buttons ── */}
      {[
        { dir: -1, side: 'left',  Icon: ChevronLeft },
        { dir:  1, side: 'right', Icon: ChevronRight },
      ].map(({ dir, side, Icon }) => (
        <button
          key={side}
          onClick={() => go(dir)}
          aria-label={dir === -1 ? 'Previous slide' : 'Next slide'}
          style={{
            position: 'absolute', [side]: 20, top: '50%', transform: 'translateY(-50%)',
            width: 46, height: 46, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)',
            border: '1px solid rgba(201,168,76,0.35)', color: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4,
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--color-gold)'
            e.currentTarget.style.color = 'var(--color-blue-dark)'
            e.currentTarget.style.borderColor = 'var(--color-gold)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
          }}
        >
          <Icon size={20} />
        </button>
      ))}

      {/* ── Dot indicators ── */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 4,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              if (!animating && i !== current) {
                setAnimating(true)
                setTimeout(() => { setCurrent(i); setAnimating(false) }, 400)
              }
            }}
            style={{
              width: i === current ? 30 : 8, height: 8, borderRadius: 4, padding: 0,
              background: i === current ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer', transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
