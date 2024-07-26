import React from "react";

const Example2 = () => {
  console.log("example2 rendering");
  // example1이 랜더링 되더라도 example2는 랜더링 되지 않음을 확인 가능
  // 별도의 메모이제이션 없어도 사용되지 않는 contextAPI는 랜더링의 대상이 아님을 알 수 있다.
  return <div>Example2</div>;
};

export default Example2;
