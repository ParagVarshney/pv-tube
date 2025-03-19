import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API_RESULTS, GOOGLE_API_KEY } from "../utils/contants";
import ShimmerSearchResults from "./ShimmerSearchResults";

const SearchResults = () => {
    const { query } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const decodedQuery = decodeURIComponent(query);

    useEffect(() => {
        fetchVideos(decodedQuery);
    }, [decodedQuery]);

    const fetchVideos = async (searchTerm) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${YOUTUBE_SEARCH_API_RESULTS}${searchTerm}&key=${GOOGLE_API_KEY}`);
            const data = await response.json();

            if (data.items) {
                console.log("Fetched videos:", data.items);
                setVideos(data.items);
            } else {
                throw new Error("No results found.");
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="md:text-xl md:ml-12 font-semibold mb-4">Results for: {decodedQuery}</h2>

            {loading ? (
                <ShimmerSearchResults />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : videos.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {videos.map((video) => (
                        <Link
                            key={video.id.videoId || video.id.channelId}
                            to={`/watch?v=${video.id.videoId || video.id.channelId}`}
                            className="flex flex-col md:flex-row items-center gap-4 bg-white p-2 shadow-lg rounded-lg transition-transform transform "
                        >
                            {/* Thumbnail (Above on Mobile, Left on Desktop) */}
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                                className="w-full md:w-[500px] h-52 md:h-72 md:mx-10 rounded-lg object-cover"
                            />

                            {/* Video Details (Below on Mobile, Right on Desktop) */}
                            <div className="flex flex-col w-full md:w-auto text-center md:text-left">
                                <h3 className="font-semibold text-sm md:text-xl">{video.snippet.title}</h3>
                                <p className="text-md hidden md:block">{video.snippet.description}</p>
                                <p className="text-gray-600 text-xs md:text-sm py-2">{video.snippet.channelTitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>

            )}
        </div>
    );
};

export default SearchResults;
