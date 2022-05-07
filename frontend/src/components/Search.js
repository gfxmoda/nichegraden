import React from "react";

const Search = ({ type }) => {
  return (
    <form action="">
      <input
        type="search"
        name="search"
        id={`${type}-search`}
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
