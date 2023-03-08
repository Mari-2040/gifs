import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [menuColor, menuSetColor] = useState("");

  return (
    <div
      className='container'
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header
        isMenuOpen={isMenuOpen}
        changeMenuOpen={setIsMenuOpen}
        updateText={setText}
        color={color}
        setColor={setColor}
        menuColor={menuColor}
        menuSetColor={menuSetColor}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        menuColor={menuColor}
      />
      <Content
        text={text}
        color={color}
        setColor={setColor}
      />
      {/*<Footer /> */}
    </div>
  );
};

export default App;
