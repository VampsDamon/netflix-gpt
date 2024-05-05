import React, { useEffect, useRef } from "react";
import MoviesCard from "./MoviesCard";

const MovieList = ({ title, moviesList }) => {
  const imgCDN = moviesList[0]?.poster_path;

   const scrollContainer = useRef(null);

   useEffect(() => {
     const onWheel = (e) => {
       if (scrollContainer.current) {
         e.preventDefault();
         scrollContainer.current.scrollLeft += e.deltaY; // or e.deltaX for horizontal
       }
     };

     const currentRef = scrollContainer.current;
     currentRef.addEventListener("wheel", onWheel);

     return () => {
       currentRef.removeEventListener("wheel", onWheel);
     };
   }, []);
  return (
    imgCDN && (
      <div className="bg-black z-20 relative text-white p-6">
        <div className="lg:-mt-[235px] lg:mb-[235px]">
          <h1 className="uppercase font-bold">{title}</h1>
          <div
            ref={scrollContainer}
            className="flex overflow-x-scroll whitespace-nowrap scrollbar-none"
          >
            {moviesList.map((movie) => (
              <MoviesCard imgCDN={movie?.poster_path} id={movie?.id} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
