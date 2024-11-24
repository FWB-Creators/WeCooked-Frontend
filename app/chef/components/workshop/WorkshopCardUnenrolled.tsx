import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Group } from '../../types/group'
import { StarRating } from '../StarRating'

export default function WorkshopCardUnenrolled({
  groupId,
  groupTitle,
  groupDetail,
  groupPrice,
  groupNumberofparticipants,
  groupDate,
  groupTime,
  groupCategory,
  groupPicture,
  chefImage,
  chefName,
  groupStatus,
  reviewRating,
}: Group) {
  if (groupStatus) return null

  const formatDate = (date: Date, timeStr?: string): string => {
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    if (timeStr) {
      return `${formattedDate} at ${timeStr}`;
    }
  
    return formattedDate;
  };

  return (
    <Link href={`/client/group/payment/${groupId}`}>
      <div className="relative z-10 p-5 pr-7 border rounded-xl bg-white my-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <div className="flex gap-4">
          <div className="relative flex justify-center item-center w-52 h-52 rounded-lg overflow-hidden">
            <Image
              src={groupPicture}
              alt={groupTitle}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">{groupTitle}</h3>
              <p className="text-base font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                <span>{groupPrice} Bath/Person</span>
              </p>
            </div>

            <div className="flex items-center mb-2">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-black text-sm">{groupCategory}</p>
              </div>
            </div>

            <div className="flex items-center pb-4 border-b-[1px] border-gray-400">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-gray-500 text-sm">{groupDetail}</p>
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
                  <p className="text-gray-500 font-semibold text-sm">{chefName}</p>
                </div>
                <div className="ml-4">
                  <StarRating reviewRating={reviewRating} className="text-sm" />
                </div>
              </div>
              <div>
                <p className="flex flex-col text-end text-gray-500 font-semibold text-sm">
                  <span>{groupNumberofparticipants} Participants</span>
                  <span>{formatDate(groupDate, groupTime.toString())}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}