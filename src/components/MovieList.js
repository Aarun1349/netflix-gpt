import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-6">
      <h1 className=" py-6 font-bold text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex mx-4">
          {movies.map((movie) => {
            return <MovieCard key ={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
