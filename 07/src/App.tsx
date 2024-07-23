import React from "react";
import RedColor from "./components/learn/children/RedColor";

const App = () => {
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
