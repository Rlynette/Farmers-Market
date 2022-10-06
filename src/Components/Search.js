import React from "react";

function Search({handleSearch}) {
  return (
    <div className="searching">
      <input
        type="text"
        placeholder="Search available produce"
        onChange={(e)=>handleSearch(e)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;