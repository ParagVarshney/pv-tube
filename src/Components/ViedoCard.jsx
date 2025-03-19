import React from "react";
import ShimmerViedoContainer from "./ShimmerViedoContainer";

const VideoCard = ({ info }) => {
  if (!info ) {
    return <ShimmerViedoContainer/>; // Prevents breaking when data is missing
  }

  const {snippet, statistics } = info;
  const {channelTitle, thumbnails, title } = snippet; // Corrected title access

  return (
    <div className="p-2 m-2 w-[350px] shadow-lg ml-8">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li> {/* Corrected title access */}
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount || "No views available"} views</li> {/* Handles undefined viewCount */}
      </ul>
    </div>
  );
};

export default VideoCard;
