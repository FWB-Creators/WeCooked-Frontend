'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { courses as popularCourses } from '../data/most-popular-course';
import { courses as newCourses } from '../data/new-course';
import { courses as topCourses } from '../data/top-course';
import { courses as personalCourses } from '../data/personal-course';
import { courses as recentlyCourses } from '../data/recently-course';
import { courses as recommendCourses } from '../data/recommended-for-you';

interface Course {
  course_id: number,
  title: string,
  cuisine: string,
  price: number,
  currency: string,
  rating: number,
  chef: string,
  imageSrc: string,
  chefImageUrl: string,
}

const courses = [...popularCourses, ...newCourses, ...topCourses, ...personalCourses, ...recentlyCourses, ...recommendCourses];

export default function NavbarBefore() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState<boolean>(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchFocus = () => {
    setSearchDropdownOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const formattedSearchTerm = searchTerm.replace(/ /g, '-');
      window.location.href = `/client/video/search/${formattedSearchTerm}`;
    }
  };

  const filterCourses = useCallback((searchTerm: string) => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.chef.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, []);

  useEffect(() => {
    const results = filterCourses(searchTerm);
    setFilteredCourses(results);
  }, [searchTerm, filterCourses]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node) &&
        searchRef.current && !searchRef.current.contains(event.target as Node)
      ) {
        setSearchDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <NavLink href="/my-learning">My Learning</NavLink>
        <NavLink href="/video">Video</NavLink>
        <NavLink href="/group">Group</NavLink>
        <NavLink href="/private">Private</NavLink>
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
      <div className="relative" ref={searchRef}>
        <input
          type="text"
          aria-label="Search"
          aria-expanded={searchDropdownOpen}
          aria-controls="search-results"
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
        {searchDropdownOpen && searchTerm && (
          <div
            id="search-results"
            role="listbox"
            className="absolute top-7 right-0 z-30 border-2 border-red-400 mt-1 bg-white rounded-xl shadow-lg w-[530px]"
          >
            {filteredCourses.slice(0, 3).length > 0 ? (
              filteredCourses.slice(0, 3).map((course) => (
                <Link
                  href={`/client/video/course-detail/${encodeURIComponent(course.course_id)}`}
                  key={course.course_id}
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
      </div>
      <div className="flex items-center px-6">
        <NavLink href="/client/login">Login</NavLink>
        <NavLink href="/client/sign-up">Sign Up</NavLink>
      </div>
    </nav>
  );
}
