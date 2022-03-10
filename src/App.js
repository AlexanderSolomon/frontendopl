import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Layout } from './pages/Layout';
import { AboutUs } from './pages/AboutUs';
import { Homepage } from './pages/Homepage';

// browserRouter is adding capabilties for react to go to different routes like url or something else.
// in Route main path is the slash the function element u want to pass render the 
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}> 
    <Route index element={<Homepage/>}></Route>
    <Route path="about-us" element={<AboutUs/>} />

    </Route>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
