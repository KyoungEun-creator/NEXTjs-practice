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

// 없는 속성을 요청하면 undefined 반환
console.log(user1.introduce22); //undefined

console.log(User.prototype.introduce());
// name: undefined, age: undefined, gender: undefined

console.dir(user1.__proto__.introduce());
// name: undefined, age: undefined, gender: undefined

console.dir(user1.introduce());
// name: John, age: 30, gender: male
// js엔진이 __proto__ 생략 가능하게 해줌
