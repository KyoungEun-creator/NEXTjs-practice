import React from "react";
import { useState } from "react";

import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

const SignUp = (props: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const [page, setPage] = useState(props);

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white px-[25px] py-10 inter rounded-2">
        <h1 className="text-xl font-bold text-[#4F4F4F] mb-[10px]">Sign Into App</h1>
        <p className="text-sm text-[#4F4F4F] mb-5">Please enter your details to continue.</p>
        <form action="" className="flex flex-col gap-4">
          <Input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="email"
            value={email}
            placeholder="someone@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            checked={agree}
            onToggle={() => {
              setAgree((prev) => !prev);
            }}
          >
            I agree with <span className="font-bold">terms</span> and{" "}
            <span className="font-bold">policies</span>.
          </Checkbox>
          <div className="flex flex-col gap-4 mt-4">
            <Button
              className="bg-[#4F4F4F] text-white"
              onClick={() => {
                if (name === "" || email === "" || password === "" || agree === false) {
                  alert("Please fill all the fields");
                } else {
                  alert("login successfully");
                }
              }}
            >
              Sign In
            </Button>
            <Button
              className="bg-white border border-[#4F4F4F] text-[#4F4F4F]"
              onClick={() => {
                setPage("signin");
              }}
            >
              Go To Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
