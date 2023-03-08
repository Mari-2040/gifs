import React from "react";

const Drow = ({ width, heght, color }) => {
  return (
    <div
      className='cub'
      style={{ width: width, height: heght, background: color }}
    ></div>
  );
};

export default Drow;
