import Image from 'next/image'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="relative bg-white">
      <div className="pt-16 flex justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#F0725C] to-[#FE3511]">
        CONTACT US
      </div>
      <h1 className="mt-4 flex justify-center text-5xl font-bold">
        Want To Teach
      </h1>
      <h1 className="mb-8 flex justify-center text-5xl font-bold">Cooking?</h1>
      <div className="flex justify-center font-semibold">
        Join our team of expert chefs and share
      </div>
      <div className="flex justify-center font-semibold">
        your passion for culinary arts with others
      </div>
      <div className="flex justify-center mt-16 pb-36">
        <Link href="/chef/sign-up-chef">
          <button className="px-8 py-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Join Now
          </button>
        </Link>
      </div>
      <div className="absolute left-[-100px] bottom-0">
        <Image
          className="size-[32rem]"
          src="/svg/pasta.svg"
          alt="Pasta picture"
          width={20}
          height={20}
        />
      </div>
      <div className="absolute right-[-24px] bottom-6">
        <Image
          className="size-[32rem]"
          src="/svg/chef.svg"
          alt="Chef picture"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
