import Image from 'next/image'
import Link from 'next/link'

export default function ChefProfile() {
  return (
    <div className="mt-6 mx-48 mb-16">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-8 items-center">
          <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
            <Image
              className=""
              src="/images/chef.png"
              alt="Chef profile image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-col">
            <h1 className="font-semibold text-xl">Jane Doe</h1>
            <h1>arminwza007@gmail.com</h1>
          </div>
        </div>
        <Link
          href="/chef/profile/edit-profile"
          className="flex items-center justify-center rounded-lg shadow-lg w-36 h-12 bg-gradient-to-t from-[#FE3511] to-[#F0725C] text-white font-semibold "
        >
          Edit Profile
        </Link>
      </div>
      <form>
        <div className="grid grid-cols-10 h-full mt-8">
          {/*left side input */}
          <div className="col-span-4 flex flex-col h-full">
            <div className="mb-4">
              <p className="mb-2">First Name</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Jane"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Last Name</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Doe"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Gender</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Male"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Phone</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="082-759-8539"
              ></input>
            </div>
            <p className="mb-2">My Ratings</p>
            <div className=" flex justify-between">
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                        />
                      </svg>
                      <span className="text-black font-semibold ml-1"></span>
                    </div>
                  ))}
                </div>
                <p className="text-[#F9644A] text-3xl font-bold flex justify-center">
                  4.5
                </p>
                <p className="text-[#919295] flex justify-center">
                  Course Rating
                </p>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                        />
                      </svg>
                      <span className="text-black font-semibold ml-1"></span>
                    </div>
                  ))}
                </div>
                <p className="text-[#F9644A] text-3xl font-bold flex justify-center">
                  4.5
                </p>
                <p className="text-[#919295] flex justify-center">
                  Workshop Rating
                </p>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                        />
                      </svg>
                      <span className="text-black font-semibold ml-1"></span>
                    </div>
                  ))}
                </div>
                <p className="text-[#F9644A] text-3xl font-bold flex justify-center">
                  4.5
                </p>
                <p className="text-[#919295] flex justify-center">
                  Overall Rating
                </p>
              </div>
            </div>
          </div>

          {/*middle line*/}
          <div></div>
          <div className="flex justify center pt-8">
            <div className="border-l border-[#808080]"></div>
          </div>

          {/*right side input */}
          <div className="col-span-4 flex flex-col h-full">
            <div className="mb-4">
              <p className="mb-2">E-mail</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="janeDeozaza32@gmail.com"
              />
            </div>
            <div className="mb-4 flex flex-col h-full">
              <p className="mb-2">Bio</p>
              <textarea
                readOnly
                className="w-full flex-grow px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Chef Tong is a seasoned culinary expert specializing in the art of steak-making. With his unique techniques and high-quality ingredients, he brings out the best flavors in every cut. Join him to discover the secrets behind achieving a perfectly cooked"
              />
            </div>
            <p className="mb-2">My Courses</p>
            <div className="mb-4 flex justify-around">
              <div>
                <p className="text-[#F9644A] text-3xl font-bold flex justify-center">
                  13
                </p>
                <p className="text-[#919295] flex justify-center">
                  Courses
                </p>
              </div>
              <div>
                <p className="text-[#F9644A] text-3xl font-bold flex justify-center">
                  7
                </p>
                <p className="text-[#919295] flex justify-center">
                  Workshops
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
