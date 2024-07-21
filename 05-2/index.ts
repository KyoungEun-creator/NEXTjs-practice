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

// 3. 리터럴 타입: string타입이나 number타입을 명확하게(타이트하게) 지정하는 타입
{
  let num: 10 = 10;
  // num = 20 이렇게 재할당 불가하다

  // 유니온 타입(|)을 이용한 해결
  let num2: 10 | 20 = 10;
  num2 = 20;
  let str: "A" | "B" = "A";
  str = "B";
  let obj = {
    name: "Kim", // obj.name의 타입은 string 타입
  };

  // name이 Kim 타입
  const printName = (name: "Kim") => {
    console.log(name);
  };
  printName("Kim");
  // printName(obj.name);
  // 에러 발생!! obj.name(type: string)과 printName의 name(type: Kim)의 타입이 서로 다르기 때문

  let obj2 = {
    name: "Kim", // obj.name의 타입은 string 타입
  } as const;

  /*
  let obj2 = ({ name: "Kim" } = {
    name: "Kim", // obj.name의 타입은 string 타입
  } as const);
   */

  // name이 Kim 타입
  const printName2 = (name: "Kim") => {
    console.log(name);
  };
  printName2("Kim");
  printName2(obj2.name);
}

// 4. 타입 오퍼레이터:  타입을 조작하는 연산자
{
  // 4-1. 유니온 타입: OR 연산자(|)를 이용해 여러 타입 중 하나를 선택하게 함
  const arr: (number | string)[] = [1, "A", 4];

  // 4-2. 인터세션 타입: AND 연산자(&)를 이용해 여러 타입을 조합함 (둘다 있어야 함)
  const obj: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };
}
