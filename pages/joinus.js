import React, { useState } from "react";
import Lottie from "lottie-react";
import welcome from "../assets/welcome.json";
import { useRouter } from "next/router";
const JoinUs = () => {
  const router = useRouter();
  return (
    <div className="bg-white h-screen px-5 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-sky-600 text-2xl font-bold font-Roboto ">
          Connect
        </h1>
        <p className="text-lg text-black ">
          Developed By{" "}
          <span className="text-sky-600 font-bold ">Rahul Pradhan</span>
        </p>
      </div>
      <div className="flex h-full items-center justify-start">
        <div className="basis-[60%]">
          <Lottie animationData={welcome} loop={true} />
        </div>
        <div className="basis-[40%] ">
          <h1 className="text-[8rem] leading-tight tracking-wider text-end font-normal font-Rubik">
            Welcome
          </h1>
          <p className="text-3xl text-end leading-9 text-gray-600 my-4 font-normal font-roboto">
            Let's Connect With Alumni
          </p>
          <div className="flex items-center justify-end mt-5 gap-4 self-end">
            <button
              onClick={() => router.push("/login")}
              className="text-xl px-5 py-3 border-[1px] border-black text-black rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="px-4 text-xl py-3 border-[1px] border-black bg-black text-white rounded-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
