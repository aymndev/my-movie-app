import React, { useState, useContext,useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import Navebare from '../components/Navebare';
import { Outlet } from "react-router-dom";


export default function Layout() {
  const { movie: movies = [] } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState('All');
  useEffect(() => {
    let result = movies;

    if (selectedGenre !== "All") {
      result = result.filter(movie => movie.genres?.includes(selectedGenre));
    }

    if (searchTerm && typeof searchTerm === "string") {
      result = result.filter(movie =>
        (movie.name || movie.title || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(result);
  }, [movies, selectedGenre, searchTerm]);

  return (

    <div className='sans'>
      <div className="fixed top-0 left-0 w z-50 w-full">
        <Navebare   
          onSearch={setSearchTerm}
          onSelectGenre={setSelectedGenre}
         />

      </div>

      <div className='p-4   min-h-screen  bg-gradient-to-t from-black to-gray-950 text-white'>

        <Outlet context={{ filteredMovies, setSelectedGenre }} />

      </div>
    </div>
  )
}
