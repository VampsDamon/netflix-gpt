import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  
useNowPlayingMovies();


  return (
    <div className="">
      <Header />
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
