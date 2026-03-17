import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';


import React from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Navebare() {
    const [input, setInput] = useState("")
    return (
        <div className='flex bg-black text-white h-[90px]  border-b border-white-500 justify-center items-center gap-[90px] rounded-b-lg'>
            <div className=' gap-5'>




                <nav className='flex gap-[50px]'>
                    <Link to='/' className='hover:bg-red-600 rounded-lg p-1'>Home</Link>
                    <Link to='/about' className='hover:bg-red-600 rounded-lg p-1'> About</Link>

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
