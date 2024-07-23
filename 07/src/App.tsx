import React from "react";
import Greeting from "./components/learn/props/Greeting";
import Eat from "./components/learn/props/Eat";

const App = () => {
  return (
    <>
      <Greeting name="JKE" age={20} />
      <Eat
        name="JKE"
        age={20}
        onFinishEating={() => {
          alert("식사끝!");
        }}
      />
    </>
  );
};

export default App;
