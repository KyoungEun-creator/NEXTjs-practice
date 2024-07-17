// 객체

// 빈 객체 생성
const obj = {};

// 동적으로 속성을 추가 가능
obj.color = "yellow";
console.log(obj); // { color: 'yellow' }

delete obj.color;
console.log(obj); //{}

// 존재하지 않는 속성에 접근할 때
console.log(obj.name); //undefined (에러 아님)

// 확장성이 무한한 자료형 중 하나
let obj = {
  name: "철수",
  address: {
    zipcode: "131809",
    addr1: "서울시 강남구",
    addr2: "한경빌딩 4층 개발팀",
  },
  likeFoods: ["banana", "apple", "oragne"],
  // 매서드
  getAge: function () {
    return 20;
  },
};
console.log(obj.address.zipcode); // 131809

// 객체 순회 가능
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(key, obj[key]);
}
