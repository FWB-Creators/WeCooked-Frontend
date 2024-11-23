'use client'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'

export default function GroupCancelPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen animate-fadeIn">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-24 w-full m-10 h-5/6">
        <div className="flex justify-center mb-3">
          <div className="relative w-24 h-24 mb-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full"></div>
            <XMarkIcon className="w-24 h-24 text-white relative z-10" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold my-2">Payment Unsuccessful</h1>
          <h2 className="text-5xl font-bold my-3">
            We&apos;re sorry! Your payment was not successful.
          </h2>
          <p className="text-[#1A1B22] mt-12 mb-20 font-medium text-center">
            Please double-check your payment details or try using a different
            payment method. If the issue persists, feel free to reach out to our
            customer support team for assistance. Thank you for your patience,
            and we look forward to serving you soon!
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
