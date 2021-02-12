import React from "react";
import "../Searchbar/SearchBar.css";
export const SearchBar = () => {
  return (
    <div class="search-container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <form>
        <input
          type="text"
          placeholder="Search organisation/NGO"
          name="search"
          // size="50"
          class="input"
        ></input>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};
