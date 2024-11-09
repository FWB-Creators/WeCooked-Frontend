import React from 'react'
import NavbarAfter from '../../components/NavbarAfter'
import VideoControl from '../../components/video-player/VideoControl'

export default function page() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <VideoControl />
    </div>
  )
}
