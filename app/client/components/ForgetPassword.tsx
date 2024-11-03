'use client';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgetPassword() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-t from-[#FE3511]/90 to-[#F0725C]/90 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-64 bottom-[-60px] transform hover:scale-105 transition-transform z-10 opacity-75">
          <Image
            src="/images/burger.png"
            alt="burger"
            width={378}
            height={300}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute left-[-150px] bottom-28 transform hover:scale-105 transition-transform opacity-75">
          <Image
            src="/images/steak.png"
            alt="steak"
            width={530}
            height={530}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute left-0 top-0 transform hover:scale-105 transition-transform opacity-75">
          <Image
            src="/images/pasta.png"
            alt="pasta"
            width={500}
            height={500}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute left-64 top-[-10px] transform hover:scale-105 transition-transform opacity-75">
          <Image
            src="/images/waffle.png"
            alt="waffle"
            width={250}
            height={250}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-0 transform hover:scale-105 transition-transform">
          <Image
            src="/images/sushi.png"
            alt="sushi"
            width={400}
            height={400}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute left-0 bottom-0 transform hover:scale-105 transition-transform">
          <Image
            src="/images/sushi_2.png"
            alt="sushi2"
            width={400}
            height={400}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute right-64 top-0 transform hover:scale-105 transition-transform">
          <Image
            src="/images/waffle_2.png"
            alt="waffle2"
            width={250}
            height={250}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 top-0 transform hover:scale-105 transition-transform">
          <Image
            src="/images/pasta_2.png"
            alt="pasta2"
            width={500}
            height={500}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute right-[-50px] bottom-28 transform hover:scale-105 transition-transform">
          <Image
            src="/images/steak_2.png"
            alt="steak2"
            width={400}
            height={400}
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute right-64 bottom-0 transform hover:scale-105 transition-transform">
          <Image
            src="/images/burger_2.png"
            alt="burger2"
            width={350}
            height={350}
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative bg-white rounded-2xl w-[600px] p-8 shadow-xl flex flex-col items-center justify-center">
        <div className="absolute right-4 top-4">
          <Link href="/client/login">
          <XMarkIcon
            className="w-6 h-6 text-[#F0725C] hover:text-[#FE3511] transition-colors cursor-pointer"
            aria-hidden="true"
            />
          </Link>
        </div>
        <div className="space-y-6 w-full max-w-[500px]">
          <h1 className="text-4xl font-bold text-center mt-4">
            Forgotten your password?
          </h1>

          <div className="text-center font-semibold text-gray-600 space-y-1">
            <p>
              There is nothing to worry about, we&apos;ll send you a message to help
            </p>
            <p>you reset your password.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <p className="mt-4 mb-1">Email Address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter personal or work email address"
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}