import React from "react";
import { CDN_IMG_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const MoviesCard = ({ imgCDN,id }) => {
  return (
    <div className="py-4 px-2 ">
      <div className="list w-40 overflow-hidden hover:inset-0">
        <Link to={"/browse/" + id} >
          <img
            className="w-[100%] rounded-lg shadow-lg  ease-in-out"
            src={CDN_IMG_URL + imgCDN}
            alt="ImageCard"
          />
        </Link>
      </div>
    </div>
  );
};

export default MoviesCard;
