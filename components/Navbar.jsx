import { useRouter } from "next/router";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const router = useRouter();
  const user = false;
  return (
    <div className="bg-white px-3 py-2 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className=" bg-white shadow-sm border-[1px] flex items-center w-[300px] gap-3 p-2 rounded-lg border-gray-400">
          <BiSearchAlt />
          <input
            type="search"
            placeholder="Search for something here"
            className="outline-none border-none bg-transparent w-full"
          />
        </div>
        <div className="flex gap-2 items-center">
          {user ? (
            <div className="flex items-center justify-end gap-2 dropdown dropdown-bottom dropdown-end ">
              <h1
                className="font-Roboto text-md font-semibold cursor-pointer text-gray-500"
                onClick={() => router.push("/profile")}
              >
                Rahul Pradhan
              </h1>
              <img
                src="https://i.pinimg.com/736x/0c/2d/04/0c2d04858d359c0f189f44e05725f373.jpg"
                alt="peofilepic"
                tabIndex={0}
                className="h-12 w-12 rounded-xl shadow-lg cursor-pointer "
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu flex flex-col gap-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Change Password</a>
                </li>

                <button className="btn-sm bg-red-600 rounded-md text-white text-center">
                  logout
                </button>
              </ul>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/joinus")}
                className="px-4 py-1 border-[1px] border-black bg-black text-white rounded-lg"
              >
                Join Us
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
