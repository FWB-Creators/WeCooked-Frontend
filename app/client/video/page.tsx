import React from 'react'
import NavbarAfter from '../components/NavbarAfter'
import LearningPage from '../components/LearningPage'
import FoodTypeCard from '../components/FoodTypeCard'
import MostPopularCourse from '../components/MostPopularCourse'
import NewCourseCard from '../components/NewCourseCard'
import TopRateCourse from '../components/TopRateCourse'
import OrderIngredients from '../components/OrderIngredientPage'
import PersonalCourseCard from '../components/PersonalCourseCard'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function MyLearningPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <LearningPage />
      <FoodTypeCard />
      <MostPopularCourse />
      <NewCourseCard />
      <TopRateCourse />
      <OrderIngredients />
      <PersonalCourseCard />
      <ContactUs />
      <Footer />
    </div>
  )
}