let todos = [
  {
    id: 1,
    text: "아침먹기",
    isCompleted: false,
  },
  {
    id: 2,
    text: "저녁먹기",
    isCompleted: false,
  },
];

const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text: text,
    isCompleted: false,
  };
  // todos.push(newTodo);
  // 이렇게 하면 안 되는 이유: 원본 데이터를 해치기 때문!
  todos = [...todos, newTodo];
};
const toggleTodo = (id) => {
  todos = todos.map((elem) =>
    elem.id === id ? { ...elem, isCompleted: !elem.isCompleted } : elem
  );
  // setTodo((todos) =>
  //   todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  // );
};

const deleteTodo = (id) => {
  todos = todos.filter((elem) => elem.id !== id);
};

addTodo("점심먹기");
console.log(todos);
toggleTodo(1);
console.log(todos);
deleteTodo(3);
console.log(todos);
