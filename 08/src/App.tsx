import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);
          setCount((currentValue) => currentValue + 1);
          setCount((currentValue) => currentValue + 1);
          setCount((currentValue) => currentValue + 1);
        }}
      >
        증가
      </button>
    </>
  );
};

export default App;
