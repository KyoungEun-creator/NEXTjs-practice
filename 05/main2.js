// async await

/*
const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task1시작");
    }, 1000);
  });
};
*/

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const task1 = async () => {
  await delay(3000);
  return "task1 시작";
};

task1() //
  .then((msg) => console.log(msg));

// Promise -> async await 방식으로
const delay = (ms) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

const task1 = async () => {
  await delay(1000);
  return console.log("task1 시작");
};
const task2 = async () => console.log("task2 시작");
const task3 = async () => console.log("task3 시작");
const task4 = async () => console.log("task4 시작");
const task5 = async () => console.log("task5 시작");
const task6 = async () => console.log("task6 시작");

/*
함수 선언식
async function task1() {
  await delay(1000);
  return console.log("task1 시작");
}
*/

// then 사용
task1() //
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => task5())
  .then(() => task6());

// await 사용
const startTasks = async () => {
  const msg1 = await task1();
  const msg2 = await task2();
  const msg3 = await task3();
  const msg4 = await task4();
  const msg5 = await task5();
  const msg6 = await task6();
  console.log(msg1, msg2, msg3, msg4, msg5, msg6);
  console.timeEnd(); // 전체코드 실행하는 데 소요시간 측정
};
startTasks();

// 시간 확인
const task1 = async () => {
  await delay(1000);
  return console.log("task1 시작");
};
const task2 = async () => {
  await delay(3000);
  return console.log("task1 시작");
};
const task3 = async () => {
  await delay(2000);
  return console.log("task1 시작");
};

// 앞전이 다 끝나야만 다음 게 실행되는 형태
const startTasks = async () => {
  const msg1 = await task1();
  const msg2 = await task2();
  const msg3 = await task3();

  console.log(msg1, msg2, msg3);
  console.timeEnd(); // 전체코드 실행하는 데 소요시간 측정: 총 6초
};
startTasks();

// 병렬 처리한다면?
// 일단 동기적으로 빠르게 함수를 실행시키고,
// 반환되는 promise 객체를 await를 통해 기다리는 것
// -> 총 소요시간은 가장 오래 걸리는 함수의 소요시간과 같다
const startTasks = async () => {
  const task1Promise = task1();
  const task2Promise = task2();
  const task3Promise = task3();

  const msg1 = await task1Promise; // 1초
  const msg2 = await task2Promise; // 3초
  const msg3 = await task3Promise; // 2초

  console.log(msg1, msg2, msg3);
  console.timeEnd(); // 전체코드 실행하는 데 소요시간 측정: 총 3초
};
startTasks();
