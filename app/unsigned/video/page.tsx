import React from 'react'
import Navbar from '../components/Navbar'
import LearningPage from '../components/video/search/LearningPage'
import FoodTypeCard from '../components/video/search/FoodTypeCard'
import MostPopularCourse from '../components/MostPopularCourse'
import NewCourseCard from '../components/video/search/NewCourseCard'
import TopRateCourse from '../components/video/search/TopRateCourse'
import OrderIngredients from '../components/video/search/OrderIngredientPage'
import PersonalCourseCard from '../components/video/search/PersonalCourseCard'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function MyLearningPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
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
