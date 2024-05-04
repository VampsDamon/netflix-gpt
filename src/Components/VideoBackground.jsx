import React, { useEffect } from "react";
import useMovieTraier from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTraier(id);
  const trialer = useSelector((store) => store.movies.movieTrailer);

  const trailerID = trialer?.key;

  console.log(trailerID);

  return (
    <div className="pointer-events-none w-screen aspect-video    ">
      <iframe
        className="w-screen aspect-video top-0    "
        src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&controls=0&rel=0&vq=hd1080&loop=1&playlist=${trailerID}`}
        title="YouTube video player"
        allow="autoplay  encrypted-media"
        frameBorder="0"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
