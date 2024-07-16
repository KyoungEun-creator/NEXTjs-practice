// 증감 연산자

// num++ num--: 후치연산자, 후위연산자: ~~한 후에
let num1 = 10;
num1++;
num1++;
num1++;
console.log(num1); // 13

const incrementNum = num++;
// 일단 num을 할당한 후에 증가시켜라
console.log(incrementNum); // 10

let num2 = 10;
num2++;
num2++;
num2++;
console.log(num2); // 7

// ++num, --num: 전치연산자, 전위연산자: ~~하기 전에
let num = 10;

const incrementNum2 = ++num;
// num이라는 변수를 할당하기 전에 증가시키고 할당하라
console.log(incrementNum); // 11

// ### 연습문제

// 1. 증가 및 감소 연산자

//     1. 변수 `y`에 숫자 7을 할당하세요.
let y = 7;

//     2. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
console.log(y++); // 7
console.log(y); // 8

//     3. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
console.log(y--); // 8
console.log(y); // 7

//     4. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
console.log(++y); // 8

//     5. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.
console.log(--y); // 7
