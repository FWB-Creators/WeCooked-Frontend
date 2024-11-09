import Image from 'next/image'
import Link from 'next/link'
import { Course } from '../types/courses'
import { StarRating } from './StarRating'

export default function CourseCard({
  course_id,
  title,
  cuisine,
  price,
  currency,
  rating,
  chef,
  imageSrc,
  chefImageUrl,
}: Course) {
  
  return (
    <Link href={`/client/video/course-detail/${course_id}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 w-72 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
              <Image
                src={chefImageUrl}
                alt={`Profile picture of ${chef}`}
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <p className="text-[#808080] font-semibold">{chef}</p>
          </div>
          <StarRating rating={rating} />
        </div>
        <div className="flex flex-row items-center justify-between mt-4">
          <p className="text-black font-semibold">{cuisine}</p>
          <p className="font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            {price} {currency}
          </p>
        </div>
      </div>
    </Link>
  )
}