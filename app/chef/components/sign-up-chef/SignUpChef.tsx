'use client'
import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeSlashIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { CldUploadWidget } from 'next-cloudinary'

interface UploadResult {
  info: {
    secure_url: string
  }
}

export default function SignUpChef() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [coverImageUrl, setCoverImageUrl] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!coverImageUrl) return
    router.push('/chef/sign-up-chef/complete')
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleUploadSuccess = (result: unknown) => {
    const uploadResult = result as UploadResult
    const url = uploadResult.info.secure_url
    url.includes('image') 
    setCoverImageUrl(url)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen animate-fadeIn">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-24 w-full m-10 h-5/6">
        <h1 className="text-4xl font-bold mb-12 text-start w-full">
          Sign Up Chef
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-32 gap-y-6 w-full"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1">First Name</p>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>
              <div>
                <p className="mb-1">Last Name</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>
            </div>

            <div>
              <p className="mb-1">Email</p>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>

            <div className="relative">
              <div>
                <p className="mb-1">Password</p>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                />
              </div>
              {/* Eye Icon for Show/Hide Password */}
              <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                {showPassword ? (
                  <EyeSlashIcon
                    className="size-6 text-[#697077] mt-7"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIcon
                    className="size-6 text-[#697077] mt-7"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>

            <div>
              <p className="mb-1">Experience</p>
              <input
                type="text"
                placeholder="Experience"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>

            <div>
              <p className="mb-1">Bio</p>
              <textarea
                placeholder="Bio"
                required
                className="w-full min-h-32 max-h-32 px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <p className="mb-1">Phone</p>
              <input
                type="text"
                placeholder="Phone"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>

            <div>
              <p className="mb-1">Chef Specialty</p>
              <input
                type="text"
                placeholder="Chef Specialty"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              />
            </div>

            <div>
              <p className="mb-1">Photo</p>
              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={handleUploadSuccess}
              >
                {({ open }) => {
                  return (
                    <button
                    type="button"
                      onClick={() => open?.()}
                      aria-label="Upload profile photo"
                      className="rounded-lg h-[300px] w-full flex items-center justify-center bg-gray-100 border-b-2 border-[#C1C7CD] cursor-pointer"
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

          {/* Checkbox and Submit */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 border border-gray-300 rounded accent-[#FE3511]"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600">
                By registering you agree to the Sign Up Terms
              </label>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-1/2 mt-8 py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
