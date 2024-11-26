import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CourseDetailFirstPage() {
  return (
    <div className="min-h-[800px] relative w-full flex flex-col items-center">
      <div className="absolute left-20 top-28 z-10 max-w-[45%]">
        <h1 className="py-1.5 text-6xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          How to Make Classic Carbonara
        </h1>
        <p className="text-xl max-w-2xl pt-12">
          Master the art of authentic Italian carbonara using just five
          ingredients: spaghetti, eggs, Pecorino Romano, guanciale, and black
          pepper. Learn key techniques to create a creamy, flavorful dish
          without cream, perfecting the balance of rich sauce and crispy
          guanciale.
        </p>
        <div className="flex items-center pt-8">
          <div className="flex items-center rounded-full w-11 h-11">
            <Image
              src="/images/chef.png"
              alt="Profile picture of chef"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="px-2 text-lg">Instructor:</p>
          <p className="text-lg underline underline-offset-4">
            Chief Sieng Utahnamnon
          </p>
        </div>
        <div className="flex space-x-3 py-8">
          <button
            className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
            aria-label="View more details"
            tabIndex={0}
          >
            Italian
          </button>
          <button
            className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
            aria-label="View more details"
            tabIndex={0}
          >
            Pasta
          </button>
          <button
            className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
            aria-label="View more details"
            tabIndex={0}
          >
            Authentic
          </button>
        </div>
        <div className="flex">
        <Link href="/client/login">
          <button className="px-8 py-2.5 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Let&apos;s Cook
          </button>
        </Link>
        </div>
      </div>
      <div className="absolute right-8 top-20 z-10 w-[45%]">
        <Image
          src="/images/pastadish.png"
          alt="Cooked Image"
          width={750}
          height={750}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}