import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../constants/Constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesFromStore = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  
  const nowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );

    const data = await response.json();

    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    try {
      if(!nowPlayingMoviesFromStore)
      nowPlayingMovies();
    } catch (error) {
      console.log("____error____", error);
    }
  }, []);
};

export default useNowPlaying;
