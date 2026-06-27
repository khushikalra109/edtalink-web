import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ title, description, badge, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/8 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex rounded-full bg-[#F8FAFC] px-3 py-1 text-sm font-semibold text-[#2563EB]">{badge}</div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-[#2563EB] shadow-sm">
            {Icon && <Icon className="h-5 w-5" />}
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#475569]">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition group-hover:gap-3">
          Learn more <FiArrowRight />
        </div>
      </div>
    </div>
  )
}
