// 조건문

const isLoggedIn = false;
let message;

if (isLoggedIn) {
  // 0, null, undefined, "", NaN -> false
  console.log("로그인되었습니다.");
  // 내부에 실행해야하는 코드가 복잡할 때엔 if문 사용이 효율적
}
// 중괄호 안에 있는 코드가 한 줄일 때 중괄호 생략 가능
if (isLoggedIn) message = "로그인 되었음";
else message = "로그인 필요";

// 간단할 때는 삼항연산자 사용이 효율적
message = isLoggedIn ? "로그인 되었음" : "로그인 필요";
console.log(message);

const score = 90;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// switch 문
const area = "제주도";
let fee = 0;

switch (area) {
  case "서울":
    fee = 3000;
    break;
  case "경기도":
    fee = 3500;
    break;
  case "인천":
    fee = 3000;
    break;
  case "남양주":
    fee = 3000;
    break;
  default: // 모든 조건이 만족하지 않을 때
    fee = 10000;
    break;
}

// break의 사용위치가 매우 중요!

switch (area) {
  case "서울":
  case "인천":
  case "남양주":
    fee = 3000;
    break;
  case "경기도":
    fee = 3500;
    break;
  default:
    fee = 10000;
    break;
}
console.log(fee); // 10000

// if 문
const district = "제주도";
let money = 0;

if (district === "서울" || district === "인천" || district === "남양주") money = 3000;
else if (district === "경기도") money = 3500;
else money = 10000;

console.log(money); // 10000

// 조건문을 선택하는 기준: 표현식으로? if문, 값으로? switch문

```
연습문제
```;
/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/
let score2 = 0;
if (score2 >= 90) console.log("A");
else if (score2 >= 80) console.log("B");
else if (score2 >= 70) console.log("C");
else if (score2 >= 60) console.log("D");
else console.log("F");

/*
2. 짝수와 홀수 판별
- 변수 `num`에 임의의 숫자를 할당하세요.
- `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
*/
const num = 20;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

/*
3. 로그인 확인 및 권한 부여 

- 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
- 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
- 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
- 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
*/

const isLoggedIn2 = true;
const isAdmin2 = false;
if (!isLoggedIn2) console.log("Please log in");
if (isLoggedIn2 && !isAdmin2) console.log("Access denied");
if (isLoggedIn2 && isAdmin2) console.log("Welcome, admin!");

/*
4. 숫자 크기 비교 

- 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
- `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
*/
const a = 19;
const b = 3;
if (a > b) console.log("a is greater");
else if (a < b) console.log("b is greater");
else console.log("a and b are equal");

/*
5.  월별 계절 판별
    1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
    2. `month`에 따라 해당하는 계절을 출력하세요:
        - 12, 1, 2: "Winter"
        - 3, 4, 5: "Spring"
        - 6, 7, 8: "Summer"
        - 9, 10, 11: "Fall"
 */
const month = 10;
if (month === 12 || month === 1 || month === 2) console.log("Winter");
if (month === 3 || month === 4 || month === 5) console.log("Spring");
if (month === 6 || month === 7 || month === 8) console.log("Summer");
if (month === 9 || month === 10 || month === 11) console.log("Fall");
