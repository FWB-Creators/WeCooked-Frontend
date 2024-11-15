'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CustomCalendar from './CustomCalendar'

export default function GroupPayment() {
  const router = useRouter()
  const paid = () => {
    router.push('/client/group/complete')
  }
  const [isDeliver, setIsDeliver] = useState<boolean>(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<{
    startDate: Date | null
    endDate: Date | null
  }>({ startDate: null, endDate: null })

  const DeliverHandle = () => setIsDeliver((prev) => !prev)

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev)

  const handleDateChange = (value: {
    startDate: Date | null
    endDate: Date | null
  }) => {
    setSelectedDate(value)
    setIsCalendarOpen(false) // Close calendar after selecting a date
  }

  return (
    <div className="grid grid-cols-2 mt-8">
      <div className="ml-32 mr-24">
        <Link href="">
          <ArrowLeftIcon className="absolute left-12 top-24 w-6 h-6 text-[#FE3511]" />
        </Link>
        <div className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F0725C] to-[#FE3511]">
          beef wellington course
        </div>
        <Image
          src="/images/juicy_beef.png"
          alt="Indian food"
          width={500}
          height={500}
        />
        <div className="my-4">
          Beef Wellington is a classic and luxurious dish, featuring premium
          beef fillet wrapped in a layer of finely chopped mushrooms (Duxelles)
          and Parma ham, then encased in puff pastry and baked to a golden
          perfection. It’s ideal for special occasions or a full-course meal.
        </div>
        <div className="mt-4 flex flex-col w-full px-4 py-2 rounded-lg bg-[#DDE1E6]">
          <div className="flex items-center gap-x-2">
            <button
              className="flex items-center justify-center bg-[#697077] rounded-full w-5 h-5"
              onClick={DeliverHandle}
            >
              {isDeliver && (
                <div className="bg-[#231F1F] rounded-full border-2 w-4 h-4"></div>
              )}
            </button>
            <p className="font-semibold">Package with ingredients</p>
          </div>
          <p className="text-[#697077] text-sm ml-7">Ingredient delivered</p>
        </div>
        {isDeliver && (
          <form>
            <p className="mb-2">Delivery Date</p>
            <div className="relative">
              <input
                className="mb-2 w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Select a date"
                readOnly
                value={
                  selectedDate.startDate
                    ? selectedDate.startDate.toDateString()
                    : ''
                }
              />
              <CalendarIcon
                className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
                onClick={toggleCalendar}
              />
              {isCalendarOpen && (
                <CustomCalendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              )}
            </div>
            <p className="mb-2">Shipping address</p>
            <textarea
              className="mb-2 w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
              placeholder="Enter Your Shipping address"
            ></textarea>
          </form>
        )}
      </div>
      <div className="ml-16 mr-40">
        <p className="font-bold text-2xl">Payment Details</p>
        <p className="text-xl">
          Complete your purchase by providing your payment details
        </p>
        <form>
          <p className="mb-2">Email</p>
          <input
            className="mb-2 w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
            placeholder="Enter Your Email"
          ></input>
          <p className="mb-2">Card number</p>
          <input
            className="mb-2 w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
            placeholder="Enter Your Card number"
          ></input>
          <div className="mb-2">
            <div className="grid grid-cols-2 mb-2">
              <p>CVC</p>
              <p className="ml-5">Expired date</p>
            </div>
            <div className="mb-2 grid grid-cols-2 gap-x-10">
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Enter Your Card number"
              ></input>
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                placeholder="Enter Your Expired date"
              ></input>
            </div>
          </div>
          <p className="mb-2">Billing Address</p>
          <textarea
            className="mb-2 w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
            placeholder="Enter Your Billing Address"
          ></textarea>
        </form>
        <div className="flex justify-between">
          <p className="font-bold">Subtotal</p>
          <p className="font-bold">$29.00</p>
        </div>
        {isDeliver && (
          <div className="flex justify-between text-[#808080]">
            <p className="font-bold">Add-on Package</p>
            <p className="font-bold">+6.50</p>
          </div>
        )}
        <div className="flex justify-between text-[#808080]">
          <p className="font-bold">Discount</p>
          <p className="font-">-0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">$29.00</p>
        </div>
        <button
          type="submit"
          className="mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          onClick={paid}
        >
          Pay $29.00
        </button>
      </div>
    </div>
  )
}
