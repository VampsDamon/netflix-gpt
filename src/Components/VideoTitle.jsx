import React from "react";
import { useState } from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 inset-0 pt-[33%] md:pt-[20%] lg:pt-[18%] pl-[6%] pr-[20%] bg-gradient-to-r from-black    text-white ">
      <h1 className="uppercase font-bold md:text-4xl lg:text-6xl pr-6 text-2xl ">
        {title}
      </h1>
      <p
        className={` hidden md:block md:w-2/4 p-2 md:p-4 md:text-xs lg:text-lg
        } `}
      >
        {overview}
      </p>
      <div className="btn mt-4">
        <button className="bg-white text-black px-2  py-1 ml-2 rounded-lg hover:bg-opacity-80 md:font-semibold uppercase shadow-lg md:px-4 lg:py-2">
          Play
        </button>
        <button className="bg-gray-600 px-2  py-1 ml-2 rounded-lg text-white    md:font-semibold uppercase shadow-lg md:px-4 lg:py-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
