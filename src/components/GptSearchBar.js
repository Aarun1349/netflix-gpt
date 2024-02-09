import React, { useRef } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../constants/languageConstant";
import opneAISearch, { AISearch } from "../utils/openAi";
import { OPTIONS } from "../constants/Constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


  const searchMoviesTmdb = async (movie) => {
    const movieResult = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,
      OPTIONS
    );
    const getMovie = await movieResult.json();
    console.log("movie", getMovie);
  };



  const serachMovies = async (e) => {
    e.preventDefault();
    const queryText =
      "Act as a movie recommandation system and suggest some movies for the query " +
      searchText.current.value +
      " and provide only 10 movies in comma seprated ways for example: movie1, movie2,...,movie10";
    const sampleQuery = [{ role: "user", content: queryText }];
    console.log("gptResponse__sampleQuery________", sampleQuery);
    try {
      // const gptResponse = await opneAISearch(sampleQuery);
      const gptResponse = await AISearch(sampleQuery);
      console.log("gptResponse________", gptResponse);
      const gptMovies = gptResponse?.content?.message.split(",");
      const promiseMovies = gptMovies.map((movie) => searchMoviesTmdb(movie));
      const moviesList = await Promise.all(promiseMovies);
      dispatch(addGptMovies({movieNames:gptMovies,moviesList}));
    } catch (error) {
      console.log("gptResponse ERROR________", error);
    }
  };


  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" capitalize py-2 rounded-lg p-4 m-4 col-span-9 text-black  "
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        ></input>
        {/* <AiOutlineSearch
          className=" cursor-pointer  text-black   text-3xl relative top-5 right-12 z-50  "
          onClick={() => serachMovies()}
        /> */}

        <button
          className="col-span-3 py-2 text-white rounded-lg px-4 m-4 bg-red-600"
          onClick={(e) => serachMovies(e)}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
