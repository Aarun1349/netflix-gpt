import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../constants/Constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
   try {
    const response = await fetch(
        "https://api.themoviedb.org/3/account/20949478/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
        OPTIONS
      );
  
      const data = await response.json();
      
      dispatch(addPopularMovies(data.results));
   } catch (error) {
    console.log("______Popular", error);
   }
  };

  useEffect(() => {
    try {
      popularMovies();
    } catch (error) {
      console.log("____error____", error);
    }
  }, []);
};

export default usePopularMovies;
