import React from "react";

import TodoContextProvider from "./context/todoContext";
import Todo from "./components/todo-series/todo_context/Todo";

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </>
  );
};

export default App;
