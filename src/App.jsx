import React from 'react';
import About from '../Screens/About'
import Home from '../Screens/Home'
import Contact from '../Screens/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
