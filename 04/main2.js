// 생성자 함수
function Shape(color) {
  this.color = color;
  this.getColor = function () {
    return `이 도형의 색상은 ${this.color} 입니다.`;
  };
}

function Rectangle(color, width, height) {
  // call 매서드
  // Shape의 매서드를 상속받은 것처럼 보인다
  Shape.call(this, color);
  this.color = color;
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

// 인스턴스
const shape1 = new Shape("red");
console.log(shape1.color);
console.log(shape1.getColor());

const rect1 = new Rectangle("blue", 20, 20);
console.log(rect1.getArea());
console.log(rect1.getColor()); // 이 도형의 색상은 blue 입니다.

// Class
class Shape {
  constructor(color) {
    this.color = color;
  }
  // getColor가 함수인 것이 더 직관적으로 보임
  getColor() {
    return `이 도형의 색상은 ${this.color} 입니다.`;
  }
}

const shape2 = new Shape("red");
console.log(shape2);

// extends 상속받을 때 사용
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const rect2 = new Rectangle("blue", 20, 20);
console.dir(rect2);
console.log(rect2.getColor());
console.log(rect2.getArea());
