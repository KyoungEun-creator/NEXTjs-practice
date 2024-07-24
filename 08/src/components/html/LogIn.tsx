import React from "react";
import { useState } from "react";

import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

const LogIn = () => {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white px-[25px] py-10 inter rounded-2">
        <h1 className="text-xl font-bold text-[#4F4F4F] mb-[10px]">Login Into App</h1>
        <p className="text-sm text-[#4F4F4F] mb-5">Please enter your details to continue.</p>
        <form action="" className="flex flex-col gap-4">
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
                if (email === "" || password === "" || agree === false) {
                  alert("Please fill all the fields");
                } else {
                  alert("login successfully");
                }
              }}
            >
              Log In
            </Button>
            <Button
              type="button"
              className="bg-white border border-[#4F4F4F] text-[#4F4F4F]"
              onClick={() => setType((prev) => (prev === "login" ? "signup" : ""))}
            >
              Go To Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
