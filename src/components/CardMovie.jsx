import React from 'react'

import MovieProvider from '../context/MovieContext'


export default function CardMovie({movie}) {
    return (
        <div className='flex ' >
            <div className=' flex flex-col border-[1px] border-black rounded-xl w-[200px]'>


                <div className=' rounded-t-xl '>
                    
                    <img className='h-[12rem] w-full object-cover' src={movie.Poster} alt={movie.Title} />

                </div>
                <div className='flex flex-col text-center'>
                    <h1 className='text-lg font-bold truncate '>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                
                </div>
            </div>
        </div>
    )
}
