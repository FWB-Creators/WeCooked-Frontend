"use client";
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { courses as popularCourses } from '../data/most-popular-course';
import { courses as newCourses } from '../data/new-course';
import { courses as topCourses } from '../data/top-course';

const courses = [...popularCourses, ...newCourses, ...topCourses];

export default function NavbarBefore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

  const handleSearchFocus = () => {
    setSearchDropdownOpen(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setSearchDropdownOpen(false);
    }, 100);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase()) ||
      course.chef.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCourses(results);
  };

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
      <div className="relative" onBlur={handleSearchBlur}>
        <input
          type="text"
          aria-label="Search"
          className="border border-[#FE3511] rounded-lg w-[530px] pl-10 pr-3 outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
        />
        <MagnifyingGlassIcon
          className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FE3511] pointer-events-none"
          aria-hidden="true"
        />
        {searchDropdownOpen && searchTerm && (
          <div className="absolute top-7 right-0 z-30 border-2 border-red-400 mt-1 bg-white rounded-xl shadow-lg w-[530px]">
            {filteredCourses.length > 0 ? (
              filteredCourses.slice(0, 3).map((course, index) => (
                <Link 
                  href={`/client/video/search/${encodeURIComponent(course.title.replace(/ /g, '-'))}`} 
                  key={index}
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