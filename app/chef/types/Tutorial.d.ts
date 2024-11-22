export interface Tutorial {
  tutorialId: number
  tutorialVideo: string
  tutorialTitle: string
  courseImage: string
  tutorialDetail: string
  timeStop: number | null
  timeTriggered: boolean
}