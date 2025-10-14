import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from '../components/navbar';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
      

  
function App() {      
  

  return (      
    <>
      <div>
      <Navbar />   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </div>    
    </>
  )
}

export default App
