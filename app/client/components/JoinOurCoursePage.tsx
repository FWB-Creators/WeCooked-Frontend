import React from 'react'
import Image from 'next/image'
import { StarIcon, UserGroupIcon, BookOpenIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { reviews } from '../data/reviewer'
import { CourseStats } from '../types/coursestat'

export default function JoinOurCoursePage() {
  const stats: CourseStats = {
    rating: 4.5,
    totalReviews: 100,
    completions: 10000,
    ingredients: 1800,
    enrolled: 11000,
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) =>
        index < rating ? (
          <StarSolid key={index} className="w-5 h-5 text-green-500" />
        ) : (
          <StarIcon key={index} className="w-5 h-5 text-gray-300" />
        )
      )
  }

  return (
    <div className="flex justify-center items-center flex-col p-16">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text mb-4">
        Join Our Course!
      </h1>
      <p className="text-center text-gray-700 my-6 max-w-7xl">
        Students love our course, praising Chef’s easy-to-follow guidance and
        delicious results. With rave reviews and a fun learning environment,
        this course is perfect for anyone looking to elevate their cooking
        skills. Discover the secrets to mouthwatering dishes that will impress
        your family and friends!
      </p>
      <div className="grid grid-cols-4 gap-8 mb-14">
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-10">
          <div className="flex items-center">
            <StarIcon className="w-7 h-7 text-[#FE3511] mr-4" />
            <div>
              <div className="flex flex-row items-center">
                <div className="text-2xl font-bold">{stats.rating}</div>
                <StarSolid className="pl-1 pt-1 w-6 h-6 text-green-500" />
              </div>
              <div className="text-gray-500">
                ({stats.totalReviews} reviews)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-10">
          <div className="flex items-center">
            <BookOpenIcon className="w-7 h-7 text-[#FE3511] mr-4" />
            <div>
              <div className="text-2xl font-bold">
                {stats.completions / 1000}K+
              </div>
              <div className="text-gray-500">Completed Course</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-10">
          <div className="flex items-center">
            <ShoppingBagIcon className="w-7 h-7 text-[#FE3511] mr-4" />
            <div>
              <div className="text-2xl font-bold">
                {stats.ingredients / 1000}K+
              </div>
              <div className="text-gray-500">Ingredients Delivered</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-10">
          <div className="flex items-center">
            <UserGroupIcon className="w-7 h-7 text-[#FE3511] mr-4" />
            <div>
              <div className="text-2xl font-bold">
                {stats.enrolled / 1000}K+
              </div>
              <div className="text-gray-500">Enrolled</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-left w-full text-3xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text mb-8 mt-12">
        Why people choose this course
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Image
                src={review.imageSrc}
                alt={review.name}
                className="rounded-full mr-3"
                width={40}
                height={40}
              />
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className="text-gray-700">&quot;{review.comment}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  )
}