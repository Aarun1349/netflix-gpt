import React from "react";
import { useSelector } from "react-redux";
const VideoTitle = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const { title, overview, poster_path } = movies[0];
  return (
    <div className=" w-screen aspect-video pt-64 px-12 absolute  text-white bg-gradient-to-r from-black">
      {/* <img src={poster_path} alt="poster"></img> */}
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 w-44 text-lg  rounded-lg">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-black py-2 px-8 w-44 text-lg  rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
