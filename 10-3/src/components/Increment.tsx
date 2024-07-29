import { useState, useEffect } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count변경됨");
  }, [count]);

  useEffect(() => {
    console.log("A 컴포넌트 생성");

    const interval = setInterval(() => {
      console.log("A interval");
    }, 1000);

    // 컴포넌트가 제거되었을 때도 계속됨
    // setInterval이 멈춰야함 -> clearInterval

    return () => {
      console.log("A 컴포넌트 제거");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Increment: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};

export default Increment;
