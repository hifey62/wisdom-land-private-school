import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Baby } from 'lucide-react'
import logo from '../assets/wisdomlandlogo.jpg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Sections',
    to: '/sections',
    children: [
      { label: 'Nursery',   to: '/nursery',   icon: Baby },
      { label: 'Primary',   to: '/primary',   icon: BookOpen },
      { label: 'Secondary', to: '/secondary', icon: GraduationCap },
    ],
  },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact',    to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'var(--color-blue-dark)' : 'transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(13,31,69,0.25)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      }}
    >
      {/* Top bar */}
      <div style={{ background: 'var(--color-blue-dark)', padding: '6px 24px', display: 'flex', justifyContent: 'flex-end', gap: '24px' }}>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', fontFamily: 'var(--font-sans)' }}>
          📍 55/58 Onabamiro, Ago-Iwoye, Ogun State
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem' }}>
          📞 +234 000 000 0000
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 40px' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-blue-dark)',
          }}>
            <img src={logo} style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius: '50%' }} alt="Wisdom Land Logo" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-gold)', lineHeight: 1.1 }}>
              Wisdom Land
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Private School
            </div>
          </div>
        </Link>

        {/* Desktop links */}
       <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}
    className="hidden-mobile">
  {navLinks.map(link => (
    <li
      key={link.to}
      style={{ position: 'relative' }}
      onMouseEnter={() => link.children && setDropdown(link.label)}
      onMouseLeave={() => link.children && setDropdown(null)}
    >
      {link.children ? (
        <>
          <button
            style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              padding: '8px 14px', background: 'none', border: 'none',
              color: dropdown === link.label ? 'var(--color-gold)' : 'white',
              fontFamily: 'var(--font-sans)', fontWeight: 500,
              fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.2s',
            }}
          >
            {link.label}
            <ChevronDown
              size={15}
              style={{
                transition: 'transform 0.25s ease',
                transform: dropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>

          {dropdown === link.label && (
            <div style={{
              position: 'absolute', top: '100%', left: 0,
              background: 'var(--color-blue-dark)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 6, overflow: 'hidden',
              minWidth: 180, boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.2s ease',
            }}>
              {link.children.map(c => (
                <Link
                  key={c.to} to={c.to}
                  onClick={() => setDropdown(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 18px', color: 'white',
                    textDecoration: 'none', fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
                >
                  <c.icon size={15} /> {c.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <NavLink
          to={link.to}
          style={({ isActive }) => ({
            padding: '8px 14px', fontFamily: 'var(--font-sans)', fontWeight: 500,
            fontSize: '0.9rem', textDecoration: 'none',
            color: isActive ? 'var(--color-gold)' : 'white',
            borderBottom: isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
            transition: 'all 0.2s',
          })}
        >
          {link.label}
        </NavLink>
      )}
    </li>
  ))}
  <li>
    <Link to="/admissions" className="btn-primary" style={{ marginLeft: 8, fontSize: '0.85rem', padding: '9px 20px' }}>
      Apply Now
    </Link>
  </li>
</ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
          className="show-mobile"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--color-blue-dark)', padding: '16px 24px 24px',
          borderTop: '1px solid rgba(201,168,76,0.2)',
        }}>
          {navLinks.map(link => (
            <div key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  display: 'block', padding: '12px 0',
                  fontFamily: 'var(--font-sans)', fontWeight: 500,
                  color: isActive ? 'var(--color-gold)' : 'white',
                  textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)',
                })}
              >
                {link.label}
              </NavLink>
              {link.children && link.children.map(c => (
                <NavLink
                  key={c.to} to={c.to}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '10px 0 10px 20px',
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  — {c.label}
                </NavLink>
              ))}
            </div>
          ))}
          <Link to="/admissions" className="btn-primary" style={{ marginTop: 16, display: 'inline-flex', width: '100%', justifyContent: 'center' }}
            onClick={() => setOpen(false)}>
            Apply Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
