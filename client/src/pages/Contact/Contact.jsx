import SharedFormShell from '../../components/Forms/SharedFormShell'
import SocialLinks from '../../components/Common/SocialLinks'
import CtaSection from '../../components/CTA/CtaSection'
import { submitContact } from '../../services/contactService'

const officeVisual = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'

const fields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Message', name: 'message', type: 'textarea' },
]

export default function Contact() {
  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact(formData)
      return response
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send message.'
      throw new Error(message)
    }
  }

  return (
    <div className="pb-16">
      <h1 className="sr-only">Contact EdTaLink</h1>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E88E5]">Connect with us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Follow EdTaLink and stay connected</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">We are preparing our social presence and will share updates, insights, and collaboration opportunities soon.</p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
              <img src={officeVisual} alt="Professional EdTaLink office environment for education recruitment outreach" width="900" height="600" loading="lazy" className="h-56 w-full object-cover" />
            </div>
          </div>
          <SharedFormShell title="Contact us" description="Whether you are exploring a partnership, a hiring need, or a career move, we would love to hear from you." fields={fields} submitLabel="Send Message" onSubmit={handleSubmit} />
        </div>
      </section>
      <CtaSection />
    </div>
  )
}
