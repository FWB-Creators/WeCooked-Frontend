import NavbarAfter from '@/app/client/components/NavbarAfter'
import CalendarPage from '@/app/client/components/group/CalendarPage'
import WorkshopPage from '@/app/client/components/group/search/WorkshopPage'
import Footer from '@/app/client/components/Footer'

export default function GroupSearchCoursePage() {
  return (
    <div className="animate-fadeIn">
      <NavbarAfter />
      <CalendarPage />
      <WorkshopPage />
      <Footer />
    </div>
  )
}