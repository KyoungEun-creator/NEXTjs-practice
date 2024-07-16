// 기본 자료형과 참조 자료형의 차이?

// 기본 자료형의 경우, 값을 변수공간에 다이렉트로 집어는다.
// 참조 자료형의 경우, 값을 변수공간에 다이렉트로 집어넣지 않는다.
// JS 내부의 메모리 공간에 메모리 주소에 따라 값을 할당한다.
// 값 자체가 들어가있는 게 아니라, 값이 있는(값을 참조하는) '주소값'이 들어가있다.

const num1 = 10;
const num2 = 10;
console.log(num1 === num2); // true

const arr1 = [10, 20];
const arr2 = [10, 20];
console.log(arr1 === arr2); // false <- 서로 다른 메모리 주소값을 갖고 있기 때문

// ### 👻 연습문제

// 1. 변수 타입 확인
// 1-1. 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.

let num = 42;
console.log(typeof num); // number
let name = "John";
console.log(typeof name); // number
let isTrue = true;
console.log(typeof isTrue); // boolean
let person = { name: "Alice", age: 30 };
console.log(typeof person); // object
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits); // object

// 1-2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.

let length = 16; // number
let lastName = "Brown"; // number
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object
