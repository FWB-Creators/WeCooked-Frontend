import React from 'react'
import { courses } from '../../data/full-mock-data'
import CompleteCourseCard from './CompleteCourseCard'

interface CourseListProps {
  limit?: number // Optional limit prop
}

export default function CompleteCourse({ limit = 5 }: CourseListProps) {
  const displayedCourses = courses.slice(0, limit)
  return (
    <div className="flex flex-col justify-start mb-16 mx-48">
      <h1 className="text-lg mt-8">Completed Course</h1>
      <div className="">
        {displayedCourses.map((course) => (
          <CompleteCourseCard key={course.courseId} course={course} />
        ))}
      </div>
    </div>
  )
}
