import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiArrowRight, FiX } from 'react-icons/fi'
import logo from '../../assets/images/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'For Employers', to: '/recruitment-requirement' },
  { label: 'Why EdTaLink', to: '/why-edtalink' },
  { label: 'Share Resume', to: '/share-resume' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <div className="rounded-[1.25rem] border border-[#E2E8F0] bg-gradient-to-br from-white via-slate-50 to-slate-100 p-2 shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
            <img src={logo} alt="EdTaLink educational recruitment consultancy logo" width="180" height="44" loading="lazy" className="h-11 w-auto rounded-[0.95rem] object-contain" />
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative text-sm font-medium transition ${isActive ? 'text-[#0F172A]' : 'text-[#475569] hover:text-[#2563EB]'}`
              }
            >
              {({ isActive }) => (
                <span aria-current={isActive ? 'page' : undefined} className={`relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#0F172A] after:to-[#2563EB] after:transition-transform after:duration-300 after:content-[''] ${isActive ? 'after:scale-x-100' : 'group-hover:after:scale-x-100'}`}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2563EB]"
          >
            Let’s Talk <FiArrowRight />
          </NavLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="rounded-[1rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-1.5 shadow-sm">
            <img src={logo} alt="EdTaLink educational recruitment consultancy logo" width="144" height="36" loading="lazy" className="h-9 w-auto rounded-[0.75rem] object-contain" />
          </div>
          <button className="rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-700 shadow-sm" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
            {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] lg:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `rounded-2xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-[#F8FAFC] text-[#0F172A]' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#2563EB]'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
              Let’s Talk <FiArrowRight />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
