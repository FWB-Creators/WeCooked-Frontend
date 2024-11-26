'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Course } from '../types/courses'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { useRouter } from 'next/navigation'
import { courses as fullmockdata } from '../data/full-mock-data'
import { useAuthContext } from '@/app/contexts/authcontext'

const courses: Course[] = [...fullmockdata]

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
  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'My Learning', path: '/my-learning' },
    { label: 'Course', path: '/video' },
    { label: 'Workshop', path: '/group' },
  ]
  const authcontextvalue = useAuthContext()
  const authLocalState = AuthLocal()

  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false)
  const [searchDropdownOpen, setSearchDropdownOpen] = useState<boolean>(false)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses)
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

  const handleSearchFocus = () => {
    setSearchDropdownOpen(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const formattedSearchTerm = encodeURIComponent(
        searchTerm.trim().replace(/ /g, '-')
      )
      router.push(`/client/video/search/${formattedSearchTerm}`)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false)
        setSearchDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const filterCourses = useCallback((searchTerm: string) => {
    return courses.filter(
      (course) =>
        course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.chefName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [])

  useEffect(() => {
    const results = filterCourses(searchTerm)
    setFilteredCourses(results)
  }, [searchTerm, filterCourses])

  return (
    <nav className="flex items-center justify-between bg-white py-4">
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
        {authcontextvalue?.isAuthenticated || authLocalState == 'true' ? (
          <>
            {navItems.map(({ label, path }) => (
              <NavLink key={path} href={`/client${path}`}>
                {label}
              </NavLink>
            ))}
          </>
        ) : (
          <>
            <NavLink href="/unsigned/home">Home</NavLink>
            <NavLink href="/client/login">My Learning</NavLink>
            <NavLink href="/unsigned/video">Course</NavLink>
            <NavLink href="/unsigned/group">Workshop</NavLink>
          </>
        )}
      </div>
      <div className="relative" ref={searchRef}>
        <span id="search-description" className="sr-only">
          Search for courses by title or chef name
        </span>
        <input
          type="text"
          aria-label="Search"
          aria-expanded={searchDropdownOpen}
          aria-controls="search-results"
          aria-describedby="search-description"
          className="border border-[#FE3511] rounded-lg w-[530px] pl-10 pr-3 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleSearchFocus}
          onKeyDown={handleKeyDown}
          role="combobox"
        />
        <MagnifyingGlassIcon
          className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FE3511] pointer-events-none"
          aria-hidden="true"
        />
      </div>
      <div>
        {authcontextvalue?.isAuthenticated || authLocalState == 'true' ? (
          <div className="flex items-center px-6">
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
        ) : (
          <div className="flex items-center px-[22px] py-2.5">
            <NavLink href="/client/login">Login</NavLink>
            <NavLink href="/client/sign-up">Sign Up</NavLink>
          </div>
        )}
      </div>
      {searchTerm && (
        <div
          className="absolute top-14 right-[236px] z-30 border-2 border-red-400 mt-1 bg-white rounded-xl shadow-lg w-[530px] 2xl:right-[575px]"
          role="listbox"
          id="search-results"
        >
          {filteredCourses.slice(0, 3).length > 0 ? (
            filteredCourses.slice(0, 3).map((course) => (
              <Link
                key={course.courseId}
                href={`/client/video/course-detail/${encodeURIComponent(
                  course.courseId
                )}`}
                role="option"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    router.push(
                      `/client/video/course-detail/${encodeURIComponent(
                        course.courseId
                      )}`
                    )
                  }
                }}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  <Image
                    src={course.courseImage}
                    alt={course.courseTitle}
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                  <div className="ml-3">
                    <h2 className="font-semibold">{course.courseTitle}</h2>
                    <p className="text-gray-500">{course.chefName}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </nav>
  )
}
