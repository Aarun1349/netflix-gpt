import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_URL, LOGO_URL } from '../constants/Constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img className='bg-center fixed h-full md:flex w-full' src={BACKGROUND_URL} alt="log0"/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch;