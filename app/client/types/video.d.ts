export interface Video {
  videoID: number
  videoTitle: string
  videoPath: { quality: string; src: string }[]
  timestamps: Timestamp[]
}