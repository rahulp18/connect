import React from "react";
import { FaEye } from "react-icons/fa";
const NewCard = () => {
  return (
    <div className="w-96 group relative">
      <img
        className="w-full object-cover"
        src="https://www.pixelstalk.net/wp-content/uploads/images6/Nature-HD-Wallpaper-Free-download.jpg"
        alt="images"
      />
      <div className="absolute top-0 left-0 w-full h-0 flex  justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500">
        <button className="btn btn-fill">
          <FaEye className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default NewCard;
