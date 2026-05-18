import { useEffect, useState,useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  GraduationCap,
  FlaskConical,
  BookOpen,
  Calculator,
  Briefcase,
  Users,
  ArrowRight,
  Trophy,
  Monitor,
  ShieldCheck,
  BrainCircuit,
  Medal,
} from 'lucide-react'

const tracks = [
  {
    icon: FlaskConical,
    name: 'Science Track',
    subjects: [
      'Physics',
      'Chemistry',
      'Biology',
      'Further Mathematics',
      'Agricultural Science',
    ],
  },
  {
    icon: BookOpen,
    name: 'Arts Track',
    subjects: [
      'Literature in English',
      'Government',
      'History',
      'CRS/IRS',
      'French',
    ],
  },
  {
    icon: Briefcase,
    name: 'Commercial Track',
    subjects: [
      'Financial Accounting',
      'Commerce',
      'Economics',
      'Office Practice',
      'Marketing',
    ],
  },
]


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
const achievements = [
  {
    icon: Trophy,
    stat: 100,
    suffix: '%',
    label: 'WAEC Pass Rate',
  },
  {
    icon: GraduationCap,
    stat: 50,
    suffix: '+',
    label: 'Scholarship Winners',
  },
  {
    icon: Users,
    stat: 95,
    suffix: '%',
    label: 'Top University Admissions',
  },
  {
    icon: Medal,
    stat: 30,
    suffix: '+',
    label: 'Competition Awards',
  },
]

const features = [
  {
    icon: Monitor,
    title: 'Modern ICT Labs',
    text: 'Technology-driven learning environments that prepare students for a digital future.',
  },
  {
    icon: ShieldCheck,
    title: 'Disciplined Environment',
    text: 'Strong moral values and leadership culture that shape responsible students.',
  },
  {
    icon: BrainCircuit,
    title: 'Exam Excellence',
    text: 'Structured preparation for WAEC, NECO, and JAMB with exceptional results.',
  },
]

export default function Secondary() {
  return (
    <>
      <Helmet>
        <title>Secondary Section | Wisdom Land Private School</title>
        <meta
          name="description"
          content="JSS 1 to SSS 3 at Wisdom Land Private School. Excellence in WAEC, NECO and JAMB preparation in Ago-Iwoye."
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
            url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: -60,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.12)',
            filter: 'blur(80px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            filter: 'blur(100px)',
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
              borderRadius: 100,
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
                fontFamily: 'var(--font-sans)',
              }}
            >
              JSS 1 – SSS 3
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: 24,
            }}
          >
            Raising Future Leaders Through Excellence
          </h1>

          <p
            style={{
              maxWidth: 700,
              margin: '0 auto',
              fontSize: '1.08rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.78)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Our secondary section combines academic excellence, leadership
            training, innovation, and character development to prepare students
            for university success and life beyond the classroom.
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
                boxShadow: '0 12px 30px rgba(212,175,55,0.35)',
              }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                padding: '14px 26px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Contact School
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
            transition: 'all .4s ease',
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
              fontFamily: 'var(--font-sans)',
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

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: '110px 24px',
          background: 'var(--color-cream)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Why Parents Choose Us</h2>

            <p
              style={{
                maxWidth: 650,
                margin: '20px auto 0',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              We nurture students in an environment built for academic
              achievement, innovation, discipline, and leadership excellence.
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
                  borderRadius: 28,
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
                    fontSize: '1.4rem',
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
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section
        style={{
          padding: '100px 24px',
          background: 'white',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 60,
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2069&auto=format&fit=crop"
              alt="Students learning"
              style={{
                width: '100%',
                borderRadius: 30,
                objectFit: 'cover',
                boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                marginBottom: 16,
                fontSize: '.8rem',
              }}
            >
              Academic Excellence
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: 'var(--color-blue)',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Empowering Students For A Competitive Future
            </h2>

            <p
              style={{
                color: '#555',
                lineHeight: 1.95,
                marginBottom: 20,
              }}
            >
              Through experienced teachers, modern laboratories, leadership
              development, and intensive examination preparation, our students
              are equipped with the confidence and knowledge needed to excel in
              higher education and beyond.
            </p>

            <p
              style={{
                color: '#555',
                lineHeight: 1.95,
              }}
            >
              We create an atmosphere where students discover their strengths,
              build discipline, and develop the mindset required for lifelong
              success.
            </p>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section
        style={{
          padding: '110px 24px',
          background: '#fafafa',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 className="section-heading">Senior Secondary Tracks</h2>

            <p
              style={{
                maxWidth: 700,
                margin: '20px auto 0',
                color: '#666',
                lineHeight: 1.8,
              }}
            >
              Students are guided into specialized tracks designed to match
              their strengths, ambitions, and future career goals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 32,
            }}
          >
            {tracks.map(({ icon: Icon, name, subjects }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                style={{
                  padding: '36px 32px',
                  borderRadius: 30,
                  background:
                    'linear-gradient(145deg, #ffffff, #f7f7f7)',
                  border: '1px solid rgba(212,175,55,0.12)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'rgba(212,175,55,0.08)',
                  }}
                />

                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background:
                      'linear-gradient(135deg, rgba(26,58,107,0.12), rgba(212,175,55,0.18))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 28,
                  }}
                >
                  <Icon size={30} color="var(--color-blue)" />
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: 24,
                    color: 'var(--color-blue)',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {name}
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {subjects.map((subject, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 0',
                        borderBottom:
                          '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: 'var(--color-gold)',
                        }}
                      />

                      <span
                        style={{
                          color: '#555',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {subject}
                      </span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="section-heading">Secondary Classes</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 24,
            }}
          >
            {['JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3'].map(
              (cls, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  style={{
                    background: 'white',
                    borderRadius: 24,
                    padding: '34px 20px',
                    textAlign: 'center',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                    borderBottom: `5px solid ${
                      i < 3
                        ? 'var(--color-blue-light)'
                        : 'var(--color-gold)'
                    }`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      color: 'var(--color-blue)',
                      fontFamily: 'var(--font-serif)',
                      marginBottom: 8,
                    }}
                  >
                    {cls}
                  </h3>

                  <p
                    style={{
                      color: '#777',
                      fontSize: '.85rem',
                    }}
                  >
                    {i < 3 ? 'Junior Secondary' : 'Senior Secondary'}
                  </p>
                </motion.div>
              )
            )}
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
            url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(212,175,55,0.18), transparent 30%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'white',
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            Give Your Child The Advantage Of Excellence
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.9,
              maxWidth: 650,
              margin: '0 auto 40px',
            }}
          >
            Join a learning community dedicated to raising confident,
            disciplined, and high-achieving students prepared for a successful
            future.
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