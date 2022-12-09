import React from "react";
import { ChartBox, Layout, UserRow } from "../components";

const Message = () => {
  return (
    <Layout title="Messages" rightBar={false}>
      <div className="flex gap-4 p-6 items-start justify-start">
        <div className="basis-1/3 bg-white shadow rounded-lg py-6 px-3 w-full">
          <div className="form-control">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search…"
                className="input input-bordered input-sm w-full"
              />
              <button className="btn bg-gray-700 btn-sm btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-3 flex-col my-4">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <UserRow key={index} />
            ))}
          </div>
        </div>
        <div className="basis-2/3  bg-white shadow-sm rounded-lg">
          <ChartBox />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
