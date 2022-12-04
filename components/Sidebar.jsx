import React from "react";
import { navigatations } from "../utils/LinkData";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="bg-white  h-screen ">
      <div className="px-5 py-4">
        <h1 className="text-sky-600 text-xl font-bold font-Roboto ">Connect</h1>
        <div className="flex flex-col justify-start gap-3 mt-8">
          {navigatations.map((item) => (
            <div
              key={item.id}
              className="flex justify-start items-center gap-4 text-md hover:bg-gray-500  hover:text-white transition-all delay-75 duration-100 p-3 rounded-lg"
            >
              {item.icon}
              <h1 className="font-Popins">
                <Link href={`/${item.link}`}>{item.name}</Link>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
