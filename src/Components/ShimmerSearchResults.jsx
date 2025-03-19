import React from "react";

const ShimmerSearchResults = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-white p-2 shadow-lg rounded-lg animate-pulse"
          >
            {/* Thumbnail (Takes full width on mobile) */}
            <div className="w-[350px] md:w-[1000px] h-52 md:h-72 bg-gray-300 rounded-lg"></div>

            {/* Text Shimmer (Stacked on Mobile, Inline on Desktop) */}
            <div className="flex flex-col w-full space-y-2">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Simulated Channel Name */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerSearchResults;
