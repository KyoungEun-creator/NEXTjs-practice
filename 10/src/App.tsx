import React from "react";
import CountProvider from "./ context/countContext";
import Example1 from "./components/context/Example1";
import Example2 from "./components/context/Example2";

const App = () => {
  return (
    <>
      <CountProvider>
        <Example1 />
        <Example2 />
      </CountProvider>
    </>
  );
};

export default App;
