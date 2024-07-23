import React from "react";

import { twMerge } from "tailwind-merge";

import RedColor from "./components/learn/children/RedColor";

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      <div>App</div>
      <RedColor>
        I <span style={{ textDecoration: "underline" }}>want</span> this colored text
      </RedColor>
    </>
  );
};

export default App;
