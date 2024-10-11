import Image from 'next/image'
import Link from 'next/link'
import { Course } from '../types/courses'

export default function CourseCard({
  title,
  cuisine,
  price,
  rating,
  chef,
  imageSrc,
}: Course) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-68 my-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        width={280}
        height={250}
        className="rounded-xl"
      />
      <h2 className="my-6 text-xl font-semibold">{title}</h2>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <div className="flex items-center rounded-full w-11 h-11">
            <Link href="/client/sign-up">
              <Image
                src="/images/chef.png"
                alt="profile"
                width={35}
                height={35}
                className="rounded-full"
              />
            </Link>
          </div>
          <p className="text-[#808080] font-semibold">{chef}</p>
        </div>
        <div className="flex items-center ml-4">
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
          <span className="text-black font-semibold ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <p className="text-black font-semibold">{cuisine}</p>
        <p className="font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          {price.formatted}
        </p>
      </div>
    </div>
  )
}
