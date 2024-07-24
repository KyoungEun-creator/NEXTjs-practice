import React from "react";
import ListItem from "./components/html/ListItem";

const App = () => {
  const fruits = ["apple", "banana", "apple", "cherry"];
  const users = [
    {
      name: "Mike",
      age: 20,
    },
    {
      name: "John",
      age: 23,
    },
  ];
  return (
    <>
      <ul>
        {/* key 값에 단순 index를 넣기보단 '고유하다는 보장'이 있는 값을 넣어주는 것을 지향할 것 */}
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}

        {users.map(({ name, age }) => {
          return <ListItem key={name} name={name} age={age} />;
        })}
      </ul>
    </>
  );
};

export default App;
