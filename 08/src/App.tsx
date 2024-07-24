import React from "react";
import { useState } from "react";

import Lightbulb from "./components/examples/Lightbulb";
import ColorBox from "./components/examples/ColorBox";
import SignUp from "./components/html/SignUp";
import LogIn from "./components/html/LogIn";

const App = () => {
  const [page, setPage] = useState("login");

  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <Lightbulb />
          <ColorBox />

          <LogIn />
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default App;
