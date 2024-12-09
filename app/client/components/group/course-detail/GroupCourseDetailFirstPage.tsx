'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { group } from '@/app/client/data/group-course'

export default function GroupCourseDetailFirstPage() {
  const { groupId } = useParams<{ groupId: string }>() // TypeScript typing for useParams
  const ID = parseInt(groupId)
  console.log("ID:",groupId)
  const groupTitle = group[ID].groupTitle
  const chefImage = group[ID].chefImage
  const chefName = group[ID].chefName
  const groupPicture = group[ID].groupPicture
  const groupCategory = group[ID].groupCategory
  const router = useRouter()
  return (
    <div className="min-h-[800px] relative w-full flex flex-col items-center">
      <div className="absolute left-20 top-28 z-10 max-w-[45%]">
        <h1 className="py-1.5 text-6xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          {groupTitle}
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
              src={chefImage}
              alt="Profile picture of chef"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="px-2 text-lg">Instructor:</p>
          <p className="text-lg underline underline-offset-4">{chefName}</p>
        </div>
        <div className="flex space-x-3 py-8">
          <button
            className="px-2 py-0.5 border-[1px] border-[#FE3511] rounded-xl font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            type="button"
            aria-label="View more details"
            tabIndex={0}
          >
            {groupCategory}
          </button>
        </div>
        <div className="flex">
          <button
            className="px-7 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => router.push(`/client/group/payment/${ID}`)}
          >
            Let&apos;s Cook
          </button>
        </div>
      </div>
      <div className="absolute right-24 top-[144px] items-center justify-center max-w-[500px] max-h-[500px] w-[500px] h-[500px] overflow-hidden rounded-3xl">
        <Image
          src={groupPicture}
          alt="Cooked Image"
          width={750}
          height={750}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}
