import React from 'react';
import Image from 'next/image';

export default function MyLearning() {
  return (
    <div className="relative w-full z-10">
      <div className="relative w-full">
        <Image
          src="/svg/TopWhiteBG.svg"
          alt="Wave background"
          width={1400}
          height={1400}
          className="w-full"
          priority
        />
        
        <h1 className="absolute top-24 left-20 py-3.5 text-[84px] font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          My Learning
        </h1>
        
        <div className="absolute top-0 right-32">
          <Image
            src="/images/source.png"
            alt="Decorative fork and sauce"
            width={580}
            height={580}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}