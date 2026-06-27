export default function TrustCard({ title, description, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/8 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#2563EB] text-white shadow-lg shadow-[#2563EB]/10">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#475569]">{description}</p>
      </div>
    </div>
  )
}
