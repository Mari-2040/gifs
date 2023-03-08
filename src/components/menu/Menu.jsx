import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiExclude } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import MenuItem from "./MenuItem";
import DivLine from "./DivLine";

const Menu = ({ isMenuOpen, menuColor, menuSetColor }) => {
  return (
    <div
      className='menu'
      style={{
        maxWidth: isMenuOpen ? "200px" : "50px",
        backgroundColor: menuColor,
      }}
      onChange={(e) => menuSetColor(e.target.value)}
    >
      <MenuItem
        icon={<AiFillHome />}
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
