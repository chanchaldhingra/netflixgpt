import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((state) => state?.movies);
  if(!movies) return null;

  return (
    <div className='bg-black'>
      <div className='relative -mt-40 z-20'>
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer