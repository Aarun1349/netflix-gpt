import React, { useSelector } from "react";
import Header from "./Header";
import useNowPlaying from "../custom hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaying();
// const nowPlayingMoviesList = useSelector(store=>store.movies.nowPlayingMovies)
  // console.log("nowPlayingMoviesList", nowPlayingMoviesList);
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
