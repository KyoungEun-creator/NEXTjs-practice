// 반복문: while, do..while, for, for..in, for..of
// 무한루프 주의할 것

let num = 0;
while (num < 10) {
  console.log(num); // 조건이 만족할 때에만 작동
  num++; // 조건이 거짓이 되는 순간을 만드는 코드
}

let num2 = 0;
do {
  // 무조건 한번은 실행한다
  console.log(num2);
} while (num2 < 10);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for .. in
const arr = ["apple", "banana", "grape"];
for (let idx in arr) {
  console.log(arr[idx]);
}

const obj = { name: "JKE", age: 20 };
for (let key in obj) {
  console.log(obj[key]);
}

// for .. of
const arr2 = ["apple", "banana", "grape"];
for (let value of arr) {
  console.log(value);
}

```
연습문제
```;

// Q1. [연습문제 - 1부터 9까지 출력하기]
// 방법1
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// 방법2
let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}
// 방법3
let num = 1;
do {
  console.log(num);
  num++;
} while (num < 10);
// 방법4
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of arr) {
  console.log(value);
}
// 방법5
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index of arr) {
  console.log(arr[index + 1]);
}

/* Q2. [연습문제 - 음수 걸러내기]
배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.
*/
// 방법1
let numArr = [10, -10, 20, -30, 40];
let sum_val = 0;
for (i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    sum_val += numArr[i];
  }
}
console.log(sum_val); // 70
// 방법2
let numArr = [10, -10, 20, -30, 40];
let sum_val = 0;
for (let value of numArr) {
  if (value > 0) {
    sum_val += value;
  }
}
console.log(sum_val); // 70

/* Q3. [연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
// 방법1
for (i = 0; i < 16; i++) {
  if (i % 2 == 0) console.log(i, "짝수");
  else console.log(i, "홀수");
}
// 방법2
for (i = 0; i < 16; i++) {
  i % 2 == 0 ? console.log(i, "짝수") : console.log(i, "홀수");
}

/* Q4. [연습문제 - 암스트롱 수 구하기]

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/

// 각 자릿수마다 분리하는 것이 이 문제의 핵심!

// 방법1
for (let i = 100; i < 1000; i++) {
  let hundred = Math.floor(i / 100);
  let ten = Math.floor((i % 100) / 10);
  let one = i % 10;

  let value = hundred ** 3 + ten ** 3 + one ** 3;

  if (i === value) {
    console.log(i); //153 370 371 407
  }
}
// 방법2
for (let i = 100; i < 1000; i++) {
  // 일의 자리: 456 % 10 = 6
  // 십의 자리: (456 - 6) / 10 % 10 = 5
  // 백의 자리: ((456 - 6) - (5 * 10)) / 100 = 4
  const num1 = i % 10;
  const num2 = ((i - num1) / 10) % 10;
  const num3 = (i - num1 - num2 * 10) / 100;
  i === num1 ** 3 + num2 ** 3 + num3 ** 3 && console.log(i);
}
