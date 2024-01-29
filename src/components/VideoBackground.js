import React from "react";

import { useSelector } from "react-redux";
import useTrailerId from "../custom hooks/useTrailerId";
const VideoBackground = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const { id } = movies[0];

  useTrailerId(id);
  const trailerId = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div >
      <iframe className="w-screen aspect-video "
        title="youtube video player" 
        src={`https://www.youtube.com/embed/` + trailerId+"?&autoplay=1&mute=1"}
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
