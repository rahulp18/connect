import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
const AddPost = () => {
  return (
    <div className="shadow bg-white px-5 py-3 w-full rounded-xl">
      <div className="flex gap-5">
        <img
          className="rounded-full h-12 w-12"
          src="https://www.teahub.io/photos/full/41-413120_jagannath-temple-puri-night.jpg"
        />
        <input
          className="input input-bordered w-full"
          placeholder="Somthing is in your mind ?"
        />
      </div>
      <div className="flex gap-3 items-center justify-evenly mt-5">
        <div className="flex flex-col items-center cursor-pointer">
          <IoMdPhotos className="text-xl" />
          <p className="">Photos</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FiVideo className="text-xl" />
          <p className="">Videos</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <BsEmojiSmile className="text-xl" />
          <p className="">Feelings</p>
        </div>
        <button className="btn btn-outline btn-gray-600 btn-md">POST</button>
      </div>
    </div>
  );
};

export default AddPost;
