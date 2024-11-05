import Navbar from '../components/Navbar'
import MyLearning from '../components/MyLearning'
import ProgressPage from '../components/ProgressPage'
import GroupPage from '../components/GroupPage'
import Footer from '../components/Footer'

export default function MyLearningPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <Navbar />
      <MyLearning />
      <ProgressPage />
      <GroupPage />
      <Footer />
    </div>
  )
}
