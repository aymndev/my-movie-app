import React from 'react'
import Navebare from '../components/Navebare'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <Navebare/>
        <div>
            <Outlet/>

        </div>
    </div>
  )
}
