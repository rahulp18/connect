import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import Hello from "../assets/hello.json";
import Rahul from "../assets/rahul.jpg";
import Image from "next/image";
const Login = () => {
  return (
    <div className="h-screen flex flex-row ">
      <div className="basis-1/2 bg-black relative group">
        <Image
          src={Rahul}
          alt="rahul"
          className="w-full h-full object-cover image-full opacity-90 cursor-pointer "
        />
        <div className="absolute top-0 left-0 w-full h-0 flex  justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500">
          <h1 className="text-[3rem] text-white font-semibold font-Popins">
            Welcome To Connect App
          </h1>
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-center relative">
        <div className="absolute top-0 w-[300px] bg-transparent right-0">
          <Lottie animationData={Hello} loop={true} />
        </div>
        <form className="flex flex-col items-center z-10 w-[500px] justify-center">
          <h1 className="text-3xl font-semibold font-Popins">LogIn</h1>
          <div className="form-control   w-full max-w-sm">
            <label className="label">
              <span className="label-text">Enter Email</span>
              {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered  max-w-sm w-full"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Password</span>
              {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <button className="btn btn-square border-none bg-sky-600 text-white my-3 max-w-sm w-full">
            Login
          </button>
          <p className="my-5 text-md text-gray-400 font-Popins font-light ">
            Don't have an account ?{" "}
            <Link
              href="/register"
              className="text-sky-600 font-semibold cursor-pointer "
            >
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
