import SharedFormShell from '../../components/Forms/SharedFormShell'
import CtaSection from '../../components/CTA/CtaSection'
import { submitInternship } from '../../services/internshipService'

const fields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'College', name: 'college', type: 'text' },
  { label: 'Course', name: 'course', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Resume Upload', name: 'resume', type: 'file' },
]

export default function Internship() {
  const handleSubmit = async (formData) => {
    try {
      const response = await submitInternship(formData)
      return response
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to submit internship application.'
      throw new Error(message)
    }
  }

  return (
    <div className="pb-16">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SharedFormShell title="Apply for internship" description="We are building a thoughtful internship pipeline for students and emerging professionals across education-driven sectors." fields={fields} submitLabel="Submit Internship Request" onSubmit={handleSubmit} />
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
