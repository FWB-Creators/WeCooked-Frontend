'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { videoData } from '../../data/video'

export default function TutorialComponent() {
  const { videoID, tutorialId } = useParams()
  const currentTutorialId = parseInt(
    Array.isArray(tutorialId) ? tutorialId[0] : tutorialId,
    10
  )
  const currentVideoId = parseInt(
    Array.isArray(videoID) ? videoID[0] : videoID,
    10
  )

  const currentVideo = videoData.find((v) => v.videoID === currentVideoId)

  if (!currentVideo) {
    return <p className="text-center text-red-500">Video not found</p>
  }

  const currentTutorial = currentVideo.tutorial.find(
    (t) => t.tutorialId === currentTutorialId
  )

  if (!currentTutorial) {
    return <p className="text-center text-red-500">Tutorial not found</p>
  }

  const otherTutorials = currentVideo.tutorial.filter(
    (t) => t.tutorialId !== currentTutorialId
  )

  return (
    <div>
      <div className="relative w-full p-4">
        <div className="w-full bg-gray-100 rounded-lg">
          <div className="flex px-8 py-6">
            <p className="text-xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
              Tutorial: {currentTutorial.tutorialTitle}
            </p>
          </div>
          <div className="flex flex-col px-8 pb-4">
            <p className="text-lg font-semibold text-black pb-6">
              {currentTutorial.tutorialDetail}
            </p>
          </div>
        </div>
      </div>
      {otherTutorials.length > 0 && (
        <div className="relative w-full p-4">
          <div className="w-full bg-gray-100 rounded-lg">
            <div className="flex px-8 py-6">
              <p className="text-xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                Other {otherTutorials.length} Tutorial
                {otherTutorials.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8">
              {otherTutorials.map((tutorial) => (
                <div
                  key={tutorial.tutorialId}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image
                      src="/images/chop.png"
                      alt={tutorial.tutorialTitle}
                      width={500}
                      height={500}
                      className="w-full h-48 object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {tutorial.tutorialTitle}
                    </h3>
                    <p className="text-gray-600 text-sm mb-8 line-clamp-3">
                      {tutorial.tutorialDetail}
                    </p>
                    <Link
                      href={`/client/my-learning/${currentVideoId}/tutorial/${tutorial.tutorialId}`}
                      className="flex justify-center"
                    >
                      <div className="flex justify-center items-center px-8 py-3 text-white bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-transform duration-300 hover:scale-105">
                        Watch Tutorial
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}