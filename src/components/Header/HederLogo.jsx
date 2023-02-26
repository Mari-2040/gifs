import React from "react";
import "./menu.css";
import{GiHamburgerMenu} from "react-icons/gi";
import{AiOutlineGif} from "react-icons/ai"


const HeaderLogo = () => {
  return (
    <div className ="hamburger-clas">
     <div className='manu-item-hamburger-menu'><GiHamburgerMenu /></div>
     <div className='manu-item-hamburger-gif'><AiOutlineGif /></div>

    </div>
  );
};

export default HeaderLogo;
