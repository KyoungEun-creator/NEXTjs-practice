// Event

// const inputElem = document.querySelector("input");
// inputElem.addEventListener(이벤트타입, 이벤트핸들러)의 형태 가짐

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function (ev) {
  console.log(this);
  console.log(ev);
  console.log("keydown");
  if (ev.key === "Enter") {
    alert("검색!");
    // 검색 로직 구현 가능
  }
});

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", function (ev) {
  console.log(this); // 코드 자체
  console.log(ev); // 이벤트 객체 자체
  console.log("click");
});
