import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Group } from '../../../types/group'
import { StarRating } from '../../StarRating'

export default function GroupCardUnenrolled({
  groupTitle,
  groupDetail,
  groupPrice,
  groupNumberofparticipants,
  groupDate: groupDateProp,
  groupCategory,
  groupPicture,
  chefImage,
  chefName,
  groupStatus,
  reviewRating,
}: Group) {
  if (groupStatus) return null

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      // weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  }

  const groupDate = new Date(groupDateProp);

  return (
    <Link href="/client/login">
      <div className="relative z-10 p-5 pr-7 border rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <div className="flex gap-4">
          <div className="relative w-52 h-52 rounded-lg overflow-hidden">
            <Image
              src={groupPicture}
              alt={groupTitle}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">{groupTitle}</h3>
              <p className="text-lg font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                <span>{groupPrice} Bath/Person</span>
              </p>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-black">{groupCategory}</p>
              </div>
            </div>

            <div className="flex items-center pb-8 mb-4 border-b-[1px] border-gray-400">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-gray-500">{groupDetail}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="flex items-center rounded-full w-11 h-11">
                    <Image
                      src={chefImage}
                      alt={`Profile picture of ${chefName}`}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-500 font-semibold">{chefName}</p>
                </div>
                <div className="ml-4">
                  <StarRating reviewRating={reviewRating} />
                </div>
              </div>
              <div>
                <p className="flex flex-col text-end text-gray-500 font-semibold">
                  <span>{groupNumberofparticipants} Participants</span>
                  <span>{formatDate(groupDate)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}