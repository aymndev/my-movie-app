import React, { useContext } from "react";

import CardMovie from '../components/CardMovie'
import { MovieContext } from "../context/MovieContext"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";





export default function Home() {
  const scrollRef = useRef(null);

  const context = useContext(MovieContext);
  if (!context) {
    return <p className="text-red-500">Context not working</p>;
  }

  const { movie: movies = [], loading, error } = useContext(MovieContext);
  console.log("movies:", movies);
  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }
  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">{error}</p>;
  const featuredMovie = movies[0];
  const highQualityPoster = featuredMovie?.image?.original.replace("SX300", "SX700");
  const cleanSummary = featuredMovie?.summary
    ?.replace(/<[^>]+>/g, "")
    ?.replace(/\.\s*/g, ".\n");
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };


  return (
    <div className='flex flex-col font-sans  min-h-screen max-w-[1550px] mx-auto'>
      <div className="relative h-[80vh] w-full ">
        <img
          src={highQualityPoster}
          alt={highQualityPoster}
          className="w-[101rem] h-[41rem] object-cover  brightness-50 scale-110 object-[50%_53%]"
        />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-center mt-[8rem] ml-9">
          <div className="flex  gap-5 ">
            <div className="flex flex-row">
              <img
                src={highQualityPoster}
                alt={highQualityPoster}
                className="h-[17rem] w-[13rem] pb-2 "


              />

            </div>
            <div className="flex justify-center  text-lg pr-[11rem] pt-[4rem] whitespace-pre-line text-white max-w-lg">
              <p className="">{cleanSummary}</p>

            </div>

          </div>


          <div className="flex flex-col">
            <div className="flex flex-row  ">
              <div className="flex flex-col">

                <h1 className="text-3xl ">
                  {featuredMovie?.name}
                </h1>
               
                <p className="text-3xl">
                  Year: {featuredMovie?.premiered}

                </p>
                <button className="mt-5 bg-red-600 px-6 py-2 rounded w-[150px]">
                  ▶ Play
                </button>

              </div>




            </div>

          </div>


        </div>


      </div>
      <div className='flex  text-xl pt-[10rem] '>
        <h1 className="font-bold text-white pb-9 text-3xl md:pl-[5rem]">You Might Like </h1>

      </div>
      <div className="flex flex-row justify-center gap-[5rem] ">
        <div onClick={scrollLeft} className=" flex justify-center items-center">
          <FaArrowLeft />

        </div>


        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth">
          <div className="flex   justify-center gap-4 bg-gray-900 p-5 rounded-lg">

            {movies.slice(15, 25).map((movie) => (
              <CardMovie key={movie.imdbID} movie={movie} />


            ))}

          </div>

        </div>
        <div onClick={scrollRight} className=" flex justify-center items-center">
          <FaArrowRight />

        </div>

      </div>
      <div className="flex justify-center  pt-[3rem] flex-col ">
        <h1 className="text-3xl font-bold ml-[6rem]"> Movies </h1>
        <div className="flex flex-col grid grid-cols-6 gap-1 p-5   rounded-lg">

          {movies.slice(0,30).map((movie) => (
            <CardMovie key={movie.imdbID} movie={movie} />


          ))}

        </div>
      </div>


    </div>
  )
}
