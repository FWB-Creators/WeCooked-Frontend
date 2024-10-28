import Image from 'next/image'
import Link from 'next/link'
import CourseCard from './CourseCard'
import { courses } from '../data/client-review'
import { StarRating } from './StarRating'

export default function ClientReview() {
  return (
    <div className="relative">
      <div className="w-full flex flex-col items-center py-16">
        <Image
          src="/svg/CurveBG.svg"
          alt="White Background"
          width={1100}
          height={1100}
          className="w-full h-auto"
        />
        <div className="absolute top-32 mx-24">
          <div className="flex flex-col justify-center items-center space-y-4 my-10">
            <p className="text-lg tracking-widest font-semibold">REVIEWS</p>
            <h1 className="text-5xl font-bold">Client Reviews</h1>
          </div>
        </div>

        <div className="absolute font-semibold left-36 top-[400px] w-[700px]">
          This course is ideal for beginners and seasoned cooks alike, offering
          a chance to deepen your understanding of vegetarian cooking while
          enjoying a collaborative and engaging experience. The focus on using
          fresh, locally-sourced ingredients adds an extra layer of authenticity
          and quality to each meal prepared.
        </div>
        <div className="absolute left-36 bottom-[360px] flex justify-center items-center gap-x-2">
          <div>
            <Link href="/client/sign-up">
              <Image
                className="rounded-full"
                src="/svg/user_profile.svg"
                alt="profile picture"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg">Allahu Akbar</p>
            <StarRating rating={3.2} />
          </div>
        </div>
      </div>
      <div className="absolute right-24 bottom-36 py-12 w-64">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="absolute left-0 bottom-56">
        <Image
          src="/svg/salmon_steak.svg"
          alt="salmon steak"
          width={125}
          height={125}
        />
      </div>
    </div>
  )
}
