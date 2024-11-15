import Image from 'next/image'

export default function GroupLearning() {
  return (
    <div className="h-[750px] relative w-full flex flex-col items-center">
      <div className="absolute left-8 top-20 z-10 w-[45%]">
        <Image
          src="/images/pastadish.png"
          alt="Cooked Image"
          width={750}
          height={750}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute right-20 top-44 z-10 max-w-[45%]">
        <h3 className="py-1.5 text-2xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          November 15, 2024
        </h3>
        <h1 className="py-1.5 text-6xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Baking Artisan Bread
        </h1>
        <h2 className="py-1.5 text-5xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Online Workshop
        </h2>
        <p className="text-xl max-w-2xl pt-12">
          From rustic sourdough to baguettes, dive into the techniques behind
          creating bakery-style bread at home. This workshop is ideal for those
          looking to elevate their baking skills and understand fermentation.
        </p>
        <div className="flex items-center pt-8">
          <div className="flex items-center rounded-full w-11 h-11">
            <Image
              src="/images/chef.png"
              alt="Profile picture of chef"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="px-2 text-lg">Instructor:</p>
          <p className="text-lg underline underline-offset-4">
            Chief Sieng Utahnamnon
          </p>
        </div>
      </div>
    </div>
  )
}
