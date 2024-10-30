import { useMemo } from 'react'
interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className }: StarRatingProps) {
  const formattedRating = useMemo(() => rating.toFixed(1), [rating])
  return (
    <div className={`flex items-center ${className}`} aria-label={`Rating: ${formattedRating} out of 5`}>
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
      <span className="text-black font-semibold ml-1">{formattedRating}</span>
    </div>
  )
}
