import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import SocialLinks from '../Common/SocialLinks'
import logo from '../../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-[#0F172A]/10 bg-[#0F172A] text-slate-300 shadow-[0_-12px_45px_rgba(2,6,23,0.24)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.6fr_0.7fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-[1.2rem] border border-white/10 bg-white/10 p-2 shadow-sm">
            <img src={logo} alt="EdTaLink education recruitment consultancy logo" width="180" height="44" loading="lazy" className="h-11 w-auto rounded-[0.9rem] object-contain" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            A premium recruitment bridge between educational organizations and exceptional talent.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Quick Links</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="transition hover:text-[#2563EB]">About</Link></li>
            <li><Link to="/services" className="transition hover:text-[#2563EB]">Services</Link></li>
            <li><Link to="/share-resume" className="transition hover:text-[#2563EB]">Share Resume</Link></li>
            <li><Link to="/contact" className="transition hover:text-[#2563EB]">Contact</Link></li>
            <li><Link to="/why-edtalink" className="transition hover:text-[#2563EB]">Why EdTaLink</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><FiMail className="text-[#F59E0B]" /> hello@edtalink.com</li>
            <li className="flex items-center gap-3"><FiPhone className="text-[#F59E0B]" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><FiMapPin className="text-[#F59E0B]" /> Bengaluru, India</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
