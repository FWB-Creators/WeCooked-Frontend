'use client' //use state cannot run in server side
import Image from 'next/image'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
//import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const [Remember, setRemember] = useState(false)

  const toggleRemember = () => {
    setRemember((prev) => !prev)
  }

  return (
    <div className="grid grid-cols-3 animation h-screen overflow-hidden animate-fadeIn">
      <div className="col-span-2 object-fill">
        <Image
          className="absolute right-32 w-full h-screen"
          width={20}
          height={20}
          src="/images/svg/Login_pic.svg"
          alt="client login picture"
        />
      </div>
      <div className="bg-white z-10 rounded-2xl pt-20 flex flex-col">
        <div className="flex justify-center">
          <Image
            width={20}
            height={20}
            className="w-[171px] h-[120px]"
            src="/images/svg/Wecooked_logo.svg"
            alt="Wecooked logo"
          />
        </div>
        <div className="flex text-xl font-bold mt-14 ml-10">
          <div>Nice to see you again</div>
        </div>
        <div className="mt-6 ml-14 text-xs">Login</div>
        <input
          className="ml-10 mt-2 mr-12 bg-[#F2F4F8] rounded-[5px] py-3 px-4 outline-none shadow-md"
          type="email"
          placeholder="Email or phone number"
        ></input>
        <div className="mt-6 ml-14 text-xs">Password</div>
        <input
          className="ml-10 mt-2 mr-12 bg-[#F2F4F8] rounded-[5px] py-3 px-4 outline-none shadow-md"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          id="password"
        ></input>
        {/* eye icon for show/hide password */}
        <div className="absolute inset-y-0 right-16 top-[520px]">
          {showPassword ? (
            <EyeSlashIcon
              className="size-6 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeIcon
              className="size-6 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {/*Remember */}
        <div className="flex flex-row justify-between items-center mt-6 ml-10">
          <div
            onClick={toggleRemember}
            className={`flex h-5 w-10 rounded-full cursor-pointer border-[0.5px] border-[#E5E5E5] ${
              Remember
                ? 'items-center justify-start bg-[#F2F4F8]'
                : 'items-center justify-end bg-[#F0725C]'
            } p-[1px]`}
          >
            <div className="flex h-4 w-4 rounded-full bg-white"></div>
          </div>
          <div className="text-xs">Remember me</div>
          <div className="text-xs mr-12 ml-[96px] cursor-pointer hover:underline">
            <Link href="/client/login/forget-password">Forgot password?</Link>
          </div>
        </div>

        <div className="cursor-pointer py-3 px-4 items-center rounded-[5px] flex justify-center ml-10 mr-12 mt-6 font-bold text-[white] bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
          Login
        </div>
        <div className="ml-10 my-5 mr-12 bg-[#E5E5E5] h-[0.5px] "></div>
        {/*border gradient */}
        <div className="cursor-pointer flex justify-center ml-10 mr-12">
          <div className="w-80 h-10 rounded-[5px] bg-gradient-to-t from-[#FE3511] to bg-[#F0725C] p-[1px]">
            <div className="w-full h-full rounded-[4px] bg-white flex justify-center items-center gap-x-2">
              <Image
                width={20}
                height={20}
                src="/images/svg/Google.svg"
                alt="google logo"
              />
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to bg-[#F0725C]">
                Sign in with google
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-x-1 text-xs">
          Don`t have an account?
          <div className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-t from-[#FE3511] to bg-[#F0725C] hover:underline">
            <Link href="/client/sign-up">Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
