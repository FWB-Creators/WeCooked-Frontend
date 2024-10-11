import NavbarBefore from "./client/components/NavbarBefore";
import LandingPage from "./client/components/LandingPage";
import Card from "./client/components/Card";
import CurvePage from "./client/components/CurvePage";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] animate-fadeIn">
      <NavbarBefore />
      <LandingPage />
      <Card />
      <CurvePage />
    </div>
  );
}