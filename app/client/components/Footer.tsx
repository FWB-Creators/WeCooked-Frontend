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
      <div className="flex justify-between w-full p-8 px-28">
        <div>
          <Link href="/">
            <Image
              src="/svg/WecookedLogo.svg"
              alt="WeCooked Logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex gap-x-6">
          {footer_elements.map((item, index) => (
            <ul
              key={index}
              className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to-[#F0725C]"
            >
              {item}
            </ul>
          ))}
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/">
            <Image
              src="/svg/fb-ic.svg"
              alt="Facebook icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/tweet-ic.svg"
              alt="twitter icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/insta-ic.svg"
              alt="instagram icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/google-ic.svg"
              alt="Google icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-16">Copyright ©2021 Seven spices</div>
    </div>
  )
}
