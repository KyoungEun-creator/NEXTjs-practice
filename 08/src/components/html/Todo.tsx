import { useState, useId } from "react";

import Input from "./Input";
import Button from "./Button";
import TodoItem from "./TodoItem";

const Todo = () => {
  // 1. 할일을 담을 수 있는 상태값(객체를 담은 배열)만들고, 그 값에 입력 요소의 값을 추가
  // 2. 할일을 담은 데이터를 가지고 반복문으로 li태그를 반복 출력
  // 3. 삭제버튼을 누르면, 해당 할일을 삭제하는 기능을 추가
  // 3-1. 할일을 담고 있는 데이터에서 filter? 등의 방법을 써서 지워주기
  // 4. 할일을 담고 있는 데이터가 개별적으로 체크 유무를 관리하고 있어야 함

  const [arr, setArr] = useState([]);
  const uuid = useId();
  const [task, setTask] = useState("");
  //   const [agree, setAgree] = useState(false);

  const updateTodoListHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: { uuid },
      task: task,
      isCompleted: false,
    };
    setArr((prev) => [...prev, newTodo]);
    setTask("");
  };
  console.log(arr);

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>

          {/* 등록 */}
          <form action="" className="grid gap-4">
            <div className="flex gap-2">
              <Input
                type="text"
                id={uuid}
                value={task}
                placeholder="Enter Todo List"
                onChange={(e) => setTask(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
                onClick={updateTodoListHandler}
              >
                Add
              </Button>
            </div>
          </form>

          {/* 목록 */}
          {arr.map(({ id, task, isCompleted }) => (
            <TodoItem key={id} task={task} isCompleted={isCompleted} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Todo;
