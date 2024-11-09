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
      { time: 30, label: "Time Tracking", countdownTime: 236, triggered: false },
      { time: 40, label: "Time Tracking", countdownTime: 30, triggered: false },
      { time: 80, label: "Time Tracking", countdownTime: 30, triggered: false },
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
      { time: 50, label: "Time Tracking", countdownTime: 120, triggered: false },
      { time: 70, label: "Time Tracking", countdownTime: 5, triggered: false },
    ]
  }
];