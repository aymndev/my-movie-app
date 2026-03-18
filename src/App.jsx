
import Home from './routes/home'
import About from './routes/about';
import MovieProvider from './context/MovieContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';


function App() {
  


  return (
    <>
    
    <MovieProvider>

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MovieProvider>

    

    </>
  )
}

export default App
