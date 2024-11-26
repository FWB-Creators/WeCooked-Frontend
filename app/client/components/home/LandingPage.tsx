import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="relative w-full flex flex-col items-center pb-2">
      <Image
        src="/svg/WhiteBG.svg"
        alt="White Background"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <div className="absolute left-40 top-24 z-10 max-w-2xl">
        <h1 className="py-1.5 text-7xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Learn
        </h1>
        <h1 className="py-1.5 text-7xl font-bold">To Cook Like A Pro</h1>
        <p className="text-lg max-w-lg py-6">
          Join our live workshops and learn from world-class chefs. Whether
          you&apos;re a beginner or a seasoned cook, our interactive classes
          will elevate your culinary skills.
        </p>
        <div className="flex items-center space-x-2.5 py-6">
          <Link href="/client/group">
            <button className="px-8 py-2.5 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-10 w-1/2">
        <Image
          src="/images/cooked.png"
          alt="Cooked Image"
          width={750}
          height={750}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  )
}
