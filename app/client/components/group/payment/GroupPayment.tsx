'use client'
import Image from 'next/image'
import { useState, useMemo, useRef } from 'react'
import Calendar from './Calendar'
import { ArrowLeftIcon, CalendarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { group } from '../../../data/group-course'

// Helper function to format dates to DD/MM/YYYY
const formatDate = (date: Date | null): string => {
  if (!date) return '' // Return empty string if no date
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}

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

type FormData = z.infer<ReturnType<typeof paymentSchema>>

export default function GroupPayment() {
  const [isDeliver, setIsDeliver] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<{ startDate: Date | null }>({
    startDate: null,
  })
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)

  const toggleDelivery = () => {
    setIsDeliver(!isDeliver)
  }

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const handleDateSelect = (value: { startDate: Date | null }) => {
    setSelectedDate(value)
    setIsCalendarOpen(false)
    setValue('deliveryDate', value.startDate) // Set the raw Date object in the form
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
    router.push('/client/group/payment/complete')
  }

  const handleFormSubmit = async () => {

    const groupPaymentData = {
      workshopId: ID,
      isWithIngredient: isDeliver,
    }
    console.log('ID:', ID)
    console.log('Current isDeliver state:', isDeliver)

     try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/createPaymentForWorkshop`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(groupPaymentData),
        }
      )

      if (response.ok) {
        onPaid() // Redirect on success
      } else {
        console.error('Failed to pay the workshop')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
    }
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
              <p className="font-bold">{groupPrice} THB</p>
            </div>
            {isDeliver && (
              <div className="flex justify-between text-[#808080]">
                <p className="">Add-on Package</p>
                <p className="font-bold">+ {groupAddOn} THB</p>
              </div>
            )}
            <div className="flex justify-between text-[#808080]">
              <p className="">Discount</p>
              <p className="font-bold">-0.00 THB</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                {isDeliver
                  ? `${groupPrice + groupAddOn} THB`
                  : `${groupPrice} THB`}
              </p>
            </div>
            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-t from-[#FE3511] to-[#F0725C] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Pay{' '}
              {isDeliver
                ? `${groupPrice + groupAddOn} THB`
                : `${groupPrice} THB`}
            </button>
          </div>
          <div className="ml-16 mr-40">
            <div className="font-semibold text-lg">
              Beef Wellington is a classic and luxurious dish, featuring premium
              beef fillet wrapped in a layer of finely chopped mushrooms
              (Duxelles) and Parma ham, then encased in puff pastry and baked to
              a golden perfection. It&apos;s ideal for special occasions or a
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
                  <CalendarIcon
                    onClick={toggleCalendar}
                    className="h-5 w-5 text-gray-400 absolute right-3 top-3 cursor-pointer"
                  />
                  {isCalendarOpen && (
                    <div
                      ref={calendarRef}
                      className="absolute z-20 mt-2 w-full"
                    >
                      <Calendar
                        value={selectedDate}
                        onChange={handleDateSelect}
                      />
                    </div>
                  )}
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-[#F2F4F8] border-b-2 border-[#C1C7CD] outline-none"
                    placeholder="Select a date"
                    {...register('deliveryDate', { valueAsDate: true })}
                    readOnly
                    onClick={toggleCalendar}
                    value={
                      selectedDate.startDate
                        ? formatDate(selectedDate.startDate)
                        : ''
                    }
                  />
                  {errors.deliveryDate && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.deliveryDate.message}
                    </p>
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
