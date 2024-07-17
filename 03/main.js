// 함수 호출 시 할당한 값이 없다면
// 미리 지정해준 매개변수의 기본값을 이용

function printTxt(message = "Hello", name = "JKE") {
  console.log(message, name);
}
printTxt();

// (ES6)나머지 연산자 (...): 가변적으로 매개변수 받기
function add(...args) {
  console.log(args);
}
add(10, 20); //[10,20]
add(10, 20, 30); // [10,20,30]

function add(...a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}
add(10, 20, 30, 50); // 110

// (ES5)유사배열객체 arguments: 배열은 아닌데 배열과 유사하다
// (ES6)나머지연산자의 등장으로 더이상 사용되지 않음
function add() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

// 나머지연산자의 사용: 나머지를 의미하므로 가장 나중에 사용되어야 한다
function add(a, ...args) {
  console.log(a, args);
}
add(10, 20, 30, 40, 50); // 10 [20,30,40,50]

// return은 오직 함수 안에서만 사용 가능
// return 뒤는 호출되지 않음
function add(a, b) {
  const sum = a + b;
  return sum;
  console.log("return 뒤는 호출되지 않는다");
}
function printNumber(number) {
  console.log(`${number}가 출력되었습니다.`);
}
const sum = add(10, 20);
printNumber(sum);

// return의 본질: 반환하는 것!
// 코드의 흐름을 끊는 용도
// 조건문이 있으면 하나의 함수 안에 return문이 여러개 들어갈 수 있음
function membershipCard(isLoggedIn) {
  if (!isLoggedIn) {
    return; // 함수 종료(x), undefined 반환(o)
  }

  return {
    name: "JKE",
    grade: "basic",
  };
}
const membership = membershipCard(false);
console.log(membership);

// 외부함수
function membershipCard() {
  // 내부함수
  return function () {
    return { name: "JKE", grade: "basic" };
  };
}
const membership2 = membershipCard()();
console.log(membership2);

// 화살표 함수
// 값을 반환하는 로직 없이 return만 있다면 return 생략 가능
const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;

const membershipCard = () => {
  return {
    name: "JKE",
    grade: "basic",
  };
};
// return 없이 객체를 반환할 때엔 소괄호로 묶어줘야 함
const membershipCard = () => ({
  name: "JKE",
  grade: "basic",
});

// 매개변수가 하나면 소괄호 생략이 가능하다
const membershipCard = (siteName) => {
  return () => {
    return {
      name: `${siteName} 온라인 사이트`,
      grade: "basic",
    };
  };
};
const membership3 = membershipCard("스나이퍼팩토리");
console.log(membership3); // { name: '스나이퍼팩토리 온라인 사이트', grade: 'basic'}

// return 키워드 사용하지 않고 화살표 함수로 표현해보기
// 외부함수
function membershipCard() {
  // 내부함수
  return function () {
    return { name: "JKE", grade: "basic" };
  };
}
const membership4 = membershipCard()();
console.log(membership4);

const membershipCard5 = () => () => () => ({ name: "JKE", grade: "basic" });
console.log(membershipCard5()()());

// 연습문제
```
Q1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
```;
const add = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return console.log(sum);
};
add(1, 2, 3);

```
Q2
사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  
구현 방법은 자율입니다.
```;
const calculator = (a, b, c) => {
  if (b == "+") console.log(a + c);
  if (b == "-") console.log(a - c);
  if (b == "*") console.log(a * c);
  if (b == "/") console.log(a / c);
};
calculator(2, "+", 4);

function calculater2(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}
console.log(calculater2(2, 4, "+"));

```
Q3
짝수 홀수 판별하기
숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
```;
const isEven = (num) => {
  message = num % 2 === 0 ? "true" : "false";
  return console.log(message);
};
isEven(7);

const isEven2 = (num) => (num % 2 === 0 ? true : false);
console.log(isEven2(7));

```
Q4
팩토리얼 계산하기
양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 factorial을 작성하세요.
함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
```;
const factorial = (num) => {
  let res = 1;
  while (num >= 1) {
    res *= num;
    num--;
  }
  return console.log(res);
};
factorial(5); // 120
factorial(0); // 1

const factorial2 = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return console.log(res);
};
factorial2(5); // 120

// 재귀함수: 함수 안에서 자기 자신을 부르는 함수
function factorial3(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial3(n - 1);
  }
}
console.log(factorial3(5));

```
Q5
삼각형 넓이 계산하기
삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
```;
const triangleArea = (w, h) => {
  const area = (w * h) / 2;
  console.log(area);
};
triangleArea(10, 5);
