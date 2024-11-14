'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import VideoTutorialPlayer from './VideoTutorialPlayer'
import { videoData } from '../../data/video'

export default function VideoTutorialControl() {
  const { tutorialId } = useParams()

  const currentTutorialId = parseInt(Array.isArray(tutorialId) ? tutorialId[0] : tutorialId)

  useEffect(() => {
    console.log('Tutorial ID:', currentTutorialId)
  }, [currentTutorialId])

  const video = videoData.find((video) =>
    video.tutorial.some(tutorial => tutorial.tutorialId === currentTutorialId)
  )

  if (!video) {
    return <p className="flex justify-center text-white">Video not found</p>
  }

  const { videoID, videoTitle, timestamps, tutorial } = video
  const currentTutorial = tutorial.find(t => t.tutorialId === currentTutorialId)

  if (!currentTutorial) {
    return <p className="flex justify-center text-white">Tutorial not found</p>
  }

  return (
    <div className="relative w-full p-4">
      <div className="w-full bg-gray-100 rounded-lg">
        <span className="flex px-8 py-6 font-light">
          <Link href="/client/my-learning">My Learning /</Link>
          <Link href={`/client/my-learning/${videoID}`}>
            <p className="pl-1">{videoTitle} /</p>
          </Link>
          <p className="pl-1 font-semibold">Tutorial: {currentTutorial.tutorialTitle}</p>
        </span>
        {currentTutorial.tutorialVideo ? (
          <VideoTutorialPlayer
            videoID={videoID}
            videoTitle={videoTitle}
            videoPath={[{ quality: '1080p', src: currentTutorial.tutorialVideo }]}
            timestamps={timestamps}
            tutorial={tutorial}
          />
        ) : (
          <p className="px-8">No video available</p>
        )}
        <p className="px-8 py-6 font-light">
          <span className="text-3xl font-bold">Tutorial: {currentTutorial.tutorialTitle}</span>
        </p>
        <div className="flex px-8 pb-6">
          <div className="flex">
            <div className="flex items-center rounded-full w-11 h-11 mr-2">
              <Image
                src="/images/chef.png"
                alt="Profile Picture"
                width={55}
                height={55}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-black font-semibold">Chef Moo Deng</p>
              <p className="text-gray-500">Expired Food Master</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
