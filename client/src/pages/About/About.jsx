import { FiAward, FiCompass, FiTarget } from 'react-icons/fi'
import SectionTitle from '../../components/Common/SectionTitle'
import CtaSection from '../../components/CTA/CtaSection'

const officeVisual = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'
const teamVisual = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
const meetingVisual = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
const values = ['Discretion', 'Excellence', 'Integrity', 'Clarity', 'Partnership']

export default function About() {
  return (
    <div className="pb-16">
      <h1 className="sr-only">About EdTaLink | Education Recruitment Experts</h1>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="About us" title="The bridge between educational excellence and exceptional people" description="EdTaLink was created to bring structure, insight, and premium recruitment support to education-focused organizations." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <img src={officeVisual} alt="EdTaLink office environment supporting education recruitment services" width="900" height="600" loading="lazy" className="h-[360px] w-full object-cover object-center sm:h-[400px] lg:h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">EdTaLink</p>
                <p className="mt-2 text-xl font-semibold">A premium talent bridge for the education ecosystem</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-50 p-3 text-[#1E88E5]"><FiTarget /></div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Company overview</p>
                </div>
                <p className="mt-4 text-base leading-8 text-slate-600">We work with universities, colleges, schools, edtech firms, publishers, study abroad consultants, training companies, and digital learning providers. Our focus is not just filling vacancies but shaping stronger teams for learning-driven organizations.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 text-slate-800 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-50 p-3 text-[#1E88E5]"><FiCompass /></div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Mission</p>
                </div>
                <p className="mt-4 text-base leading-8 text-slate-600">To connect educational organizations with exceptional talent through thoughtful, transparent, and high-touch recruitment guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-sm">
            <img src={teamVisual} alt="EdTaLink recruitment team collaborating on education hiring projects" width="900" height="600" loading="lazy" className="h-60 w-full object-cover object-center sm:h-64 lg:h-full" />
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-[#1E88E5]"><FiCompass /></div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Vision</p>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-600">To become the preferred talent advisory partner for education-focused organizations that value quality, ethics, and long-term impact.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-[#1E88E5]"><FiAward /></div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Core values</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span key={value} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">{value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="overflow-hidden rounded-[1.4rem] border border-slate-200">
            <img src={meetingVisual} alt="Executive recruitment meeting focused on education hiring strategy" width="900" height="600" loading="lazy" className="h-64 w-full object-cover object-center sm:h-72" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-sm font-medium text-[#0D4C92]">
              <FiAward /> Founder message
            </div>
            <p className="mt-4 text-lg leading-8 text-slate-700">“We believe recruitment should feel strategic, respectful, and deeply aligned with the mission of education. That belief shapes everything we do.”</p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-medium text-slate-600">Built for thoughtful growth, long-term partnerships, and purposeful hiring.</div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
