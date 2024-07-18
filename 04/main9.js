// 내장 객체 과제

const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기 (가장 먼저 찾아지는 학생 한 명만)
{
  const height185 = students.find((elem) => elem.height === 185);
  console.log(height185);
}

//2. 나이가 20살 이상인 학생들 찾기
{
  const over20 = students.filter((elem) => elem.age >= 20);
  console.log(over20);
}

// 3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  const shorter165 = students.some((elem) => elem.height <= 165);
  console.log(shorter165);
}

// 4. 학생들이 모두 20살 이상인지 확인해서 true, false 반환하기
{
  const over20 = students.every((elem) => elem.age >= 20);
  console.log(over20);
}

// 5. 학생들의 평균 연령 구하기
{
  const ages = [];
  students.forEach((elem) => ages.push(elem.age));
  console.log(
    ages.reduce((prev, cur) => {
      return prev + cur;
    }, 0) / ages.length
  ); // 19.9
}

{
  const agesSum = students.reduce((sum, elem) => sum + elem.age, 0);
  const avgAge = agesSum / students.length;
  console.log(avgAge); // 19.9
}

// 6. 남학생들의 평균 연령 구하기
{
  const males = students.filter((elem) => elem.gender === "male");
  const maleAges = [];
  males.forEach((elem) => maleAges.push(elem.age));
  console.log(
    maleAges.reduce((prev, cur) => {
      return prev + cur;
    }, 0) / maleAges.length
  ); // 20.142857142857142
}
{
  const males = students.filter((elem) => elem.gender === "male");
  const totalMaleAge = males.reduce((sum, elem) => sum + elem.age, 0);
  const averageMaleAge = totalMaleAge / males.length;
  console.log(averageMaleAge); // 20.142857142857142
}

// 7. 여학생들만 따로 추출해서 새로운 배열 만들기
{
  const females = students.filter((elem) => elem.gender === "female");
  console.log(females);
}

// 8. 여학생들 중 나이가 가장 어린 학생 찾기
{
  const females = students.filter((elem) => elem.gender === "female");
  const femaleAges = [];
  females.forEach((elem) => femaleAges.push(elem.age));
  console.log(Math.min(...femaleAges));
}

// 연습문제
```
  Q1
  매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
  함수를 만들어주세요.
  
  ex) 32125 -> 52123
      15231 -> 13251 
  ```;

function reverse_to_number(number) {
  strNum = number.toString();
  // console.log(strNum.split("")); // [ '1', '2', '3' ]
  reverseStrNums = strNum.split("").reverse();
  // console.log(reverseStrNums); // [ '3', '2', '1' ]
  joinStrNum = reverseStrNums.join("");
  console.log(joinStrNum); // 321(str)

  return parseInt(joinStrNum);
  // parseInt(number.toString().split("").reverse().join(""));
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

```
  Q2
  [가장 긴 단어를 출력하기]
  
  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.
  ```;

function findLongStr(str) {
  words = str.split(" ");
  let longest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
