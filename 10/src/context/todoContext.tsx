import React, { useState } from "react";
import { createContext } from "react";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TTodoContext = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};
export const TodoContext = createContext<TTodoContext>({ todos: [], setTodos: () => {} });

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
