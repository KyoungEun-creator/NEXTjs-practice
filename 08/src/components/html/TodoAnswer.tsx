import { useState } from "react";

import { twMerge } from "tailwind-merge";

import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [text, setText] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text, // text: text와 같음
        isCompleted: false, // true, false
      },
    ]);
    console.log(text);
    setText("");
  };

  // isCompleted
  // 선택한 id값과 map으로 하나씩 돌다가 발견한 id값이 서로 같으면
  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };

  // delete
  // 선택한 id값과 map으로 하나씩 돌다가 발견한 id값이 서로 다른 것만 내가 보여줄게
  // 같은 건 삭제해줄게
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
            <div className="flex gap-2">
              <Input
                type="text"
                value={text}
                placeholder="Enter Todo List"
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
              >
                Add
              </Button>
            </div>
          </form>
          {/* 목록 */}
          <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0"
              >
                <Checkbox checked={todo.isCompleted} onToggle={() => toggleTodo(todo.id)}>
                  <span className={twMerge("text-[#35383E]", todo.isCompleted && "line-through")}>
                    {todo.text}
                  </span>
                </Checkbox>
                <Button
                  className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;

// 로직 분리가 하나도 안 되어 있음...ㅜㅡㅜ
