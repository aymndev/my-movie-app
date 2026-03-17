import React from 'react'
import Navebare from '../components/Navebare'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className='sans'>
        <Navebare/>
        <div className='p-4 rounded-t-xl bg-black text-white'>
            <Outlet/>

        </div>
    </div>
  )
}
