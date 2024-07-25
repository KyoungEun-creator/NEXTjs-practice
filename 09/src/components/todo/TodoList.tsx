import React from "react";
import TodoListItem from "./TodoListItem";
import { TTodo } from "./Todo";
import { TTodoAction } from "../reducer/todoReducer";

const TodoList = ({
  todos,
  dispatch,
}: {
  todos: TTodo[];
  dispatch: React.Dispatch<TTodoAction>;
}) => {
  return (
    <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </ul>
  );
};

export default TodoList;
