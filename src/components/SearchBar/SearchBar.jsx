import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <div className="search-bar mb-3 position-relative">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
