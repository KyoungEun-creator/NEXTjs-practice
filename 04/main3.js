// class 내 매개변수의 예외처리를 위한 setter
// 다른 이름으로 가져오지 않아도 되게 만들어주는 getter
// 변수의 프라이빗 처리 # (set과 양립 불가)
// static 정적 속성, 정적 매소드

class Car {
  // 프라이빗 처리
  #name;

  // 정적 속성
  static CREATED = "2022";

  constructor(name, speed) {
    this.#name = name;
    this.speed = speed;
  }

  // speed라는 멤버속성의 세팅에 관여하겠다는 뜻
  set speed(speed) {
    // 예외처리
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }
    // 반환
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  getCarName() {
    return `차 이름은 ${this.#name}입니다.`;
  }

  getSpeed() {
    return `현재 속도는 ${this.speed}입니다.`;
  }

  // 정적 매소드
  static getSpec() {
    return "차는 타이어 4개와 문 4개가 있습니다.";
  }
}

const car1 = new Car("Benz", 100);
console.log(car1);
console.log(car1.getCarName()); // 차 이름은 Benz입니다.
car1.name = "Audi";
console.log(car1.getCarName()); // 차 이름은 Benz입니다.

// 매개변수를 넣을 때마다 set이 관여하게 됨
console.log(car1.getSpeed()); // 현재 속도는 100입니다.
console.log(Car.getSpec()); // 정적 -> 인스턴스가 아닌 클래스명을 가지고 사용해야 한다.
