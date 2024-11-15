import Navbar from '@/app/client/components/Navbar'
import CalendarPage from '@/app/client/components/group/CalendarPage'
import WorkshopPage from '@/app/client/components/group/search/WorkshopPage'
import Footer from '@/app/client/components/Footer'

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