import SectionTitle from '../../components/Common/SectionTitle'
import FaqList from '../../components/FAQ/FaqList'
import CtaSection from '../../components/CTA/CtaSection'

export default function FAQPage() {
  return (
    <div className="pb-16">
      <h1 className="sr-only">Frequently Asked Questions | EdTaLink</h1>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="FAQs" title="Answers to common questions" description="A concise overview of how EdTaLink functions as a premium recruitment bridge for the education ecosystem." />
          <div className="mt-10 max-w-4xl">
            <FaqList />
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
