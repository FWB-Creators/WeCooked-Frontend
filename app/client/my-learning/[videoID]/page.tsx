import NavbarAfter from '../../components/NavbarAfter'
import VideoControl from '../../components/video-player/VideoControl'
import InstructionPage from '../../components/video-player/InstructionPage'
import Footer from '../../components/Footer'

export default function VideoIdPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <VideoControl />
      <InstructionPage />
      <Footer />
    </div>
  )
}