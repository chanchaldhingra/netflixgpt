import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS, POP_MOV } from '../utils/constant';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(POP_MOV, API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

};

export default usePopularMovies;