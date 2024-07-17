// 생성자 함수

// 객체의 속성은 모두 같고, 값만 다를 때
```
const user1 = {
  name: "John",
  age: 30,
  gender: "male",
};
const user2 = {
  name: "Anna",
  age: 20,
  gender: "female",
};
const user3 = {
  name: "Alex",
  age: 25,
  gender: "male",
};
```;

function User(name, age, gender) {
  // 무한 추가 가능
  this.name = name;
  this.age = age;
  this.gender = gender;

  // 객체안에 포함된 함수를 다른 용어로 '메서드(method)'라고 부름
  this.introduce = function () {
    console.log(`name: ${this.name}, age: ${this.age}, gender: ${gender} `);
  };
}
const user1 = new User("John", 30, "male");
user1.introduce();
const user2 = new User("Anna", 20, "female");
user2.introduce();
const user3 = new User("Alex", 27, "Male");
user3.introduce();

console.log(user1, user2, user3);

// new라는 키워드와 함께 아래 this에 관한 내용이 생략되었다고 볼 수 있음
function User(name, age, gender) {
  // this = {}
  // this라는 빈 객체에 동적으로 추가해서 마지막에 return으로 반환한다고 보면 쉬움
  this.name = name;
  this.age = age;
  this.gender = gender;

  // return this
}

// prototype
// 공통적으로 사용할 수 있는 값이나 매서드는 메모리의 낭비다
// prototype이라는 객체에 넣어서 참조하게 하자

// 달라지지 않는 똑같은 함수를 가지고 있는 객체가 계속 들어있다면?
User.prototype.introduce = function () {
  console.log(`name: ${this.name}, age: ${this.age}, gender: ${gender} `);
};

// 정확히 잘 참조하고 있는지 확인
console.log(user1.__proto__ === User.prototype); // true
