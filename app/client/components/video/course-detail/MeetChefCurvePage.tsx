import React from 'react';
import Image from 'next/image';

export default function MeetChefCurvePage() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <Image
        src="/svg/RedBG.svg"
        alt="Red Background"
        width={1100}
        height={1100}
        className="w-full h-auto"
        priority
      />
      <div className="absolute inset-0 flex flex-row items-center justify-between px-16 z-10">
        <div className="text-left w-[550px] max-w-2xl">
          <h1 className="py-2 text-5xl font-bold text-white">
            Meet Chef Sieng: Master of Italian Cuisine
          </h1>
          <p className="mt-8 text-lg text-white">
            Chef Sieng is a culinary expert specializing in authentic Italian
            dishes. With years of experience, he combines rich flavors and fresh
            ingredients to create delightful culinary experiences. Join him to
            explore the art of Italian cooking and master classic recipes!
          </p>
        </div>
        <div className="mt-8 w-6/12">
          <Image
            src="/images/chef_tutorial.png"
            alt="Chef holding a dish"
            width={750}
            height={750}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
