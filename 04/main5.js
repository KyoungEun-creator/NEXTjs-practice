// Promise
// 비동기 작업을 처리할 수 있게 도와주는 객체

// pending: 비동기 처리가 아직 수행되지 않은 상태
// fulfilled: 비동기 처리가 수행된 상태
// rejected: 비동기 처리가 실패한 상태
// 결과값을 받을 때엔 then, catch, finally 라는 매서드를 통함

const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행하는 코드
  // 작업이 성공하면 resolve(value) 호출
  // 작업이 실패하면 reject(error) 호출
  const isSuccess = true;
  setTimeout(() => {
    isSuccess ? resolve("success") : reject(new Error("failed"));
  }, 3000);
});

// promise가 fulfilled 상태일 때
promise.then(
  (value) => {
    console.log(value);
  },
  // 매개변수를 두 개 받을 수 있음
  // rejected 상태일 때도 then에서 처리하게 하면 catch는 작동하지 않음(실무에서 거의 사용x)
  (error) => {
    console.log(error);
  }
);

// promise가 rejected 상태일 때
promise.catch((error) => {
  console.error(error);
});

// 상태 상관 없이 무조건 실행되는 거
promise.finally(() => {
  console.log("finally");
});

console.log("hello");
