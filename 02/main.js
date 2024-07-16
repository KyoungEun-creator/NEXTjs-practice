// 1. 자료형: 기본 자료형, 참조 자료형

// 1-1. 기본 자료형 (== 원시타입)
// ㄴ 숫자, 문자열(형), 논리, 특수, 심볼

// 1-1-1. 숫자(Number)
// 여러가지 수의 형태(양수, 음수, 정수, 소수, 지수 등)에 대한 정의가 필요 없다
// (JS의 learning curve를 낮추는 요소, 유연함)
// 지수를 입력해도 십진수로 반환한다

// 1-1-2. 문자열(형): 큰따옴표나 작 따옴표로 감싸진 값
const str = "10";
console.log(typeof str); // string

// 1-1-3. 논리형: True, False
const bool = true;

// 1-1-4. 특수 자료형: undefined, null
// undefined, null이라는 '데이터가 없는 값 자체'를 의미함
// ㄴ undefined: 변수를 선언하고, 값을 할당하지 않았을 때
// 개발자가 직접적으로 다루지 않음, JS 엔진이 누락된 코드 부분을 undefined라는 특수값으로 채워주는 것
// ㄴ null: 변수를 선언하고, 의도적으로 일단 빈 값을 넣어두는 것
// 1-1-5. 심볼: Symbol() 절대로 중복되지 않는 유니크한 값을 생성해줌

const a = Symbol();
const b = Symbol();
console.log(a, b); // a != b
const c = Symbol("회원 테이블의 고유한 id값으로 사용하기 위함");
// 와 같이 큰따옴표 안에 주석을 달 수 있음
// JS의 내장함수라고 볼 수 있음

// 1-2. 참조 자료형
// ㄴ 배열, 객체, 함수

// 1-2-1. 배열: 여러 개의 값을 묶어둔 값
// 순수하게 값을 묶어둠
const scoreArr = [90, 40, 50, 80]; // 국어, 영어, 수학, 과학
// ㄴ 값이 무엇에 대한 것인지 직관적이지 않다는 단점을 지님
console.log(typeof scoreArr); // object (???) (JS의 버그임, 나비효과가 너무 커서 고쳐지지 못하고 있음)

// 1-2-2. 객체: 여러 개의 값을 묶어둔 값
// 값을 (키, 값)의 형태로 묶어둠
scoreobj = {
  koreanScore: 90,
  englishScore: 40,
  mathScore: 50,
  scienceScore: 80,
};

// ㄴ 값을 하나씩 꺼내 쓰기 위해선
//     1) 마침표 연산자
//     2) 대괄호 연산자 (키 값을 큰따옴표로 감싸줄 것 주의)
console.log(scoreObj.englishScore); // 40
console.log(scoreObj["englishScore"]); // 40
