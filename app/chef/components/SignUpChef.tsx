"use client";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon, PhotoIcon } from '@heroicons/react/16/solid';

export default function SignUpChef() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [photoFileName, setPhotoFileName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!photoFileName) {
      setErrorMessage('Please upload your photo.');
      return;
    }
    setErrorMessage('');
    router.push('/chef/sign-up-chef/complete');
  };

  const handlePhotoUpload = () => {
    document.getElementById('photo-upload')?.click();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFileName(file.name);
      console.log('Photo uploaded:', file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setPhotoFileName(file.name);
      console.log('Photo uploaded:', file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#F0725C] to-[#FE3511] h-screen animate-fadeIn">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-24 w-full m-10 h-5/6">
        <h1 className="text-4xl font-bold mb-12 text-start w-full">Sign Up Chef</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-32 gap-y-6 w-full">
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
                  type={showPassword ? "text" : "password"}
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
              <div 
                className="rounded-lg h-[19rem] flex items-center justify-center bg-gray-100 cursor-pointer"
                onClick={handlePhotoUpload}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <PhotoIcon className="size-24 text-[#BCBEC0]" />
                  <p className="text-[#BCBEC0]">{photoFileName || "Drop image here or click to upload"}</p>
                </div>
                <input 
                  id="photo-upload" 
                  type="file" 
                  className="hidden" 
                  onChange={handlePhotoChange} 
                />
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 text-[#FE3511]">
                {errorMessage}
              </div>
            )}
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
                className="w-1/2 py-3 bg-gradient-to-b from-[#F0725C] to-[#FE3511] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg mt-10"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}