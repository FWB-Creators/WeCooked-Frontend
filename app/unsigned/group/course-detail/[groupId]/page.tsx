import Navbar from '@/app/unsigned/components/Navbar'
import GroupCourseDetailFirstPage from '@/app/unsigned/components/group/course-detail/GroupCourseDetailFirstPage'
import GroupMeetChefCurvePage from '@/app/unsigned/components/group/course-detail/GroupMeetChefCurvePage'
import GroupIngredientPage from '@/app/unsigned/components/group/course-detail/GroupIngredientPage'
import JoinOurCoursePage from '@/app/unsigned/components/JoinOurCoursePage'
import FAQPage from '@/app/unsigned/components/FAQPage'
import Footer from '@/app/unsigned/components/Footer'

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