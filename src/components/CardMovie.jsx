import React from 'react'




export default function CardMovie({ movie, onClick }) {
    return (
        <div className='flex ' >
            <div
                onClick={onClick}

                className='relative flex flex-col font-sans w-[200px] cursor-pointer hover:scale-105 transition"'>



                <div className=' rounded-t-xl relative group cursor-pointer pb-9'>

                    <img
                        className='h-[23rem] w-full object-cover rounded-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl'
                        src={movie?.image?.medium}
                        alt={movie?.name} />

                    <div className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded'>
                        <p>⭐ {movie.rating.average}</p>


                    </div>
                 



                </div>


            </div>
        </div>
    )
}
