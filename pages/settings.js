import React from "react";
import { Layout } from "../components";
import { settingsLink } from "../utils/LinkData";

const Settings = () => {
  return (
    <Layout title="Settings" rightBar={false}>
      <div className="flex flex-row items-start mx-6 my-4 gap-3  bg-white rounded-md shadow ">
        <div className="basis-1/4 border-r-2 border-gray-400 p-4">
          <h1>Settings</h1>
          <div className="flex  flex-col items-start gap-3 justify-start">
            {settingsLink.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-start items-center gap-4 text-md hover:bg-gray-500  hover:text-white transition-all delay-75 duration-100 p-3 rounded-lg"
              >
                {item.icon}
                <h1 className="font-Popins">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-3/4 p-4">Pradhan</div>
      </div>
    </Layout>
  );
};

export default Settings;
