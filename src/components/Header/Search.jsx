import React from "react";
import "./header.css";
import { GoSearch } from "react-icons/go";

const Search = ({ changeText, menuColor, menuSetColor }) => {
  return (
    <div className='hederInput'>
      <form>
        <input
          className='hder-input'
          type='text'
          placeholder='search'
          value={menuColor}
          onChange={(e) => {
            changeText(e.target.value);
            menuSetColor(e.target.value);
          }}
        />
      </form>
      <div className='header-serch'>
        <GoSearch />
      </div>
    </div>
  );
};

export default Search;
