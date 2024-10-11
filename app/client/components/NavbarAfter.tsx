"use client";
import { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarAfter() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="flex items-center justify-between bg-white py-[15px] shadow-xl">
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
      <div className="flex items-center px-5">
        <Link href="/client/home">
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
        <Link href="/client/notification">
          <Image
            src="/svg/Bell.svg"
            alt="Bell"
            width={25}
            height={25}
            className="cursor-pointer mx-3"
          />
        </Link>
        <Link href="/client/setting">
          <Image
            src="/svg/Cog.svg"
            alt="Settings"
            width={25}
            height={25}
            className="cursor-pointer mx-3"
          />
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            className="rounded-full border border-[#FE3511] w-11 h-11 mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:border-[#F0725C]"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={45}
              height={45}
              className="rounded-full"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 z-20 mt-2 w-36 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link href="/client/profile" className="block px-4 py-2 hover:bg-gray-100">
                View Profile
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-red-600 text-white bg-red-500 rounded-b-md">
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}