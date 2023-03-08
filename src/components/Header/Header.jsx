import React from "react";
import HeaderLogo from "../header/HederLogo";
import "./header.css";
import Search from "./Search";

const Header = ({
  isMenuOpen,
  changeMenuOpen,
  updateText,
  color,
  setColor,
  menuColor,
  menuSetColor,
}) => {
  return (
    <div
      className='header-menu'
      style={{ backgroundColor: color }}
    >
      <HeaderLogo
        isMenuOpen={isMenuOpen}
        changeMenuOpen={changeMenuOpen}
      />
      <Search
        changeText={updateText}
        setColor={setColor}
        menuColor={menuColor}
        menuSetColor={menuSetColor}
      />
    </div>
  );
};

export default Header;
