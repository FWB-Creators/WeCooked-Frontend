import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarBefore() {
  return (
    <nav className="flex items-center justify-between bg-white py-6 shadow-xl">
      <div className="px-12">
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
      <div className="flex items-center px-6">
        <Link href="/">
          <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            Home
          </p>
        </Link>
        <Link href="/client/my-learning">
          <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            My Learning
          </p>
        </Link>
        <Link href="/client/video">
          <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            Video
          </p>
        </Link>
        <Link href="/client/group">
          <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            Group
          </p>
        </Link>
        <Link href="/client/private">
          <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            Private
          </p>
        </Link>
      </div>
        <div className="relative">
          <input
            type="text"
            className="border border-[#FE3511] rounded-lg w-[530px] pl-10 pr-3 outline-none"
          />
          <MagnifyingGlassIcon
            className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FE3511] pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center px-6">
          <Link href="/client/login">
            <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
              Login
            </p>
          </Link>
          <Link href="/client/sign-up">
            <p className="font-semibold px-4 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
              Sign Up
            </p>
          </Link>
        </div>
    </nav>
  )
}