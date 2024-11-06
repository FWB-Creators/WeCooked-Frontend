import NavbarAfter from '@/app/client/components/NavbarAfter'
import CourseDetailFirstPage from '@/app/client/components/video/course-detail/CourseDetailFirstPage'
import MeetChefCurvePage from '@/app/client/components/video/course-detail/MeetChefCurvePage'
import IngredientPage from '@/app/client/components/video/course-detail/IngredientPage'
import JoinOurCoursePage from '@/app/client/components/video/course-detail/JoinOurCoursePage'
import FAQPage from '@/app/client/components/video/course-detail/FAQPage'
import Footer from '@/app/client/components/Footer'

export default function CourseDetailPage() {
  return (
    <div className="animate-fadeIn">
      <NavbarAfter />
      <CourseDetailFirstPage />
      <MeetChefCurvePage />
      <IngredientPage />
      <JoinOurCoursePage />
      <FAQPage />
      <Footer />
    </div>
  )
}