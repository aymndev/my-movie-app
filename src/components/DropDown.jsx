import React from 'react'
import { useState } from 'react';
import { FaArrowDown } from "react-icons/fa6";

export default function DropDown({ genres, onSelect }) {
    const [isOpen, setIsopen] = useState(false);
    return (
        <div className='relative inline-block text-left text-black'>

            <button
                onClick={() => setIsopen(!isOpen)}
                className='px-1 ml-9 py-2 bg-red-600 rounded-md shadow-sm text-white'>
                <div className='flex flex-row gap-1 '>Categories<FaArrowDown className={`mt-[5px] h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                    }`} /></div>
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => {
                                onSelect(genre);
                                setIsopen(false);
                            }}
                            className='block w-full font-bold text-left px-4 py-2 text-sm text-black hover:bg-gray-200 hover:rounded-xl transition-transform duration-300 hover:scale-105'

                        >
                            {genre}


                        </button>

                    ))}


                </div>


            )}


        </div>
    );
}
