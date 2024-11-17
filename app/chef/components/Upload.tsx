import { useState } from 'react'
import {
  CloudArrowUpIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CldUploadWidget } from 'next-cloudinary'

export default function Upload() {
  const [isUploadComplete, setIsUploadComplete] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string>('')

  interface UploadResult {
    info: {
      secure_url: string;
    };
  }

  const handleUploadSuccess = (result: unknown) => {
    const uploadResult = result as UploadResult;
    console.log('Upload successful:', uploadResult)
    setIsUploadComplete(true)
    setVideoUrl(uploadResult.info.secure_url)
  }

  return (
    <div>
      <CldUploadWidget
        uploadPreset="next_cloudinary_app"
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="flex justify-center items-center px-6 py-3 text-white bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-transform duration-300 hover:scale-105"
          >
            <VideoCameraIcon className="w-6 h-6 mr-2" />
            Upload
          </button>
        )}
      </CldUploadWidget>

      {/* Form Popup */}
      {isUploadComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="relative bg-white rounded-lg w-[800px] p-6 z-50">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-[#FF4D4D] text-xl font-medium">
                Smoked Salmon Carpaccio
              </h2>
              <button
                onClick={() => setIsUploadComplete(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between my-6">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center text-sm">
                  1
                </div>
                <span className="ml-2 text-[#FF4D4D] text-sm">
                  Upload new video course
                </span>
                <div className="w-32 h-[2px] mx-4 bg-gray-200">
                  <div className="w-full h-full bg-[#FF4D4D]" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-300 flex items-center justify-center text-sm">
                  2
                </div>
                <span className="ml-2 text-gray-400 text-sm">Add Bookmark</span>
                <div className="w-32 h-[2px] mx-4 bg-gray-200" />
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-300 flex items-center justify-center text-sm">
                  3
                </div>
                <span className="ml-2 text-gray-400 text-sm">
                  Confirm Setting
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Form */}
              <div className="space-y-4">
                <div>
                  <p className="mb-1">Name</p>
                  <input
                    type="text"
                    placeholder="Course Name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
                <div>
                  <p className="mb-1">Detail</p>
                  <textarea
                    placeholder="Course Detail"
                    required
                    className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-1">Category</p>
                    <input
                      type="text"
                      placeholder="Course Category"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                    />
                  </div>
                  <div>
                    <p className="mb-1">Price</p>
                    <input
                      type="text"
                      placeholder="Course Price"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-1">Ingrediant</p>
                  <textarea
                    placeholder="Course Ingrediant"
                    required
                    className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-navy-800 rounded-lg overflow-hidden">
                  {/* preview cloudinary video here */}
                  {videoUrl && (
                    <video
                      className="w-full rounded-lg"
                      controls
                      src={videoUrl}
                    />
                  )}
                </div>

                <div>
                  <p className="mb-1">Photo</p>
                  <div className="rounded-lg h-[19rem] flex items-center justify-center bg-gray-100 cursor-pointer">
                    <div className="flex flex-col items-center">
                      <CloudArrowUpIcon className="size-24 text-[#BCBEC0]" />
                      <p className="text-[#BCBEC0]">cesce</p>
                    </div>
                    <input id="photo-upload" type="file" className="hidden" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-6">
              <div className="px-8 py-2.5 text-white cursor-pointer bg-gradient-to-b from-[#F0725C] to-[#FE3511] rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Next
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
