import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';
import store from './store.js';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';
import CounterApp from  './counterApp/CounterApp.jsx';
import { Provider } from 'react-redux';


  
function App() {      
  

  return (      
    <>
    <Provider store={store}>
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
      <CounterApp />
        
      </div>    
    </Provider>
    </>
  )
}

export default App
