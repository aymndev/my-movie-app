import { useState } from 'react'

import Navebare from './components/Navebare'
import Home from './routes/home'
import About from './routes/about';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Wrap your pages inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* default page */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

    

    </>
  )
}

export default App
