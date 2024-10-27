'use client'
import Image from 'next/image'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const togglePasswordVisibility = () => setShowPassword(prev => !prev)
  const toggleRemember = () => setRemember(prev => !prev)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="grid grid-cols-3 h-screen overflow-hidden animate-fadeIn">
      <div className="col-span-2 object-fill">
        <Image
          className="absolute right-32 w-full h-screen"
          width={20}
          height={20}
          src="/svg/Login_pic.svg"
          alt="client login picture"
        />
      </div>
      <div className="bg-white z-10 rounded-2xl pt-20 flex flex-col relative max-w-[500px]">
        <div className="absolute right-4 top-4">
          <Link href="/">
            <XMarkIcon className="w-6 h-6 text-[#F0725C] hover:text-[#FE3511] transition-colors cursor-pointer" />
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            width={20}
            height={20}
            className="w-[171px] h-[120px]"
            src="/svg/Wecooked_logo.svg"
            alt="Wecooked logo"
          />
        </div>
        <div className="px-10 w-full">
          <div className="text-2xl font-bold mt-14">
            <div>Nice to see you again</div>
          </div>
          <div className="mt-8">
            <p className="mb-1">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              type="email"
              placeholder="Email or phone number"
              required
            />
          </div>
          <div className="mt-6">
            <p className="mb-1">Password</p>
            <div className="relative w-full">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                required
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6 text-[#697077]" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-[#697077]" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex items-center gap-x-2">
              <div
                onClick={toggleRemember}
                className="relative h-6 w-11 rounded-full cursor-pointer border-[0.5px] border-[#E5E5E5] transition-colors duration-300 ease-in-out"
                style={{
                  backgroundColor: remember ? '#F0725C' : '#F2F4F8'
                }}
              >
                <div
                  className="absolute h-5 w-5 rounded-full bg-white top-[1px] transition-transform duration-300 ease-in-out"
                  style={{
                    transform: remember ? 'translateX(22px)' : 'translateX(1px)'
                  }}
                ></div>
              </div>
              <p className="text-sm">Remember me</p>
            </div>
            <div className="text-sm cursor-pointer hover:underline hover:text-[#F0725C]">
              <Link href="/client/login/forget-password">Forgot password?</Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-bold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Login
            </button>
          </form>
          <div className="my-6 bg-[#E5E5E5] h-[0.5px]"></div>
          <button className="w-full h-11 rounded-lg relative bg-gradient-to-t from-[#FE3511] to-[#F0725C] p-[1px] hover:shadow-md transition-shadow">
            <div className="w-full h-full rounded-lg bg-white flex justify-center items-center gap-x-2">
              <Image
                width={20}
                height={20}
                src="/svg/Google.svg"
                alt="google logo"
              />
              <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to-[#F0725C]">
                Sign in with Google
              </p>
            </div>
          </button>

          <div className="flex justify-center mt-6 gap-x-1 text-sm">
            <p>Don&apos;t have an account?</p>
              <Link 
                href="/client/sign-up"
                className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to-[#F0725C] hover:underline font-medium"
              >
                Sign up now
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}