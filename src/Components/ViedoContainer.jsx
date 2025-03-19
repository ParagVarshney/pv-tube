import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard from "./ViedoCard";
import { Link } from "react-router-dom";
import ShimmerVideoContainer from "./ShimmerViedoContainer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const loader = useRef(null);

  // Fetch videos from YouTube API
  const getVideos = async (pageToken = "") => {
    try {
      const response = await fetch(`${YOUTUBE_VIDEOS_API}&pageToken=${pageToken}`);
      const json = await response.json();

      setVideos((prev) => [...prev, ...json.items]); // Append new videos
      setNextPageToken(json.nextPageToken); // Store nextPageToken
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Load more videos when user reaches bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken) {
          getVideos(nextPageToken);
        }
      },
      { threshold: 1 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [nextPageToken]);

  // Initial video fetch
  useEffect(() => {
    getVideos();
  }, []);

  if (videos.length === 0) return <ShimmerVideoContainer />;

  return (
    <div className=" md:flex md:flex-wrap flex-wrap ">
      {videos.map((video,index) => (
        <Link key={`${video.id.videoId || video.id}-${index}`} to={`/watch?v=${video.id.videoId || video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
      {/* Loader to trigger infinite scroll */}
      <div ref={loader} className="h-10 w-full text-center text-gray-500">Loading more videos...</div>
    </div>
  );
};

export default VideoContainer;
