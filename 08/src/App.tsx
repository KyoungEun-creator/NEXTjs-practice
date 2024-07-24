import React from "react";
import { useState } from "react";
import Input from "./components/html/Input";
import Button from "./components/html/Button";
import Checkbox from "./components/html/Checkbox";

const App = () => {
  const [text, setText] = useState<string>("");
  const [agree, setAgree] = useState(false);

  return (
    <>
      <div className="item-middle p-10">
        <div className="flex flex-col">
          {/* checkbox */}
          <Checkbox
            checked={agree}
            onToggle={() => {
              setAgree((prev) => !prev);
            }}
          >
            I agree
          </Checkbox>
          <Button
            className="bg-green-500 mt-4"
            onClick={() => {
              setAgree((prev) => !prev);
            }}
          >
            상태 변경
          </Button>
          {/* 입력값 */}
          <h1>{text}</h1>
          <Input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            className="bg-rose-500 mt-4"
            onClick={() => {
              setText("");
            }}
          >
            초기화
          </Button>
          <Button
            className="bg-blue-500 mt-4"
            onClick={() => {
              setText("someone@gmail.com");
            }}
          >
            저장된 값
          </Button>
          {/* textarea */}
          <textarea
            className="border boder-slate-500"
            value={text}
            onChange={(e) => {
              e.target.value;
            }}
          ></textarea>
          <Button
            className="bg-purple-500 mt-4"
            onClick={() => {
              setText("");
            }}
          >
            textarea 초기화
          </Button>
          {/* select box */}
          <select value={text} onChange={(e) => setText(e.target.value)}>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="cherry">cherry</option>
          </select>
          {/* radio button */}
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setText(e.target.value)}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setText(e.target.value)}
          />
          female
        </div>
      </div>
    </>
  );
};

export default App;
