import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className='container'>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {/* <Content />
      <Footer /> */}
    </div>
  );
};

export default App;
