import React, { useState } from "react";
import "./Content.css";
import Drow from "./Drow";
import Form from "./Form";

const Content = () => {
  const [width, setWidth] = useState("");
  const [heght, setHeght] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className='content'>
      {/* <h2> New Gifs </h2>
      <p>{text}</p>
      <form>
        <label>Blog Title:</label>
        <input
          type='text'
          placeholder='serch'
          required
          value={titl}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value='red'>red</option>
          <option value='green'>green</option>
          <option value='yellow'>yellow</option>
          <option value='black'>black</option>
        </select>
        <button> Add Gifs</button>
        <p>{titl}</p>
        <p>{body}</p>
      </form> */}
      <Drow
        width={width}
        heght={heght}
        color={color}
      />
      <Form
        setWidth={setWidth}
        setHeght={setHeght}
        setColor={setColor}
      />
    </div>
  );
};

export default Content;
