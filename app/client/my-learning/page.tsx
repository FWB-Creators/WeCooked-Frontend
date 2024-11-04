import NavbarAfter from '../components/NavbarAfter'
import MyLearning from '../components/MyLearning'
import ProgressPage from '../components/ProgressPage'
import GroupPage from '../components/GroupPage'
import Footer from '../components/Footer'

export default function MyLearningPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <MyLearning />
      <ProgressPage />
      <GroupPage />
      <Footer />
    </div>
  )
}