import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {  addUpComingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "  https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useUpComingMovies;
