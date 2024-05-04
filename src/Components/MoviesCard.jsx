import React from "react";
import { CDN_IMG_URL } from "../Utils/constant";

const MoviesCard = ({ imgCDN }) => {
  return (
    <div className="py-4 px-2 ">
      <div className="list w-40 overflow-hidden">
        <img
          className="w-[100%] rounded-lg shadow-lg  ease-in-out"
          src={CDN_IMG_URL + imgCDN}
          alt="ImageCard"
        />
      </div>
    </div>
  );
};

export default MoviesCard;
