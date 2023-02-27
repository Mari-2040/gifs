import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiExclude } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import MenuItem from "./MenuItem";
import DivLine from "./DivLine";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className='menu'
      style={{ maxWidth: isMenuOpen ? "200px" : "50px" }}
    >
      <MenuItem
        icon={isMenuOpen ? <AiFillHome /> : <AiOutlineClose />}
        title='Home'
      />
      <MenuItem
        icon={<BiExclude />}
        title='Shorts'
      />
      <MenuItem
        icon={<MdSubscriptions />}
        title='Subscriptions'
      />
      <DivLine />
    </div>
  );
};

export default Menu;
