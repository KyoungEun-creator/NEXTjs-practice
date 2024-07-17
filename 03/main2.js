// this

console.log(this); //window 객체

function member() {
  console.log(this);
}
member(); // === window.member()

// 객체: 키와 값으로 이루어진 속성들의 집합
const membership = {
  name: "JKE",
  //   매서드: joined 매서드
  joined: function () {
    console.log(this);
    return `${this.name}님이 가입했습니다.`;
  },
};

membership.joined(); // membership 객체 그 자체 {name: "JKE", joined: f}
console.log(membership.joined());

const joined = membership.joined;
joined(); // window

// bind
const membership2 = {
  name: "JKE",
  joined: function () {
    return `${this.name}님이 가입했습니다.`;
  }.bind({ name: "ABC" }),
};
console.log(membership2.joined());

// 객체 속성의 값이 함수일 때는 축약해서 작성하기도 함
const membership3 = {
  name: "JKE",
  joined() {
    return `${this.name}님이 가입했습니다.`;
  },
};
console.log(membership3.joined());
