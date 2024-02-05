import React from "react";
import Header from "./Header";
import useNowPlaying from "../custom hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useRatedTV from "../custom hooks/useRatedTV";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useRatedTV();

  return (
    <div>
      <Header />
      {/* <GPTSearch/> */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
