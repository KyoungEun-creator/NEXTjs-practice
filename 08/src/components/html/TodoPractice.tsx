import { useState } from "react";

import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

type TTodoProps = {
  id: string;
  task: string;
  isCompleted: boolean;
};
const TodoPractice = () => {
  const [todos, setTodos] = useState<TTodoProps[]>([]);
  const [task, setTask] = useState("");

  const updateTodosHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newTask = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTask]);
    console.log(todos);
    console.log(task);
    setTask("");
  };

  // 같다면 기존의 todo 객체를 복사 ({ ...todo })하고,
  // isCompleted 속성을 현재 값의 반대로 설정 (!todo.isCompleted)
  // 같지 않다면 현재 todo 객체를 그대로 반환
  const toggleCompleteHandler = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <form action="" className="grid gap-4" onSubmit={updateTodosHandler}>
            <div className="flex gap-2">
              <Input
                type="text"
                value={task}
                placeholder="Enter Todo List"
                onChange={(e) => setTask(e.target.value)}
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
                <Checkbox
                  checked={todo.isCompleted}
                  onToggle={() => toggleCompleteHandler(todo.id)}
                >
                  <span className={twMerge("text-[#35383E]", todo.isCompleted && "line-through")}>
                    {todo.task}
                  </span>
                </Checkbox>
                <Button
                  onClick={() => deleteTodoHandler(todo.id)}
                  className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
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
export default TodoPractice;
