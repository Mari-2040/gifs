import React from "react";
import "./header.css";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className='hederInput'>
      <input
        className='hder-input'
        type='text'
        placeholder='search'
      />
      <div className='header-serch'>
        <GoSearch />
      </div>
    </div>
  );
};

export default Search;
