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
