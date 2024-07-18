// main4.js 콜백지옥 해결하기

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task1 시작");
      resolve();
    }, 1000);
  });
}
function task2() {
  return new Promise((resolve) => {
    console.log("task2 시작");
    resolve();
  });
}
function task3() {
  return new Promise((resolve) => {
    console.log("task3 시작");
    resolve();
  });
}
function task4() {
  return new Promise((resolve) => {
    console.log("task4 시작");
    resolve();
  });
}

task1() //
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => console.log("finished"));
/*
  task1 시작
  task2 시작
  task3 시작
  task4 시작
  finished
*/
