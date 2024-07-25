import React, { useState } from "react";
import Input from "../html/Input";
import Button from "../html/Button";

const TodoEditor = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
      <div className="flex gap-2">
        <Input
          type="text"
          value={text}
          placeholder="Enter Todo List"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg">
          Add
        </Button>
      </div>
    </form>
  );
};

export default TodoEditor;
