function User(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const user1 = new User("John", 30, "male");

User.prototype.introduce = function () {
  console.log(`name: ${this.name}, age: ${this.age}, gender: ${this.gender} `);
};

console.dir(user1);

// 존재하지 않는 속성을 (함수로) 요청하면
console.log(user1.introduce22); // undefined
console.log(user1.introduce22()); // TypeError: user1.introduce22 is not a function

console.log(User.prototype.introduce());
// name: undefined, age: undefined, gender: undefined

console.dir(user1.__proto__.introduce());
// name: undefined, age: undefined, gender: undefined

console.dir(user1.introduce());
// name: John, age: 30, gender: male
// js엔진이 __proto__ 생략 가능하게 해줌
