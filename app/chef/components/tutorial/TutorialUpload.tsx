import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  VideoCameraIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import { CldUploadWidget } from 'next-cloudinary'
import { CloudinaryUploadWidgetResults } from 'next-cloudinary'
import VideoPlayer from '../VideoPlayer'

interface Bookmark {
  id: number
  title: string
  detail: string
}

interface CourseSubmission {
  courseName: string
  courseDetail: string
  videoUrl: string
  coverImageUrl: string
}

export default function TutorialUpload() {
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false)
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [coverImageUrl, setCoverImageUrl] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [courseName, setCourseName] = useState<string>('')
  const [courseDetail, setCourseDetail] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

  useEffect(() => {
    const isValid = !!(
      courseName.trim() &&
      courseDetail.trim() &&
      videoUrl &&
      coverImageUrl
    )
    setIsFormValid(isValid)
  }, [
    courseName,
    courseDetail,
    videoUrl,
    coverImageUrl,
  ])

const handleSubmit = async () => {
  if (!isFormValid) return

  setIsSubmitting(true)
  setSubmitError(null)

  try {
    const courseData: CourseSubmission = {
      courseName,
      courseDetail,
      videoUrl,
      coverImageUrl,
    }

    const response = await mockSubmitToAPI(courseData) // Pass courseData here

    if (response.success) {
      setSubmitSuccess(true)
      resetForm()
    } else {
      throw new Error('Course submission failed')
    }
  } catch (error) {
    setSubmitError(error instanceof Error ? error.message : 'Unknown error')
  } finally {
    setIsSubmitting(false)
  }
}

const mockSubmitToAPI = async (courseData: CourseSubmission) => {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    courseId: `course_${Date.now()}`,
    courseDetails: courseData
  }
}

  const resetForm = () => {
    setVideoUrl('')
    setCoverImageUrl('')
    setBookmarks([])
    setCourseName('')
    setCourseDetail('')
    setCurrentStep(1)
    setIsUploadComplete(false)
  }

  const handleUploadSuccess = (results: CloudinaryUploadWidgetResults) => {
    console.log('Upload successful:', results)
    setIsUploadComplete(true)
  
    if (results.info && typeof results.info !== 'string') {
      const secureUrl = results.info.secure_url
      const resourceType = results.info.resource_type
  
      if (secureUrl) {
        if (resourceType === 'image') {
          setCoverImageUrl(secureUrl)
        } else if (resourceType === 'video') {
          setVideoUrl(secureUrl)
        }
      }
    }
  }

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (submitError) {
    console.error('Course submission failed:', submitError)
  }
  if (submitSuccess) {
    console.log('Course submitted successfully!')
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
                  className="w-full h-[393px] px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
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
                  uploadPreset={
                    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                  }
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
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-medium bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-transparent bg-clip-text">
              Review Your Course
            </h3>
            <VideoPlayer
              tutorial={bookmarks.map((bookmark) => ({
                tutorialId: bookmark.id,
                tutorialVideo: '',
                tutorialTitle: bookmark.title,
                tutorialDetail: '',
              }))}
              // tutorial={[]}
              videoID={bookmarks.length + 1}
              videoTitle={videoUrl ? 'Review Video' : 'Default Title'}
              videoPath={videoUrl ? [{ quality: '720p', src: videoUrl }] : []}
              timestamps={bookmarks.map(() => ({
                timeTriggered: '',
              }))}
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
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
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
                Upload New Tutorial Course
              </h2>
              <button
                onClick={() => setIsUploadComplete(false)}
                className="text-[#FE3511]"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center my-10">
              {[1, 2].map((step) => (
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
                      : 'Confirm Setting'}
                  </span>
                  {step < 2 && (
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
                onClick={currentStep === 2 ? handleSubmit : handleNext}
                disabled={!isFormValid || isSubmitting}
                className="px-8 py-2.5 text-white cursor-pointer bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50"
              >
                {currentStep === 2
                  ? isSubmitting
                    ? 'Submitting...'
                    : 'Submit'
                  : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}