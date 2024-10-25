import React from 'react'
import NavbarAfter from '../components/NavbarAfter'
import LearningPage from '../components/LearningPage'
import FoodTypeCard from '../components/FoodTypeCard'
import Card from '../components/Card'
import NewCourseCard from '../components/NewCourseCard'
import TopRateCourse from '../components/TopRateCourse'

export default function MyLearningPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <LearningPage />
      <FoodTypeCard />
      <Card />
      <NewCourseCard />
      <TopRateCourse />
    </div>
  )
}