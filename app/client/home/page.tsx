'use client'
import NavbarAfter from '../components/NavbarAfter'
import LandingPage from '../components/LandingPage'
import MostPopularCourse from '../components/MostPopularCourse'
import CurvePage from '../components/CurvePage'
import RecentCourses from '../components/RecentCourses'
import RecommendedForyou from '../components/RecommendedForyou'
import ClientReview from '../components/ClientReview'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

import { AuthProvide } from '../components/Login' //import AuthContext

export default function Home() {
  return (
    <AuthProvide>
      <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
        <NavbarAfter />
        <LandingPage />
        <MostPopularCourse />
        <CurvePage />
        <RecentCourses />
        <RecommendedForyou />
        <ClientReview />
        <ContactUs />
        <Footer />
      </div>
    </AuthProvide>
  )
}
