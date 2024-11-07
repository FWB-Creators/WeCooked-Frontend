'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { MagnifyingGlassIcon, CalendarIcon } from '@heroicons/react/24/solid'
import CustomCalendar from './CustomCalendar'

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
    if (title.trim()) {
      router.push(`/client/group/search/${encodeURIComponent(title)}`)
    }
  }

  const formatDateRange = () => {
    if (!value.startDate && !value.endDate) return ''
    const formatDate = (date: Date | null) => {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    }
    return `${formatDate(value.startDate)} - ${formatDate(value.endDate)}`
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
              Find Tour Taste!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center"
            >
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
                  value={formatDateRange()}
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