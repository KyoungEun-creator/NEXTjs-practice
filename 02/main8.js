// 논리 연산자

// && 좌변과 우변이 모두 참이어야 참
// || 좌변과 우변 중 하나라도 참이면 참
// | 단일 피연산자의 반대

// ## 연습문제

// 1. 논리 연산자 기본
// - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
// - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
// - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
// - `a`의 논리 NOT 연산 결과를 출력하세요.
const a = true;
const b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// 2. 여러 조건 결합
// - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
// - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
const x = 20;
const y = 14;
const z = 30;
console.log(x > 10 && y < 5); // false
console.log(x > 10 || z > 3); // true
console.log(y !== 0); // true

// 3. 사용자 로그인 및 권한 확인

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
// - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
// - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please log in"); // Welcome
console.log(isAdmin ? "Admin access granted" : "Admin access denied"); // Admin access denied
console.log(isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"); // Restricted access

// 4. 값의 존재 확인

// - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
// - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
const value1 = "apple";
console.log(value1); // apple
console.log(!value1); // false
console.log(!!value1); // true

const value2 = null;
console.log(value2); // null
console.log(!value2); // true
console.log(!!value2); // false

const value3 = undefined;
console.log(value3); // undefined
console.log(!value3); // true
console.log(!!value3); // false

const value4 = 2;
console.log(value4); // 2
console.log(!value4); // false
console.log(!!value4); // true
// console.log(!!value1 || !!value2); // 하나라도 값이 존재하면 true, 아니면 false
// console.log(!value1 && !value2); // 두 변수 모두 값이 없으면 true, 아니면 false

// 5. 범위 확인
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
const num = 101;
console.log(num >= 0 && num <= 100); // false
console.log(num < 0 || num > 100); // true

```
Q1. 여러개의 데이터를 하나로 묶어서 표현하고 인덱스 번호로 접근하는 자바스크립트 자료형은?

- [ ]  숫자형
- [x]  배열
- [ ]  객체

Q2. 아래의 코드에서 잘못된 부분을 수정하시오 

var obj = {
	name:'철수',
	age:20,
	gender:'male'
}

잘못된 부분이 없다=.=^

Q3. 다음 중 산술 연산자가 아닌 것을 고르세요.

- [ ]  +
- [ ]  -
- [ ]  *
- [x]  = <- 할당 연산자
- [ ]  %

Q4. 다음중 연산자와 이름이 잘못 적어진 것을 고르세요.

- [x]  % 나누기 연산자
- [ ]  * 곱셈연산자
- [ ]  <= 작거나 같다
- [ ]  == 같다
- [ ]  ++ 증가연산자

Q5. 아래의 코드의 실행 결과를 예측하세요.

const myLevel = 99; 
const status = myLevel >= 99 ? '축하합니다. 만렙입니다' : '';

console.log(status); // 축하합니다. 만렙입니다

Q6. 아래 코드의 실행 결과를 예측하세요
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 * "20"); // 200
console.log(10 * 20); // 200
​
Q7. 아래의 코드와 같은 코드를 고르세요
let score = 10; 
 score = score + 10;
​
[x] score += 10;
[ ] score ++= 10;
[ ] score =+10;
[ ] score + 10 = 10;

Q8. 아래의 실행 결과를 고르세요

const result = 10 + 2 * 10;

- [ ]  120
- [x]  30
- [ ]  42
- [ ]  118

Q9. 삼항 연산자 활용

1. 변수 num을 선언하고 어떤 숫자를 할당하세요.
2. num이 짝수인지 홀수인지 판별하는 삼항 연산자를 사용하여 결과를 isEven 변수에 저장하고 콘솔에 출력하세요.


const num = 10;
const isEven = 10 % 2 === 0 ? "짝수" : "홀수";
console.log(isEven)
```;
