// 삼항 연산자

// 피연산자1 ? 피연산자2 : 피연산자3

let myMoney = 3000;
let price = 5000;
const result1 = myMoney < price ? "돈이 부족합니다." : "물건을 구매하겠습니까?";
// 피연산자1: myMoney < price
// 피연산자2(피연산자1가 참일 때): '돈이 부족합니다.'
// 피연산자3(피연산자1가 거짓일 때): '물건을 구매하겠습니까?'

const result2 = true ? "돈이 부족합니다." : "물건을 구매하겠습니까?";
// 무조건 피연산자2를 출력한다
// TS에선 에러를 출력하지만, JS에선 상관 없음

const result3 = myMoney ? "돈이 부족합니다." : "물건을 구매하겠습니까?";
// myMoney가 0 / null / undefined일 때엔 false로 인식하고 피연산자3을 출력한다
// myMoney가 위의 경우가 아닐(음수 포함) 때엔 피연산자1을 true로 인식하고 피연산자2를 출력한다

// ## 연습문제

// 1. 숫자비교
//     1. 변수 `num`에 임의의 숫자를 할당하세요.
//     2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.
const num = 10;
console.log(num > 0 ? "Poisitive" : num === 0 ? "Zero" : "Negative"); // Positive

// 2. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
const a = 40;
const b = 20;
const c = 40;
console.log(a > b ? (a > c ? a : c) : b > c ? b : c);

// 3. 짝수 홀수 확인
// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
const number = 100;
console.log(number % 2 === 0 ? "Even" : "Odd"); // Even

// 4. 로그인 확인
// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
const isLoggedIn = false;
console.log(isLoggedIn ? "Welcome" : "Please log in"); // Please log in

// 5. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
const age = 26;
console.log(age >= 18 ? "Adult" : "Minor"); // Adult
