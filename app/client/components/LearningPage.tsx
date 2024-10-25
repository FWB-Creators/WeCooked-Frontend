import Image from 'next/image';

export default function LearningPage() {
  return (
    <div className="relative w-full flex flex-col items-center pb-2">
      <Image
        src="/svg/WhiteBG.svg"
        alt="White Background"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <div className="absolute left-40 top-24 z-10 max-w-2xl">
        <h1 className="py-3.5 text-7xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Enjoy
        </h1>
        <h1 className="py-1.5 text-7xl font-bold">With Sushi Course</h1>
        <p className="text-lg max-w-lg py-6">
          I recently completed the &quot;Master Sushi Making&quot; online course, and I
          couldn&apos;t be happier with my experience! As a beginner, I was a bit
          intimidated at first, but the instructor made everything feel
          accessible and fun.
        </p>
        <div className="flex items-center">
          <div className="flex items-center rounded-full">
            <Image
              src="/images/chef.png"
              alt="profile"
              width={60}
              height={60}
              className="rounded-full border-2 border-red-400"
            />
          </div>
          <div className="flex flex-col pl-4">
            <p className="font-bold text-lg">Allhalal</p>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                role="img"
              >
                <path
                  fill="currentColor"
                  d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                />
              </svg>
              <p className="text-black font-semibold ml-1">3.2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-10 z-10 w-1/2 md:w-auto">
        <Image
          src="/images/sushi-learningpage.png"
          alt="Cooked Image"
          width={650}
          height={100}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute right-20 top-[640px] z-10 flex space-x-2.5">
        <button className="px-8 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
        <button className="px-8 py-2 border-2 border-[#FE3511] rounded-full font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          View More
        </button>
      </div>
    </div>
  );
}