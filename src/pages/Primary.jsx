import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'


import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Monitor,
  Paintbrush2,
  ArrowRight,
  Trophy,
  Users,
  GraduationCap,
  BrainCircuit,
  Medal,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

/* SUBJECTS */
const subjects = [
  {
    icon: BookOpen,
    name: 'English Language',
    desc: 'Reading, writing, comprehension and oral communication skills.',
  },
  {
    icon: Calculator,
    name: 'Mathematics',
    desc: 'Number operations, problem-solving and logical reasoning.',
  },
  {
    icon: FlaskConical,
    name: 'Basic Science & Tech',
    desc: 'Hands-on science experiments and technology fundamentals.',
  },
  {
    icon: Globe,
    name: 'Social Studies',
    desc: 'Understanding the environment, history and civic responsibilities.',
  },
  {
    icon: Monitor,
    name: 'Computer Studies',
    desc: 'Introduction to computing, typing and digital literacy.',
  },
  {
    icon: Paintbrush2,
    name: 'Creative Arts',
    desc: 'Drawing, craft, music and cultural expression.',
  },
]

/* ACHIEVEMENTS */
const achievements = [
  {
    icon: Trophy,
    stat: 100,
    suffix: '%',
    label: 'Primary Transition Success',
  },
  {
    icon: GraduationCap,
    stat: 500,
    suffix: '+',
    label: 'Pupils Successfully Graduated',
  },
  {
    icon: Users,
    stat: 98,
    suffix: '%',
    label: 'Parent Satisfaction Rate',
  },
  {
    icon: Medal,
    stat: 25,
    suffix: '+',
    label: 'Academic Awards Won',
  },
]

/* FEATURES */
const features = [
  {
    icon: BrainCircuit,
    title: 'Interactive Learning',
    text: 'Lessons designed to keep pupils engaged, curious, and excited to learn every day.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    text: 'A secure and nurturing atmosphere where every child can confidently grow.',
  },
  {
    icon: Sparkles,
    title: 'Character Development',
    text: 'We build discipline, confidence, leadership, and strong moral values.',
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
export default function Primary() {
  return (
    <>
      <Helmet>
        <title>Primary Section | Wisdom Land Private School</title>

        <meta
          name="description"
          content="Primary 1–6 education at Wisdom Land Private School, Ago-Iwoye, Ogun State."
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
            linear-gradient(
              rgba(8,20,44,0.82),
              rgba(8,20,44,0.85)
            ),
            url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.12)',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            filter: 'blur(120px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 900,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
              marginBottom: 28,
            }}
          >
            <GraduationCap size={16} color="var(--color-gold)" />

            <span
              style={{
                color: 'white',
                fontSize: '.82rem',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
              }}
            >
              Primary 1 – 6
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 24,
            }}
          >
            Building Bright Futures From The Foundation
          </h1>

          <p
            style={{
              maxWidth: 720,
              margin: '0 auto',
              color: 'rgba(255,255,255,0.76)',
              lineHeight: 1.9,
              fontSize: '1.05rem',
            }}
          >
            We provide a nurturing and inspiring learning environment where
            pupils develop academic confidence, creativity, discipline, and the
            skills needed to thrive in secondary school and beyond.
          </p>

          <div
            style={{
              marginTop: 40,
              display: 'flex',
              justifyContent: 'center',
              gap: 18,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/admissions"
              className="btn-primary"
              style={{
                boxShadow: '0 15px 40px rgba(212,175,55,0.35)',
              }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        style={{
          padding: '100px 24px',
          background:
            'linear-gradient(135deg, #102347 0%, #1A3A6B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow Background */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.08)',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            filter: 'blur(120px)',
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 28,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {achievements.map(
            ({ icon: Icon, stat, suffix, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 30,
                  padding: '45px 28px',
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative Circle */}
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'rgba(212,175,55,0.08)',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    background:
                      'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(255,255,255,0.06))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon size={34} color="var(--color-gold)" />
                </div>

                {/* Counter */}
                <div
                  style={{
                    fontSize: '3.2rem',
                    fontWeight: 700,
                    color: 'white',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  <Counter end={stat} suffix={suffix} />
                </div>

                {/* Label */}
                <p
                  style={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: '.95rem',
                    lineHeight: 1.7,
                  }}
                >
                  {label}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: '110px 24px',
          background: 'var(--color-cream)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">
              Why Parents Love Our Primary School
            </h2>

            <p
              style={{
                maxWidth: 680,
                margin: '20px auto 0',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              Every child is guided with care, excellence, and attention to help
              them become confident learners and responsible young leaders.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 30,
            }}
          >
            {features.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  borderRadius: 30,
                  padding: '40px 32px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: 'rgba(212,175,55,0.08)',
                  }}
                />

                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 20,
                    background:
                      'linear-gradient(135deg, rgba(26,58,107,0.12), rgba(212,175,55,0.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                  }}
                >
                  <Icon size={30} color="var(--color-blue)" />
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--color-blue)',
                    marginBottom: 14,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: 1.8,
                  }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section
        style={{
          padding: '110px 24px',
          background: 'white',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Subjects Offered</h2>

            <p
              style={{
                maxWidth: 680,
                margin: '20px auto 0',
                color: '#666',
                lineHeight: 1.9,
              }}
            >
              A balanced curriculum designed to develop literacy, numeracy,
              creativity, communication, and critical thinking skills.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 30,
            }}
          >
            {subjects.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'linear-gradient(145deg, #fff, #f8f8f8)',
                  borderRadius: 30,
                  padding: '34px 28px',
                  border: '1px solid rgba(212,175,55,0.12)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'rgba(212,175,55,0.08)',
                  }}
                />

                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 20,
                    background:
                      'linear-gradient(135deg, rgba(26,58,107,0.12), rgba(212,175,55,0.18))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                  }}
                >
                  <Icon size={30} color="var(--color-blue)" />
                </div>

                <h3
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: 14,
                    color: 'var(--color-blue)',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {name}
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--color-cream)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 className="section-heading">Primary Classes</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 24,
            }}
          >
            {[
              'Primary 1',
              'Primary 2',
              'Primary 3',
              'Primary 4',
              'Primary 5',
              'Primary 6',
            ].map((cls, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                style={{
                  background: 'white',
                  borderRadius: 24,
                  padding: '34px 20px',
                  textAlign: 'center',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                  borderBottom: '5px solid var(--color-gold)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-blue)',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {cls}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 24px',
          backgroundImage: `
            linear-gradient(
              rgba(8,20,44,0.9),
              rgba(8,20,44,0.92)
            ),
            url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 780,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Give Your Child A Strong Start In Life
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.9,
              maxWidth: 620,
              margin: '0 auto 40px',
            }}
          >
            Enrol your child in a learning environment designed to inspire
            confidence, creativity, discipline, and academic excellence.
          </p>

          <Link
            to="/admissions"
            className="btn-primary"
            style={{
              boxShadow: '0 15px 40px rgba(212,175,55,0.35)',
            }}
          >
            Begin Admission Process <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}