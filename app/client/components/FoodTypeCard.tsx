'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { foodtype } from '../data/food-type'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

interface FoodType {
  title: string
  total_course: number
  imageSrc: string
}

function CourseCard({ title, total_course, imageSrc }: FoodType) {
  return (
    <div className="bg-white rounded-xl shadow-lg w-56 my-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        width={280}
        height={250}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold p-1">{title}</h2>
        <p className="text-gray-600 p-1">
          {total_course} Course{total_course !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}
const useResponsiveCards = () => {
    const [cardsToShow, setCardsToShow] = useState(5);
    
    useEffect(() => {
      const updateCards = () => {
        if (window.innerWidth < 640) setCardsToShow(1);
        else if (window.innerWidth < 1024) setCardsToShow(3);
        else setCardsToShow(5);
      };
      
      window.addEventListener('resize', updateCards);
      updateCards();
      return () => window.removeEventListener('resize', updateCards);
    }, []);
    
    return cardsToShow;
  };

export default function FoodTypeCard() {
  const [startIndex, setStartIndex] = useState(0)
  const cardsToShow = useResponsiveCards();
  const maxIndex = foodtype.length - cardsToShow

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 2, maxIndex))
  }

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 2, 0))
  }

  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Explore Food Type and Skills
      </h1>
      <div className="relative flex">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={
              {
                '--slide-offset': startIndex * (100 / cardsToShow),
                transform: 'translateX(calc(-1 * var(--slide-offset) * 1%))',
              } as React.CSSProperties
            }
          >
            {foodtype.map((food, index) => (
              <Link
                key={index}
                href={`/client/video/search?type=${food.title.replace(
                  /\s+/g,
                  '-'
                )}`}
                className="w-full pl-12"
              >
                <CourseCard {...food} />
              </Link>
            ))}
          </div>
        </div>

        {startIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-50"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}

        {startIndex + 2 < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-50"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  )
}
