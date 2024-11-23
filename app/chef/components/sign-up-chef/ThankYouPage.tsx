import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/16/solid';

export default function ThankYouPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen animate-fadeIn">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-24 w-full m-10 h-5/6">
        <div className="flex justify-center mb-3">
          <div className="relative w-24 h-24 mb-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full"></div>
            <CheckIcon className="w-24 h-24 text-white relative z-5" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold my-2">Thank You</h1>
          <p className="text-5xl font-bold my-3">Your application is Processing</p>
          <p className="text-gray-600 mt-12 font-medium">
            We will send you a confirmation email with all the details about our work process. Please check your inbox to ensure you have received all the information.
          </p>
          <p className="text-gray-600 mb-6 font-medium">
            If you have any further questions or need advice during the process, please do not hesitate to contact us through the channels provided in the email.
          </p>
          <p className="text-gray-600 mb-16 font-medium">
            Thank you for trusting in choosing our service!
          </p>
        </div>
        <Link href="/">
          <div className="px-16 py-3 text-white cursor-pointer bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Home
          </div>
        </Link>
      </div>
    </div>
  );
};