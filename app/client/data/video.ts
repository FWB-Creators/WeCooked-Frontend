import { Video } from "../types/video";

export const videoData: Video[] = [
  {
    videoID: 0,
    videoTitle: 'La Trattoria - Classic Italian',
    videoPath: [
      { quality: '720p', src: '/videos/Video.mp4' },
      { quality: '1080p', src: '/videos/Video.mp4' }
    ],
    timestamps: [
      { timeStop: 20, timeCountdown: 236, timeTriggered: false },
      { timeStop: 40, timeCountdown: 30, timeTriggered: false },
      { timeStop: 80, timeCountdown: 30, timeTriggered: false },
    ],
    tutorial: [
      { tutorialId: 0, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 1', timeStop: 60, timeTriggered: false },
      { tutorialId: 1, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 2', timeStop: 120, timeTriggered: false },
    ]
  },
  {
    videoID: 1,
    videoTitle: 'Mexican Madness - Burritos & Nachos',
    videoPath: [
      { quality: '720p', src: '/videos/Video.mp4' },
      { quality: '1080p', src: '/videos/Video.mp4' }
    ],
    timestamps: [
      { timeStop: 50, timeCountdown: 120, timeTriggered: false },
      { timeStop: 70, timeCountdown: 5, timeTriggered: false },
    ],
    tutorial: [
      { tutorialId: 0, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 1', timeStop: 30, timeTriggered: false },
      { tutorialId: 1, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 2', timeStop: 90, timeTriggered: false },
    ]
  },
  {
    videoID: 2,
    videoTitle: 'Taco Tuesday - Lucha Libre Tacos',
    videoPath: [
      { quality: '720p', src: '/videos/Video.mp4' },
      { quality: '1080p', src: '/videos/Video.mp4' }
    ],
    timestamps: [
      { timeStop: 50, timeCountdown: 120, timeTriggered: false },
      { timeStop: 70, timeCountdown: 5, timeTriggered: false },
    ],
    tutorial: [
      { tutorialId: 0, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 1', timeStop: 30, timeTriggered: false },
      { tutorialId: 1, tutorialVideo: '/videos/Video.mp4', tutorialTitle: 'Tutorial 2', timeStop: 90, timeTriggered: false },
    ]
  }
];