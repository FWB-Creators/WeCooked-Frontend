'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '../../components/video-player/VideoPlayer'
import { videoData } from '../../data/video'
import { HandThumbUpIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

export default function VideoControl() {
  const { videoID } = useParams()

  useEffect(() => {
    console.log('Video ID:', videoID)
  }, [videoID])

  const videoId = Array.isArray(videoID) ? videoID[0] : videoID
  const video = videoData.find((video) => video.videoID === parseInt(videoId))

  if (!video) {
    return <p className="flex justify-center text-white">Video not found</p>
  }

  const { videoTitle, videoPath, timestamps, tutorial } = video

  const firstTutorialId = tutorial && tutorial.length > 0 ? tutorial[0].tutorialId : null

  return (
    <div className="relative w-full p-4">
      <div className="w-full bg-gray-100 rounded-lg">
        <span className="flex px-8 py-6 font-light">
          <Link href="/client/my-learning">My Learning /</Link>
          <p className="pl-1 font-semibold">{videoTitle}</p>
        </span>
        {videoPath ? (
          <VideoPlayer
            videoID={parseInt(videoId)}
            videoTitle={videoTitle}
            videoPath={videoPath}
            timestamps={timestamps}
            tutorial={tutorial}
          />
        ) : (
          <p>No video available</p>
        )}
        <p className="px-8 py-6 font-light">
          <span className="text-3xl font-bold">{videoTitle}</span>
        </p>
        <div className="flex justify-between px-8 pb-6">
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
          <div className="flex justify-center items-center">
            <button className="flex hover:text-red-500">
              <HandThumbUpIcon className="w-6 h-6" />
              <p className="ml-2 font-bold">FAVORITE CHEF</p>
            </button>
            {firstTutorialId !== null && (
              <Link 
                href={`/client/my-learning/tutorial/${firstTutorialId}`}
                className="flex ml-10 hover:text-red-500"
              >
                <PlayCircleIcon className="w-6 h-6" />
                <p className="ml-2 font-bold">TUTORIAL</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}