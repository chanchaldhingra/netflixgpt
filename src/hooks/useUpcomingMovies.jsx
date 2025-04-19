import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { API_OPTIONS, UP_COMING_MOV } from '../utils/constant';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(UP_COMING_MOV, API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

};

export default useUpcomingMovies;