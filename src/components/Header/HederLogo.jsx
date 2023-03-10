import React from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGif } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const HeaderLogo = ({ isMenuOpen, changeMenuOpen }) => {
  return (
    <div className='hamburger-clas'>
      <div className='manu-item-hamburger-menu'>
        {!isMenuOpen ? (
          <GiHamburgerMenu onClick={() => changeMenuOpen(!isMenuOpen)} />
        ) : (
          <AiOutlineClose onClick={() => changeMenuOpen(!isMenuOpen)} />
        )}
        {/* toggle  */}
      </div>
      <div className='manu-item-hamburger-gif'>
        <AiOutlineGif />
      </div>
    </div>
  );
};

export default HeaderLogo;
