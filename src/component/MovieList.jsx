import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        movies && (
            <div className='px-6 '>
                <h1 className='text-4xl py-4 text-white'>{title}</h1>
                <div className='flex overflow-x-scroll'>
                    <div className='flex'>
                        {
                            movies?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                </div>

            </div>
        )
    )
}

export default MovieList