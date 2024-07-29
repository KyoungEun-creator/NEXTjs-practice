import React from "react";

const NoData = () => {
  console.log("no data rendering");
  // 다른 부분이 랜더링 되어도 이건 랜더링 안 되고 있음 확인 가능
  return (
    <>
      <h1>NoData Component</h1>
    </>
  );
};

export default NoData;
