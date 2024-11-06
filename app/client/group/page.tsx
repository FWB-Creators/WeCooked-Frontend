import React from 'react'
import NavbarAfter from '../components/NavbarAfter'
import CalendarPage from '../components/group/CalendarPage'
import AdvertPage from '../components/group/AdvertPage'
import UpcomingWorkshopCard from '../components/group/UpcomingWorkshopCard'
import Footer from '../components/Footer'

export default function GroupPage() {
  return (
    <div className="animate-fadeIn">
      <NavbarAfter />
      <CalendarPage />
      <AdvertPage />
      <UpcomingWorkshopCard />
      <Footer />
    </div>
  )
}