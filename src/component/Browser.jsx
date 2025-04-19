import React from 'react'
import Header from './Header'
import usePlayingMovies  from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {

  usePlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browser