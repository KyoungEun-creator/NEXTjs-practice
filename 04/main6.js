const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        resolve(num * 2); // 2
        reject(new Error("error"));
      })
  )
  .then((num) => num * 2) // promise 내부적으로 reslove (4)인 것으로 처리
  .then((num) => num * 3) // promise resolve (12)
  .then((num) => num * 2) // promise resolve (24)
  .then((num) => console.log(num)) // 24
  .catch((error) => {
    console.log(error);
  });

// resolve가 정상 실행되지 않으면 그 이후의 코드가 모두 읽히지 않음
// 코드마다 아래에 catch문을 넣어서 에러가 나더라도 다시 드리블링하는 방법 있음
const fetchNumber2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber2
  .then(
    (num) =>
      new Promise((_, reject) => {
        reject(new Error("error"));
      })
  )
  .catch((num) => num) // resolve(num)
  .then((num) => num * 2) // promise 내부적으로 reslove (2)인 것으로 처리
  .then((num) => num * 3) // promise resolve (6)
  .then((num) => num * 2) // promise resolve (12)
  .then((num) => console.log(num)) // 12
  .catch((error) => {
    console.log(error);
  });
