import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  VideoCameraIcon,
  XMarkIcon,
  PlusIcon,
  ClockIcon,
  BookmarkIcon,
  ArrowPathIcon,
  MinusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { CldUploadWidget } from 'next-cloudinary'
import { CheckIcon } from '@heroicons/react/24/outline'
import TutorialPopup from './TutorialPopup'
import VideoPlayer from './VideoPlayer'

interface Bookmark {
  id: number
  title: string
  time: string
  countdown: number
  isExpanded: boolean
}

interface UploadResult {
  info: {
    secure_url: string
  }
}

export default function Upload() {
  const [isUploadComplete, setIsUploadComplete] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [coverImageUrl, setCoverImageUrl] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [bookmarks, setBookmarks] = useState<
    {
      id: number
      title: string
      time: string
      countdown: number
      isExpanded: boolean
      isTutorial?: boolean
    }[]
  >([])
  const [courseName, setCourseName] = useState('')
  const [courseDetail, setCourseDetail] = useState('')
  const [courseCategory, setCourseCategory] = useState('')
  const [coursePrice, setCoursePrice] = useState('')
  const [courseIngredients, setCourseIngredients] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = !!(
      courseName.trim() &&
      courseDetail.trim() &&
      courseCategory.trim() &&
      coursePrice.trim() &&
      courseIngredients.trim()
    )
    setIsFormValid(isValid)
  }, [courseName, courseDetail, courseCategory, coursePrice, courseIngredients])

  const handleAddBookmark = (bookmark: {
    id: number
    title: string
    time: string
    countdown?: number
    isExpanded: boolean
    isTutorial?: boolean
  }) => {
    if (!bookmarks.some((b) => b.id === bookmark.id)) {
      setBookmarks((prev) => [
        ...prev,
        { ...bookmark, countdown: bookmark.countdown ?? 0, isExpanded: true },
      ])
    }
  }

  const handleUploadSuccess = (result: unknown) => {
    const uploadResult = result as UploadResult
    console.log('Upload successful:', uploadResult)
    setIsUploadComplete(true)

    if (uploadResult.info.secure_url.includes('image')) {
      setCoverImageUrl(uploadResult.info.secure_url)
    } else {
      setVideoUrl(uploadResult.info.secure_url)
    }
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const addNewBookmark = () => {
    const newBookmark: Bookmark = {
      id: bookmarks.length + 1,
      title: '',
      time: '0:00',
      countdown: 30,
      isExpanded: true,
    }
    setBookmarks([...bookmarks, newBookmark])
  }

  const handleResetBookmarks = () => {
    setBookmarks([])
  }

  const toggleExpand = (id: number) => {
    setBookmarks((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, isExpanded: !bookmark.isExpanded }
          : bookmark
      )
    )
  }

  const updateBookmarkTime = (id: number) => {
    const videoElement = document.querySelector('video')
    if (!videoElement) return

    const currentTime = videoElement.currentTime
    const minutes = Math.floor(currentTime / 60)
    const seconds = Math.floor(currentTime % 60)
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`

    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, time: timeString } : bookmark
      )
    )
  }

  const updateBookmarkTitle = (id: number, title: string) => {
    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, title } : bookmark
      )
    )
  }

  const deleteBookmark = (id: number) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
    setBookmarks(updatedBookmarks)
  }

  const updateCountdownTime = (id: number, value: string) => {
    const newCountdownValue = Math.max(0, parseInt(value, 10) || 0)
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, countdown: newCountdownValue }
          : bookmark
      )
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-2 gap-6 animate-fadeIn">
            <div className="space-y-4">
              <div>
                <label htmlFor="courseName" className="block mb-1">
                  Name
                </label>
                <input
                  id="courseName"
                  type="text"
                  placeholder="Course Name"
                  required
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>
              <div>
                <label htmlFor="courseDetail" className="block mb-1">
                  Detail
                </label>
                <textarea
                  id="courseDetail"
                  placeholder="Course Detail"
                  required
                  value={courseDetail}
                  onChange={(e) => setCourseDetail(e.target.value)}
                  className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="courseCategory" className="block mb-1">
                    Category
                  </label>
                  <input
                    id="courseCategory"
                    type="text"
                    placeholder="Course Category"
                    required
                    value={courseCategory}
                    onChange={(e) => setCourseCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="coursePrice" className="block mb-1">
                    Price
                  </label>
                  <input
                    id="coursePrice"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Course Price"
                    required
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="courseIngredients" className="block mb-1">
                  Ingredients
                </label>
                <textarea
                  id="courseIngredients"
                  placeholder="Course Ingredients"
                  required
                  value={courseIngredients}
                  onChange={(e) => setCourseIngredients(e.target.value)}
                  className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden">
                {videoUrl && (
                  <video
                    className="w-full rounded-lg mt-7"
                    controls
                    src={videoUrl}
                  />
                )}
              </div>

              <div>
                <p className="mb-1">Cover Image</p>
                <CldUploadWidget
                  uploadPreset="next_cloudinary_app"
                  onSuccess={handleUploadSuccess}
                >
                  {({ open }) => (
                    <button
                      onClick={() => open?.()}
                      className="rounded-lg h-[186px] w-full flex items-center justify-center bg-gray-100 border-b-2 border-[#C1C7CD] cursor-pointer"
                    >
                      {coverImageUrl ? (
                        <Image
                          src={coverImageUrl}
                          alt="Cover"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover rounded-lg"
                          unoptimized
                        />
                      ) : (
                        <div className="flex flex-col items-center">
                          <CloudArrowUpIcon className="w-16 h-16 text-[#ff6b50]" />
                          <p className="pt-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text">
                            Select image files to upload
                          </p>
                        </div>
                      )}
                    </button>
                  )}
                </CldUploadWidget>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="grid grid-cols-2 gap-6 animate-fadeIn">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button
                  className="flex items-center text-[#FE3511] hover:text-[#F0725C]"
                  onClick={() => handleAddBookmark}
                >
                  <TutorialPopup onAddBookmark={handleAddBookmark} />
                </button>

                <button
                  onClick={addNewBookmark}
                  className="flex items-center text-[#FE3511] hover:text-[#F0725C]"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  Count Down
                </button>
                <button
                  onClick={handleResetBookmarks}
                  className="flex items-center text-[#FE3511] hover:text-[#F0725C]"
                >
                  <MinusIcon className="w-5 h-5 mr-1" />
                  Reset
                </button>
              </div>

              <div className="space-y-3 max-h-[466px] h-[580px] overflow-y-auto bg-gray-200 rounded-lg">
                {bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="bg-gray-50 rounded-lg p-4 m-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpand(bookmark.id)}
                    >
                      <div className="flex items-center">
                        <BookmarkIcon className="w-5 h-5 text-[#FE3511] mr-2" />
                        <span>{bookmark.title || 'New Bookmark'}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{bookmark.time}</span>
                      </div>
                    </div>

                    {bookmark.isExpanded && (
                      <div className="mt-4 space-y-4">
                        <input
                          type="text"
                          placeholder="Bookmark Title"
                          className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 outline-none"
                          value={bookmark.title}
                          onChange={(e) =>
                            updateBookmarkTitle(bookmark.id, e.target.value)
                          }
                        />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="00:00"
                              className="w-24 px-4 py-2 rounded-lg bg-white border border-gray-200 outline-none"
                              value={bookmark.time}
                              readOnly
                            />
                            <button
                              className="text-[#FE3511]"
                              onClick={() => updateBookmarkTime(bookmark.id)}
                            >
                              <ArrowPathIcon className="w-5 h-5" />
                            </button>
                          </div>

                          {!bookmark.isTutorial ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                placeholder="30"
                                min="0"
                                className="w-20 text-center px-2 py-2 rounded-lg bg-white border border-gray-200 outline-none"
                                value={bookmark.countdown}
                                onChange={(e) =>
                                  updateCountdownTime(
                                    bookmark.id,
                                    e.target.value
                                  )
                                }
                              />
                              <span>Sec</span>
                            </div>
                          ) : (
                            ''
                          )}

                          <button onClick={() => deleteBookmark(bookmark.id)}>
                            <TrashIcon className="w-5 h-5 text-[#FE3511] cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden">
                {videoUrl && (
                  <video
                    className="w-full rounded-lg mt-7"
                    controls
                    src={videoUrl}
                  />
                )}
              </div>
              <div>
                <p className="mb-1">Cover Image</p>
                <CldUploadWidget
                  uploadPreset="next_cloudinary_app"
                  onSuccess={handleUploadSuccess}
                >
                  {({ open }) => {
                    return (
                      <button
                        onClick={() => open?.()}
                        className="rounded-lg h-[185px] w-full flex items-center justify-center bg-gray-100 border-b-2 border-[#C1C7CD] cursor-pointer"
                      >
                        {coverImageUrl ? (
                          <Image
                            src={coverImageUrl}
                            alt="Cover"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover rounded-lg"
                            unoptimized
                          />
                        ) : (
                          <div className="flex flex-col items-center">
                            <CloudArrowUpIcon className="w-16 h-16 text-[#ff6b50]" />
                            <p className="pt-2 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text">
                              Select image files to upload
                            </p>
                          </div>
                        )}
                      </button>
                    )
                  }}
                </CldUploadWidget>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-medium">Review Your Course</h3>
            <VideoPlayer
              videoID={1}
              videoTitle="Sample Video"
              videoPath={videoUrl ? [{ quality: '720p', src: videoUrl }] : []}
              timestamps={bookmarks}
              tutorial={[]}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <CldUploadWidget
        uploadPreset="next_cloudinary_app"
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button
            onClick={() => open?.()}
            className="flex justify-center items-center px-6 py-3 text-white bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-transform duration-300 hover:scale-105"
          >
            <VideoCameraIcon className="w-6 h-6 mr-2" />
            Upload
          </button>
        )}
      </CldUploadWidget>

      {isUploadComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="relative bg-white rounded-lg w-2/3 p-6 z-50">
            <div className="flex justify-between items-center border-b border-[#FE3511] pb-6">
              <h2 className="bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text text-2xl font-medium">
                Upload New Course
              </h2>
              <button
                onClick={() => setIsUploadComplete(false)}
                className="text-[#FE3511]"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center my-10">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      currentStep === step
                        ? 'bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white'
                        : currentStep > step
                        ? 'bg-green-500 text-white'
                        : 'border-2 border-gray-300 text-gray-300'
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      currentStep === step
                        ? 'bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text'
                        : currentStep > step
                        ? 'text-green-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {step === 1
                      ? 'Upload New Video Course'
                      : step === 2
                      ? 'Add Bookmark'
                      : 'Confirm Setting'}
                  </span>
                  {step < 3 && (
                    <div className="w-32 h-[2px] mx-4 bg-gray-200">
                      <div
                        className={`h-full ${
                          currentStep === step
                            ? 'bg-gradient-to-b from-[#F0725C] to-[#FE3511]'
                            : currentStep >= step
                            ? 'text-green-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {renderStepContent()}

            <div className="flex justify-between mt-6">
              {currentStep === 1 && <div></div>}
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-8 py-2.5 text-[#FE3511] border border-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!isFormValid}
                className="px-8 py-2.5 text-white cursor-pointer bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {currentStep === 3 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
