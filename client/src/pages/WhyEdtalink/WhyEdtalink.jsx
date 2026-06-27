import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, BookOpen, Building2, Compass, GraduationCap, Handshake, Landmark, Monitor, Rocket, ShieldCheck, Sparkles, TrendingUp, Users, Workflow } from 'lucide-react'
import SectionTitle from '../../components/Common/SectionTitle'
import CtaSection from '../../components/CTA/CtaSection'
import aboutImage from '../../assets/images/about.png'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'

const whyChoose = [
  {
    title: 'Education Industry Expertise',
    description: 'We understand the pace, nuance, and standards of academic and learning organizations better than generic recruiters.',
    icon: GraduationCap,
  },
  {
    title: 'Quality-Driven Hiring',
    description: 'Every search is shaped around strong screening, stakeholder fit, and long-term value rather than high-volume outreach.',
    icon: ShieldCheck,
  },
  {
    title: 'Faster Recruitment Process',
    description: 'Our structured process compresses time-to-shortlist while preserving rigor, clarity, and candidate experience.',
    icon: Rocket,
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We build relationships that support recurring hiring needs, leadership succession, and organizational growth.',
    icon: Handshake,
  },
]

const processSteps = [
  { title: 'Requirement Understanding', description: 'We align on role scope, leadership expectations, and success markers.', icon: Compass },
  { title: 'Talent Search', description: 'We map the market and engage high-potential candidates with precision.', icon: Users },
  { title: 'Candidate Screening', description: 'Each profile is assessed against capability, readiness, and organizational fit.', icon: BadgeCheck },
  { title: 'Interview Coordination', description: 'We support scheduling, communication, and decision-making through each stage.', icon: Workflow },
  { title: 'Successful Placement', description: 'We remain involved through onboarding and long-term talent alignment.', icon: TrendingUp },
]

const expertise = [
  { title: 'Faculty Hiring', description: 'Academic leadership and subject-matter talent.', icon: BookOpen },
  { title: 'Leadership Hiring', description: 'Deans, principals, directors, and senior operators.', icon: Building2 },
  { title: 'Administrative Hiring', description: 'Operations, student success, and campus functions.', icon: Landmark },
  { title: 'EdTech Hiring', description: 'Product, growth, operations, and customer teams.', icon: Monitor },
  { title: 'Academic Counselling', description: 'Career guidance and student support professionals.', icon: Sparkles },
  { title: 'Executive Search', description: 'High-impact leadership searches for complex environments.', icon: Compass },
]

const stats = [
  { value: '5000+', label: 'Candidate Network' },
  { value: '100+', label: 'Partner Organizations' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: 'Pan India', label: 'Reach' },
]

export default function WhyEdtalink() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,168,232,0.25),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(13,76,146,0.2),_transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-[#0D4C92] shadow-[0_10px_30px_rgba(13,76,146,0.08)] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00A8E8]" />
              Premium recruitment partnerships for education organizations
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Why Educational Organizations Choose <span className="text-[#1E88E5]">EdTaLink</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Connecting educational institutions with exceptional talent through specialized recruitment solutions built on insight, trust, and speed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/recruitment-requirement" className="inline-flex items-center gap-2 rounded-full bg-[#0D4C92] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(13,76,146,0.22)] transition hover:-translate-y-0.5 hover:bg-[#083866]">
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/share-resume" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#1E88E5] hover:text-[#1E88E5]">
                Share Your Resume
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0D4C92] via-[#1E88E5] to-[#00A8E8] blur-3xl opacity-20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_35px_140px_rgba(13,76,146,0.18)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">Strategic talent advisory</p>
                    <p className="mt-2 text-2xl font-semibold">People-first recruitment for modern education brands</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-100">Executive support</div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <motion.img whileHover={{ y: -6, scale: 1.02 }} src={aboutImage} alt="EdTaLink recruitment illustration" className="h-24 w-full rounded-2xl object-cover" />
                  <motion.img whileHover={{ y: -6, scale: 1.02 }} src={image1} alt="Professional education recruitment" className="h-24 w-full rounded-2xl object-cover" />
                  <motion.img whileHover={{ y: -6, scale: 1.02 }} src={image2} alt="Strategic hiring environment" className="h-24 w-full rounded-2xl object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:p-12">
          <SectionTitle eyebrow="Why choose EdTaLink" title="A premium recruitment partner for ambitious education organizations" description="We combine market intelligence, discretion, and outcome-focused execution to support every hiring decision with confidence." />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D4C92] to-[#00A8E8] text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.16)] lg:p-10">
          <SectionTitle eyebrow="Recruitment process" title="A thoughtful journey from brief to placement" description="Every engagement follows a structured path designed for clarity, quality, and momentum." theme="dark" />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="relative rounded-[1.35rem] border border-white/10 bg-white/10 p-5 shadow-inner">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-[#00A8E8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[#00A8E8]">0{index + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                  {index < processSteps.length - 1 && <div className="absolute right-[-12px] top-10 hidden h-0.5 w-6 bg-white/20 lg:block" />}
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Areas of expertise" title="Specialized support for key education and talent functions" description="Our practice spans academic leadership, operations, public-facing roles, and digital learning teams." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#1E88E5]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Professional EdTaLink consulting team supporting education recruitment" width="1200" height="800" loading="lazy" className="h-full min-h-[320px] w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Our commitment</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">We create long-term value through ethical, people-first recruitment.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We are committed to delivering recruitment solutions that create long-term value for both organizations and professionals through industry expertise, ethical practices, and a people-first approach.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-sky-50 p-2 text-[#1E88E5]">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-slate-600">Every engagement is shaped around clarity, trust, and measurable results that strengthen teams over time.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.05)] backdrop-blur-xl lg:p-10">
          <SectionTitle eyebrow="Impact at a glance" title="The scale and trust behind every engagement" description="Our work is grounded in a strong network, a national footprint, and consistent client satisfaction." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/80 p-6 text-center shadow-sm">
                <p className="text-3xl font-semibold text-[#0D4C92]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CtaSection />
    </div>
  )
}
