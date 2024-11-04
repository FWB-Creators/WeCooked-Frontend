export interface Progress {
  course_id: number
  title: string
  timeInMins: number
  chef: {
    name: string
    image: string
  }
  progress: number
  image: string
}