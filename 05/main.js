// fulfilled 상태 확인
const promise = new Promise((resolve, reject) => {
  console.log("프로미스 시작");
  setTimeout(() => {
    resolve("성공"); // resolve안의 값이 then의 params로 들어가게 됨
    reject("error"); // reject안의 값이 catch의 params로 들어가게 됨
  }, 5000);
});
console.log(promise);

promise //
  .then((params) => {
    console.log(params);
  })
  .catch((params) => {
    console.log(params);
  });

// then 확인
const promise2 = new Promise((resolve, reject) => {
  console.log("프로미스2 시작");
  setTimeout(() => {
    resolve(1); // resolve안의 값이 then의 params로 들어가게 됨
    reject("error"); // reject안의 값이 catch의 params로 들어가게 됨
  }, 5000);
});
console.log(promise2);

promise2 //
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => console.log(num)) // 4
  .catch((params) => {
    console.log(params);
  });

// 콜백 지옥 해결
function task1() {
  return new Promise((resolve) => {
    console.log("task1시작");
    resolve();
  });
}
function task2() {
  return new Promise((resolve) => {
    console.log("task2시작");
    resolve();
  });
}
function task3() {
  return new Promise((resolve) => {
    console.log("task3시작");
    resolve();
  });
}

function task4() {
  return new Promise((resolve) => {
    console.log("task4시작");
    resolve();
  });
}
function task5() {
  return new Promise((resolve) => {
    console.log("task5시작");
    resolve();
  });
}
task1() //
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => task5())
  .then(() => {
    console.log("끝");
  });
