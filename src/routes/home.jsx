import React, { useContext } from "react";

import CardMovie from '../components/CardMovie'
import { MovieContext } from "../context/MovieContext"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Home() {

  const { movie: movies, loading, error } = useContext(MovieContext);
  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">{error}</p>;
  
  return (
    <div className='flex flex-col font-sans '>
      <div className='flex  text-xl pt-5 '>
        <h1 className="font-bold text-white pb-9 text-3xl pl-[5rem]">You Might Like </h1>

      </div>
      <div className="flex flex-row justify-center gap-[5rem] ">
        <div className=" flex justify-center items-center">
          <FaArrowLeft />

        </div>


        <div className="flex  flex-wrap justify-center gap-4">
          <div className="flex  flex-wrap justify-center gap-4 bg-gray-900 p-5 rounded-lg">
         
            {movies.slice(0, 5).map((movie) => (
              <CardMovie key={movie.imdbID} movie={movie} />


            ))}
       
          </div>

        </div>
        <div className=" flex justify-center items-center">
          <FaArrowRight />

        </div>

      </div>


    </div>
  )
}
