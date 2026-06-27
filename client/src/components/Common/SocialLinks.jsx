import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const getSocials = () => {
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || ''
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || ''
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || ''

  return [
    linkedInUrl
      ? {
          name: 'LinkedIn',
          href: linkedInUrl,
          icon: FiLinkedin,
          colorClass: 'hover:bg-[#0A66C2] hover:text-white',
        }
      : null,
    facebookUrl
      ? {
          name: 'Facebook',
          href: facebookUrl,
          icon: FiFacebook,
          colorClass: 'hover:bg-[#1877F2] hover:text-white',
        }
      : null,
    instagramUrl
      ? {
          name: 'Instagram',
          href: instagramUrl,
          icon: FiInstagram,
          colorClass: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white',
        }
      : null,
  ].filter(Boolean)
}

export default function SocialLinks({ className = '' }) {
  const socials = getSocials()

  if (!socials.length) return null

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {socials.map(({ name, href, icon: Icon, colorClass }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className={`group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${colorClass}`}
        >
          <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  )
}
