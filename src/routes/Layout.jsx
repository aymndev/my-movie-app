import React from 'react'
import Navebare from '../components/Navebare'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className='sans'>
      <div className="fixed top-0 left-0 w z-50 w-full">
        <Navebare  />

      </div>

      <div className='p-4   min-h-screen  bg-gradient-to-t from-black to-gray-950 text-white'>
        <Outlet />

      </div>
    </div>
  )
}
