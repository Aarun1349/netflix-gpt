import React from 'react'
// import MovieList from './MovieList'
// import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const {movieNames,searchResult} = useSelector(store=>store.gptSearch)
  if(!movieNames) return null;
  if(!searchResult) return null;

  return (
    <div>
        {/* <MovieList/>
        <MovieCard/> */}
    </div>
  )
}

export default GptMovieSuggestions