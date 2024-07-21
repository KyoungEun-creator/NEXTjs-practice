// 1. 타입 추론
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

// 2. 타입 명시
{
  // 타입이 대문자로 시작(: 생성자 함수 객체) 할 경우
  let num: Number = 10;
  let str: String = "hello";
  // let으로 정의된 변수는 생성자함수 생성 가능
  num = new Number(20);
  str = new String("world");

  // 튜플 tuple
  const arr2: [number, string, number] = [1, "d", 3];
  const arr3: (number | string)[] = [1, "d", 3];

  // 객체
  const obj: {} = {};
  const obj2: { name: string; age: number } = {
    name: "kim",
    age: 20,
  };
}
