import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footer_elements = [
    'About',
    'Terms & conditions',
    'Privacy Policy',
    'Contact',
  ]
  return (
    <div className="relative bg-white">
      <div className="flex justify-between w-full p-8">
        <div>
          <Link href="/">
            <Image
              src="/svg/WecookedLogo.svg"
              alt="WeCooked Logo"
              width={120}
              height={100}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex gap-x-6">
          {footer_elements.map((item, index) => (
            <ul
              key={index}
              className="duration-300 cursor-pointer hover:text-lg hover:text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to-[#F0725C]"
            >
              {item}
            </ul>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <Link href="/">
            <Image
              src="/svg/fb-ic.svg"
              alt="Facebook icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/tweet-ic.svg"
              alt="twitter icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/insta-ic.svg"
              alt="instagram icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/google-ic.svg"
              alt="Google icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-16">WeCooked</div>
    </div>
  )
}
