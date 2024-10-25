"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { courses } from '../data/new-course';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Course } from '../types/courses'

const CourseCard = ({
  title,
  cuisine,
  price,
  rating,
  chef,
  imageSrc,
}: Course) => {
  return (
    <Link href="/client/video/course-detail">
      <div className="bg-white rounded-xl shadow-lg p-6 w-72 my-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={280}
          height={250}
          className="rounded-xl"
        />
        <h2 className="my-6 text-xl font-semibold">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <div className="flex items-center rounded-full w-11 h-11">
              <Image
                src="/images/chef.png"
                alt="profile"
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <p className="text-[#808080] font-semibold">{chef}</p>
          </div>
          <div className="flex items-center ml-4">
            <svg
              className="h-5 w-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
              role="img"
            >
              <path
                fill="currentColor"
                d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
              />
            </svg>
            <span className="text-black font-semibold ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-4">
          <p className="text-black font-semibold">{cuisine}</p>
          <p className="font-semibold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function NewCourseCard() {
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
        New Courses on Wecooked
      </h1>
      <div className="relative flex">
        <div className="flex overflow-hidden">
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