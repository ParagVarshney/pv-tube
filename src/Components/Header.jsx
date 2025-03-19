import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResulte } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const handleSearchClick = (query) => {
    if (!query) return;
    navigate(`/results/${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => setShowSuggestions(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResulte({ [searchQuery]: json[1] }));
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-lg">
      {/* Left Section - Hamburger Menu & Logo */}
      <div className="flex items-center space-x-2">
        {/* Hamburger Menu */}
        <img
          className="h-6 md:h-8 cursor-pointer"
          onClick={() => dispatch(toggleMenu())}
          alt="menu-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        
        {/* YouTube Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-8 sm:h-6 md:h-6 px-2 object-contain max-w-full"
            alt="YouTube Icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="relative flex-grow max-w-lg mx-4">
        <div className="flex">
          <input
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-l-full p-2 border border-gray-300 focus:border-gray-400 focus:ring-gray-500 outline-none"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={() => handleSearchClick(searchQuery)}
            className="border border-gray-300 p-2 rounded-r-full bg-gray-300 hover:bg-gray-400"
          >
            🔍
          </button>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="absolute bg-white p-2 w-full shadow-lg rounded-lg border border-gray-300 z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearchClick(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - User Icon */}
      <div className="flex items-center">
        <img
          className=" h-6 md:h-8 rounded-full "
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Header;
