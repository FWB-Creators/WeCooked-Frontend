import Image from 'next/image'
import Link from 'next/link'
import CourseCard from './CourseCard'
import { courses } from '../data/client-review'

export default function client_review() {
  return (
    <div className="relative">
      <div className="w-full flex flex-col items-center py-12">
        <Image
          src="/svg/CurveBG.svg"
          alt="White Background"
          width={1100}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-32 mx-24">
          <div className="flex flex-col justify-center items-center space-y-4 my-10">
            <p className="text-lg tracking-widest font-semibold">REVIEWS</p>
            <h1 className="text-5xl font-bold">Client Reviews</h1>
          </div>
        </div>
        <div className="absolute font-semibold left-28 top-[400px] w-[1250px]">
          This course is ideal for beginners and seasoned cooks alike, offering
          a chance to
          <br />
          to deepen your understanding of vegetarian cooking while enjoying a
          collaborative
          <br /> and engaging experience. The focus on using fresh,
          locally-sourced ingredients <br />
          adds an extra layer of authenticity and quality to each meal prepared.
          <br />
        </div>

        <div className="absolute left-[6.75rem] bottom-64 flex justify-center items-center gap-x-2">
          <div>
            <Link href="/client/sign-up">
              <Image
                className="size-20 rounded-full"
                src="/svg/user_profile.svg"
                alt="profile picture"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div>
            <div className="font-bold">Gimmanee</div>
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
              <span className="text-black font-semibold ml-1">3.2</span>
            </div>
          </div>
        </div>
      </div>

      {/*card*/}
      <div className="absolute right-0 bottom-24 mr-16 py-12 w-64">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      <div className="absolute left-[-75px] bottom-48">
        <Image
          className=" size-[277px]"
          src="/svg/salmon_steak.svg"
          alt="salmon steak"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
