import React from "react";
import DisplayCount from "./DisplayCount";
import UpdateCount from "./UpdateCount";
import NoData from "./NoData";

const Page = () => {
  return (
    <>
      <DisplayCount />
      <UpdateCount />
      <NoData />
    </>
  );
};

export default Page;
