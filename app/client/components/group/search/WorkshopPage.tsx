"use client"
import { useSearchParams } from 'next/navigation'
import { group } from '@/app/client/data/group-course'
import GroupCardUnenrolled from './GroupCardUnenrolled'

export default function WorkshopPage() {
  const searchParams = useSearchParams()
  const title = searchParams.get('query') || ''
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  const start = startDate ? new Date(startDate).getTime() : null
  const end = endDate ? new Date(endDate).getTime() : null

  const filteredGroups = group.filter((item) => {
    if (item.groupStatus) return false;

    const isTitleMatch =
      item.groupTitle.toLowerCase().includes(title.toLowerCase()) ||
      item.groupDetail.toLowerCase().includes(title.toLowerCase()) ||
      item.groupCategory.toLowerCase().includes(title.toLowerCase()) ||
      item.ChefName.toLowerCase().includes(title.toLowerCase())

    const groupDate = new Date(item.groupDate).getTime()
    const isDateMatch =
      (!start || groupDate >= start) && (!end || groupDate <= end)

    return isTitleMatch && isDateMatch
  })

  return (
    <div className="relative flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text px-12">
        {title ? `Found ${filteredGroups.length} workshops for "${title}"` : 'Workshops'}
      </h1>
      <div className="mx-12">
        {filteredGroups.length === 0 && (
          <p className="text-white">No group courses available.</p>
        )}
        {filteredGroups.map((item, index) => (
          <GroupCardUnenrolled key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
