import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Hero from './Components/HeroSection/Hero';
import App from './App';
import About from './Components/About/About';
import Prevent from './Components/Prevent/Prevent';
import Contact from './Components/Contact/Contact';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/prevent' element={<Prevent/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
