import React, { useContext } from "react";
import CardMovie from '../components/CardMovie'
import  { MovieContext }  from "../context/MovieContext"


export default function home() {
  const {movie:movies,loading,error}=useContext(MovieContext);
  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">{error}</p>;
  return (
    <div className='flex flex-col font-sans'>
      <div className='flex justify-center text-xl pt-5 '>
        <h1 className="font-bold pb-9">Popular Movies </h1>

      </div>
      <div className="flex  flex-wrap justify-center gap-4">
        {movies.map((movie)=>(
          <CardMovie key={movie.imdbID} movie={movie}/>


        ))}
        
      </div>
     

    </div>
  )
}
