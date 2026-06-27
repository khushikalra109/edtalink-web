import { useId, useState } from 'react'

export default function SharedFormShell({ title, description, fields, submitLabel, onSubmit }) {
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const formIdPrefix = useId()

  const handleChange = (e) => {
    const { name, type } = e.target
    const value = type === 'file' ? e.target.files?.[0] || null : e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (feedback) setFeedback(null)
  }

  const validateForm = () => {
    const requiredFields = fields.filter((field) => field.type !== 'file' || field.name === 'resume')
    const missing = requiredFields.filter((field) => {
      const value = formData[field.name]
      return value === undefined || value === null || String(value).trim() === ''
    })

    if (missing.length) {
      throw new Error('Please fill in all required fields before submitting.')
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(String(formData.email))) {
      throw new Error('Please enter a valid email address.')
    }

    if (formData.phone && String(formData.phone).replace(/\D/g, '').length < 10) {
      throw new Error('Please enter a valid phone number.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    try {
      validateForm()
      setIsSubmitting(true)
      setFeedback(null)
      const response = await onSubmit?.(formData)

      if (response?.success === false) {
        throw new Error(response.message || 'Submission failed. Please try again.')
      }

      setFeedback({ type: 'success', message: response?.message || 'Form submitted successfully.' })
      setFormData({})
      e.target.reset()
    } catch (error) {
      setFeedback({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[2rem] border border-[#E2E8F0] bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
          Secure submission
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-[#0F172A] sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-7 text-[#475569] sm:text-base">{description}</p>
      </div>

      {feedback ? (
        <div role="status" aria-live="polite" className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${feedback.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
          {feedback.message}
        </div>
      ) : null}

      <form className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5" onSubmit={handleSubmit} noValidate>
        {fields.map((field) => {
          const inputId = `${formIdPrefix}-${field.name}`
          const autoComplete = field.type === 'email' ? 'email' : field.type === 'tel' ? 'tel' : field.name === 'name' || field.name === 'contactPerson' || field.name === 'organization' ? 'organization' : field.name === 'currentCity' || field.name === 'preferredCity' || field.name === 'location' ? 'address-level2' : undefined

          return (
            <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
              <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-[#0F172A]">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={inputId}
                  name={field.name}
                  rows="4"
                  required={field.type !== 'file'}
                  aria-required="true"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none shadow-sm transition focus:border-[#2563EB] focus:bg-white"
                />
              ) : field.type === 'select' ? (
                <select
                  id={inputId}
                  name={field.name}
                  required
                  aria-required="true"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                >
                  <option value="">Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === 'file' ? (
                <input
                  id={inputId}
                  type="file"
                  name={field.name}
                  required
                  aria-required="true"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm shadow-sm"
                />
              ) : (
                <input
                  id={inputId}
                  type={field.type || 'text'}
                  name={field.name}
                  required
                  aria-required="true"
                  autoComplete={autoComplete}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#1E88E5]"
                />
              )}
            </div>
          )
        })}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}
