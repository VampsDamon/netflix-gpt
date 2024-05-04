import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies.nowPlayingMovies);
  const popularmovieList = useSelector((store) => store.movies.popularMovies);
  const topRatedMovieList = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovieList = useSelector((store) => store.movies.upcomingMovies);

  if (
    !movieList ||
    !popularmovieList ||
    !topRatedMovieList ||
    !upcomingMovieList
  )
    return null;
 

  return (
    <div className=" ">
      <div>
        <MovieList title="Now Playing" moviesList={movieList} />
        <MovieList title="Popular Movies" moviesList={popularmovieList} />
        <MovieList title="Top Rated" moviesList={topRatedMovieList} />
        <MovieList title="Upcoming " moviesList={upcomingMovieList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
