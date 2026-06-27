export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment} gap-3`}>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#2563EB]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">{title}</h2>
      <div className={`mt-1 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#F59E0B] ${align === 'left' ? '' : 'mx-auto'}`} />
      <p className="max-w-2xl text-base leading-8 text-[#475569]">{description}</p>
    </div>
  )
}
