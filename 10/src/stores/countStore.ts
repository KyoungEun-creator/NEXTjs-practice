import { create } from "zustand";

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increment: () => set(() => ({ count: 1 })),
  // set 매개변수를 통해 주스탄드 내부의 값을 바꾼다
  // 이전 값을 참조하지 않고 그냥 count값을 1로 세팅하는 것
  // increment: () => set(() => { count: 1 }) 이건 객체를 반환해라는 의미가 아니라, 그냥 잘못된 화살표 함수임

  decrement: () => set((state: CountStore) => ({ count: state.count - 1 })),
  // 이전 값을 '참조'해서 state.count값을 1 빼겠다
  // state.count값의 타입이 숫자라는 증거가 필요해서 타입오류 남
}));

// useState 값 변경 방법 두가지
// 1. setCount(값)
// 2. setCount(() => 값)
