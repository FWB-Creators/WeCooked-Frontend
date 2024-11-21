import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { courses } from '../../data/advert'

export default function AdvertPage() {
  const course = courses[0]
  return (
    <div className="min-h-[800px] relative w-full flex flex-col items-center">
      <div className="absolute left-20 top-36 z-10 w-1/2">
        <h1 className="py-1.5 text-6xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Unlock the Secret to the Perfect {course.courseTitle}
        </h1>
        <p className="text-xl max-w-2xl pt-12">
          Discover the techniques behind creating an unforgettable pork chop
          steak with just a handful of ingredients: premium pork chop, aromatic
          garlic, fresh rosemary, rich olive oil, and freshly cracked black
          pepper. Elevate your cooking skills as you learn to master the art of
          achieving a succulent, flavor-packed steak with a golden crust and
          tender, juicy interior.
        </p>
        <div className="flex items-center pt-8">
          <div className="flex items-center rounded-full w-11 h-11">
            <Image
              src={course.chefImage}
              alt="Profile picture of chef"
              priority
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="px-2 text-lg">Instructor:</p>
          <p className="text-lg underline underline-offset-4">
            {course.courseChef}
          </p>
        </div>
        <div className="flex space-x-3 py-8">
          <button
            className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
            aria-label="View more details"
            tabIndex={0}
          >
            {course.courseCategory}
          </button>
        </div>
        <div className="flex">
          <Link
            href={`/unsigned/group/course-detail/${course.courseId}`}
            className="px-7 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            role="button"
            aria-label="Start cooking pork chop steak course"
          >
            Let&apos;s Cook
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-20 -z-10 w-[45%]">
        <Image
          src="/images/plate-grilled-steak.png"
          alt="Cooked Image"
          width={400}
          height={400}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  )
}
