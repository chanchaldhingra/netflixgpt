import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    
    const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
    if (!movieId) return null;
    
    useMovieTrailer(movieId);
    return (
        <div className='w-screen absolute'>
            {trailerVideo && <iframe className='w-screen h-[100vh] aspect-video' 
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

            </iframe>}
        </div>
    )
}

export default VideoBackground