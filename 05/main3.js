// DOM

// 1. 문서 객체 찾기
const h1elem = document.querySelector("h1");
console.log(h1elem);

const bye = document.querySelector("div > h1");
console.log("bye: ", bye);

const name = document.querySelector(".name");
// console.log("name: ", name);

// 2. 문서 객체 콘텐츠 바꾸기
name.innerHTML = "<a>jke</a>";
// name.innerText = "<a>jke</a>";
console.log("name: ", name);

// 3. 스타일링 하기
name.style.color = "red";
name.style.fontSize = "90px";

// 4. 클래스 추가하기
name.classList.add("active");

// 5. 클래스 제거하기
name.classList.remove("bye");

// 6. 클래스 토글하기
name.classList.toggle("done"); // 없어서 생김
name.classList.toggle("done"); // 있어서 없어짐
name.classList.toggle("done"); // 없어서 생김...

// 7. input value 가져오기
setTimeout(() => {
  const inputElem = document.querySelector("input");
  console.log(inputElem.value);
}, 3000);
