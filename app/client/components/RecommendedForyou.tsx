"use client";
import { useState, useEffect } from "react";
import { courses } from '../data/recently-course';
import CourseCard from './CourseCard';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const useResponsiveCards = () => {
  const [cardsToShow, setCardsToShow] = useState<number>(3);
  
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    
    window.addEventListener('resize', updateCards);
    updateCards();
    return () => window.removeEventListener('resize', updateCards);
  }, []);
  
  return cardsToShow;
};

export default function RecommendedForYou() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const cardsToShow = useResponsiveCards();
  const maxIndex = Math.ceil(courses.length / cardsToShow) - 1;

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col justify-start py-12">
      <h1 className="text-3xl font-bold mb-2 text-white px-12">
        Recommended For You
      </h1>
      <div className="relative flex">
        <div className="flex overflow-hidden py-6">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
          >
            {courses.map((course, index) => (
              <div key={index} className="w-full pl-12">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
        
        {startIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}
        
        {startIndex + 1 < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};