import React from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGif } from "react-icons/ai";

const HeaderLogo = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='hamburger-clas'>
      <div className='manu-item-hamburger-menu'>
        <GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        {/* toggle  */}
      </div>
      <div className='manu-item-hamburger-gif'>
        <AiOutlineGif />
      </div>
    </div>
  );
};

export default HeaderLogo;
