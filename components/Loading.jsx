import React from "react";
import Lottie from "lottie-react";
import deer from "../assets/deer.json";
const Loading = () => {
  return (
    <div className="h-screen relative flex items-center justify-center">
      <div className="h-[15rem]">
        <Lottie animationData={deer} loop={true} className="h-full" />
      </div>
    </div>
  );
};

export default Loading;
