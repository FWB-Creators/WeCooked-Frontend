import Navbar from '../../components/Navbar'
import GroupLearning from '../../components/group/GroupLearning'
import GroupCurvePage from '../../components/group/GroupCurvePage'
import Footer from '../../components/Footer'
import FAQPage from '../../components/video/course-detail/FAQPage'
export default function GroupLearningPage() {
  return (
    <div>
      <Navbar />
      <GroupLearning />
      <GroupCurvePage />
      <FAQPage />
      <Footer />
    </div>
  )
}
