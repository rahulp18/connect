import React, { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaRegComment, FaTrashAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Card = ({ type }) => {
  const [isLike, setIsLike] = useState(false);

  const clickLike = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <div
      className={`${
        type === "explore" ? "w-[500px]" : "w-[80%]"
      } bg-white shadow-sm  rounded-lg `}
    >
      <div className="px-3 flex justify-between items-center py-3 w-full  ">
        <div className="flex gap-1 items-center cursor-pointer">
          <img
            src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
            alt="images"
            className="rounded-full h-10 w-10 object-cover"
          />
          <div>
            <h1 className="text-md font-semibold text-gray-600">
              Rahul Pradhan
            </h1>
            <p className="text-sm text-gray-400">12h ago</p>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <MdMoreHoriz className="text-xl cursor-pointer" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-50  shadow px-3 py-6  rounded-xl gap-3   flex items-center w-auto"
          >
            <li className="cursor-pointer">
              <a>
                <FiEdit />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <FaTrashAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="w-full h-100% object-fill"
        alt="images"
        src="https://wallpapercave.com/wp/wp4521638.jpg"
      />
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-1 items-center">
          {isLike ? (
            <IoHeartSharp
              className="text-pink-600  text-xl font-bold cursor-pointer"
              onClick={clickLike}
            />
          ) : (
            <IoHeartOutline
              className="text-pink-600  text-xl font-bold cursor-pointer"
              onClick={clickLike}
            />
          )}

          <span className="font-semibold ">12 Likes</span>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegComment className="text-blue-600  text-xl font-bold cursor-pointer" />{" "}
          <span className="font-semibold ">2 Comments</span>
        </div>
        <div className="flex gap-1 items-center">
          <IoIosShareAlt className="text-gray-600  text-xl font-bold cursor-pointer" />{" "}
          <span className="font-semibold ">Share</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <img
          src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
          alt="profile"
          className="rounded-full h-10 w-10 object-cover"
        />
        <input
          type="text"
          placeholder="Comment here"
          className="input w-full input-sm input-bordered"
        />
        <button className="bg-gray-600 text-white rounded-md p-1 ">
          <RiSendPlaneFill className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Card;
