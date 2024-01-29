import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  return (
    <div>
      <VideoTitle movie={mainMovie} />
      <VideoBackground  movie={mainMovie} />
    </div>
  );
};

export default MainContainer;
