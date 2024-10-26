import NavbarAfter from '../components/NavbarAfter'
import LandingPage from '../components/LandingPage'
import MostPopularCourse from '../components/MostPopularCourse'
import CurvePage from '../components/CurvePage'
import RecentlyCourse from '../components/RecentlyCourse'
import RecommendedForyou from '../components/RecommendedForyou'
import Client_review from '../components/Client_review'
import Contact_us from '../components/Contact_us'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <LandingPage />
      <MostPopularCourse />
      <CurvePage />
      <RecentlyCourse />
      <RecommendedForyou />
      <Client_review />
      <Contact_us />
      <Footer />
    </div>
  )
}
