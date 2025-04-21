import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS, NOW_PLAYING } from '../utils/constant';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING, API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlaying && getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;