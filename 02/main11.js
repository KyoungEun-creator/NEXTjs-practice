// 함수
// 특정 로직을 일괄적으로 실행하고 싶을 때 사용

// 1. 함수 선언식
function gugudan3() {
  console.log("구구단 3단 실행");
  for (i = 1; i < 10; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
  }
}
gugudan3();
// 매개변수 넘겨주기
function gugudanX(X) {
  console.log(`구구단 ${X}단 실행`);
  for (i = 1; i < 10; i++) {
    console.log(`${X} * ${i} = ${X * i}`);
  }
}
gugudanX(99);

// 2. 함수 표현식
// 2-1. 익명 함수 (unnamed function)
const gugudan4 = function () {
  console.log("구구단 4단 실행");
  for (i = 1; i < 10; i++) {
    console.log(`4 * ${i} = ${4 * i}`);
  }
};
gugudan4();
// 매개변수 넘겨주기
const gugudanN = function (N) {
  console.log(`구구단 ${N}단 실행`);
  for (i = 1; i < 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
};
gugudanN(99);

// 2-2. 기명 함수 (named function)
const gugudan5 = function gugudan5() {
  console.log("구구단 5단 실행");
  for (i = 1; i < 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }
};
gugudan5();
// 변수공간의 이름을 통해 호출

const add = function add(a, b, c) {
  return a + b + c;
};
console.log(add(10, 20, 30)); // 60
