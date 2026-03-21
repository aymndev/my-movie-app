import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react';
import DropDown from './DropDown'
import { MovieContext } from "../context/MovieContext";
import React from 'react'
import { NavLink } from "react-router-dom";


export default function Navebare({ onSearch, onSelectGenre }) {
    
    const { movie: movies = [] } = useContext(MovieContext);
    const [input, setInput] = useState("");
    
   
    
    function handleSearch() {
        if(input.trim==""){
            onSearch("")
            return;
        }
        // const filtered = movies.filter(movie =>
         //   (movie.name || movie.title || "").toLowerCase().includes(input.toLowerCase())
        // );
        onSearch(input); 
        setInput("");
      }

  


    return (
        <div className='flex bg-black text-white h-[90px]   justify-center items-center gap-[90px] '>
            <div className=' gap-5'>



                <nav className='flex gap-[50px]'>
                    <NavLink to='/'
                        className={({ isActive }) =>
                            isActive
                                ? "relative font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-red-500"
                                : "hover:underline hover:underline-offset-8 after:transition-all after:duration-300"


                        }>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) =>
                        isActive
                            ? "relative font-bold after:content-['']  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-red-500"
                            : "hover:underline hover:underline-offset-8 after:transition-all after:duration-300 "

                    }> About</NavLink>

                </nav>

            </div>
            <div >
                <input
                    className='text-black p-2 pl-5 pr-5 ml-5 rounded-l-xl outline-none focus:outline-none'
                    type="text"
                    value={input}
                    placeholder='Type..'
                    onChange={(e) => setInput(e.target.value)}



                />
                <button  onClick={handleSearch}  className='bg-red-600 text-white p-2 rounded-r-lg'>search</button>
                <DropDown 
                genres={["All", "Action", "Drama", "Comedy"]}
                onSelect={onSelectGenre} 

                
                />
            </div>


            <hr />
        </div>
    )
}
