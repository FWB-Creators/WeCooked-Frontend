import React from 'react'
import Navbar from '@/app/client/components/Navbar'
import Footer from '@/app/client/components/Footer'
import SearchAndFilterPage from '@/app/client/components/video/search/SearchAndFilterPage'

export default function Page({ params }: { params: { search: string } }) {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
      <main>
        <SearchAndFilterPage params={params} />
      </main>
      <Footer />
    </div>
  )
}
