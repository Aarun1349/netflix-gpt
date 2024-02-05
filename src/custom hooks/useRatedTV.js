import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../constants/Constants";
import { addRatedTV } from "../utils/movieSlice";

const useRatedTV = () => {
  const dispatch = useDispatch();

  const ratedTVShows = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/account/20949478/rated/tv?language=en-US&page=1&sort_by=created_at.asc",
      OPTIONS
    );
    const data = await response.json();
   
    dispatch(addRatedTV(data.results));
  };
  useEffect(() => {
    try {
      ratedTVShows();
    } catch (error) {
      console.log("____error____", error);
    }
  }, []);
};

export default useRatedTV;
