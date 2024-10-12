import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
        {children}
      </p>
    </Link>
  )
}
