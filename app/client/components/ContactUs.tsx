import Image from 'next/image'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="relative bg-white w-full flex flex-col items-center py-24 overflow-hidden">
      <div className="pt-16 flex justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#F0725C] to-[#FE3511]">
        CONTACT US
      </div>
      <h1 className="mt-4 flex justify-center text-5xl font-bold">
        Want To Teach
      </h1>
      <h1 className="mb-8 flex justify-center text-5xl font-bold">Cooking?</h1>
      <div className="flex justify-center">
        Join Our Team Of Expert Chefs And Share
      </div>
      <div className="flex justify-center">
        Your Passion For Culinary Arts With Others
      </div>
      <div className="flex gap-x-8">
        <div className="flex justify-center mt-16 pb-36">
          <Link href="/chef/sign-up-chef">
            <button className="px-8 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Join Now
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-16 pb-36">
          <Link href="/chef/login">
            <button className="px-11 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute left-0 top-0">
        <Image
          src="/images/pasta.png"
          alt="Pasta picture"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute right-[-4px] bottom-6">
        <Image
          src="/svg/chef.svg"
          alt="Chef picture"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
