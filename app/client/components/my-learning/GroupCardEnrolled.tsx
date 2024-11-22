import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Group } from '../../types/group'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function GroupCardEnrolled({
  groupId,
  groupTitle,
  groupDetail,
  groupDate,
  groupPicture,
  groupStatus,
}: Group) {
  if (!groupStatus) return null

  const date = typeof groupDate === 'string' ? new Date(groupDate) : groupDate;
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return (
    <Link href={`/client/group-learning/${groupId}`}>
      <div className="relative z-10 p-5 pr-7 rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <div className="flex gap-4">
          <div className="relative w-28 h-28 rounded-lg overflow-hidden">
            <Image
              src={groupPicture}
              alt={groupTitle}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {groupTitle}
            </h3>
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-5 h-5 text-[#FE3511]" />
                <p className="font-semibold text-black">
                  {formattedDate}, at {formattedTime}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row items-center space-x-1">
                <p className="font-semibold">{groupDetail}</p>
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