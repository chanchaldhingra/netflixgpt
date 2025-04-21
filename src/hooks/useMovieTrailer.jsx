import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const getMovieDetails = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en', API_OPTIONS)
        const json = await data.json();
        let filterTrailer = json.results.filter((item) => item.type === "Trailer");
        filterTrailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        dispatch(addTrailerVideo(filterTrailer));
    };

    useEffect(() => {
        if (!movieId) return;
        !trailerVideo && getMovieDetails();
    }, []);
};

export default useMovieTrailer;