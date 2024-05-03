import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{


const dispatch = useDispatch();
const getNowPlayingMovies = async () => {
  const data = await fetch(
    " https://api.themoviedb.org/3/movie/now_playing",
    API_OPTIONS
  );
  const json = await data.json();

  dispatch(addNowPlayingMovies(json.results));
  console.log(json.results);
};
useEffect(() => {
  getNowPlayingMovies();
}, []);

}

export default useNowPlayingMovies;