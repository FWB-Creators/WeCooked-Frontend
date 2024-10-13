import NavbarAfter from '../components/NavbarAfter'
import LandingPage from '../components/LandingPage'
import Card from '../components/Card'
import CurvePage from '../components/CurvePage'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarAfter />
      <LandingPage />
      <Card />
      <CurvePage />
    </div>
  )
}
