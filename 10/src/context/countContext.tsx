import React, { useState, createContext } from "react";

export const CountContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setCount: () => {} });

const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>
    </>
  );
};
export default CountProvider;
