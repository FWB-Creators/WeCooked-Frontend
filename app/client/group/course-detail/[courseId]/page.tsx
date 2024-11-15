import Navbar from '@/app/client/components/Navbar'
import GroupCourseDetailFirstPage from '@/app/client/components/group/course-detail/GroupCourseDetailFirstPage'
import GroupMeetChefCurvePage from '@/app/client/components/group/course-detail/GroupMeetChefCurvePage'
import GroupIngredientPage from '@/app/client/components/group/course-detail/GroupIngredientPage'
import JoinOurCoursePage from '@/app/client/components/JoinOurCoursePage'
import FAQPage from '@/app/client/components/FAQPage'
import Footer from '@/app/client/components/Footer'

export default function GroupCourseDetailPage() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <GroupCourseDetailFirstPage />
      <GroupMeetChefCurvePage />
      <GroupIngredientPage />
      <JoinOurCoursePage />
      <FAQPage />
      <Footer />
    </div>
  )
}