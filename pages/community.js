import React, { useState } from "react";
import { RequestCard } from "../components";
import Layout from "../components/Layout";

const Community = () => {
  const [active, setActive] = useState("follower");
  const activated = (state) => {
    setActive(state);
  };

  const activeClass = "bg-blue-600 text-white";
  const inActiveClass = "bg-white text-gray-600";
  return (
    <Layout title="Community (Connect)">
      <div className="px-9 py-5">
        <div className="flex j gap-2 flex-wrap items-center justify-evenly bg-white py-3 rounded-lg">
          <div
            onClick={() => activated("follower")}
            className={`cursor-pointer px-5 py-2 ${
              active === "follower" ? activeClass : inActiveClass
            } rounded-md  border-2 border-gray-200 font-Roboto font-semibold`}
          >
            254 Followers
          </div>
          <div
            onClick={() => activated("following")}
            className={`cursor-pointer px-5 py-2 ${
              active === "following" ? activeClass : inActiveClass
            } rounded-md  border-2 border-gray-200 font-Roboto font-semibold`}
          >
            69 Following
          </div>
          <div
            onClick={() => activated("like")}
            className={`cursor-pointer px-5 py-2 ${
              active === "like" ? activeClass : inActiveClass
            } rounded-md  border-2 border-gray-200 font-Roboto font-semibold`}
          >
            People you might know
          </div>
        </div>
        <div className="my-4 flex justify-center flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <RequestCard key={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Community;
