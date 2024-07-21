// 타입 추론
{
  let num = 10;
  const num2 = 10;
  let str = "Hello";

  let arr = [];
  let arr2 = [1, 2, 3];
  let arr3 = ["a", "b", "c"];
  let arr4 = [true, false];
  let arr5 = [1, "a", true];

  let obj = {
    name: "JKE",
    age: 20,
  };

  let func: () => string = () => {
    return "d";
  };

  // 함수 자체에 타입 명시
  const add = (a: number, b: number): string => {
    return `${a + b}입니다.`;
  };
  add(10, 20);

  // 변수에 타입 명시
  const add2: (a: number, b: number) => string = (a, b) => {
    return `${a + b}입니다.`;
  };
  add2(10, 30);
}
