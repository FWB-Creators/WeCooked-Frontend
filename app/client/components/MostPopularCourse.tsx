import CourseCard from './CourseCard'
import { courses } from '../data/most-popular-course'

export default function MostPopularCourse() {
  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Most Popular Courses
      </h1>
      <div
        className="flex space-x-8 overflow-x-auto px-12 scroll-smooth"
        role="region"
        aria-label="Most Popular Courses"
        tabIndex={0}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  )
}
