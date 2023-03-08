import React from "react";

const Form = ({ setWidth, setHeght, setColor }) => {
  return (
    <div className='form'>
      <input
        className='width'
        type='text'
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        className='width'
        type='text'
        onChange={(e) => setHeght(e.target.value)}
      />
      <input
        className='width'
        type='text'
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default Form;
