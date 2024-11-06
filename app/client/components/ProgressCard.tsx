import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Progress } from '../types/progress'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function ProgressCard({
  course_id,
  title,
  timeInMins,
  chef,
  progress,
  image,
}: Progress) {
  const formatTime = (mins: number) => {
    if (mins < 60) return `${mins} Mins`
    const hours = Math.floor(mins / 60)
    const minutes = mins % 60
    return `${hours} Hrs ${minutes} Mins`
  }

  const getStatus = (progress: number) => {
    if (progress === 100) return 'Cooked'
    if (progress > 0) return 'Cooking'
    return 'Start Cook'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Cooked':
        return 'text-green-500 border-green-500'
      case 'Cooking':
        return 'text-[#FE3511] border-[#FE3511]'
      case 'Start Cook':
        return 'text-[#FE3511] border-[#FE3511]'
      default:
        return 'text-[#FE3511] border-[#FE3511]'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-gradient-to-r from-[#22c55e] to-[#16a34a]'
    if (progress > 0) return 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'
    return 'bg-gray-200'
  }

  const status = getStatus(progress)

  // const slug = title
  //   .toLowerCase() 
  //   .replace(/[^a-z0-9\s-]/g, '')
  //   .trim()
  //   .replace(/\s+/g, '-')
  //   .replace(/--+/g, '-')

  return (
    <Link href={`/client/my-learning/${course_id}`}>
    {/* <Link href={`/client/my-learning/${slug}`}> */}
    <div className="relative z-10 p-5 pr-7 border rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
      <div className="flex gap-4">
        <div className="relative w-28 h-28 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1 text-gray-600">
              <ClockIcon className="w-5 h-5 text-[#FE3511]" />
              <p className="font-semibold text-black">{formatTime(timeInMins)}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden">
                <Image
                  src={chef.image}
                  alt="chef"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-gray-500">{chef.name}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex flex-row items-center space-x-1">
              <p className="font-semibold">{progress}%</p>
              <p className="text-sm font-semibold text-gray-500 pl-1">
                {progress === 100 ? 'Completed' : 'Not Completed'}
              </p>
            </div>
          </div>
          <div className="flex-1 h-2 bg-gray-100 rounded-full">
            <div
              className={`h-full rounded-full transition-all duration-300 ${getProgressColor(
                progress
              )}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="absolute top-1/3 right-7">
          <button
            className={`px-8 py-2 font-semibold border rounded-full ${getStatusColor(
              status
            )}`}
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  </Link>
  )
}