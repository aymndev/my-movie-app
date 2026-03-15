import React from 'react'
import heroImg from '../assets/hero.png'

export default function CardMovie() {
    return (
        <div className='flex ' >
            <div className='border-[1px] border-black rounded-xl'>


                <div className='bg-gray-300 rounded-t-xl '>
                    <p>7,8</p>
                    <img className='h-[12rem]' src={heroImg} alt="my-img" />

                </div>
                <div className='flex flex-col text-center'>
                    <h1 className=''>title</h1>
                    <p>2027</p>
                </div>
            </div>
        </div>
    )
}
