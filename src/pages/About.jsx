import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    desc: 'We pursue academic and personal excellence in everything we do, setting high standards for students and staff alike.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    desc: 'We uphold honesty, transparency and moral uprightness as the bedrock of our school community.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'We create a nurturing environment where every child feels valued, safe and motivated to succeed.',
  },
]

const milestones = [
  { year: '2010', event: 'School founded with 60 students and 8 staff' },
  { year: '2013', event: 'Secondary section launched; first WAEC cohort graduated' },
  { year: '2016', event: 'New classroom blocks and ICT laboratory commissioned' },
  { year: '2019', event: 'Achieved 100% WAEC pass rate for three consecutive years' },
  { year: '2022', event: 'Expanded sports facilities and introduced coding curriculum' },
  { year: '2025', event: 'Over 1,200 students enrolled across all three sections' },
]

const highlights = [
  'Over 15 years of academic excellence',
  'Nursery, Primary and Secondary under one roof',
  'Passionate, qualified and dedicated educators',
  'Strong WAEC & JAMB performance record',
  'Safe, structured and inspiring campus',
  'Active parent-school partnership culture',
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Wisdom Land Private School</title>
        <meta name="description" content="Learn about Wisdom Land Private School — our history, mission, vision and core values guiding education in Ago-Iwoye, Ogun State." />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '90vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px', overflow: 'hidden',
        backgroundImage: `
          linear-gradient(rgba(8,20,44,0.82), rgba(8,20,44,0.85)),
          url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', top: 80, left: -80, width: 260, height: 260, borderRadius: '50%', background: 'rgba(212,175,55,0.12)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', filter: 'blur(120px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 900, textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '10px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)', marginBottom: 28,
          }}>
            <Heart size={16} color="var(--color-gold)" />
            <span style={{ color: 'white', fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Who We Are
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            lineHeight: 1.05, color: 'white', marginBottom: 24,
          }}>
            Built on Purpose. Driven by Excellence.
          </h1>

          <p style={{
            maxWidth: 720, margin: '0 auto',
            color: 'rgba(255,255,255,0.76)',
            lineHeight: 1.9, fontSize: '1.05rem',
          }}>
            For over 15 years, Wisdom Land Private School has been shaping the minds and character of young Nigerians — one student at a time — right here in Ago-Iwoye, Ogun State.
          </p>

          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-primary" style={{ boxShadow: '0 15px 40px rgba(212,175,55,0.35)' }}>
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </motion.div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: '110px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Our Mission & Vision</h2>
            <p style={{ maxWidth: 620, margin: '20px auto 0', color: '#555', lineHeight: 1.9 }}>
              Two pillars that define everything we do at Wisdom Land Private School.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              {
                label: 'Our Mission',
                text: 'To provide quality, holistic education that develops the intellectual, moral, social and physical potential of every child, preparing them to be responsible leaders and productive citizens.',
                border: 'var(--color-blue)',
              },
              {
                label: 'Our Vision',
                text: 'To be the foremost private school in Ogun State, recognised for academic excellence, character development and the production of well-rounded graduates who positively impact society.',
                border: 'var(--color-gold)',
              },
            ].map(({ label, text, border }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white', borderRadius: 30,
                  padding: '44px 36px',
                  borderTop: `5px solid ${border}`,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'rgba(212,175,55,0.06)',
                }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-blue)', marginBottom: 16 }}>
                  {label}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '1rem' }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{
        padding: '110px 24px',
        background: 'linear-gradient(135deg, #102347 0%, #1A3A6B 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,175,55,0.08)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -120, right: -100, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(120px)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>Our Story</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.15, marginBottom: 24 }}>
              A Legacy of Learning Since 2010
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 16, fontSize: '1rem' }}>
              Wisdom Land Private School was established in 2010 with a clear vision — to offer affordable, quality education to the children of Ago-Iwoye and its environs. Starting with just 60 students in a modest facility on Onabamiro Street, the school has grown steadily into one of the most respected private schools in Ogun State.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontSize: '1rem' }}>
              Over the years, we have built state-of-the-art facilities, assembled a passionate team of educators, and developed a curriculum that blends rigorous academics with moral instruction and extracurricular enrichment. Today, over 1,200 students call Wisdom Land home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <CheckCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.97rem' }}>{h}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: '110px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Our Core Values</h2>
            <p style={{ maxWidth: 600, margin: '20px auto 0', color: '#555', lineHeight: 1.9 }}>
              These values are not just words — they shape every interaction, decision and lesson at Wisdom Land.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'linear-gradient(145deg, #fff, #f8f8f8)',
                  borderRadius: 30, padding: '40px 32px',
                  border: '1px solid rgba(212,175,55,0.12)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative', overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'rgba(212,175,55,0.08)' }} />
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,58,107,0.10), rgba(212,175,55,0.15))',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 22px',
                }}>
                  <Icon size={28} color="var(--color-blue)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-blue)', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#666', lineHeight: 1.8 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '110px 24px', background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Key Milestones</h2>
            <p style={{ maxWidth: 560, margin: '20px auto 0', color: '#555', lineHeight: 1.9 }}>
              A look at the defining moments that have shaped Wisdom Land into what it is today.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Centre line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, var(--color-blue), var(--color-gold))',
              transform: 'translateX(-50%)',
            }} />

            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 24,
                  marginBottom: 36,
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Event card */}
                <div style={{
                  flex: 1, padding: '18px 22px',
                  background: 'white', borderRadius: 16,
                  boxShadow: '0 8px 28px rgba(26,58,107,0.08)',
                  textAlign: i % 2 === 0 ? 'right' : 'left',
                }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: '#4a4a4a', lineHeight: 1.65 }}>{event}</p>
                </div>

                {/* Year dot */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                  background: 'var(--color-blue)', border: '3px solid var(--color-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(26,58,107,0.25)',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.62rem', color: 'var(--color-gold)', textAlign: 'center', lineHeight: 1.2 }}>{year}</span>
                </div>

                <div style={{ flex: 1 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '120px 24px', textAlign: 'center',
        backgroundImage: `
          linear-gradient(rgba(8,20,44,0.88), rgba(8,20,44,0.90)),
          url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop)
        `,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'white', lineHeight: 1.1, marginBottom: 24,
          }}>
            Ready to Be Part of Our Story?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, maxWidth: 580, margin: '0 auto 40px' }}>
            Join hundreds of families who trust Wisdom Land to shape the futures of their children — from nursery through secondary school.
          </p>
          <Link to="/admissions" className="btn-primary" style={{ boxShadow: '0 15px 40px rgba(212,175,55,0.35)' }}>
            Apply for Admission <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}