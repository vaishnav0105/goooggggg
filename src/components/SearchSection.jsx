import React, { useState } from "react";
import { Search, Mic, Camera } from "lucide-react";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`,
        "_blank"
      );
    }
  };

  const handleFeelingLucky = () => {
    const luckySearches = [
      "beautiful landscapes",
      "cute animals",
      "amazing facts",
      "inspirational quotes",
      "funny memes",
    ];
    const randomSearch =
      luckySearches[Math.floor(Math.random() * luckySearches.length)];
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(
        randomSearch
      )}&btnI=1`,
      "_blank"
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full">
      <div
        className={`relative w-full max-w-xl mx-auto mb-8 transition-all duration-200`}
      >
        <div className="flex items-center h-12 px-4 rounded-full bg-card border border-border">
          <Search size={20} className="text-muted-foreground mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            onKeyPress={handleKeyPress}
            className="flex-1 outline-none text-base bg-transparent text-foreground"
            placeholder=""
          />
          <div className="flex items-center space-x-3 ml-3">
            <button className="p-1 hover:bg-accent rounded-full transition-colors">
              <Mic size={20} className="text-blue-500" />
            </button>
            <button className="p-1 hover:bg-accent rounded-full transition-colors">
              <Camera size={20} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-secondary border border-border rounded text-sm text-secondary-foreground hover:shadow-md hover:bg-secondary/80 transition-all duration-200 min-w-[140px]"
        >
          Google Search
        </button>
        <button
          onClick={handleFeelingLucky}
          className="px-6 py-3 bg-secondary border border-border rounded text-sm text-secondary-foreground hover:shadow-md hover:bg-secondary/80 transition-all duration-200 min-w-[140px]"
        >
          I'm Feeling Lucky
        </button>
      </div>

      <div className="text-center text-sm text-muted-foreground langugage-options">
        Google offered in:{" "}
        <a href="#" className="text-primary hover:underline ml-1">
          हिन्दी
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          বাংলা
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          తెలుగు
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          मराठी
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          தமிழ்
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          ગુજરાતી
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          ಕನ್ನಡ
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          മലയാളം
        </a>
        <a href="#" className="text-primary hover:underline ml-3">
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  );
};

export default SearchSection;
