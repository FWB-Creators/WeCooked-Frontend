import Image from 'next/image'

export default function GroupCurvePage() {
  return (
    <div className="relative w-full flex flex-col items-center mb-6">
      <Image
        src="/svg/Bg_group_curve.svg"
        alt="Red Background"
        width={1920}
        height={400}
        className="w-full"
        priority
      />
      <div className="absolute top-20 left-16 text-white p-4">
        <h1 className="font-bold text-xl mt-2">ZOOM</h1>
        <h2 className="font-bold text-4xl mt-2">
          Join the workshop via zoom meeting
        </h2>
        <p className="mt-2">
          It supports HD video and audio and offers screen sharing, chat,
          breakout rooms, and recording features.
        </p>
      </div>
      <div className="absolute top-32 right-16 p-4">
        <button className="rounded-full w-36 h-12 border-2 border-white text-white font-semibold text-lg">
          Join
        </button>
      </div>
    </div>
  )
}
