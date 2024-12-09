import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarRating } from '../StarRating'
import { Course } from '../../types/courses'

interface CompleteCourseCardProps {
  course: Course
}

export default function CompleteCourseCard({
  course,
}: CompleteCourseCardProps) {
  return (
    <Link href={`/client/my-learning/${course.courseId}`}>
      <div className="relative z-10 p-5 pr-7 rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] shadow-lg">
        <div className="flex gap-4">
          {/* Course Image */}
          <div className="relative w-28 h-28 rounded-lg overflow-hidden">
            <Image
              src={course.courseImage}
              alt={course.courseTitle}
              fill
              className="object-cover"
            />
          </div>

          {/* Course Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {course.courseTitle}
            </h3>
            <div className="flex items-center gap-4 mb-2">
              {/* Tags */}
              <div className="flex justify-center items-center text-gray-600">
                <div className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform">
                  {course.courseCategory}
                </div>
              </div>
            </div>

            {/* Chef Info */}
            <div className="flex items-center mb-2">
              <div className="flex flex-row items-center space-x-1">
                <div className="relative w-7 h-7 rounded-full overflow-hidden">
                  <Image
                    src={course.chefImage}
                    alt={`Chef ${course.chefName}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-500">{course.chefName}</p>
                <StarRating reviewRating={course.reviewRating} />
              </div>
            </div>
          </div>

          {/* Completion Info */}
          <div className="absolute bottom-1/4 right-7 text-gray-600">
            {/* Example: You can adjust how to display completion dates */}
            21 September 2022
          </div>
        </div>
      </div>
    </Link>
  )
}
