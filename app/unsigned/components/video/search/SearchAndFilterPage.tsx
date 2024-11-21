'use client'
import React, { useState, useMemo } from 'react'
import { Course } from '@/app/unsigned/types/courses'
import CourseCard from '@/app/unsigned/components/CourseCard'
import { courses as fullmockdata } from '@/app/unsigned/data/full-mock-data'

const courses: Course[] = [...fullmockdata]

interface FilterOption {
  label: string
  count: number
}

interface FilterSectionProps {
  title: string
  options: FilterOption[]
  selected: string[]
  onChange: (option: string) => void
}

const CUISINE_TYPES = [
  'Italian',
  'French',
  'Thai',
  'Indian',
  'Japanese',
  'American',
  'Mexican',
]

const DIETARY_PREFERENCES = [
  'Vegan',
  'Vegetarian',
  'Gluten-Free',
  'Low-Carb',
  'Halal',
  'Kosher',
]

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="py-8 border-b-[1px] border-gray-200">
      <h3 className="text-lg font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text mb-6">
        {title}
      </h3>
      {options.map((option) => {
        const checkboxId = `${title.replace(/\s+/g, '-')}-${option.label}`
        const isSelected = selected.includes(option.label)
        return (
          <div
            key={option.label}
            className="flex items-center justify-between mb-2"
          >
            <div className="flex items-center">
              <input
                id={checkboxId}
                type="checkbox"
                className="relative peer rounded-md shrink-0 appearance-none w-5 h-5 border-2 border-[#ff593b] bg-white checked:bg-gradient-to-b from-[#F0725C] to-[#FE3511] checked:border-0"
                checked={isSelected}
                onChange={() => onChange(option.label)}
              />
              <label
                htmlFor={checkboxId}
                className={`ml-3 font-semibold ${
                  isSelected ? 'text-black' : 'text-[#737373]'
                }`}
              >
                {option.label}
              </label>
              <svg
                className="absolute w-3.5 h-3.5 hidden peer-checked:block text-white pl-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-[#737373] font-semibold">{option.count}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function SearchAndFilterPage({
  params,
}: {
  params: { search: string }
}) {
  const { search } = params
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([])
  const [selectedDiet, setSelectedDiet] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  const MIN_PRICE = 0
  const MAX_PRICE = 1000
  const MIN_RANGE = 0

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = parseInt(e.target.value, 10)
    const newRange = [...priceRange] as [number, number]

    if (index === 0) {
      newRange[0] = Math.min(value, priceRange[1] - MIN_RANGE)
    } else {
      newRange[1] = Math.max(value, priceRange[0] + MIN_RANGE)
    }

    setPriceRange(newRange)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = parseInt(e.target.value, 10)

    if (isNaN(value)) return
    value = Math.max(MIN_PRICE, Math.min(value, MAX_PRICE))

    const newRange = [...priceRange] as [number, number]

    if (index === 0) {
      if (value <= priceRange[1] - MIN_RANGE) {
        newRange[0] = value
      } else {
        newRange[0] = priceRange[1] - MIN_RANGE
      }
    } else {
      if (value >= priceRange[0] + MIN_RANGE) {
        newRange[1] = value
      } else {
        newRange[1] = priceRange[0] + MIN_RANGE
      }
    }

    setPriceRange(newRange)
  }

  const getCuisineCounts = (filteredCourses: Course[]) => {
    const cuisineCounts: Record<string, number> = {}

    filteredCourses.forEach((course) => {
      if (cuisineCounts[course.courseCategory]) {
        cuisineCounts[course.courseCategory]++
      } else {
        cuisineCounts[course.courseCategory] = 1
      }
    })

    return CUISINE_TYPES.map((courseCategory) => ({
      label: courseCategory,
      count: cuisineCounts[courseCategory] || 0,
    }))
  }

  const getDietaryCounts = (filteredCourses: Course[]): FilterOption[] => {
    const dietaryCounts: Record<string, number> = {}

    filteredCourses.forEach((course) => {
      course.courseDietary?.forEach((diet) => {
        if (dietaryCounts[diet]) {
          dietaryCounts[diet]++
        } else {
          dietaryCounts[diet] = 1
        }
      })
    })

    return DIETARY_PREFERENCES.map((diet) => ({
      label: diet,
      count: dietaryCounts[diet] || 0,
    }))
  }

  const handleCuisineChange = (cuisine: string) => {
    setSelectedCuisine((prev) =>
      prev.includes(cuisine)
        ? prev.filter((item) => item !== cuisine)
        : [...prev, cuisine]
    )
  }

  const handleDietChange = (diet: string) => {
    setSelectedDiet((prev) =>
      prev.includes(diet)
        ? prev.filter((item) => item !== diet)
        : [...prev, diet]
    )
  }

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.courseTitle.toLowerCase().includes(search.toLowerCase()) ||
        course.courseCategory.toLowerCase().includes(search.toLowerCase())

      const withinPriceRange =
        course.coursePrice >= priceRange[0] && course.coursePrice <= priceRange[1]

      const cuisineMatch =
        selectedCuisine.length === 0 || selectedCuisine.includes(course.courseCategory)

      const dietMatch =
        selectedDiet.length === 0 ||
        (course.courseDietary &&
          course.courseDietary.some((diet) => selectedDiet.includes(diet)))

      return matchesSearch && withinPriceRange && cuisineMatch && dietMatch
    })
  }, [search, priceRange, selectedCuisine, selectedDiet])

  const cuisineOptions = useMemo(
    () => getCuisineCounts(filteredCourses),
    [filteredCourses]
  )
  const dietaryOptions = useMemo(
    () => getDietaryCounts(filteredCourses),
    [filteredCourses]
  )

  return (
    <div className="flex">
      <div className="bg-white px-8 rounded-lg h-[860px] w-1/5 mx-8 my-10">
        <FilterSection
          title="Cuisine Type"
          options={cuisineOptions}
          selected={selectedCuisine}
          onChange={handleCuisineChange}
        />

        <FilterSection
          title="Dietary Preferences"
          options={dietaryOptions}
          selected={selectedDiet}
          onChange={handleDietChange}
        />

        <div className="py-8">
          <h3 className="text-lg font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text mb-6">
            Price Range
          </h3>
          <div className="relative mb-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 rounded-full bg-[#ff5031]"
                style={{
                  left: `${(priceRange[0] / MAX_PRICE) * 100}%`,
                  right: `${100 - (priceRange[1] / MAX_PRICE) * 100}%`,
                }}
              />
            </div>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[0]}
              onChange={(e) => handleSliderChange(e, 0)}
              className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff5031] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#ff5031] [&::-moz-range-thumb]:border-0"
            />
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[1]}
              onChange={(e) => handleSliderChange(e, 1)}
              className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff5031] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#ff5031] [&::-moz-range-thumb]:border-0"
            />
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[0]}
              onChange={(e) => handleInputChange(e, 0)}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setPriceRange([MIN_PRICE, priceRange[1]])
                }
              }}
              className="w-16 p-1 border border-gray-300 rounded-md text-center outline-none"
            />
            <p className="mx-2">to</p>
            <input
              type="number"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange[1]}
              onChange={(e) => handleInputChange(e, 1)}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setPriceRange([priceRange[0], MAX_PRICE])
                }
              }}
              className="w-16 p-1 border border-gray-300 rounded-md text-center outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 mx-8">
        <h1 className="text-white font-bold text-3xl mt-8 mb-7">
          Results for &quot;{search}&quot;
        </h1>
        <div className="flex justify-start flex-wrap gap-16 mb-16">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-white text-xl font-semibold text-center">
                No courses found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
