import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/client/my-learning">My Learning</NavLink>
        <NavLink href="/client/video">Video</NavLink>
        <NavLink href="/client/group">Group</NavLink>
        <NavLink href="/client/private">Private</NavLink>
      </div>
        <div className="relative">
          <input
            type="text"
            aria-label="Search"
            className="border border-[#FE3511] rounded-lg w-[530px] pl-10 pr-3 outline-none"
          />
          <MagnifyingGlassIcon
            className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FE3511] pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center px-6">
        <NavLink href="/client/login">Login</NavLink>
        <NavLink href="/client/sign-up">Sign Up</NavLink>
      </div>
    </nav>
  )
}