import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
useNowPlayingMovies();


  return (
    <div className="relative">
      <Header  />
      <MainContainer />
      <SecondaryContainer/>
      {/* 
        // +MainContainer
           -VideoBG
          -Video Title
        +Secondary Container
         Movielist * n
         -carde * n
      
      
      */}
    </div>
  );
};

export default Browse;
