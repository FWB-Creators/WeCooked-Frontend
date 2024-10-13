import CourseCard from './CourseCard'
import { courses } from '../data/most-popular-course'

export default function Card() {
  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Recommended for you
      </h1>
      <div className="flex space-x-8 overflow-x-auto px-12">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  )
}
