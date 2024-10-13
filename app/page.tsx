import NavbarBefore from './client/components/NavbarBefore'
import LandingPage from './client/components/LandingPage'
import Card from './client/components/Card'
import CurvePage from './client/components/CurvePage'
import Card_2 from './client/components/Card_2'
import Card_3 from './client/components/Card_3'
import Client_review from './client/components/Client_review'
import Contact_us from './client/components/Contact_us'
import Footer from './client/components/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarBefore />
      <LandingPage />
      <Card />
      <CurvePage />
      <Card_2 />
      <Card_3 />
      <Client_review />
      <Contact_us />
      <Footer />
    </div>
  )
}
