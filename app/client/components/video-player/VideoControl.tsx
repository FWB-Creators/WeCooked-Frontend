'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from '../../components/video-player/VideoPlayer'
import { videoData } from '../../data/video'
import { HandThumbUpIcon, PlayCircleIcon, StarIcon as Staroutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function VideoControl() {
  const { videoID } = useParams()

  useEffect(() => {
    console.log('Video ID:', videoID)
  }, [videoID])

  const [showRatingPopup, setShowRatingPopup] = useState(false)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const videoId = Array.isArray(videoID) ? videoID[0] : videoID
  const video = videoData.find((video) => video.videoID === parseInt(videoId))

  if (!video) {
    return <p className="flex justify-center text-white">Video not found</p>
  }

  const { videoTitle, videoPath, timestamps, tutorial } = video
  const firstTutorialId =
    tutorial && tutorial.length > 0 ? tutorial[0].tutorialId : null

  const toggleRatingPopup = () => setShowRatingPopup(!showRatingPopup)

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmitReview = async() => {

    const ratingCourseData = {
      rating: rating,
      courseId: videoID,
      reviewDetail: comment,
    }

    console.log('Rating:', rating)
    console.log('Comment:', comment)

     try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/ratingcourse`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ratingCourseData),
        }
      )

      if (response.ok) {
        setShowRatingPopup(false)
      } else {
        console.error('Failed to sign up')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
    }
  }

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
            <button
              className="flex hover:text-red-500"
              onClick={toggleRatingPopup}
            >
              <Staroutline className="w-6 h-6" />
              <p className="ml-2 font-bold">RATING</p>
            </button>
            <button className="flex ml-10 hover:text-red-500">
              <HandThumbUpIcon className="w-6 h-6" />
              <p className="ml-2 font-bold">FAVORITE CHEF</p>
            </button>
            {firstTutorialId !== null && (
              <Link
                href={`/client/my-learning/${videoId}/tutorial/${firstTutorialId}`}
                className="flex ml-10 hover:text-red-500"
              >
                <PlayCircleIcon className="w-6 h-6" />
                <p className="ml-2 font-bold">TUTORIAL</p>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Rating Popup */}
      {showRatingPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="absolute bg-white text-black w-[45%] h-[45%] px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
            <div className="font-semibold text-3xl bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
              Rate this video
            </div>
            {/* Rating Stars */}
            <div className="flex space-x-1 my-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`w-8 h-8 ${
                    rating >= star ? 'text-green-500' : 'text-gray-300'
                  }`}
                >
                  <StarIcon className="w-full h-full" />
                </button>
              ))}
            </div>
            <div>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className=" mt-4 p-2 w-[400px] h-44 border-2 border-[#FE3511] rounded-md outline-none"
                placeholder="Leave a comment..."
              />
              <div className="flex justify-end space-x-6 mt-4">
                <button
                  onClick={handleSubmitReview}
                  className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0">
              <button
                onClick={toggleRatingPopup}
                className="absolute right-3 top-3 bg-transparent border-none p-0 cursor-pointer"
              >
                <XMarkIcon className="w-6 h-6 text-[#F0725C] hover:text-[#FE3511] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}