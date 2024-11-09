"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import { videoData } from "../../data/video";

export default function VideoControl() {
  const { videoID } = useParams();

  useEffect(() => {
    console.log("Video ID:", videoID);
  }, [videoID]);

  const videoId = Array.isArray(videoID) ? videoID[0] : videoID;
  const video = videoData.find((video) => video.videoID === parseInt(videoId));

  if (!video) {
    return <p className="flex justify-center text-white">Video not found</p>;
  }

  const { videoTitle, videoPath, timestamps } = video;

  return (
    <div className="relative w-full p-4">
      <div className="w-full bg-gray-100 rounded-lg">
        <span className="flex px-8 py-4 font-light">
          <Link href="/client/my-learning">
            My Learning /
          </Link>
          <p className="pl-1 font-semibold">{videoTitle}</p>
        </span>
        {videoPath ? (
          <VideoPlayer videoID={parseInt(videoId)} videoTitle={videoTitle} videoPath={videoPath} timestamps={timestamps} />
        ) : (
          <p>No video available</p>
        )}
        <p className="px-8 py-4 font-light">
          <span className="text-2xl font-bold">{videoTitle}</span>
        </p>
      </div>
    </div>
  );
}