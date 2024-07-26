import React from "react";
import { useCountStore } from "../../stores/countStore";

const DisplayCount = () => {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <div>Count: {count}</div>
    </>
  );
};

export default DisplayCount;
