import Image from 'next/image'

export default function GroupCurvePage() {
  return (
    <div className="relative w-full flex flex-col items-center mb-6">
      <Image
        src="/svg/Bg_group_curve.svg"
        alt="Red Background"
        width={10}
        height={10}
        className="w-full h-auto"
      />
      <div className="absolute top-20 left-16 text-white">
        <p className="font-bold text-xl mt-2">ZOOM</p>
        <p className="font-bold text-4xl mt-2">
          Join the workshop via zoom meeting
        </p>
        <p className="mt-2">
          It supports HD video and audio and offers screen sharing, chat,
          breakout rooms, and recording features.
        </p>
      </div>
      <div className="absolute top-32 right-16">
        <button className="rounded-full w-36 h-12 border-2 border-white text-white font-semibold text-lg">
          Join
        </button>
      </div>
    </div>
  )
}
