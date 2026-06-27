import SharedFormShell from '../../components/Forms/SharedFormShell'
import CtaSection from '../../components/CTA/CtaSection'
import { submitRecruitment } from '../../services/recruitmentService'

const fields = [
  { label: 'Organization Name', name: 'organization', type: 'text' },
  { label: 'Contact Person', name: 'contactPerson', type: 'text' },
  { label: 'Designation', name: 'designation', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Number Of Positions', name: 'positions', type: 'number' },
  { label: 'Location', name: 'location', type: 'text' },
  { label: 'Requirement Details', name: 'details', type: 'textarea' },
]

export default function RecruitmentRequirement() {
  const handleSubmit = async (formData) => {
    try {
      const response = await submitRecruitment(formData)
      return response
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to submit recruitment requirement.'
      throw new Error(message)
    }
  }

  return (
    <div className="pb-16">
      <h1 className="sr-only">Faculty & Education Hiring Solutions | EdTaLink</h1>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SharedFormShell title="Recruitment requirement" description="Tell us about the role or team you are building, and we will help shape the next step with a premium advisory approach." fields={fields} submitLabel="Send Requirement" onSubmit={handleSubmit} />
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
