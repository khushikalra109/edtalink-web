import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiPlay, FiShield, FiTrendingUp } from 'react-icons/fi'
import aboutImage from '../../assets/images/about.png'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(15,23,42,0.1),_transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/95 via-white/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/90 px-4 py-2 text-sm font-medium text-[#2563EB] shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
            Premium talent partnerships for education organizations
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            Connecting Education Talent with <span className="text-[#2563EB]">Educational Excellence</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
            EdTaLink helps universities, schools, edtech firms, publishers, and training companies discover exceptional people with precision and speed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/share-resume" className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-[#2563EB]">
              Share Your Resume <FiArrowRight />
            </Link>
            <Link to="/recruitment-requirement" className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/90 px-6 py-3 text-sm font-semibold text-[#0F172A] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#F8FAFC] hover:text-[#2563EB]">
              <FiPlay /> Post a Requirement
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#475569]">
            <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-3 py-2 shadow-sm">
              <FiCheckCircle className="text-[#2563EB]" /> Executive search
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-3 py-2 shadow-sm">
              <FiShield className="text-[#2563EB]" /> Discreet & strategic
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/80 px-3 py-2 shadow-sm">
              <FiTrendingUp className="text-[#2563EB]" /> Growth-focused
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#F59E0B] blur-3xl opacity-20" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_35px_140px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0F172A] via-[#172554] to-[#2563EB] p-7 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Strategic recruitment</p>
                  <p className="mt-2 text-2xl font-semibold">Trusted by leading education brands</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-100">24/7 support</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-inner">
                  <p className="text-3xl font-semibold">120+</p>
                  <p className="mt-2 text-sm text-slate-300">Specialist searches</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-inner">
                  <p className="text-3xl font-semibold">98%</p>
                  <p className="mt-2 text-sm text-slate-300">Client satisfaction</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <motion.img whileHover={{ y: -6, scale: 1.02 }} src={aboutImage} alt="About EdTaLink" className="h-24 w-full rounded-2xl object-cover" />
                <motion.img whileHover={{ y: -6, scale: 1.02 }} src={image1} alt="Education talent showcase" className="h-24 w-full rounded-2xl object-cover" />
                <motion.img whileHover={{ y: -6, scale: 1.02 }} src={image2} alt="Leadership recruitment illustration" className="h-24 w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
