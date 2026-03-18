import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';


import React from 'react'
import { Outlet, NavLink } from "react-router-dom";


export default function Navebare() {
    const [input, setInput] = useState("")
    return (
        <div className='flex bg-black text-white h-[90px]   justify-center items-center gap-[90px] '>
            <div className=' gap-5'>



                {/*hover:underline rounded-lg p-1  */}
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
                <button className='bg-red-600 text-black p-2 rounded-r-lg'>search</button>
            </div>

            <hr />
        </div>
    )
}
