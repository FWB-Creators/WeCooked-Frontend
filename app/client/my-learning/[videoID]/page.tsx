import Navbar from '../../components/Navbar'
import VideoControl from '../../components/video-player/VideoControl'
import InstructionPage from '../../components/video-player/InstructionPage'
import Footer from '../../components/Footer'

export default function VideoIdPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
      <VideoControl />
      <InstructionPage />
      <Footer />
    </div>
  )
}