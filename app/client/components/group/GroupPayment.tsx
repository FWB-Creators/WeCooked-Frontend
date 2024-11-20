'use client'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import CustomCalendar from './CustomCalendar'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { group } from '../../data/group-course'

const paymentSchema = (isDeliver: boolean) =>
  z.object({
    deliveryDate: z
      .date()
      .nullable()
      .refine(
        (date) => {
          if (isDeliver) {
            return !!date // Delivery date is required if delivery is toggled on
          }
          return true // Skip validation if delivery is toggled off
        },
        {
          message: 'Delivery date is required when delivery is selected',
        }
      ),
    shippingAddress: z
      .string()
      .optional()
      .refine(
        (address) => {
          if (isDeliver) {
            return !!address // Shipping address is required if delivery is toggled on
          }
          return true
        },
        {
          message: 'Shipping address is required when delivery is selected',
        }
      ),
  })

// Create a type helper for forms dynamically
type FormData = z.infer<ReturnType<typeof paymentSchema>>

export default function GroupPayment() {
  const [isDeliver, setIsDeliver] = useState<boolean>(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<{
    startDate: Date | null
    endDate: Date | null
  }>({
    startDate: null,
    endDate: null,
  })

  const toggleDelivery = () => {
    setIsDeliver((prev) => {
      const newState = !prev
      if (!newState) {
        setValue('deliveryDate', null) // Reset deliveryDate to null if toggling off
        setValue('shippingAddress', '') // Reset address
      }
      return newState
    })
  }

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev)

  const handleDateChange = (value: {
    startDate: Date | null
    endDate: Date | null
  }) => {
    if (value.startDate) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (value.startDate < today) {
        alert('Invalid date')
        return // Prevent further execution if the date is invalid
      }
    }

    // Update the selected date
    setSelectedDate(value)

    // Set the value in the form
    setValue('deliveryDate', value.startDate)

    // Close the calendar after selecting a date
    setIsCalendarOpen(false)
  }

  const { groupId } = useParams<{ groupId: string }>() // TypeScript typing for useParams
  const ID = parseInt(groupId)
  const groupTitle = group[ID].groupTitle
  const groupPrice = group[ID].groupPrice
  const groupAddOn = group[ID].ingredientPrice
  const groupPicture = group[ID].groupPicture

  // Dynamically generate the schema based on `isDeliver`
  const schema = useMemo(() => paymentSchema(isDeliver), [isDeliver])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      deliveryDate: null,
      shippingAddress: '',
    },
  })

  const router = useRouter()

  const onPaid = () => {
    router.push('/client/group/complete')
  }

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted with data:', data)
    console.log('Current isDeliver state:', isDeliver)
    onPaid()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Link href="/client/group">
          <ArrowLeftIcon className="absolute left-12 top-24 w-6 h-6 text-[#FE3511]" />
        </Link>
        <div className="ml-32 mt-8 pb-2 mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F0725C] to-[#FE3511]">
          {groupTitle}
        </div>
        <div className="grid grid-cols-2 mt-8">
          <div className="ml-32 mr-24">
            <div className="rounded-3xl relative max-h-96 max-w-[500px] w-[500px] h-auto overflow-hidden">
              <Image
                className="rounded-3xl"
                src={groupPicture}
                alt={`${groupTitle} course image`}
                width={1000}
                height={1000}
                quality={100}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="mt-8 flex justify-between">
              <p className="font-bold">Subtotal</p>
              <p className="font-bold">${groupPrice}</p>
            </div>
            {isDeliver && (
              <div className="flex justify-between text-[#808080]">
                <p className="">Add-on Package</p>
                <p className="font-bold">+${groupAddOn}</p>
              </div>
            )}
            <div className="flex justify-between text-[#808080]">
              <p className="">Discount</p>
              <p className="font-bold">-$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                {isDeliver ? `$${groupPrice + groupAddOn}` : `$${groupPrice}`}
              </p>
            </div>
            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Pay {isDeliver ? `$${groupPrice + groupAddOn}` : `$${groupPrice}`}
            </button>
          </div>
          <div className="ml-16 mr-40">
            <div className="font-semibold text-lg">
              Beef Wellington is a classic and luxurious dish, featuring premium
              beef fillet wrapped in a layer of finely chopped mushrooms
              (Duxelles) and Parma ham, then encased in puff pastry and baked to
              a golden perfection. It’s ideal for special occasions or a
              full-course meal.
            </div>
            <div className="mt-4 flex flex-col w-full px-4 py-2 rounded-lg bg-[#DDE1E6]">
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#697077] rounded-full w-5 h-5"
                  onClick={toggleDelivery}
                >
                  {isDeliver && (
                    <div className="bg-[#231F1F] rounded-full border-2 w-4 h-4"></div>
                  )}
                </button>
                <p className="font-semibold">Package with ingredients</p>
              </div>
              <p className="text-[#697077] text-sm ml-7">
                Ingredient delivered
              </p>
            </div>
            {isDeliver && (
              <div>
                <p className="my-2">Delivery Date</p>
                <div className="relative">
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                    placeholder="Select a date"
                    {...register('deliveryDate', { valueAsDate: true })}
                    readOnly
                    value={
                      selectedDate.startDate
                        ? selectedDate.startDate.toISOString().split('T')[0]
                        : ''
                    }
                  />
                  {errors.deliveryDate && (
                    <p className="text-red-500 text-sm">
                      {errors.deliveryDate.message}
                    </p>
                  )}
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
                <p className="my-2">Shipping address</p>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                  placeholder="Enter Your Shipping address"
                  {...register('shippingAddress')}
                ></textarea>
                {errors.shippingAddress && (
                  <p className="text-red-500 text-sm">
                    {errors.shippingAddress.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
