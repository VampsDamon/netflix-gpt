import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTraier = (id) => {
  const dispatch = useDispatch();
  const trailerVdoFetch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const trailerData = json?.results?.filter((d) => d?.type === "Trailer");
    const trailer = trailerData ? trailerData[0] : json?.results[0];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    trailerVdoFetch();
  }, []);
};

export default useMovieTraier;
