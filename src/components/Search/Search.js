import React from "react";
import { GrSearch } from "react-icons/gr";
import './search.scss'

const Search = ({placeholder,search,setSearch}) => {
  return (
    <>
      <form className="api-search">
        <GrSearch className="icon" />
        <input
          type="text"
          placeholder={placeholder}
          onChange = {(e) => setSearch(e.target.value)}
          value = {search}
        ></input>
      </form>
    </>
  );
};

export default Search;
