import Image from 'next/image'

export default function CurvePage() {
  return (
    <div className="relative w-full flex flex-col items-center py-12">
      <Image
        src="/svg/CurveBG.svg"
        alt="White Background"
        width={1100}
        height={100}
        className="w-full h-auto"
      />
      <div className="absolute top-28 mx-24">
        <div className="flex flex-col justify-center items-center space-y-4 my-10">
          <p className="text-lg tracking-widest font-semibold">WECOOKED</p>
          <h1 className="text-5xl font-bold">Why Are We Unique ?</h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center content-center gap-28 w-full mt-28">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-white p-4 flex items-center justify-center w-24 h-24 shadow-2xl">
              <Image
                src="/svg/HandIcon.svg"
                alt="Flexible Learning Icon"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-2xl font-bold my-8">
              Flexible Learning With Actual Chef
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Learn At Your Own Pace With Videos From Professional Chefs, Or
              Join Live Group Workshops To Cook With Classmates And Get
              Real-Time Advice. For A Tailored Experience, Study One-On-One With
              A Top Chef And Accelerate Your Progress.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-white p-4 flex items-center justify-center w-24 h-24 shadow-2xl">
              <Image
                src="/svg/Store.svg"
                alt="Order Ingredients Icon"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-2xl font-bold my-8">
              Order Ingredients From Our Partner Department Stores
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              You Can Easily Order High-Quality Ingredients From Our Partner
              Stores During Registration, With Convenient Home Delivery So You
              Can Start Cooking Right Away.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-white p-4 flex items-center justify-center w-24 h-24 shadow-2xl">
              <Image
                src="/svg/Tools.svg"
                alt="Learning Tools Icon"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-2xl font-bold my-8">
              Tools That Make Your Learning Easier
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Our Platform Features Tools To Enhance Your Learning, Including
              Countdown Timers For Efficient Cooking Sessions And Step-by-Step
              Video Tutorials That Guide You Through Each Stage Of The Process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}