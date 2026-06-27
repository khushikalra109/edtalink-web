import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiBriefcase, FiCompass, FiCpu, FiGlobe, FiLayers, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi'
import HeroSection from '../../components/Hero/HeroSection'
import SectionTitle from '../../components/Common/SectionTitle'
import TrustCard from '../../components/Cards/TrustCard'
import ServiceCard from '../../components/Cards/ServiceCard'
import CtaSection from '../../components/CTA/CtaSection'

const trustItems = [
  { title: 'Executive Search', description: 'Curated hiring support for academic and organizational leadership roles.', icon: FiAward },
  { title: 'Trusted Advisory', description: 'A discreet and strategic bridge for sensitive education recruitment needs.', icon: FiShield },
  { title: 'Sector-Specific Hiring', description: 'Tailored talent strategies built around your institution or business model.', icon: FiCompass },
]

const services = [
  { title: 'Executive Search', description: 'Identify high-impact leaders for senior academic and operational roles.', badge: 'Leadership', icon: FiAward },
  { title: 'Faculty Hiring', description: 'Streamlined recruitment planning for educators and subject experts.', badge: 'Academic', icon: FiBookOpen },
  { title: 'Recruitment Solutions', description: 'Flexible hiring programs for growing education organizations.', badge: 'Strategy', icon: FiCompass },
  { title: 'Talent Acquisition', description: 'Recruit exceptional professionals across academic and enterprise functions.', badge: 'People', icon: FiUsers },
]

const industryVisual = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80'
const whyVisual = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
const servicesVisual = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
const testimonialVisual = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'

const timeline = [
  'Discover your hiring goals and role requirements',
  'Assess market trends and craft a focused talent strategy',
  'Shortlist, validate, and present the right candidates',
  'Support onboarding and long-term talent alignment',
]

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-[#E2E8F0] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)] lg:p-12">
          <SectionTitle eyebrow="Trusted by growth-minded organizations" title="Premium recruitment support for modern education brands" description="EdTaLink combines strategy, discretion, and market understanding to create meaningful talent partnerships." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {trustItems.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <TrustCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] border border-[#E2E8F0] bg-gradient-to-br from-[#0F172A] via-[#172554] to-[#2563EB] p-8 text-white shadow-[0_25px_80px_rgba(15,23,42,0.16)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
              <img src={whyVisual} alt="EdTaLink team conducting a professional recruitment consultation meeting" width="900" height="600" loading="lazy" className="h-56 w-full rounded-[1rem] object-cover" />
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F59E0B]">Why EdTaLink</p>
              <h3 className="mt-3 text-3xl font-semibold">A thoughtful recruitment partner for high-stakes education hiring.</h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">We combine market intelligence, stakeholder alignment, and candidate experience to support hiring decisions with confidence.</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[1.6rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#2563EB]/40">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F8FAFC] p-3 text-[#2563EB]"><FiUsers /></div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Relationship-led recruiting</h3>
              </div>
              <p className="mt-4 text-sm leading-8 text-[#475569]">Every engagement is shaped around clarity, trust, and long-term fit rather than transactional volume.</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#2563EB]/40">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F8FAFC] p-3 text-[#2563EB]"><FiLayers /></div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Scalable service model</h3>
              </div>
              <p className="mt-4 text-sm leading-8 text-[#475569]">From single searches to multi-hiring campaigns, our approach stays focused on quality and momentum.</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#2563EB]/40">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F8FAFC] p-3 text-[#2563EB]"><FiBriefcase /></div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Outcome-driven partnerships</h3>
              </div>
              <p className="mt-4 text-sm leading-8 text-[#475569]">We focus on the outcomes that matter most: strong candidates, smoother hiring, and better organizational fit.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Services overview" title="Tailored recruitment support for every stage" description="Our services are crafted to help learning organizations build teams that can scale impact." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] shadow-inner">
              <img src={servicesVisual} alt="Education recruitment strategy session with hiring specialists" width="900" height="600" loading="lazy" className="h-full min-h-[320px] w-full object-cover" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.05)] backdrop-blur-xl lg:p-10">
          <SectionTitle eyebrow="Recruitment process" title="A thoughtful process from brief to placement" description="Every engagement follows a structured, transparent path designed for quality and confidence." />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {timeline.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm transition hover:-translate-y-1">
                <div className="text-sm font-semibold text-[#2563EB]">0{index + 1}</div>
                <p className="mt-3 text-sm leading-7 text-[#475569]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_25px_70px_rgba(15,23,42,0.05)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden">
              <img src={testimonialVisual} alt="Modern education industry workspace featuring professional collaboration" width="900" height="600" loading="lazy" className="h-full min-h-[300px] w-full object-cover" />
            </div>
            <div className="p-12 text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">Testimonials</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#0F172A]">Testimonials Coming Soon</h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#475569] lg:mx-0">We are curating client stories and case highlights for the next milestone of the EdTaLink experience.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <CtaSection />
    </div>
  )
}
