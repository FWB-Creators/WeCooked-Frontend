import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

interface CustomCalendarProps {
  value: { startDate: Date | null }
  onChange: (value: { startDate: Date | null }) => void
}

const Calendar: React.FC<CustomCalendarProps> = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const isSelectedDate = (date: Date) => {
    if (!value.startDate) return false
    return date.toDateString() === value.startDate.toDateString()
  }

  const handleDateClick = (date: Date) => {
    if (value.startDate && isSelectedDate(date)) {
      onChange({ startDate: null })
    } else {
      onChange({ startDate: date })
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDayOfMonth = getFirstDayOfMonth(currentDate)
    const days = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const isSelected = isSelectedDate(currentDay)

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(currentDay)}
          className={`h-8 flex items-center justify-center cursor-pointer rounded-lg 
        ${
          isSelected
            ? 'bg-gradient-to-t from-[#FE3511] to-[#F0725C] text-white'
            : 'text-gray-400 hover:bg-gray-100'
        }`}
        >
          {day}
        </div>
      )
    }
    return days
  }

  const renderCalendarHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4 pl-2">
        <span className="text-gray-400 text-lg">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <div className="flex gap-1">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Previous month"
          >
            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Next month"
          >
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 bg-white rounded-lg shadow-2xl p-6 z-50">
      <div className="w-72">
        {renderCalendarHeader()}
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className={`h-8 flex items-center justify-center text-sm ${
                day === 'Sun' || day === 'Sat'
                  ? 'text-red-500'
                  : 'text-gray-400'
              }`}
            >
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>
    </div>
  )
}

export default Calendar