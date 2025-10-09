import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';
import CounterApp from  './counterApp/CounterApp.jsx';

import Login from './components/Login.jsx';


  
function App() {      
  

  return (      
    <>
    
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

      </Routes>
      <CounterApp />
        
      </div>    
    </>
  )
}

export default App
