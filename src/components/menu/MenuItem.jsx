import React from "react";
import "./menu.css";

const MenuItem = ({ title, icon }) => {
  return (

      <div className='manu-item'>
        <div className ="menu-item-icon">{icon}</div>
        <p className ="menu-item-title">{title}</p> 
      </div>
  );
};

export default MenuItem;
