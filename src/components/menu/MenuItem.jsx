import React from "react";
import "./menu.css";

const MenuItem = ({ title, icon }) => {
  return (
    <div className='Container'>
      <div className='manu-item'>
        {icon}
        {title}
      </div>
    </div>
  );
};

export default MenuItem;
