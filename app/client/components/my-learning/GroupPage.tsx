import React from 'react'
import { group } from '../../data/group-course'
import GroupCardEnrolled from './GroupCardEnrolled'

export default function GroupPage() {
  return (
    <div className="relative flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Workshops
      </h1>
      <div className="mx-12">
        {group.length === 0 && (
          <p className="text-white">No group courses available.</p>
        )}
        {group.map((item, index) => (
          <GroupCardEnrolled key={index} {...item} />
        ))}
      </div>
    </div>
  )
}