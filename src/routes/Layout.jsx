import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Navebare from '../components/Navebare';
import { Outlet } from "react-router-dom";


export default function Layout() {
  const { movie: movies = [] } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  return (
    <div className='sans'>
      <div className="fixed top-0 left-0 w z-50 w-full">
        <Navebare onSearch={setFilteredMovies} />

      </div>

      <div className='p-4   min-h-screen  bg-gradient-to-t from-black to-gray-950 text-white'>
        {filteredMovies.map(movie=>(
          <div key={movie.id}>{movie.name}</div>

        ))}
        <Outlet  context={{filteredMovies}}/>

      </div>
    </div>
  )
}
