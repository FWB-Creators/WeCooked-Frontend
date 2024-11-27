'use client'
import Image from 'next/image'
import { EyeIcon, EyeSlashIcon, PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

export default function EditChefProfile() {
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  return (
    <div className="mt-6 mx-48 mb-16">
      <div className="relative flex justify-center items-center">
        {/* Profile Image Container */}
        <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
          <Image
            src="/images/chef.png"
            alt="Chef profile image"
            width={500}
            height={500}
          />
        </div>

        {/* Pencil Icon */}
        <div className="absolute bottom-1 right-[470px] flex justify-center items-center rounded-full w-9 h-9 bg-[#F2F4F8] border border-[#C1C7CD]">
          <PencilIcon className="text-[#C1C7CD] w-6 h-6" />
        </div>
      </div>

      <form>
        <div className="grid grid-cols-10 h-full mt-8">
          {/*left side input */}
          <div className="col-span-4 flex flex-col h-full">
            <div className="mb-4">
              <p className="mb-2">First Name</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Arm"
              ></input>
            </div>
            <div className="mb-4 ">
              <p className="mb-2">Last Name</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Rukkhim"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Gender</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Male"
              ></input>
            </div>
            <div className="relative mb-4">
              <p className="mb-2">Password</p>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Arm Rukkhim"
              ></input>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 -bottom-1 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6 text-[#697077]" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-[#697077]" />
                )}
              </button>
            </div>
            <div className="mb-4 ">
              <p className="mb-2">Experience</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Moo Deng Restaurant"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Specialties</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Thai Cuisine"
              ></input>
            </div>
          </div>

          {/*middle line*/}
          <div></div>
          <div className="flex justify center pt-8 mb-4">
            <div className="border-l border-[#808080]"></div>
          </div>

          {/* Right Side Input */}
          <div className="col-span-4 flex flex-col h-full">
            <div className="mb-4">
              <p className="mb-2">E-mail</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="arminwza007@gmail.com"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Phone</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="052-447-4872"
              ></input>
            </div>

            <div className="relative mb-4">
              <p className="mb-2">Confirm Password</p>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Arm Rukkhim"
              ></input>
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 -bottom-1 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-6 w-6 text-[#697077]" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-[#697077]" />
                )}
              </button>
            </div>
            <div className="flex flex-col h-full">
              <p className="mb-2">Bio</p>
              <textarea
                className="flex-grow px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none mb-4"
                placeholder="Chef Tong is a seasoned culinary expert specializing in the art of steak-making. With his unique techniques and high-quality ingredients, he brings out the best flavors in every cut. Join him to discover the secrets behind achieving a perfectly cooked"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-16 flex justify-end items-center gap-x-8">
        <Link
          href="/chef/profile"
          className="text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to-[#F0725C] font-semibold"
        >
          Cancel
        </Link>
        <Link
          href="/chef/profile"
          className="flex items-center justify-center rounded-lg shadow-lg w-24 h-12 bg-gradient-to-t from-[#FE3511] to-[#F0725C] text-white font-semibold "
        >
          Save
        </Link>
      </div>
    </div>
  )
}
