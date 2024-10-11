'use client'
import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/client/login')
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen overflow-hidden animate-fadeIn">
      <div className="flex w-5/12 h-full relative">
        {/* Left Side Images */}
        <div className="absolute z-10 left-[-40px]">
          <Image src="/images/pasta.png" alt="Pasta" width={550} height={200} />
        </div>
        <div className="absolute right-[-30px] top-[-30px]">
          <Image src="/images/waffle.png" alt="Waffle" width={320} height={200} />
        </div>
        <div className="absolute z-10 bottom-0 left-[-300px]">
          <Image src="/images/steak.png" alt="Steak" width={650} height={400} />
        </div>
        <div className="absolute z-10 bottom-[-40px] right-[-45px]">
          <Image src="/images/burger.png" alt="Burger" width={400} height={200} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-white rounded-l-2xl p-40 w-7/12 h-full">
        <h1 className="text-4xl font-bold mb-12 text-center w-full">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1">First Name</p>
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>
            <div>
              <p className="mb-1">Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>
          </div>
          <div>
            <p className="mb-1">Email</p>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
            />
          </div>
          <div className="relative">
            <p className="mb-1">Password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
            />
            <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
              {showPassword ? (
                <EyeSlashIcon
                  className="h-6 w-6 text-[#697077] mt-7"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <EyeIcon
                  className="h-6 w-6 text-[#697077] mt-7"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-3 w-full rounded-lg text-white font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <div className="border-t-[1px] border-[#DDE1E6] mt-6 pt-4 text-center w-full">
          <Link href="/client/login">
            <p className="text-[#001D6C] hover:underline">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}