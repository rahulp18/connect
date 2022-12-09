import React from "react";

const UserRow = () => {
  return (
    <div className="px-3 py-4 flex justify-between items-center shadow rounded-lg">
      <div className="flex items-center justify-center gap-2">
        <img
          src="https://cdn2.sharechat.com/hotgirl_229dae1e_1593049488314_cmprsd_40.jpg"
          alt="dp"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col justify-start">
          <h1 className="text-md  font-semibold">Sunny Anty</h1>
          <p className="truncate text-xm text-gray-400 w-[150px]">
            Hii Rahul,What are you doing now, Iwish i coluld marry you
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end">
        <p className="text-gray-400 text-sm font-semibold">12.12 am</p>
        <p className="text-white bg-orange-500 rounded-full px-2">5</p>
      </div>
    </div>
  );
};

export default UserRow;
