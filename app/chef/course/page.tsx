import Navbar from '../components/Navbar'
import CourseTable from '../components/course/CourseTable'

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <CourseTable />
    </div>
  )
}
