import React from "react";
import { useRouter } from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
const RightBar = () => {
  const router = useRouter();
  return (
    <div className="px-5">
      <div className="flex items-center justify-end gap-2 ">
        <h1 className="font-Roboto text-md font-semibold text-gray-500">
          Rahul Pradhan
        </h1>
        <img
          src="https://i.pinimg.com/736x/0c/2d/04/0c2d04858d359c0f189f44e05725f373.jpg"
          alt="peofilepic"
          className="h-12 w-12 rounded-xl shadow-lg cursor-pointer "
          onClick={() => router.push("/profile")}
        />
      </div>
      <div className="mt-8 px-3 py-2">
        <div className=" bg-white shadow-sm border-[1px] flex items-center w-full gap-3 p-2 rounded-lg border-gray-400">
          <BiSearchAlt />
          <input
            type="text"
            placeholder="Search friends"
            className="outline-none border-none bg-transparent w-full"
          />
        </div>
        <div className="flex flex-col  gap-3 mt-5">
          <Swiper
            slidesPerView="auto"
            spaceBetween={4}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide
                // key={artist?.key}
                style={{ width: "25%", height: "auto" }}
                className=" rounded-full animate-slideright"
              >
                <div className=" w-auto flex items-center justify-center gap-2 flex-col ">
                  <img
                    src="https://i.pinimg.com/736x/0c/2d/04/0c2d04858d359c0f189f44e05725f373.jpg"
                    alt="peofilepic"
                    className="h-14 w-14 rounded-full shadow-lg cursor-pointer "
                    onClick={() => router.push("/profile")}
                  />
                  <h1 className="font-Roboto text-sm text-gray-500">Rahul</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="">
            <div className="flex justify-between items-center text-gray-600">
              <h1 className="font-Popins text-md lowercase font-semibold">
                Friends
              </h1>
              <MdMoreHoriz className="text-xl cursor-pointer " />
            </div>
            <div className="flex flex-col mt-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 52].map((item) => (
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 ">
                    <img
                      src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg"
                      alt="images"
                      className="h-10 w-10 rounded-full"
                    />
                    <h1 className="text-md font-semibold">Rahul Pradhan</h1>
                  </div>
                  <FaCircle className="text-xs text-green-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
