import React from "react";
import { TNameAndAge } from "../../../type";

const Eat = (props: { name: string; age: number; onFinishEating: () => void }) => {
  return (
    <>
      <h1>
        {props.name} - {props.age} 님이 식사를 시작합니다.
      </h1>
      <button onClick={props.onFinishEating}>식사완료</button>
    </>
  );
};

export default Eat;
