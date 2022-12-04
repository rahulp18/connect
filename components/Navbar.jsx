import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-white px-3 py-2">
      <div className="flex justify-between items-center">
        <div className=" bg-white shadow-sm border-[1px] flex items-center w-[300px] gap-3 p-2 rounded-lg border-gray-400">
          <BiSearchAlt />
          <input
            type="text"
            placeholder="Search for something here"
            className="outline-none border-none bg-transparent w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
