import React from 'react'
import Navbar from '../components/Navbar'
import CalendarPage from '../components/CalendarPage'
import AdvertPage from '../components/AdvertPage'
import UpcomingWorkshopCard from '../components/UpcomingWorkshopCard'
import Footer from '../components/Footer'

export default function GroupPage() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <CalendarPage />
      <AdvertPage />
      <UpcomingWorkshopCard />
      <Footer />
    </div>
  )
}
