import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "  https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useTopRatedMovies;
