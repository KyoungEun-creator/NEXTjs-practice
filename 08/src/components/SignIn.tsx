import React from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

const SignIn = () => {
  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white px-[25px] py-10 inter rounded-2">
        <h1 className="text-xl font-bold text-[#4F4F4F] mb-[10px]">Sign Into App</h1>
        <p className="text-sm text-[#4F4F4F] mb-5">Please enter your details to continue.</p>
        <form action="" className="flex flex-col gap-4">
          <Input type="text" placeholder="Enter Your Name" />
          <Input type="email" placeholder="someone@example.com" />
          <Input type="password" placeholder="Enter Password" />
          <Checkbox>
            I agree with <span>terms and policies.</span>
          </Checkbox>
          <div className="flex flex-col gap-4 mt-4">
            <Button className="bg-[#4F4F4F] text-white">Sign In</Button>
            <Button className="bg-white border border-[#4F4F4F] text-[#4F4F4F]">
              Go To Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
