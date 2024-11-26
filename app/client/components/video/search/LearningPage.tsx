import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/app/client/data/advert'
import { StarRating } from '../../StarRating'

export default function LearningPage() {
  const course = courses[1]
  return (
    <div className="relative w-full flex flex-col items-center pb-2">
      <Image
        src="/svg/WhiteBG.svg"
        alt="Decorative background"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />
      <div className="absolute lg:left-40 md:left-20 left-4 top-24 z-10 max-w-2xl">
        <h1 className="py-3.5 text-7xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Enjoy
        </h1>
        <h1 className="py-1.5 text-7xl font-bold">With Sushi Course</h1>
        <p className="text-lg max-w-lg py-6">
          I recently completed the &quot;Master Sushi Making&quot; online
          course, and I couldn&apos;t be happier with my experience! As a
          beginner, I was a bit intimidated at first, but the instructor made
          everything feel accessible and fun.
        </p>
        <div className="flex items-center pt-2">
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
            <p className="font-bold text-lg">Allahu Akbar</p>
            <StarRating reviewRating={3.5} />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-10 z-10 w-1/2 hidden md:block">
        <Image
          src="/images/sushi-learningpage.png"
          alt="Cooked Image"
          width={650}
          height={650}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute lg:right-20 right-4 lg:top-[640px] top-[540px] z-10 flex space-x-2.5">
      <Link href={`/client/video/payment/${course.courseId}`}>
        <button
          className="px-8 py-2.5 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          type="button"
          aria-label="Start the course"
          tabIndex={0}
        >
          Get Started
        </button>
      </Link>
      <Link href={`/client/video/course-detail/${course.courseId}`}>
        <button
          className="px-8 py-2 border-2 border-[#FE3511] rounded-full font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          type="button"
          aria-label="View more details"
          tabIndex={0}
        >
          View More
        </button>
      </Link>
      </div>
    </div>
  )
}
