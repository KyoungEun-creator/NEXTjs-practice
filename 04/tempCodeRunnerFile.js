  const students = [
    { name: "Alice", age: 21, gender: "male", height: 170 },
    { name: "Bob", age: 19, gender: "male", height: 165 },
    { name: "Charlie", age: 20, gender: "male", height: 175 },
    { name: "David", age: 22, gender: "male", height: 180 },
    { name: "Eve", age: 17, gender: "female", height: 160 },
    { name: "Frank", age: 18, gender: "male", height: 175 },
    { name: "Grace", age: 21, gender: "female", height: 165 },
    { name: "Henry", age: 19, gender: "male", height: 170 },
    { name: "Ivy", age: 20, gender: "female", height: 155 },
    { name: "Jack", age: 22, gender: "male", height: 185 },
  ];
  const youngestFemle = students
    .filter((elem) => elem.gender === "female")
    .sort((a, b) => a.age - b.age)[0]; // 어린 것부터 정렬
  console.log(youngestFemle.name);