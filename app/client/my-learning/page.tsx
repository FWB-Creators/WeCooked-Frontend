import React from 'react'
import Image from 'next/image'
import NavbarAfter from '../components/NavbarAfter'
import MyLearning from '../components/MyLearning'
import ProgessPage from '../components/ProgessPage'
import GroupPage from '../components/GroupPage'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className="relative bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Image src="/images/pancake.png" alt="pancake" width={1200} height={80} className="absolute -right-52 bottom-44" />
      <NavbarAfter />
      <MyLearning />
      <ProgessPage />
      <GroupPage />
      <Footer />
    </div>
  )
}
