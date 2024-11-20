'use client'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PauseIcon, PlayIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { Timestamp } from '../types/timestamp'
import { Video } from '../types/video'
import { Tutorial } from '../types/Tutorial'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

const VideoPlayer: React.FC<Video> = ({
  videoPath,
  timestamps: initialTimestamps,
  tutorial: initialTutorial,
}) => {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)

  const [currentSrc] = useState<string | null>(videoPath[0]?.src || '')
  const [quality, setQuality] = useState<string>(
    videoPath[0]?.quality || '720p'
  )
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [volume, setVolume] = useState<number>(1)
  const [playbackRate, setPlaybackRate] = useState<number>(1)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [isSound, setIsSound] = useState<boolean>(true)
  const [currentPopup, setCurrentPopup] = useState<string | null>(null)
  const [typePopup, setTypePopup] = useState<string | null>(null)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false)
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timeout | null>(null)
  const [timestamps, setTimestamps] = useState<Timestamp[]>(initialTimestamps)
  const [tutorial, setTutorial] = useState<Tutorial[]>(initialTutorial)
  const [currentTutorialId, setCurrentTutorialId] = useState<number | null>(
    null
  )

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const handleTimeUpdate = () => {
      const current = video.currentTime
      const duration = video.duration
      setProgress((current / duration) * 100)

      timestamps.forEach((timestamp) => {
        if (
          Math.floor(current) === Math.floor(timestamp.timeStop) &&
          !timestamp.timeTriggered
        ) {
          setCurrentPopup('Time Tracking')
          setCountdown(timestamp.timeCountdown)
          video.pause()
          setIsPlaying(false)
          setIsCountingDown(false)

          setTimestamps((prev) =>
            prev.map((t) =>
              t.timeStop === timestamp.timeStop
                ? { ...t, timeTriggered: true }
                : t
            )
          )
        }
      })

      tutorial.forEach((tutorialItem) => {
        if (
          tutorialItem.timeStop !== null &&
          Math.floor(current) === Math.floor(tutorialItem.timeStop) &&
          !tutorialItem.timeTriggered
        ) {
          setTypePopup('Step-by-Step Tutorial Available')
          setCurrentTutorialId(tutorialItem.tutorialId)
          video.pause()
          setIsPlaying(false)

          setTutorial((prev) =>
            prev.map((t) =>
              t.timeStop === tutorialItem.timeStop
                ? { ...t, timeTriggered: true }
                : t
            )
          )
        }
      })
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [timestamps, tutorial, isCountingDown])

  const handleTutorialConfirm = () => {
    if (currentTutorialId !== null) {
      router.push(
        `/chef/video`
      )
    }
  }

  // Keydown event listener for left and right arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const video = videoRef.current
      if (!video) return
      if (event.key === 'ArrowRight') {
        video.currentTime = Math.min(video.currentTime + 5, video.duration)
      } else if (event.key === 'ArrowLeft') {
        video.currentTime = Math.max(video.currentTime - 5, 0)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    const savedVolume = localStorage.getItem('videoVolume')
    if (savedVolume) {
      const parsedVolume = parseFloat(savedVolume)
      setVolume(parsedVolume)
      setIsSound(parsedVolume > 0)
      if (videoRef.current) {
        videoRef.current.volume = parsedVolume
      }
    }
  }, [])

  const increaseVolume = () => {
    const video = videoRef.current
    if (video) {
      const newVolume = Math.min(volume + 1, 1)
      video.volume = newVolume
      setVolume(newVolume)
      setIsSound(true)
      localStorage.setItem('videoVolume', newVolume.toString())
    }
  }

  const muteVideo = () => {
    const video = videoRef.current
    if (video) {
      video.volume = 0
      setVolume(0)
      setIsSound(false)
      localStorage.setItem('videoVolume', '0')
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    const video = videoRef.current
    if (video) {
      video.volume = newVolume
      setVolume(newVolume)
      setIsSound(newVolume > 0)
      localStorage.setItem('videoVolume', newVolume.toString())
    }
  }

  const handlePlaybackRateChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const rate = parseFloat(e.target.value)
    const video = videoRef.current
    if (video) {
      video.playbackRate = rate
      setPlaybackRate(rate)
    }
  }

  const handleProgressClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const video = videoRef.current
    if (!video) return

    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const newTime = (clickX / width) * video.duration
    video.currentTime = newTime
  }

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement
    if (!videoContainer) return

    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuality = e.target.value
    const selectedSource = videoPath.find(
      (videoPath) => videoPath.quality === selectedQuality
    )
    if (selectedSource) {
      const video = videoRef.current
      if (video) {
        const currentTime = video.currentTime
        const isPlayingNow = !video.paused
        video.src = selectedSource.src
        video.currentTime = currentTime
        if (isPlayingNow) {
          video.play()
        }
        setQuality(selectedQuality)
      }
    }
  }

  const handleVideoClick = () => {
    togglePlayPause()
  }

  const handlePopupAction = (action: 'start' | 'stop' | 'close') => {
    const video = videoRef.current
    if (!video) return

    if (action === 'start') {
      setIsCountingDown(true)
      setIsPlaying(false)

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev && prev > 1) {
            return prev - 1
          } else {
            clearInterval(interval)
            setCountdownInterval(null)
            setCurrentPopup(null)
            setTypePopup(null)
            setCountdown(null)
            setIsCountingDown(false)
            video.play()
            setIsPlaying(true)
            return null
          }
        })
      }, 1000)

      setCountdownInterval(interval)
    } else if (action === 'stop') {
      if (countdownInterval) {
        clearInterval(countdownInterval)
        setCountdownInterval(null)
      }
      video.pause()
      setIsPlaying(false)
      setIsCountingDown(false)
    } else if (action === 'close') {
      if (countdownInterval) {
        clearInterval(countdownInterval)
        setCountdownInterval(null)
      }
      setCurrentPopup(null)
      setTypePopup(null)
      setCountdown(null)
      setIsCountingDown(false)
      video.play()
      setIsPlaying(true)
    }
  }

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`
  }

  const handleRewind = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = Math.max(video.currentTime - 5, 0)
    }
  }

  const handleForward = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = Math.min(video.currentTime + 5, video.duration)
    }
  }

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="relative w-full bg-black">
        <video
          ref={videoRef}
          src={currentSrc || ''}
          className="w-full h-auto cursor-pointer"
          onClick={handleVideoClick}
        />

        {/* Popup */}
        {currentPopup && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white text-black w-[45%] h-[45%] px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
              <div className="font-semibold 2xl:pb-12 2xl:text-3xl text-2xl pb-6 bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                {currentPopup}
              </div>
              {countdown !== null && (
                <div className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text 2xl:p-4 2xl:text-7xl text-5xl p-3 border-4 border-[#fe5f43] border-solid rounded-lg">
                  {formatTime(countdown)}
                </div>
              )}
              <div className="flex space-x-4 2xl:pt-12 pt-6">
                <button
                  onClick={() => handlePopupAction('start')}
                  className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white p-3 rounded-full"
                >
                  <PlayIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handlePopupAction('stop')}
                  className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white p-3 rounded-full"
                >
                  <PauseIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute right-0 top-0">
                <button
                  onClick={() => handlePopupAction('close')}
                  className="absolute right-3 top-3 bg-transparent border-none p-0 cursor-pointer"
                >
                  <XMarkIcon className="w-6 h-6 text-[#F0725C] hover:text-[#FE3511] transition-colors" />
                </button>
              </div>
            </div>
          </div>
        )}

        {countdown !== null && isNaN(countdown) && typePopup && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white text-black 2xl:w-[45%] 2xl:h-1/3 h-[45%] w-1/2 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
              <div className="flex justify-between w-11/12 gap-12">
                <div className="">
                  <div className="absolute mt-2 2xl:w-[70px] 2xl:h-[70px] w-14 h-14 bg-[#F0725C] opacity-20 rounded-xl"></div>
                  <PlayCircleIcon className="relative top-5 left-[13px] 2xl:w-11 2xl:h-11 w-8 h-8 text-[#FE3511]" />
                </div>
                <div className="w-5/6">
                  <div className="font-semibold 2xl:text-2xl text-xl bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
                    {typePopup}
                  </div>
                  <div className="text-gray-500 pr-2">
                    <p className="my-4 2xl:my-6 text-sm">
                      Click here to access the full tutorial and master this
                      recipe with detailed guidance!
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleTutorialConfirm}
                className="py-3 w-11/12 px-4 text-sm 2xl:text-md rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Yes, Confirm
              </button>
              <div className="absolute right-0 top-0">
                <button
                  onClick={() => handlePopupAction('close')}
                  className="absolute right-3 top-3 bg-transparent border-none p-0 cursor-pointer"
                >
                  <XMarkIcon className="w-6 h-6 text-[#F0725C] hover:text-[#FE3511] transition-colors" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 flex items-center space-x-4 px-4 py-2">
          <button
            onClick={togglePlayPause}
            className="text-white focus:outline-none"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg
                className="w-7 h-7 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 6H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 0h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 18V6l8 6-8 6Z"
                />
              </svg>
            )}
          </button>

          {/* ฺ Backward Button */}
          <button
            onClick={handleRewind}
            className="text-white focus:outline-none"
            aria-label="Rewind 5 seconds"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v14l-7-7 7-7zM19 5v14l-7-7 7-7z"
              />
            </svg>
          </button>

          {/*  ฺForward Button */}
          <button
            onClick={handleForward}
            className="text-white focus:outline-none"
            aria-label="Forward 5 seconds"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v14l7-7-7-7zM5 5v14l7-7-7-7z"
              />
            </svg>
          </button>

          {/* Progress Bar */}
          <div
            className="flex-1 h-2 bg-gray-300 rounded cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <div
              className="h-2 bg-gradient-to-r from-[#fe3511] to-[#7600d0] rounded"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Render timestamp markers */}
            {timestamps.map((timestamp) => {
              const duration = videoRef.current?.duration || 1
              const markerPosition = (timestamp.timeStop / duration) * 100

              return (
                <div
                  key={timestamp.timeStop}
                  className="absolute h-2 bg-yellow-500"
                  style={{
                    left: `${markerPosition}%`,
                    top: 0,
                    width: '3px',
                    height: '100%',
                    transform: 'translateX(-50%)',
                  }}
                />
              )
            })}

            {/* Render tutorial markers if countdown is NaN */}
            {countdown !== null &&
              isNaN(countdown) &&
              tutorial.map((tutorial) => {
                const duration = videoRef.current?.duration || 1
                const markerPosition =
                  tutorial.timeStop !== null
                    ? (tutorial.timeStop / duration) * 100
                    : 0

                return (
                  <div
                    key={tutorial.timeStop}
                    className="absolute h-2 bg-blue-500"
                    style={{
                      left: `${markerPosition}%`,
                      top: 0,
                      width: '3px',
                      height: '100%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )
              })}
          </div>

          {/* Current Time */}
          <div className="text-white text-sm">
            {videoRef.current
              ? `${Math.floor(videoRef.current.currentTime / 60)
                  .toString()
                  .padStart(2, '0')}:${(
                  '0' + Math.floor(videoRef.current.currentTime % 60)
                ).slice(-2)} / ${Math.floor(videoRef.current.duration / 60)
                  .toString()
                  .padStart(2, '0')}:${(
                  '0' + Math.floor(videoRef.current.duration % 60)
                ).slice(-2)}`
              : '00:00 / 00:00'}
          </div>

          {/* Volume Control */}
          <button
            onClick={isSound ? muteVideo : increaseVolume}
            className="text-white"
            aria-label={isSound ? 'Volume Mute' : 'Volume Up'}
          >
            {isSound ? (
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14"
                />
              </svg>
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-28 appearance-none bg-white h-2 rounded-full"
            style={{ accentColor: 'white' }}
          />

          {/* Playback Rate Control */}
          <select
            onChange={handlePlaybackRateChange}
            value={playbackRate}
            className="bg-gray-700 text-white p-0.5 rounded-md outline-none"
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>

          {/* Quality Control */}
          <select
            onChange={handleQualityChange}
            value={quality}
            className="bg-gray-700 text-white p-0.5 rounded-md outline-none"
          >
            {videoPath.map((videoPath) => (
              <option key={videoPath.quality} value={videoPath.quality}>
                {videoPath.quality}
              </option>
            ))}
          </select>
          <button onClick={toggleFullscreen} className="text-white">
            {isFullscreen ? (
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 9h4m0 0V5m0 4L4 4m15 5h-4m0 0V5m0 4 5-5M5 15h4m0 0v4m0-4-5 5m15-5h-4m0 0v4m0-4 5 5"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
