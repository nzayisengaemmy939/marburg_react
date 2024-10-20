import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/HeroSection/Hero';
import About from './Components/About/About';
import Prevent from './Components/Prevent/Prevent';
import Contact from './Components/Contact/Contact';
import HealthForm from './Components/getHealth/healthForm';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Default route */}
          <Route path="about" element={<About />} />
          <Route path="prevent" element={<Prevent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form" element={<HealthForm />} />
        
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
