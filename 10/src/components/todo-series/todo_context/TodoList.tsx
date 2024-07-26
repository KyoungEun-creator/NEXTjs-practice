import { useContext } from "react";
import { TodoContext } from "../../../context/todoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
