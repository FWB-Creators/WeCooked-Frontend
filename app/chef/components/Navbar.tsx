'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/app/contexts/authcontext'


/**
 * Custom hook to manage authentication state in localStorage.
 * Wrapped in useEffect to prevent SSR issues with Netlify.
 * @returns {string | null} The authentication state
 */
export const AuthLocal = (): string | null => {
  const [authLocalState, setAuthLocalState] = useState<string | null>(null)

  useEffect(() => {
    const AuthLocalState = localStorage.getItem('isAuthenticated')
    setAuthLocalState(AuthLocalState)
  }, [])

  return authLocalState
}

export default function Navbar() {
  const authcontextvalue = useAuthContext()

  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false)
  const userDropdownRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const logout = () => {
    authcontextvalue.setIsAuthenticated(false)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated')
    }
    router.push('/')
  }

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prevState) => !prevState)
  }

  return (
    <nav className="flex items-center justify-between bg-white py-4 shadow-lg">
      <div className="flex items-center">
        <div className="px-12">
          <Link href="/chef/course">
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
            <>
              <NavLink href="/chef/course">Course</NavLink>
              <NavLink href="/chef/workshop">Workshop</NavLink>
              <NavLink href="/chef/tutorial">Tutorial</NavLink>
            </>
        </div>
      </div>
      <div>
          <div className="flex items-center px-6">
            <Link href="/client/notification" aria-label="Notifications">
              <Image
                src="/svg/Bell.svg"
                alt="Bell"
                width={25}
                height={25}
                className="cursor-pointer mx-3 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="/client/setting">
              <Image
                src="/svg/Cog.svg"
                alt="Setting"
                width={25}
                height={25}
                className="cursor-pointer mx-3 hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="flex items-center relative" ref={userDropdownRef}>
              <button
                className="rounded-full border border-[#FE3511] w-11 h-11 mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:border-[#F0725C]"
                onClick={toggleUserDropdown}
                aria-label="User menu"
                aria-haspopup="true"
                aria-expanded={userDropdownOpen}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </button>
              {userDropdownOpen && (
                <div
                  className="absolute top-12 right-2 z-20 mt-2 w-36 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <Link
                    href="/client/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    role="menuitem"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 w-full text-left hover:bg-red-600 text-white bg-red-500 rounded-b-md"
                    role="menuitem"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
      </div>
    </nav>
  )
}
