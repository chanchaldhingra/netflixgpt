import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div className='gpt-search-container'>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch