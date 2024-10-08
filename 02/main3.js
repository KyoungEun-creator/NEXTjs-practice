// 산술 연산자
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)

// 덧셈: 문자열 연결 기능을 추가적으로 가진다
let x = "A";
const y = "B";
console.log(x + y); // AB

x += "C";
console.log(x); // AC

// ES6 템플릿 문자열
const maxLevel = 99;
const message = `최고 레벨은 ${maxLevel}입니다.`;

// ### 연습문제

// 1. 기본 산술 연산

//     1. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
const a = 10;
const b = 5;

//     2. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
const sum = a + b;
const difference = a - b;
const multiple = a * b;
const division = a / b;
const remainder = a % b;

//     3. 각 연산의 결과를 콘솔에 출력하세요.
console.log(sum); // 15
console.log(difference); // 5
console.log(multiple); // 50
console.log(division); // 2
console.log(remainder); // 0
