import useTodoStore from "../stores/TodoStore";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
