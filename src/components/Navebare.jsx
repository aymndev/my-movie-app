import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navebare() {
    return (
        <div>


            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'> About</Link>

            </nav>
            <hr/>
            

        </div>
    )
}
