import React, { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
const RequestCard = () => {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <div className="rounded-lg bg-white px-6 py-3 border-2 shadow-sm  border-gray-200 w-[300px]">
      <div className="flex gap-3 items-center justify-between">
        <img
          src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="
          alt="image"
          className="h-16 w-16 rounded-full"
        />
        <div className="flex flex-col gap-3">
          <div className="">
            <h1 className="font-semibold text-md font-Roboto text-gray-600">
              Rahul Pradhan
            </h1>
            <p className="text-sm text-gray-400">GCEK,bhawanipatna</p>
          </div>
          <div className="flex gap-2">
            <AiFillGithub className=" text-md cursor-pointer text-gray-600 " />
            <AiFillLinkedin className=" text-md  cursor-pointer  text-gray-600 " />
            <FiInstagram className="text-md cursor-pointer  text-gray-600 " />
            <AiFillFacebook className="text-md cursor-pointer text-gray-600 " />
          </div>
          <div className="flex gap-2 items-center">
            {!isFollow && (
              <button className="px-4 py-1 rounded-lg border-2 border-gray-300 bg-white text-gray-600">
                Ignore
              </button>
            )}

            <button
              onClick={() => setIsFollow((prev) => !prev)}
              className={`px-4 py-1 rounded-lg border-2 border-gray-300 ${
                isFollow ? "bg-red-600" : "bg-blue-600"
              } text-white`}
            >
              {isFollow ? "Cancel" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
