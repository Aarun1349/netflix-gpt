import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { lang } from "../constants/languageConstant";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
//   console.log("language____", language);
//   console.log(lang[language].search);


//   console.log(lang.[$language].search)
  const serachMovies = () => {};
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
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
          onClick={serachMovies()}
        >
         {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
