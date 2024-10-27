import NavbarBefore from './client/components/NavbarBefore'
import LandingPage from './client/components/LandingPage'
import Card from './client/components/MostPopularCourse'
import CurvePage from './client/components/CurvePage'
import RecentCourses from './client/components/RecentCourses'
import RecommendedForyou from './client/components/RecommendedForyou'
import ClientReview from './client/components/ClientReview'
import ContactUs from './client/components/ContactUs'
import Footer from './client/components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarBefore />
      <LandingPage />
      <Card />
      <CurvePage />
      <RecentCourses />
      <RecommendedForyou />
      <ClientReview />
      <ContactUs />
      <Footer />
    </div>
  )
}
