import React from 'react'
import Header from './Header'
import usePlayingMovies  from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browser = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  usePlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browser