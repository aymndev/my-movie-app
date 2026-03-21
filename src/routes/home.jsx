import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom"

import CardMovie from '../components/CardMovie'
import { MovieContext } from "../context/MovieContext"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";






export default function Home() {
  const { filteredMovies } = useOutletContext();
  const moviesToShow = filteredMovies;
  const { movie: movies = [], loading, error } = useContext(MovieContext);
 
  const scrollRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  

  const context = useContext(MovieContext);
  if (!context) {
    return <p className="text-red-500">Context not working</p>;
  }

 
 
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
              <div className="flex flex-col text-white">

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
              <CardMovie key={movie.id} movie={movie} />


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

          {moviesToShow.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}

            />


          ))}

        </div>
      </div>
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-950 text-red-700 p-5 rounded w-[80rem] max-w-[70%] relative ">


            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-2 right-3 text-white font-bold text-lg"
            >
              <IoClose />
            </button>
            <div className="flex flex-row gap-5">


              <div className="w-[30%] ">
                <img
                  src={selectedMovie?.image?.medium || selectedMovie?.image?.original}
                  alt={selectedMovie?.name}
                  className="w-full rounded-md h-[35rem] w-[100rem]"
                />

              </div>
              <div className=" w-[40%] m-9 ml-[9rem] justify-center items-center">
                <h2 className="text-3xl font-bold mt-3">{selectedMovie.name}</h2>

                {/* Movie summary */}
                <p className="mt-2  text-white whitespace-pre-line">
                  {selectedMovie.summary?.replace(/<[^>]+>/g, "")}
                </p>

              </div>
            </div>






          </div>
        </div>



      )}


    </div>
  )
}
