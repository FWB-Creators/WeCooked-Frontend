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
      <div className="absolute top-32">
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className="text-lg tracking-widest font-semibold">WECOOKED</p>
          <h1 className="text-5xl font-bold">Why Are We Unique ?</h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center content-center gap-24 w-full">
          <h1>Flexible Learning With Actual Chef</h1>
          <p>Order Ingredients From Our Partner Department Stores</p>
          <p>Tools That Make Your Learning Easier</p>
        </div>
      </div>
    </div>
  )
}