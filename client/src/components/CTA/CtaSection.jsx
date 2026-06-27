import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#E2E8F0] bg-gradient-to-br from-[#0F172A] via-[#172554] to-[#2563EB] p-10 text-white shadow-[0_35px_140px_rgba(15,23,42,0.18)] sm:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_30%)]" />
        <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">Ready to collaborate?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Build a stronger future for education with the right talent.</h2>
            <p className="mt-4 text-lg text-slate-200">Whether you are hiring leadership, faculty, or specialist teams, EdTaLink can help you navigate the next move with clarity.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F8FAFC]">Schedule a Call</Link>
            <Link to="/services" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
