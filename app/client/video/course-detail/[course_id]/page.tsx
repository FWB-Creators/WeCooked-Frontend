import Navbar from '@/app/client/components/Navbar'
import CourseDetailFirstPage from '@/app/client/components/CourseDetailFirstPage'
import MeetChefCurvePage from '@/app/client/components/MeetChefCurvePage'
import IngredientPage from '@/app/client/components/IngredientPage'
import JoinOurCoursePage from '@/app/client/components/JoinOurCoursePage'
import FAQPage from '@/app/client/components/FAQPage'
import Footer from '@/app/client/components/Footer'

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
