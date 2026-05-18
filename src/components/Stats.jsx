import { useEffect, useRef, useState } from 'react'
import { Users, Award, BookOpen, Clock } from 'lucide-react'

const stats = [
  { icon: Users,    value: 1200, suffix: '+', label: 'Students Enrolled' },
  { icon: Award,    value: 15,   suffix: '+', label: 'Years of Excellence' },
  { icon: BookOpen, value: 80,   suffix: '+', label: 'Qualified Teachers' },
  { icon: Clock,    value: 100,  suffix: '%', label: 'WAEC Pass Rate' },
]

function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

function StatItem({ icon: Icon, value, suffix, label, started, delay }) {
  const count = useCountUp(value, 2000, started)

  const display = value >= 1000
    ? count.toLocaleString()
    : count

  return (
    <div style={{
      textAlign: 'center', padding: '20px 16px',
      opacity: started ? 1 : 0,
      transform: started ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
      }}>
        <Icon size={22} style={{ color: 'var(--color-gold)' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--color-gold)', lineHeight: 1 }}>
        {display}{suffix}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: 'var(--color-blue)', padding: '56px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--color-blue-dark) 0%, var(--color-blue) 50%, var(--color-blue-light) 100%)', opacity: 0.5 }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, position: 'relative', zIndex: 1 }}>
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} started={started} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}