import Navbar from '@/app/unsigned/components/Navbar'
import CalendarPage from '@/app/unsigned/components/group/CalendarPage'
import WorkshopPage from '@/app/unsigned/components/group/search/WorkshopPage'
import Footer from '@/app/unsigned/components/Footer'

export default function GroupSearchCoursePage() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <CalendarPage />
      <WorkshopPage />
      <Footer />
    </div>
  )
}