import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return null;
  return (
    <div className='w-48 pr-4'>
        <img src={`${IMG_CDN_URL}${movie.poster_path}`} alt={movie.original_title} />
    </div>
  )
}

export default MovieCard