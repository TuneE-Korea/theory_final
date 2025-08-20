"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// type 속성에 접근을 어케하지
// type:"text" -> type:"password"
// 그냥 해당 속성값에 쓰면됨;;
const Login = () => {
  const [iconNum, iconNumSet] = useState(0);
  const iconChange = () => {
    iconNumSet((x) => (x != 1 ? (x = 1) : (x = 0)));
  };
  return (
    <>
      <div className="flex gap-1 items-center">
        <input
          className="border-2 border-black"
          type={iconNum == 0 ? "text" : "password"}
        />
        <span onClick={iconChange}>{iconNum == 0 ? <Eye /> : <EyeOff />}</span>
      </div>
    </>
  );
};

export default Login;
