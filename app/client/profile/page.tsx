import Navbar from '../components/Navbar'
import ClientProfile from '../components/profile/ClientProfile'
import CompleteCourse from '../components/profile/CompleteCourse'
import Footer from '../components/Footer'
export default function ClientProfilePage() {
  return (
    <>
      <Navbar />
      <ClientProfile />
      <CompleteCourse />
      <Footer />
    </>
  )
}
