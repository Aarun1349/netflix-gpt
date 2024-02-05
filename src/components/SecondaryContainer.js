import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const ratedTV = useSelector((state) => state.movies.ratedTV);

  console.log("Now Playing", nowPlayingMovies);
  console.log("Popular Movies", popularMovies);
  console.log("Rated TV", ratedTV);

  return (
    nowPlayingMovies &&
    popularMovies &&
    ratedTV && (
      <div className="bg-black">
        <div className="-mt-80 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />

          <MovieList title={"Popular Movies"} movies={nowPlayingMovies} />

          <MovieList title={"Top Rated TV Shows"} movies={nowPlayingMovies} />

          {/* <MovieList title={"Top Rated"} movies={movies} /> */}

          {/* <MovieList title={"Action& Drama"} movies={movies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
