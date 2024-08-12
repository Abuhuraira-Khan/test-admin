import React from "react";
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div>
      <div className="search-area">
        <div className="search">
          <input type="text" placeholder="search product" />
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
