import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Arts from './pages/Arts';
import Contact from './pages/Contact';
import Photo from './pages/Photo'; // New
import Drawing from './pages/Drawing'; // New
import Painting from './pages/Paintings'; // New
import Writing from './pages/Writings'; // New

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photo" element={<Photo />} /> {/* New */}
          <Route path="/drawing" element={<Drawing />} /> {/* New */}
          <Route path="/painting" element={<Painting />} /> {/* New */}
          <Route path="/writing" element={<Writing />} /> {/* New */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;

