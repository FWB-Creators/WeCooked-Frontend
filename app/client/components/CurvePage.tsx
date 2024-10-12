import Image from 'next/image';

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
      <div className="absolute top-32 mx-24">
        <div className="flex flex-col justify-center items-center space-y-4 my-10">
          <p className="text-lg tracking-widest font-semibold">WECOOKED</p>
          <h1 className="text-5xl font-bold">Why Are We Unique ?</h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center content-center gap-28 w-full mt-24">
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
            Learn at your own pace with videos from professional chefs, or join live group
            workshops to cook with classmates and get real-time advice. For a tailored experience,
            study one-on-one with a top chef and accelerate your progress.
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
              You can easily order high-quality ingredients from our partner
              stores during registration, with convenient home delivery so you
              can start cooking right away.
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
              Our platform features tools to enhance your learning, including
              countdown timers for efficient cooking sessions and step-by-step
              video tutorials that guide you through each stage of the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
