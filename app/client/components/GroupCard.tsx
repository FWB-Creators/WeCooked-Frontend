import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Group } from '../types/group'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function GroupCard({
  course_id,
  title,
  date,
  description,
  image,
}: Group) {
  // const slug = title
  //   .toLowerCase()
  //   .replace(/[^a-z0-9\s-]/g, '')
  //   .trim()
  //   .replace(/\s+/g, '-')
  //   .replace(/--+/g, '-')

  return (
    <Link href={`/client/my-learning/${course_id}`}>
      {/* <Link href={`/client/my-learning/${slug}`}> */}
      <div className="relative p-5 pr-7 border rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <div className="flex gap-4">
          <div className="relative w-28 h-28 rounded-lg overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {title}
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-gray-600">
                <CalendarIcon className="w-5 h-5 text-[#FE3511]" />
                <p className="font-semibold text-black">{date}</p>
              </div>
              <div className="flex items-center gap-2"></div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row items-center space-x-1">
                <p className="font-semibold">{description}</p>
              </div>
            </div>
          </div>
          <div className="absolute top-14 right-7 text-[#FE3511]">
            <button className="px-8 py-2 font-semibold border border-[#FE3511] rounded-full">
              See Detail
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}