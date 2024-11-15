import Navbar from '@/app/client/components/Navbar'
import VideoTutorialControl from '@/app/client/components/video-player/VideoTutorialControl'
import TutorialComponent from '@/app/client/components/video-player/TutorialComponent'
import Footer from '@/app/client/components/Footer'

export default function TutorialPageComponent() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
      <VideoTutorialControl />
      <TutorialComponent />
      <Footer />
    </div>
  )
}