import React from 'react'
import Header from './Header'
import usePlayingMovies  from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {

  usePlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browser