'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Course } from '../types/courses'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { useRouter } from 'next/navigation'
import { courses as fullmockdata } from '../data/full-mock-data'
import { useAuthContext } from '@/app/contexts/authcontext'

const courses: Course[] = [...fullmockdata]

export default function Navbar() {
  const authcontextvalue = useAuthContext()

  const logout = () => authcontextvalue.setIsAuthenticated(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false)
  const [searchDropdownOpen, setSearchDropdownOpen] = useState<boolean>(false)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses)
  const router = useRouter()

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prevState) => !prevState)
  }

  const handleSearchFocus = () => {
    setSearchDropdownOpen(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const formattedSearchTerm = searchTerm.replace(/ /g, '-')
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
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.chef.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [])

  useEffect(() => {
    const results = filterCourses(searchTerm)
    setFilteredCourses(results)
  }, [searchTerm, filterCourses])

  return (
    <nav className="flex items-center justify-between bg-white py-[15px]">
      <div className="px-12">
        <Link href="/client/home">
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
        {authcontextvalue?.isAuthenticated ? (
          <>
            <NavLink href="/client/home">Home</NavLink>
            <NavLink href="/client/my-learning">My Learning</NavLink>
            <NavLink href="/client/video">Video</NavLink>
            <NavLink href="/client/group">Group</NavLink>
            <NavLink href="/client/private">Private</NavLink>
          </>
        ) : (
          <>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/my-learning">My Learning</NavLink>
            <NavLink href="/video">Video</NavLink>
            <NavLink href="/group">Group</NavLink>
            <NavLink href="/private">Private</NavLink>
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
        {authcontextvalue?.isAuthenticated ? (
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
                  <button onClick={logout} className="w-full">
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-red-600 text-white bg-red-500 rounded-b-md"
                      role="menuitem"
                    >
                      <p className="flex justify-start">Log Out</p>
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center px-6">
            <NavLink href="/client/login">Login</NavLink>
            <NavLink href="/client/sign-up">Sign Up</NavLink>
          </div>
        )}
      </div>
      {searchTerm && (
        <div
          className="absolute top-14 right-[210px] z-30 border-2 border-red-400 mt-1 bg-white rounded-xl shadow-lg w-[530px] 2xl:right-[575px]"
          role="listbox"
          id="search-results"
        >
          {filteredCourses.slice(0, 3).length > 0 ? (
            filteredCourses.slice(0, 3).map((course) => (
              <Link
                key={course.course_id}
                href={`/client/video/course-detail/${encodeURIComponent(
                  course.course_id
                )}`}
                role="option"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    window.location.href = `/client/video/course-detail/${encodeURIComponent(
                      course.course_id
                    )}`
                  }
                }}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                  <div className="ml-3">
                    <h2 className="font-semibold">{course.title}</h2>
                    <p className="text-gray-500">{course.chef}</p>
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
