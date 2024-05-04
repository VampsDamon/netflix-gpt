import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    
    if(!movies)return null;

    // const randomeMovie = movies[Math.floor(Math.random() * movies.length)];
    const randomeMovie = movies[6];

    const { original_title, overview,id } = randomeMovie;
   
  return (
    <div className="relative top-0">
      <VideoTitle
        title={original_title}
        overview={overview}
      
      />
      <VideoBackground id={id}  />
    </div>
  );
}

export default MainContainer