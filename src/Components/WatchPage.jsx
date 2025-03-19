import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API_RESULTS } from "../utils/contants";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        dispatch(closeMenu());
        fetchVideoDetails();
    }, [videoId]);

    const fetchVideoDetails = async () => {
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_API_RESULTS}${videoId}&key=${GOOGLE_API_KEY}`);
            const data = await response.json();

            if (data.items && data.items.length > 0) {
                const video = data.items[0].snippet;
                setVideoData({
                    title: video.title,
                    channelTitle: video.channelTitle,
                    description: video.description,
                    thumbnail: video.thumbnails.medium.url,
                });
            }
        } catch (error) {
            console.error("Error fetching video details:", error);
        }
    };

    return (
        <div className="flex flex-col w-full p-4">
            {/* Video + Live Chat (Desktop: Row, Mobile: Column) */}
            <div className="flex flex-col md:flex-row w-full">
                {/* Video Section */}
                <div className="w-full md:w-[70%]">
                    <iframe
                        className="rounded-lg w-full h-56 sm:h-80 md:h-[500px]"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                    {/* Video Title & Channel Name */}
                    <div className="mt-4 p-2">
                        <h2 className="text-lg sm:text-2xl font-bold">{videoData?.title || "Loading title..."}</h2>
                        <p className="text-gray-600 text-sm sm:text-md">{videoData?.channelTitle}</p>
                    </div>
                </div>

                {/* Live Chat (Desktop: Right, Mobile: Below Video) */}
                <div className="w-full md:w-[35%] mt-6 md:mt-0 md:ml-4">
                    <LiveChat />
                </div>
            </div>

            {/* Comments Section (Always at the bottom) */}
            <div className="w-full mt-8">
                <Comments />
            </div>
        </div>
    );
};

export default WatchPage;
