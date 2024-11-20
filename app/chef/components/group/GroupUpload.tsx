'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  XMarkIcon,
  CheckIcon,
  CalendarIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'
import { CldUploadWidget } from 'next-cloudinary'
import { CloudinaryUploadWidgetResults } from 'next-cloudinary'
import CustomCalendar from './CustomCalendar'
import GroupCardUnenrolled from './GroupCardUnenrolled'
import TimeInput from './TimeInput'

interface CourseSubmission {
  courseName: string
  courseDetail: string
  videoUrl: string
  coverImageUrl: string
}

export default function GroupUpload() {
  const [isUploadComplete, setIsUploadComplete] = useState<boolean>(false)
  const [coverImageUrl, setCoverImageUrl] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [courseName, setCourseName] = useState<string>('')
  const [courseDetail, setCourseDetail] = useState<string>('')
  const [courseZoom, setCourseZoom] = useState<string>('')
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [courseCategory, setCourseCategory] = useState<string>('')
  const [courseParticipants, setCourseParticipants] = useState<string>('')
  const [coursePrice, setCoursePrice] = useState<number>(0)
  const [coursePackPrice, setCoursePackPrice] = useState<number>(0)
  const [courseIngredients, setCourseIngredients] = useState<string>('')
  const [courseTime, setCourseTime] = useState<string>('12:00 AM')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const [value, setValue] = useState<{
    startDate: Date | null
  }>({
    startDate: null,
  })

  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

  useEffect(() => {
    const validateFirstStepForm = () => {
      const isValid = !!(
        courseName.trim() &&
        courseDetail.trim() &&
        courseZoom.trim() &&
        courseCategory.trim() &&
        coursePrice &&
        coursePackPrice &&
        courseParticipants.trim() &&
        courseTime.trim() &&
        courseIngredients.trim() &&
        value.startDate
      )
      setIsFormValid(isValid)
    }

    validateFirstStepForm()
  }, [
    courseName,
    courseDetail,
    courseZoom,
    courseCategory,
    coursePrice,
    coursePackPrice,
    courseParticipants,
    courseTime,
    courseIngredients,
    value.startDate,
  ])

  const chefNameDate = () => {
    if (value.startDate) {
      const start = value.startDate.toLocaleDateString()
      return `${start}`
    }
    return ''
  }

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
    setCoverImageUrl('')
    setCourseName('')
    setCourseDetail('')
    setCourseTime('12:00 AM')
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
                  className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>

              <div>
                <label htmlFor="courseZoom" className="block mb-1">
                  Zoom Link
                </label>
                <input
                  id="courseZoom"
                  type="text"
                  placeholder="Course Zoom Link"
                  required
                  value={courseZoom}
                  onChange={(e) => setCourseZoom(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="coursePrice" className="block mb-1">
                    Price
                  </label>
                  <input
                    id="coursePrice"
                    type="number"
                    min="0"
                    placeholder="Course Price"
                    required
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
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
                  <label htmlFor="coursePackPrice" className="block mb-1">
                    Pack Price
                  </label>
                  <input
                    id="coursePackPrice"
                    type="number"
                    min="0"
                    placeholder="Course Pack Price"
                    required
                    value={coursePackPrice}
                    onChange={(e) => setCoursePackPrice(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1 relative">
                <p className="mt-6">Select Date Range</p>
                <input
                  ref={inputRef}
                  type="text"
                  readOnly
                  placeholder="Select Date"
                  value={chefNameDate()}
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full pl-4 py-2 rounded-lg bg-[#F2F4F8] text-gray-400 border-b-2 border-[#C1C7CD] outline-none cursor-pointer"
                />
                <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 bottom-3" />
                {isCalendarOpen && (
                  <div ref={calendarRef} className="relative z-20">
                    <CustomCalendar
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue)
                        if (newValue.startDate) {
                          setIsCalendarOpen(false)
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="courseParticipants" className="block mb-1">
                    Participants
                  </label>
                  <input
                    id="courseParticipants"
                    type="text"
                    placeholder="10 Peoples"
                    required
                    value={courseParticipants}
                    onChange={(e) => setCourseParticipants(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="courseTime" className="block mb-1">
                    Time
                  </label>
                  <TimeInput
                    value={courseTime}
                    onChange={(newTime) => setCourseTime(newTime)}
                  />
                </div>
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
                      className="rounded-lg h-[213px] w-full flex items-center justify-center bg-gray-100 border-b-2 border-[#C1C7CD] cursor-pointer"
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
            <GroupCardUnenrolled
              groupId={0}
              groupTitle={courseName}
              groupDetail={courseDetail}
              groupPrice={Number(coursePrice)}
              groupPackPrice={Number(coursePackPrice)}
              groupNumberofparticipants={Number(courseParticipants)}
              groupDate={value.startDate || new Date()}
              groupTime={courseTime}
              groupCategory={courseCategory}
              groupLinkZoom={courseZoom}
              groupPicture={coverImageUrl}
              chefImage="/images/chef.png"
              chefName="Chef John"
              reviewRating={4.5}
              groupStatus={false}
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
            <PhotoIcon className="w-6 h-6 mr-2" />
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
                Upload New Group Course
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
                    {step === 1 ? 'Upload New Video Course' : 'Confirm Setting'}
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