import SectionTitle from '../../components/Common/SectionTitle'
import ServiceCard from '../../components/Cards/ServiceCard'
import CtaSection from '../../components/CTA/CtaSection'

const servicesVisual = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'

const services = [
  { title: 'Executive Search', description: 'Targeted leadership recruitment for directors, deans, principals, and senior administrators.', badge: 'Leadership' },
  { title: 'Leadership Hiring', description: 'Specialized support for transformation-focused people leadership roles.', badge: 'Strategic' },
  { title: 'Faculty Hiring', description: 'Recruitment support for professors, lecturers, and specialist educators.', badge: 'Academic' },
  { title: 'Recruitment Solutions', description: 'Flexible engagement models for short-term and long-term hiring needs.', badge: 'Flexible' },
  { title: 'Talent Acquisition', description: 'Broader talent planning for education companies and service providers.', badge: 'People' },
]

export default function Services() {
  return (
    <div className="pb-16">
      <h1 className="sr-only">Education Recruitment Services | EdTaLink</h1>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Services" title="Premium services for ambitious education organizations" description="From executive hiring to early-career programs, our services are designed for precision and impact." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              <img src={servicesVisual} alt="EdTaLink recruitment consultation for education organizations" width="900" height="600" loading="lazy" className="h-full min-h-[320px] w-full object-cover" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
