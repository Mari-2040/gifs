import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiExclude } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className='menu'>
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
    </div>
  );
};

export default Menu;
