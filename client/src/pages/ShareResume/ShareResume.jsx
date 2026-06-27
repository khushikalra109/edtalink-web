import { FiAward, FiBriefcase, FiUserCheck, FiUsers } from 'react-icons/fi'
import { LuSparkles } from 'react-icons/lu'
import SharedFormShell from '../../components/Forms/SharedFormShell'
import CtaSection from '../../components/CTA/CtaSection'
import { submitResume } from '../../services/resumeService'

const fields = [
  { label: 'Full Name', name: 'name', type: 'text' },
  { label: 'Email Address', name: 'email', type: 'email' },
  { label: 'Contact Number', name: 'phone', type: 'tel' },
  { label: 'Current City', name: 'currentCity', type: 'text' },
  { label: 'Preferred City', name: 'preferredCity', type: 'text' },
  {
    label: 'Industry',
    name: 'industry',
    type: 'select',
    options: ['EdTech', 'Publication', 'Test Preparation', 'Study Abroad', 'School Supplies', 'LMS/ERP', 'College/University', 'Other'],
  },
  { label: 'Current Company Name', name: 'currentCompany', type: 'text' },
  { label: 'Current Designation', name: 'designation', type: 'text' },
  {
    label: 'Current Domain',
    name: 'domain',
    type: 'select',
    options: ['Sales', 'Marketing', 'Accounts', 'Finance', 'Operations', 'Counselling', 'Sales Coordination', 'Teaching', 'Administration', 'Others'],
  },
  { label: 'Total Work Experience', name: 'totalWorkExperience', type: 'text' },
  { label: 'Education Industry Experience', name: 'educationIndustryExperience', type: 'text' },
  { label: 'Number of Companies Served', name: 'companiesServed', type: 'text' },
  { label: 'Current Annual CTC', name: 'currentCTC', type: 'text' },
  { label: 'Expected Annual CTC', name: 'expectedCTC', type: 'text' },
  {
    label: 'Notice Period',
    name: 'noticePeriod',
    type: 'select',
    options: ['Immediate', '0-15 Days', '15-30 Days', '30-45 Days', '45+ Days'],
  },
  { label: 'Resume Upload', name: 'resume', type: 'file' },
]

const highlights = [
  { title: 'Premium Talent Matching', text: 'We connect professionals with high-growth roles in the education ecosystem.', icon: FiBriefcase },
  { title: 'Trusted by Recruiters', text: 'Your profile is reviewed by experienced partners with education-sector expertise.', icon: FiUsers },
  { title: 'Career Growth Support', text: 'We help you position your experience for the next strategic move.', icon: FiAward },
]

export default function ShareResume() {
  const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLSfUiUSanrYm0RwxFhsE1sy-IiJjHpqkkvdx_KCjyG41rJNEGA/viewform'

  const handleSubmit = async (formData) => {
    try {
      const response = await submitResume(formData)
      return response
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to submit resume.'
      throw new Error(message)
    }
  }

  return (
    <div className="pb-16">
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#1E88E5]">
              <LuSparkles className="h-4 w-4" />
              Join the EdTaLink Talent Network
            </div>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Become part of our growing database of education industry professionals.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Register your profile to unlock relevant recruitment opportunities, leadership conversations, and career growth support across the education ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#candidate-form" className="rounded-full bg-[#0D4C92] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(13,76,146,0.18)] transition hover:-translate-y-0.5 hover:bg-[#083866]">
                Register Now
              </a>
              {googleFormUrl ? (
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E88E5] hover:text-[#1E88E5]">
                  Submit via Google Form
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#0D4C92] via-[#1E88E5] to-[#00A8E8] p-6 text-white shadow-[0_30px_120px_rgba(13,76,146,0.24)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">Talent network</p>
                  <h2 className="mt-2 text-2xl font-semibold">Premium recruitment support</h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <LuSparkles className="h-7 w-7" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-sky-50/90">
                We create curated matches for professionals seeking growth in schools, EdTech, publishing, assessment, testing, and learning platforms.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#1E88E5]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="candidate-form" className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SharedFormShell
            title="Candidate Registration"
            description="Share your background with us and let our team understand how to support your next move in the education ecosystem."
            fields={fields}
            submitLabel="Submit Candidate Profile"
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#1E88E5]">
                <LuSparkles className="h-4 w-4" />
                Talent Network
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Join the EdTaLink Talent Network
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Want to increase your chances of getting matched with the right opportunity?
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Complete your detailed Candidate Profile to become part of the EdTaLink Talent Network. Our recruitment team will use your profile to match you with suitable openings across universities, colleges, schools, EdTech companies, publishers, study abroad organizations, and other education industry employers.
              </p>
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0D4C92] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(13,76,146,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#083866]">
                Complete Candidate Profile
              </a>
              <p className="mt-3 text-sm text-slate-500">
                It only takes 3–5 minutes to complete your professional profile.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-slate-50 p-6 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D4C92] text-white shadow-lg">
                <FiUserCheck className="h-7 w-7" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Tailored opportunities</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Receive recommendations that align with your experience, location, and career goals.</p>
                </div>
                <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Recruitment insights</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Share your preferred roles, industry preferences, and salary expectations for smarter matching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {googleFormUrl ? (
        <section className="px-4 py-2 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Prefer using Google Forms?</h2>
              <p className="mt-1 text-sm text-slate-600">You can also submit your details directly through our Google Form and we will follow up promptly.</p>
            </div>
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#0D4C92] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083866]">
              Submit via Google Form
            </a>
          </div>
        </section>
      ) : null}

      <CtaSection />
    </div>
  )
}
