'use client'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/16/solid'

export default function GroupThankYouPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen animate-fadeIn">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-24 w-full m-10 h-5/6">
        <div className="flex justify-center mb-3">
          <div className="relative w-24 h-24 mb-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full"></div>
            <CheckIcon className="w-24 h-24 text-white relative z-10" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold my-2">Thank You</h1>
          <h2 className="text-5xl font-bold my-3">Your Purchase!</h2>
          <p className="text-[#1A1B22] mt-12 font-medium text-center">
            Thank you for choosing to buy ingredients from us! We&apos;re
            thrilled to be part of your culinary journey and are committed to
            providing you with high-quality ingredients for your cooking
            experience.Please check your inbox for a confirmation email with all
            the details. If you have any questions or need further assistance,
            don&apos;t hesitate to reach out through the contact information
            provided in the email.
          </p>
          <p className="text-[#1A1B22] mb-8 font-medium mt-4">
            Thank you for trusting us to bring the best ingredients to your
            kitchen!
          </p>
        </div>
        <Link href="/">
          <div className="px-16 py-3 text-white cursor-pointer bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Home
          </div>
        </Link>
      </div>
    </div>
  )
}
