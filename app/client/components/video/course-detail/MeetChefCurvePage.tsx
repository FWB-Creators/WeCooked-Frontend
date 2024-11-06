import React from 'react'
import Image from 'next/image'

export default function MeetChefCurvePage() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <Image
        src="/svg/RedBG.svg"
        alt="Red Background"
        width={1100}
        height={1100}
        className="w-full h-auto"
      />
      <div>
        <div className="absolute w-5/12 left-20 top-56 z-10 max-w-2xl">
          <h1 className="py-1.5 text-5xl font-bold text-white inline-block text-transparent bg-clip-text">
            Meet Chef Sieng: Master of Italian Cuisine
          </h1>
          <p className="text-xl max-w-xl pt-12 text-white">
            Chef Sieng is a culinary expert specializing in authentic Italian
            dishes. With years of experience, he combines rich flavors and fresh
            ingredients to create delightful culinary experiences. Join him to
            explore the art of Italian cooking and master classic recipes!
          </p>
        </div>
        <div className="absolute right-16 top-[168px] z-10 w-1/2 md:w-auto">
          <Image
            src="/images/chef_tutorial.png"
            alt="Cooked Image"
            width={750}
            height={750}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
