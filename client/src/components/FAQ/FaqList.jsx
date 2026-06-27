import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Do you provide direct hiring services?',
    answer: 'Yes. We design end-to-end recruitment solutions for executive, faculty, and specialist roles across education-driven organizations.',
  },
  {
    question: 'Can candidates directly apply to companies through EdTaLink?',
    answer: 'No. EdTaLink acts as a trusted bridge and advisor between organizations and talent, without direct application workflows.',
  },
  {
    question: 'How do you tailor recruitment for education organizations?',
    answer: 'We study the role, organizational culture, and hiring urgency before building a focused shortlist and strategy.',
  },
  {
    question: 'Do you work with both large institutions and growing teams?',
    answer: 'Yes. Our approach scales from individual leadership searches to broader multi-hiring initiatives.',
  },
  {
    question: 'What kinds of roles do you typically support?',
    answer: 'We support academic leadership, faculty roles, operations, student success, edtech hiring, and specialist functions.',
  },
  {
    question: 'How quickly can a hiring engagement begin?',
    answer: 'We can usually start once the role brief, expectations, and timeline are aligned with your team.',
  },
  {
    question: 'Do you help with employer branding or candidate positioning?',
    answer: 'Yes. We help shape employer messaging and candidate experience so your hiring narrative stays strong.',
  },
  {
    question: 'Is the process confidential?',
    answer: 'Absolutely. We handle sensitive searches with discretion and maintain trust throughout the engagement.',
  },
  {
    question: 'How can I start a conversation with EdTaLink?',
    answer: 'You can reach out through the contact form or the contact page to schedule a consultation.',
  },
]

export default function FaqList() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = activeIndex === index
        return (
          <div key={item.question} className="rounded-[1.35rem] border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-[#2563EB]/40">
            <button className="flex w-full items-center justify-between text-left" onClick={() => setActiveIndex(isOpen ? -1 : index)}>
              <span className="text-lg font-semibold text-[#0F172A]">{item.question}</span>
              <FiChevronDown className={`h-5 w-5 text-[#2563EB] transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="mt-4 text-sm leading-7 text-[#475569]">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
