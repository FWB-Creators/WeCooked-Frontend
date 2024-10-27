import Image from 'next/image'

export default function OrderIngredients() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-24 pb-12 py-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
          Order Ingredients Easily And Deliver Them To Your Home!
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
          If You Need Fresh Ingredients To Prepare Your Meals, Don&apos;t Worry!
          Our Website Allows You To Order Ingredients Directly From
          Participating Marts. Just Choose The Ingredients You Want And We Will
          Deliver Them To Your Doorstep. Fast And Convenient, So You Can Enjoy
          Cooking To The Fullest.
        </p>
      </div>
      <div className="relative w-1/2">
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/white-circle.png"
            alt="White Circle Background"
            width={520}
            height={520}
            className="absolute"
            priority
          />
          <Image
            src="/images/phone.png"
            alt="Phone showing ingredients order screen"
            width={300}
            height={600}
            className="relative z-10"
            priority
          />
        </div>
      </div>
    </div>
  )
}
