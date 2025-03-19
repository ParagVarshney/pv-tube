import React from "react";

const ShimmerVideoContainer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10) // ✅ Creates 10 shimmer cards
        .fill("")
        .map((_, index) => (
          <div key={index} className="p-2 m-2 w-[350px] shadow-lg ml-8 animate-pulse">
            <div className="h-44 bg-gray-300 rounded-lg"></div> {/* Simulated Thumbnail */}
            <ul className="mt-2">
              <li className="h-4 bg-gray-300 rounded w-3/4 mb-2"></li> {/* Simulated Title */}
              <li className="h-4 bg-gray-300 rounded w-1/2"></li> {/* Simulated Channel */}
              <li className="h-4 bg-gray-300 rounded w-1/3 mt-2"></li> {/* Simulated Views */}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ShimmerVideoContainer;
