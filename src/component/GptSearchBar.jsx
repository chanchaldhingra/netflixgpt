import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS, SEARCH_MOVIE } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch();

    const searchRef = useRef(null);

    const handleSearchClick = async (e) => {
        e.preventDefault();
        const query = searchRef.current.value;
        // openai free tier is not available for chat completions
        // console.log("query ", query);
        // const completion = await openai.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [
        //       { role: 'user', content: query },
        //     ],
        // });
        // console.log(completion.choices[0].message.content);

        const movies = 'Koi Mil Gaya, Andaz Apna Apna, 3 Idiots, Dangal, Lagaan, Zindagi Na Milegi Dobara, Kabhi Khushi Kabhie Gham, Dilwale Dulhania Le Jayenge, Hum Aapke Hain';
        const moviesArray = movies.split(',').map(movie => movie.trim());
        const tmbdResults = await Promise.all(moviesArray.map(movie => searchTMBDMovie(movie)));
        dispatch(addGptMovieResult({movieNames: moviesArray, movieResults: tmbdResults}));

    }

    const searchTMBDMovie = async (movie) => {
        const response = await fetch(`${SEARCH_MOVIE}${movie}`, API_OPTIONS);
        const data = await response.json();
        return data.results;
    };

    

    return (
        <div className='pt-[10%] flex justify-center relative z-[10]'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input ref={searchRef} type="text" className="p-4 m-4 col-span-9 bg-white" placeholder="What would you like to watch today?" />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer" onClick={handleSearchClick}>Search</button>
            </form>

        </div>
    )
}

export default GptSearchBar