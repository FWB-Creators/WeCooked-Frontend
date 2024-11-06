import Navbar from '../components/Navbar'
import LandingPage from '../components/home/LandingPage'
import MostPopularCourse from '../components/MostPopularCourse'
import CurvePage from '../components/home/CurvePage'
import RecentCourses from '../components/RecentCourses'
import RecommendForYou from '../components/RecommendForYou'
import ClientReview from '../components/ClientReview'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

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
