import React from "react";

const RedColor = (props: { children: React.ReactNode }) => {
  console.log(props);
  return (
    <>
      <div style={{ color: "red", fontSize: "50px" }}>{props.children}</div>
    </>
  );
};

export default RedColor;
