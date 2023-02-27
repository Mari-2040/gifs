import React from "react";
import HeaderLogo from "../header/HederLogo";
import "./header.css";
import Search from "./Search";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='header-menu'>
      <HeaderLogo
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Search />
    </div>
  );
};

export default Header;
