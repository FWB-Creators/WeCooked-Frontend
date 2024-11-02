import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

interface CustomCalendarProps {
  value: { startDate: Date | null; endDate: Date | null }
  onChange: (value: { startDate: Date | null; endDate: Date | null }) => void
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [nextMonthDate, setNextMonthDate] = useState(
    new Date(new Date().setMonth(currentDate.getMonth() + 1))
  )

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
    setNextMonthDate(
      new Date(nextMonthDate.setMonth(nextMonthDate.getMonth() - 1))
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
    setNextMonthDate(
      new Date(nextMonthDate.setMonth(nextMonthDate.getMonth() + 1))
    )
  }

  const isDateInRange = (date: Date) => {
    if (!value.startDate || !value.endDate) return false
    const checkDate = new Date(date).setHours(0, 0, 0, 0)
    return (
      checkDate >= new Date(value.startDate).setHours(0, 0, 0, 0) &&
      checkDate <= new Date(value.endDate).setHours(0, 0, 0, 0)
    )
  }

  const isStartDate = (date: Date) => {
    if (!value.startDate) return false
    return (
      new Date(date).setHours(0, 0, 0, 0) ===
      new Date(value.startDate).setHours(0, 0, 0, 0)
    )
  }

  const isEndDate = (date: Date) => {
    if (!value.endDate) return false
    return (
      new Date(date).setHours(0, 0, 0, 0) ===
      new Date(value.endDate).setHours(0, 0, 0, 0)
    )
  }

  const handleDateClick = (date: Date) => {
    if (!value.startDate || (value.startDate && value.endDate)) {
      onChange({ startDate: date, endDate: null })
    } else {
      if (date < value.startDate) {
        onChange({ startDate: date, endDate: value.startDate })
      } else {
        onChange({ startDate: value.startDate, endDate: date })
      }
    }
  }

  const renderCalendar = (date: Date) => {
    const daysInMonth = getDaysInMonth(date)
    const firstDayOfMonth = getFirstDayOfMonth(date)
    const days = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), day)
      const isSelected = isDateInRange(currentDay)
      const isStart = isStartDate(currentDay)
      const isEnd = isEndDate(currentDay)

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(currentDay)}
          className={`h-8 flex items-center justify-center cursor-pointer rounded-full
            ${isSelected ? 'bg-[#faebe8] text-[#FE3511]' : 'hover:bg-gray-100'}
            ${
              isStart
                ? 'bg-gradient-to-t from-[#FE3511] to-[#F0725C] text-white hover:bg-[#FE3511]'
                : ''
            }
            ${
              isEnd
                ? 'bg-gradient-to-t from-[#FE3511] to-[#F0725C] text-white hover:bg-[#FE3511]'
                : ''
            }`}
        >
          {day}
        </div>
      )
    }

    return days
  }

  return (
    <div className="absolute top-[-190px] inset-x-[-30px] bg-white rounded-lg shadow-2xl p-4 z-50">
      <div className="flex gap-4">
        <div className="w-64">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <span className="font-medium">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <div className="w-6" />
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="h-8 flex items-center justify-center text-sm text-gray-500"
              >
                {day}
              </div>
            ))}
            {renderCalendar(currentDate)}
          </div>
        </div>
        <div className="w-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-6" />
            <span className="font-medium">
              {months[nextMonthDate.getMonth()]} {nextMonthDate.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="h-8 flex items-center justify-center text-sm text-gray-500"
              >
                {day}
              </div>
            ))}
            {renderCalendar(nextMonthDate)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCalendar