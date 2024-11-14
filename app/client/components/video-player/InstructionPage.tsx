'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { videoData } from '../../data/video'
import { instruction } from '../../data/instruction'

export default function InstructionPage() {
  const { videoID } = useParams()

  useEffect(() => {
    console.log('Video ID:', videoID)
  }, [videoID])

  const videoId = Array.isArray(videoID) ? videoID[0] : videoID
  const video = videoData.find((video) => video.videoID === parseInt(videoId))

  if (!video) return 

  const { videoTitle } = video

  const instructionData = instruction.find(
    (inst) => inst.instructionId === parseInt(videoId)
  )

  if (!instructionData) {
    return (
      <p className="flex justify-center text-white">Instruction not found</p>
    )
  }

  const { instructionDetail, instructionStep, instructionIngredient } =
    instructionData

  const formattedSteps = instructionStep
    .split(/(\d+\.)/)
    .filter(Boolean)
    .map((step, index) => {
      if (step.match(/^\d+\./)) {
        return <span key={index} className="font-bold block mt-4 mb-2">{step}</span>
      }
      const formattedStep = step.split('\n').map((line, i) => {
        if (line.trim().startsWith('-')) {
          return (
            <li key={i} className="ml-6 my-1">
              {line.trim().substring(1).trim()}
            </li>
          )
        }
        return <p key={i} className="my-1">{line.trim()}</p>
      })
      return <div key={index}>{formattedStep}</div>
    })

  const formattedIngredients = instructionIngredient
    .split('\n')
    .map((ingredient, index) => (
      <li key={index} className="my-1 ml-6">
        {ingredient.trim().startsWith('-')
          ? ingredient.trim().substring(1).trim()
          : ingredient.trim()}
      </li>
    ))

  return (
    <div className="relative w-full p-4">
      <div className="w-full bg-gray-100 rounded-lg">
        <span className="flex px-8 py-6">
          <p className="text-xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
            {videoTitle}
          </p>
        </span>
        <div className="flex flex-col px-8 pb-4">
          <p className="text-lg font-semibold text-black pb-6 border-b-2 border-gray-700">
            {instructionDetail}
          </p>
          <div className="flex">
            <div className="w-2/3 pr-6 pb-6 border-r-2 border-gray-700">
              <p className="text-xl py-4 font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                Instructions
              </p>
              <div className="text-lg font-semibold text-black">
                {formattedSteps}
              </div>
            </div>
            <div className="w-1/3 pl-6 pb-6">
              <p className="text-xl py-4 font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                Ingredients
              </p>
              <ul className="text-lg font-semibold text-black pb-4 list-disc">
                {formattedIngredients}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}