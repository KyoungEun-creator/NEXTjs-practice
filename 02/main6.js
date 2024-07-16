// 비교 연산자

const num1 = 10;
const num2 = 10;
const strNum = "10";

// 동등 연산자
// 자료형의 종류를 비교하지 않는다
console.log(num1 == num2); // true
// "암묵적(암시적)형변환" 에 의해 값을 같다고 봄
console.log(num1 == strNum); // true

// 일치 연산자
// "암묵적(암시적)형변환"에 의한 예기치 않은 오류를 방지할 수 있음
console.log(num1 === strNum); // false

// 부등 연산자
console.log(num1 != num2); // false
console.log(num1 != strNum); // false

// 불일치 연산자
console.log(num1 !== num2); // false
console.log(num1 !== strNum); // true

// 부등호 > >= < <=
// 이때도 암묵적 형변환이 작동한다
console.log(num1 <= strNum); // true

// # 연습문제

// 1.나이비교

// - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
const age1 = 25;
const age2 = 30;

// - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
console.log(age1 > age2); // false

// - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
console.log(age1 === age2); // false
