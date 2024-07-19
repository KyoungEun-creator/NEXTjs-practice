// Event 실습

let numElement = document.querySelector(".num");
let numValue = document.querySelector(".num").innerHTML;
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");

minusBtn.addEventListener("click", function () {
  if (numValue > 0) {
    numElement.innerHTML = --numValue;
  }
});
plusBtn.addEventListener("click", function () {
  if (numValue < 10) {
    numElement.innerHTML = ++numValue;
  }
});
