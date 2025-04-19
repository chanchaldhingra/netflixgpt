import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
    if(!movies) return null;
    const mainMovie = movies[0];
    const {original_title, overview} = mainMovie;
    return (
        <div className="relative pt-[30%] bg-black md:pt-0">
            <VideoBackground movieId={mainMovie.id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer