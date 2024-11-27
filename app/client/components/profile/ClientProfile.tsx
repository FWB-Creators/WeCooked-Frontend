import Image from 'next/image'
import Link from 'next/link'
export default function ClientProfile() {
  return (
    <div className="mt-6 mx-48">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-8 items-center">
          <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
            <Image
              className=""
              src="/images/profile.jpg"
              alt="User profile image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-col">
            <h1 className="font-semibold text-xl">Arm Rukkhim</h1>
            <h1>arminwza007@gmail.com</h1>
          </div>
        </div>
        <Link
          href="/client/profile/edit-profile"
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
                placeholder="Arm"
              ></input>
            </div>
            <div className="mb-4">
              <p className="mb-2">Last Name</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Rukkhim"
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
            <div>
              <p className="mb-2">Phone</p>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="052-447-4872"
              ></input>
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
                placeholder="arminwza007@gmail.com"
              />
            </div>
            <div className="flex flex-col h-full">
              <p className="mb-2">Address</p>
              <textarea
                readOnly
                className="w-full flex-grow px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="1234 Elm Street Apartment 56B Springfield, IL 62704 USA"
              />
            </div>
          </div>
        </div>
      </form>
      <h1 className="text-lg mt-8 mb-4">Favorite Chefs</h1>
      <div className="flex flex-row gap-x-16">
        <div className="flex flex-col justify-center">
          <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
            <Image
              className=""
              src="/images/chef.png"
              alt="User profile image"
              width={500}
              height={500}
            />
          </div>
          <h1 className="mt-2 flex justify-center font-semibold">Jane Doe</h1>
          <h1 className="flex justify-center text-sm text-[#697077]">
            Sous Chef
          </h1>
        </div>

        <div>
          <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
            <Image
              className=""
              src="/images/profile.jpg"
              alt="User profile image"
              width={500}
              height={500}
            />
          </div>
          <h1 className="mt-2 flex justify-center font-semibold">Yut Ocha</h1>
          <h1 className="flex justify-center text-sm text-[#697077]">
            Executive Chef
          </h1>
        </div>

        <div>
          <div className="relative flex items-center justify-center max-w-28 max-h-28 w-28 h-28 overflow-hidden rounded-full">
            <Image
              className=""
              src="/images/Aien.png"
              alt="User profile image"
              width={500}
              height={500}
            />
          </div>
          <h1 className="mt-2 flex justify-center font-semibold">TT</h1>
          <h1 className="flex justify-center text-sm text-[#697077]">
            Demi Chef
          </h1>
        </div>
      </div>
    </div>
  )
}
