import { useDispatch,useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { OPTIONS } from "../constants/Constants";
import { useEffect } from "react";

const useTrailerId = (id) => {
  const dispatch = useDispatch();
  const movieTrailerFromStore = useSelector(
    (store) => store.movies.movieTrailer
  );
  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        OPTIONS
      );
      const data = await response.json();

      const filterTrailers = data.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterTrailers.length
        ? filterTrailers[0]
        : data.results[0];
      dispatch(addMovieTrailer(trailer.key));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(!movieTrailerFromStore)
    getMovieVideo();
  }, []);
};
export default useTrailerId;
