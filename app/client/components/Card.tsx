"use client";
import CourseCard from "./CourseCard";
import { courses } from "../data/most-popular-course";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Card() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;
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
        Most Popular Courses
      </h1>
      <div className="relative flex">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / maxIndex)}%)` }}
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
}