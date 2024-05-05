import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import NetflixGpt from "./NetflixGpt";

const Browse = () => {
  
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();

const showGPT = useSelector((store) => store.gpt.gptToggle);

  return (
    <div className="relative">
      {showGPT ? (
        <NetflixGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
