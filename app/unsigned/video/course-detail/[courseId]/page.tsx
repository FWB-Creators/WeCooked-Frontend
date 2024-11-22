import Navbar from '@/app/unsigned/components/Navbar'
import CourseDetailFirstPage from '@/app/unsigned/components/video/course-detail/CourseDetailFirstPage'
import MeetChefCurvePage from '@/app/unsigned/components/video/course-detail/MeetChefCurvePage'
import IngredientPage from '@/app/unsigned/components/video/course-detail/IngredientPage'
import JoinOurCoursePage from '@/app/unsigned/components/JoinOurCoursePage'
import FAQPage from '@/app/unsigned/components/FAQPage'
import Footer from '@/app/unsigned/components/Footer'

export default function CourseDetailPage() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <CourseDetailFirstPage />
      <MeetChefCurvePage />
      <IngredientPage />
      <JoinOurCoursePage />
      <FAQPage />
      <Footer />
    </div>
  )
}
