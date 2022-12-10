import React from "react";
import { MdEdit } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { AddPost, Card, Layout, NewCard } from "../components";
import { FaCity, FaGithub, FaRegBuilding } from "react-icons/fa";

const Profile = () => {
  return (
    <Layout rightBar={false} title="Profile">
      <div className="">
        <div className="relative">
          <div className="relative mx-4 rounded-t-2xl mt-4 overflow-hidden ">
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
              className="w-full h-[300px]  object-cover rounded-t-2xl  inset-0 bg-gray-900 bg-opacity-75"
            />
            <div className="bg-black bg-opacity-20 absolute inset-0"></div>
          </div>
          <button className="right-5 absolute flex items-center justify-center btn btn-sm btn-info text-white mt-3 gap-1">
            Edit <MdEdit />{" "}
          </button>
          <div className="absolute left-[5%] -bottom-[30%]">
            <div className="bg-white p-1  shadow-lg  rounded-full h-[160px] w-[160px] ">
              <img
                src="https://www.geo.tv/assets/uploads/updates/2021-11-28/384782_5318931_updates.jpg"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-center text-xl text-gray-900 font-bold font-Popins">
                Rahul Pradhan
              </h1>
              <p className="text-md font-normal font-Roboto text-black">
                Web Full stack developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-24 gap-2 py-3 mx-4 items-start">
          <div className="basis-1/3 bg-white shadow-sm px-4 py-2">
            <h1 className="text-md capitalize text-gray-600 font-Roboto font-semibold ">
              INTRO
            </h1>
            <div className="flex gap-2 flex-col mt-5">
              <div className="flex gap-2 items-center">
                <BsCalendar2Date />
                <p>Born 20 Jun 2002</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoSchoolOutline className="text-xl" />
                <p>College GCEK,bhawanipatna</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCity />
                <p>City Cuttack</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaGithub />
                <p>
                  Check <a href="">rahulp18</a>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegBuilding />
                <p>Workikng at Qurinom Solutions</p>
              </div>
              <button className="btn btn-outline btn-sm flex gap-3 mt-5">
                Edit <FiEdit />{" "}
              </button>
            </div>
          </div>
          <div className="basis-2/3 px-4 py-2">
            <div className="flex gap-4 items-center justify-center flex-col">
              <AddPost />
            </div>
          </div>
        </div>
        <div className="text px-4 tect-md mt-5">
          <p className="text-xl font-semibold my-5 text-center">
            See your All posts
          </p>
          <div className="flex gap-3 items-center justify-center flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
              <NewCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
