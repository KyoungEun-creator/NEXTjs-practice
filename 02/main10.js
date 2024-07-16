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
{
  num2++;
}

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
