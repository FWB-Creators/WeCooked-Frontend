"use client"
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { MagnifyingGlassIcon, CalendarIcon } from '@heroicons/react/24/solid'
import CustomCalendar from './CustomCalendar'
import { group } from '../../data/group-course'

export default function CalendarPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [value, setValue] = useState<{
    startDate: Date | null
    endDate: Date | null
  }>({
    startDate: null,
    endDate: null,
  })
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const startDate = value.startDate ? value.startDate.toISOString() : null
    const endDate = value.endDate ? value.endDate.toISOString() : null
  
    const filteredGroups = group.filter(
      (item) =>
        item.groupTitle.toLowerCase().includes(title.toLowerCase()) ||
        item.groupDetail.toLowerCase().includes(title.toLowerCase()) ||
        item.groupCategory.toLowerCase().includes(title.toLowerCase()) ||
        item.chefName.toLowerCase().includes(title.toLowerCase())
    )
  
    const dateFilteredGroups = filteredGroups.filter((item) => {
      const groupDate = new Date(item.groupDate).getTime()
      const start = startDate ? new Date(startDate).getTime() : null
      const end = endDate ? new Date(endDate).getTime() : null
  
      if (start && end) {
        return groupDate >= start && groupDate <= end
      }
      return true
    })
  
    if (dateFilteredGroups.length > 0) {
      router.push(
        `/client/group/search/results?query=${encodeURIComponent(
          title
        )}&startDate=${startDate}&endDate=${endDate}`
      )
    }
  }

  const chefNameDateRange = () => {
    if (value.startDate && value.endDate) {
      const start = value.startDate.toLocaleDateString()
      const end = value.endDate.toLocaleDateString()
      return `${start} - ${end}`
    }
    return ''
  }

  return (
    <div className="relative">
      {isCalendarOpen && (
        <div className="absolute top-0 inset-y-[74px] bg-white/10 backdrop-blur-sm z-10 xl:w-full h-[842px] 2xl:h-full 2xl:w-full" />
      )}
      <div className="relative">
        <Image
          src="/images/mylearningBG.png"
          alt="mylearningBG"
          width={3000}
          height={3000}
          priority
          className="object-contain"
        />
        <div className="absolute top-1/4 left-0 right-0 m-auto bg-white rounded-2xl w-[600px] h-96 px-8 py-4 shadow-xl flex flex-col items-center justify-center">
          <div className="space-y-6 w-full max-w-[500px]">
            <h1 className="text-4xl font-bold text-center mb-4">
              Find Your Taste!
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center">
              <div className="space-y-2 relative">
                <p>Cuisine Type</p>
                <input
                  type="text"
                  placeholder="Search for a cuisine type"
                  className="w-full pl-11 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 bottom-3" />
              </div>
              <div className="space-y-2 relative">
                <p className="mt-6">Select Date Range</p>
                <input
                  ref={inputRef}
                  type="text"
                  readOnly
                  placeholder="Select Date Range"
                  value={chefNameDateRange()}
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full pl-4 py-2 rounded-lg bg-[#F2F4F8] text-gray-400 border-b-2 border-[#C1C7CD] outline-none cursor-pointer"
                />
                <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 bottom-3" />
                {isCalendarOpen && (
                  <div ref={calendarRef} className="relative z-20">
                    <CustomCalendar
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue)
                        if (newValue.endDate) {
                          setIsCalendarOpen(false)
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
