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
      { timeStop: 30, timecountdown: 236, timeTriggered: false },
      { timeStop: 40, timecountdown: 30, timeTriggered: false },
      { timeStop: 80, timecountdown: 30, timeTriggered: false },
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
      { timeStop: 50, timecountdown: 120, timeTriggered: false },
      { timeStop: 70, timecountdown: 5, timeTriggered: false },
    ]
  }
];