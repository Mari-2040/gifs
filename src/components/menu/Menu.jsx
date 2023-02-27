import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiExclude } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import MenuItem from "./MenuItem";
import DivLine from "./DivLine";
import Header from "../header";
import HeaderLogo from "./header/HederLogo";

const Menu = () => {
  return (
    <div className='menu'>
      <Header />
      <HeaderLogo />
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
