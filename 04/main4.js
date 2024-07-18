// 동기 비동기

function task1() {
  setTimeout(() => {
    console.log("task1 시작");
  }, 1000);
}
function task2() {
  console.log("task2 시작");
}

task1();
task2();
/*
task2 시작
task1 시작 
*/

// 콜백 함수의 종류: 동기 콜백 함수, 비동기 콜백 함수

// 1.동기 콜백 함수: 콜백 함수가 동기적으로 실행되는 형태
function greeting(callback) {
  console.log("Hello");
  callback();
}

function goodbye() {
  console.log("goodbye");
}

greeting(goodbye);
/*
Hello
goodbye
*/

// 2. 비동기 콜백 함수: 비동기 작업이 끝난 다음에 호출되는 형태
function task1(callback) {
  // 비동기함수가 끝나고 나서 콜백 함수를 호출
  setTimeout(() => {
    console.log("task1 시작");
    callback();
  }, 1000);
}
function task2() {
  console.log("task2 시작");
}

task1(task2); // task1을 호출할 때 task2를 넘겼다
/*
task1 시작
task2 시작
*/

function task1(callback) {
  setTimeout(() => {
    console.log("start task1");
    callback();
  }, 1000);
}
function task2(callback) {
  console.log("start task2");
  callback;
}
function task3(callback) {
  console.log("start task3");
  callback;
}
function task4(callback) {
  console.log("start task4");
  callback();
}

// 콜백지옥 (콜백이 무분별하게 사용된 것)
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("모든 작업 끝");
      });
    });
  });
});
