import React from "react";
import { MdAddCall } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { TfiMoreAlt } from "react-icons/tfi";
import { TbSend } from "react-icons/tb";

const ChartBox = () => {
  const messages = [
    {
      user: true,
      message:
        "Hello I am Rahul Pradhan, How can i get a good package salary job?",
    },
    {
      user: false,
      message:
        "Hello Rahul,If You want to join a good company then improve your skill",
    },
    {
      user: true,
      message: "How Can i improve my skills",
    },
    {
      user: false,
      message: "By Practice and learning new skills",
    },
    {
      user: false,
      message: "Don't Worry i will help you to improve your skills",
    },
  ];

  return (
    <div className="">
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex gap-2 justify-center items-start">
          <img
            src="https://oshiprint.in/image/data/poster/new/mqp190.jpeg"
            alt="image"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="">
            <h1 className="text-md font-semibold text-gray-600">Cute child</h1>
            <p className="text-sm text-gray-400">active 1hr ago</p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-end text-xl">
          <MdAddCall className="cursor-pointer text-gray-600" />
          <FiVideo className="cursor-pointer text-gray-600" />
          <BsInfoCircle className="cursor-pointer text-gray-600" />
        </div>
      </div>
      <hr />
      <div className="p-6 py-3">
        <p className="text-center text-sm  font-semibold text-gray-600">
          15 Aug 2022
        </p>
        <div className="flex flex-col gap-3 my-5 ">
          {messages.map((message, index) => (
            <div
              className={`flex gap-2 items-center ${
                message.user ? "self-end flex-row-reverse" : "self-start "
              } `}
              key={index}
            >
              <img
                src="https://oshiprint.in/image/data/poster/new/mqp190.jpeg"
                alt="image"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p
                  className={`text-md font-normal  px-2 py-4 ${
                    message.user
                      ? "bg-gray-200 text-black rounded-t-xl rounded-l-xl"
                      : "text-white px-2 py-4  rounded-t-xl rounded-r-xl bg-blue-400"
                  }    w-[400px]`}
                >
                  {message.message}
                </p>
                <p
                  className={`text-xs text-gray-400 ${
                    message.message ? "self-start" : "self-end"
                  } `}
                >
                  5h ago
                </p>
              </div>
              <TfiMoreAlt className="text-sm text-gray-600 cursor-pointer" />
            </div>
          ))}
        </div>
        <div className="mt-8 p-6">
          <div className="form-control w-full">
            <div className="input-group">
              <input
                type="text"
                placeholder="Type your messages"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square">
                <TbSend className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
