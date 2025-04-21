import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS, TOP_MOV } from '../utils/constant';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topMovies = useSelector((store) => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_MOV, API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topMovies && getTopRatedMovies();
    }, []);

};

export default useTopRatedMovies;