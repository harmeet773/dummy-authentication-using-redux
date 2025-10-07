import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';


  
function App() {      
  

  return (      
    <>
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
        
      </div>    
    </>
  )
}

export default App
