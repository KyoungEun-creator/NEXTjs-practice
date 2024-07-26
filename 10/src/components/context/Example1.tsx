import React, { useContext } from "react";
import { CountContext } from "../../ context/countContext";

const Example1 = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </>
  );
};

export default Example1;
