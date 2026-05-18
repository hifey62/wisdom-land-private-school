import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

import {
  Baby,
  Music,
  Palette,
  BookOpen,
  Heart,
  Star,
  ArrowRight,
  Trophy,
  Users,
  Smile,
  Medal,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

/* ACTIVITIES */
const activities = [
  {
    icon: Music,
    title: 'Music & Rhymes',
    desc: 'Songs, rhymes and rhythm activities that build language and listening skills.',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    desc: 'Painting, drawing and crafts that develop fine motor skills and self-expression.',
  },
  {
    icon: BookOpen,
    title: 'Early Literacy',
    desc: 'Phonics, letter recognition and storytelling as the foundation for reading.',
  },
  {
    icon: Heart,
    title: 'Social Skills',
    desc: 'Group activities that teach sharing, empathy and cooperation.',
  },
  {
    icon: Star,
    title: 'Number Fun',
    desc: 'Playful introduction to numbers, counting and basic mathematics.',
  },
  {
    icon: Baby,
    title: 'Outdoor Play',
    desc: 'Supervised outdoor play that promotes physical development and team spirit.',
  },
]

/* ACHIEVEMENTS */
const achievements = [
  {
    icon: Trophy,
    stat: 98,
    suffix: '%',
    label: 'Happy & Confident Pupils',
  },
  {
    icon: Users,
    stat: 300,
    suffix: '+',
    label: 'Nursery Pupils Enrolled',
  },
  {
    icon: Smile,
    stat: 99,
    suffix: '%',
    label: 'Parent Satisfaction Rate',
  },
  {
    icon: Medal,
    stat: 15,
    suffix: '+',
    label: 'Early Learning Awards',
  },
]

/* FEATURES */
const features = [
  {
    icon: BrainCircuit,
    title: 'Play-Based Learning',
    text: 'We use structured play to spark curiosity, imagination and a genuine love for learning from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Nurturing Space',
    text: 'Every child feels secure, loved and confident in our warm and carefully supervised nursery environment.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    text: 'We develop the whole child — emotionally, socially, physically and intellectually — right from the start.',
  },
]

/* COUNTER */


function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  // Detect when counter enters viewport
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Nursery() {
  return (
    <>
      <Helmet>
        <title>Nursery Section | Wisdom Land Private School</title>
        <meta
          name="description"
          content="Wisdom Land nursery section offers a warm, play-based environment for children aged 2–5 in Ago-Iwoye, Ogun State."
        />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px',
          overflow: 'hidden',
          backgroundImage: `
            linear-gradient(rgba(8,20,44,0.82), rgba(8,20,44,0.85)),
            url('https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=2070&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: 80, left: -80,
          width: 260, height: 260, borderRadius: '50%',
          background: 'rgba(212,175,55,0.12)', filter: 'blur(100px)',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, right: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)', filter: 'blur(120px)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 900, textAlign: 'center' }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '10px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)', marginBottom: 28,
          }}>
            <Baby size={16} color="var(--color-gold)" />
            <span style={{ color: 'white', fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Ages 2 – 5
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            lineHeight: 1.05, color: 'white', marginBottom: 24,
          }}>
            Where Every Child's Journey Begins
          </h1>

          <p style={{
            maxWidth: 720, margin: '0 auto',
            color: 'rgba(255,255,255,0.76)',
            lineHeight: 1.9, fontSize: '1.05rem',
          }}>
            We give your child the warmest, most joyful introduction to school life — building confidence, curiosity and character through play, creativity and love.
          </p>

          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
            <Link
              to="/admissions"
              className="btn-primary"
              style={{ boxShadow: '0 15px 40px rgba(212,175,55,0.35)' }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ACHIEVEMENTS */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #102347 0%, #1A3A6B 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -100, left: -100,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(212,175,55,0.08)', filter: 'blur(100px)',
        }} />
        <div style={{
          position: 'absolute', bottom: -120, right: -100,
          width: 350, height: 350, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', filter: 'blur(120px)',
        }} />

        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 28, position: 'relative', zIndex: 2,
        }}>
          {achievements.map(({ icon: Icon, stat, suffix, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 30, padding: '45px 28px', textAlign: 'center',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 120, height: 120, borderRadius: '50%',
                background: 'rgba(212,175,55,0.08)',
              }} />
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                margin: '0 auto 24px',
                background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(255,255,255,0.06))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <Icon size={34} color="var(--color-gold)" />
              </div>
              <div style={{
                fontSize: '3.2rem', fontWeight: 700, color: 'white',
                fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: 12,
              }}>
                <Counter end={stat} suffix={suffix} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '.95rem', lineHeight: 1.7 }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '110px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Why Parents Trust Our Nursery</h2>
            <p style={{ maxWidth: 680, margin: '20px auto 0', color: '#555', lineHeight: 1.9 }}>
              Our nursery is built on love, patience and professional early-childhood expertise — giving your child the safest, happiest start possible.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
            {features.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white', borderRadius: 30, padding: '40px 32px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'rgba(212,175,55,0.08)',
                }} />
                <div style={{
                  width: 70, height: 70, borderRadius: 20,
                  background: 'linear-gradient(135deg, rgba(26,58,107,0.12), rgba(212,175,55,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}>
                  <Icon size={30} color="var(--color-blue)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue)', marginBottom: 14, fontFamily: 'var(--font-serif)' }}>
                  {title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.8 }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ padding: '110px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">What We Offer</h2>
            <p style={{ maxWidth: 680, margin: '20px auto 0', color: '#666', lineHeight: 1.9 }}>
              A rich mix of activities that stimulate every aspect of your child's growth — from language and numbers to art, music and movement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
            {activities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'linear-gradient(145deg, #fff, #f8f8f8)',
                  borderRadius: 30, padding: '34px 28px',
                  border: '1px solid rgba(212,175,55,0.12)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(212,175,55,0.08)',
                }} />
                <div style={{
                  width: 70, height: 70, borderRadius: 20,
                  background: 'linear-gradient(135deg, rgba(26,58,107,0.12), rgba(212,175,55,0.18))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}>
                  <Icon size={30} color="var(--color-blue)" />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 14, color: 'var(--color-blue)', fontFamily: 'var(--font-serif)' }}>
                  {title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.8 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section style={{ padding: '100px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 className="section-heading">Nursery Classes</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {[
              { name: 'Playgroup',    age: '2 – 3 yrs' },
              { name: 'Pre-Nursery', age: '3 yrs' },
              { name: 'Nursery 1',   age: '4 yrs' },
              { name: 'Nursery 2',   age: '5 yrs' },
            ].map(({ name, age }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                style={{
                  background: 'white', borderRadius: 24,
                  padding: '34px 20px', textAlign: 'center',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                  borderBottom: '5px solid var(--color-gold)',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-blue)', fontFamily: 'var(--font-serif)', marginBottom: 6 }}>
                  {name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)', fontFamily: 'var(--font-sans)' }}>
                  {age}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '120px 24px',
        backgroundImage: `
          linear-gradient(rgba(8,20,44,0.9), rgba(8,20,44,0.92)),
          url('https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover', backgroundPosition: 'center',
        textAlign: 'center',
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'white', lineHeight: 1.1, marginBottom: 24,
          }}>
            Give Your Child the Warmest Start in Life
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.75)', lineHeight: 1.9,
            maxWidth: 620, margin: '0 auto 40px',
          }}>
            Enrol your child in our nursery and watch them blossom into a confident, curious and joyful learner.
          </p>
          <Link
            to="/admissions"
            className="btn-primary"
            style={{ boxShadow: '0 15px 40px rgba(212,175,55,0.35)' }}
          >
            Begin Admission Process <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}