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

// 5. 인터페이스
{
  /*
  const obj: { name: string; age: number; gender: string; height: number } = {
    name: "kim",
    age: 20,
    gender: "male",
    height: 180,
  };
  // 너무 지저분하잖아!!
  */

  interface IUser {
    name: string;
    readonly age: number; // readonly
    gender?: string;
  }
  // 병합
  interface IUser {
    height: number;
  }
  // 상속
  interface IJob extends IUser {
    title: string;
  }
  // 인덱스 시그니처 (I로 시작)
  interface ISignature {
    [key: string]: string | number;
  }

  const obj: ISignature = {
    name: "kim",
    age: 20,
    gender: "male",
    height: 180,
  };

  // 재사용성 대박!
  const obj2: IUser = {
    name: "jo",
    age: 20,
    // gender: "female",  (옵셔널 프로퍼티이기 때문)
    height: 170,
  };

  const obj3: IJob = {
    name: "jo",
    age: 20,
    // gender: "female",
    height: 170,
    title: "developer",
  };

  /*
    interface의 특징
    1) readonly 키워드 : 외부 객체에서 동적으로 값을 바꿀 수 없게 함
    2) 옵셔널 프로퍼티 optional property
    3) 병합 : 똑같은 이름의 interface는 서로 병합된다
    4) 상속 : extends를 이용해 다른 interface를 나에게 상속한다
    5) 이름의 앞에 'I'를 붙어주기로 약속~
    6) 인덱스 시그니처 : 자유도가 너어무 높아서 어떤 속성이 있는지에 대한 자동완성을 제공할 수 없다 (잘 안 씀)
  */
}

// 6. 타입 별칭: 새로운 타입을 정의하는 방법
{
  // 기존: 기본적으로 만들어놓은 타입들만 사용했다면 (string, number, object, [], boolean 등.. )
  const phoneColor: "red" | "orange" | "yellow" | "green" | "blue" | "purple" = "orange";

  // 내가 만든 타입에 대한 인터페이스 개념
  // 이름의 앞에 'T'를 붙어주기로 약속~
  type TRainbowColor = "red" | "orange" | "yellow" | "green" | "blue" | "purple";
  const phoneColor2: TRainbowColor = "orange";

  type TUseStatus = "Y" | "N";
  let useYn: TUseStatus = "Y";

  type TUser = {
    name: string;
  };
  type TJob = {
    title: string;
  };
  type TUserAndJob = TUser & TJob; // 상속으로 extends 대신 인터세션 타입(&) 사용
  const user1: TUserAndJob = {
    name: "Kim",
    title: "developer",
  };

  // 타입별치의 특징 및 인터페이스와의 차이
  /*
    1) 상속 개념 없음 extends 사용 불가
    2) 대신 인터세션 타입(&)을 이용
    3) 자동 병합 안 됨
    4) 인터페이스에 비해 툴팁 설명이 더 구체적임! good~
    5) readonly 똑같이 가능
    6) optional property 똑같이 가능
  */
}

{
  type TUser = {
    name: string;
    age: number;
  };

  const user1: TUser = {
    name: "Kim",
    age: 20,
  };

  function printUserName(user: TUser) {
    console.log(user.name);
  }
  // 비구조화 할당하면
  /*
  function printUserName({ name, age }: TUser) {
    console.log(name);
  }
  */

  printUserName(user1);
}

// 7. 제네릭: 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
{
  // 기존: 타입 종류가 많아질수록 넘 복잡해진다..
  const firstElements = (elem: number[] | string[]): number | string => {
    return elem[0];
  };
  console.log(firstElements([1, 2, 3]));
  console.log(firstElements(["a", "b", "c"]));
  // console.log(firstElements([(true, false)])); 미리 정의되어 있지 않은 타입을 썼기 때문에 오류

  // 함수를 호출할 때 그 타입을 정의할 수 있게 하는 것!
  // 꺽쇠 안에 타입으로 치환되어 들어간다는 것 (T는 그저 의례적인 것일 뿐)
  // 타입의 공통 처리
  const firstElements2 = <T>(elements: T[]) => {
    return elements[0];
  };
  console.log(firstElements2<number>([1, 2, 3]));
  console.log(firstElements2<number>([1, 2, 3]));
  console.log(firstElements2<boolean>([true, false]));

  // 예시
  type TCar<T> = {
    name: string;
    options: T; // <T>에 따라 치환됨
  };

  const car1: TCar<string> = {
    name: "sonata",
    options: "auto",
  };

  const car2: TCar<string[]> = {
    name: "sonata",
    options: ["auto", "sunroof"],
  };

  // 예시: 뭐든 다 들어올 수 있음
  const getLength = <T>(item: T): void => console.log(item);
  console.log(getLength([1, 2, 3]));
  console.log(getLength("a"));
  console.log(getLength(10));

  // 타입 제약
  // 제네릭의 extends는 '제한'의 의미
  const getLength2 = <T extends { length: number }>(item: T): void => console.log(item);
  console.log(getLength2([1, 2, 3]));
  console.log(getLength2("a"));
  // console.log(getLength2(10)); // 숫자는 length 속성이 없기 때문
}
