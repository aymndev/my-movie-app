import React from 'react'




export default function CardMovie({movie}) {
    return (
        <div className='flex ' >
            <div className=' flex flex-col font-sans w-[200px]'>


                <div className=' rounded-t-xl '>
                    
                    <img className='h-[23rem] w-full object-cover rounded-lg' src={movie.Poster} alt={movie.Title} />

                </div>
        
            </div>
        </div>
    )
}
