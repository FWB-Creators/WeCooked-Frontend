import Navbar from './client/components/Navbar'
import LandingPage from './client/components/home/LandingPage'
import MostPopularCourse from './client/components/MostPopularCourse'
import CurvePage from './client/components/home/CurvePage'
import RecentCourses from './client/components/RecentCourses'
import RecommendForYou from './client/components/RecommendForYou'
import ClientReview from './client/components/ClientReview'
import ContactUs from './client/components/ContactUs'
import Footer from './client/components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
      <LandingPage />
      <MostPopularCourse />
      <CurvePage />
      <RecentCourses />
      <RecommendForYou />
      <ClientReview />
      <ContactUs />
      <Footer />
    </div>
  )
}
