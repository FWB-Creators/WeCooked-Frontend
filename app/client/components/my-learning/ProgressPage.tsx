import React from 'react'
import { progress } from '../../data/progress'
import ProgressCard from './ProgressCard'

export default function ProgressPage() {
  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Video Courses
      </h1>
      <div className="mx-12">
        {progress.length === 0 && (
          <p className="text-white">No group courses available.</p>
        )}
        {progress.map((item, index) => (
          <ProgressCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
