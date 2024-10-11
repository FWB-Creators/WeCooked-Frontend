import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Forget_password() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from bg-[#FE3511]/75 to bg-[#F0725C]/75 w-full h-screen animate-fadeIn">
      {/*White box in the middle */}

      <div className="rounded-2xl z-10 bg-white w-[680px] h-[440px] p-2">
        <div className="flex justify-end">
          <Link href="/client/login">
            <XMarkIcon className="text-[#F0725C] cursor-pointer size-5" />{' '}
            {/*I cannot make the icon gradient color, so I will use similar color instead */}
          </Link>
        </div>
        <div className="flex justify-center m-2 text-2xl font-bold">
          Forgotten your password?
        </div>
        <div className="flex text-sm ml-10 mr-10">
          There is nothing to worry about, we`ll send you a message to help you
        </div>
        <div className="ml-10 mr-10 text-sm flex justify-center">
          reset your password.
        </div>
        <div className="mt-8 ml-10 text-xs">Email Address</div>
        <input
          className="ml-10 mt-2 mr-12 bg-[#F2F4F8] rounded-[5px] py-3 px-4 w-[550px] outline-none shadow-md"
          type="email"
          placeholder="Enter personal or work email address"
        ></input>
        <div className="font-semibold cursor-pointer py-3 px-4 items-center rounded-[5px] flex justify-center ml-10 mr-12 mt-6 font-semi-bold text-[white] bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
          Send Reset Link
        </div>
      </div>

      {/* Background food picture*/}
      <div className="absolute left-64 bottom-0 opacity-75">
        <Image src="/images/burger.png" alt="burger" width={350} height={350} />
      </div>
      <div className="absolute left-[-150px] bottom-28 opacity-75">
        <Image src="/images/steak.png" alt="steak" width={400} height={400} />
      </div>
      <div className="absolute left-0 top-5 opacity-75">
        <Image src="/images/pasta.png" alt="pasta" width={500} height={500} />
      </div>
      <div className="absolute left-64 top-5 opacity-75">
        <Image src="/images/waffle.png" alt="waffle" width={250} height={250} />
      </div>
      <div className="absolute right-5 bottom-5 opacity-75">
        <Image src="/images/sushi.png" alt="sushi" width={400} height={400} />
      </div>
      <div className="absolute left-0 bottom-5">
        <Image
          src="/images/sushi_2.png"
          alt="sushi2"
          width={400}
          height={400}
        />
      </div>
      <div className="absolute right-64 top-5">
        <Image
          src="/images/waffle_2.png"
          alt="waffle2"
          width={250}
          height={250}
        />
      </div>
      <div className="absolute right-0 top-5">
        <Image
          src="/images/pasta_2.png"
          alt="pasta2"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute right-[-50px] bottom-28">
        <Image
          src="/images/steak_2.png"
          alt="steak2"
          width={400}
          height={400}
        />
      </div>
      <div className="absolute right-64 bottom-5">
        <Image
          src="/images/burger_2.png"
          alt="burger2"
          width={350}
          height={350}
        />
      </div>
    </div>
  )
}
