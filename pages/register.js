import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import bike from "../assets/tiger.json";
import bird from "../assets/bird.json";
import { Loading } from "../components";
const Register = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-screen relative flex items-center  justify-center">
      <div className="absolute top-0 left-10 h-36">
        <Lottie animationData={bird} loop={true} className="h-full" />
      </div>
      <div className=" w-[60%] flex flex-row h-auto shadow rounded-xl">
        <div className="w-[40%] h-full ">
          <Lottie animationData={bike} loop={true} className="h-full" />
        </div>
        <div className="w-[60%] flex items-center justify-center py-3 bg-white">
          <form className="flex flex-col items-center z-10 w-full justify-center">
            <h1 className="text-3xl font-semibold font-Popins ">Register</h1>
            <div className="form-control   w-full max-w-sm">
              <label className="label">
                <span className="label-text">Enter Name</span>
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered  max-w-sm w-full"
              />
            </div>
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
              Register
            </button>
            <p className="my-5 text-md text-gray-400 font-Popins font-light ">
              Already have an account ?{" "}
              <Link
                href="/login"
                className="text-sky-600 font-semibold cursor-pointer "
              >
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
