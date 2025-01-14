import React, { useState, useEffect } from "react";
import './Home.css';

const LogoAnimation = "/images/DOALOGOmoch2.gif"; // Adjust the path based on your folder structureDOALOGOmoch2.gif


const Home = () => {
  const images = ["images/baseball-small.png", "images/beachchairs-small.png", "images/bwFlower-small.png", "images/collodionface-small.png", "images/leaf-small.png"];
  const [currentImage, setCurrentImage] = useState(0);

  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBlink(false), 5000); // Stop blinking after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    setBlink(false); // Stop blinking when arrows are clicked
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setBlink(false); // Stop blinking when arrows are clicked
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="main">
      <h1>Drawn Out Arts</h1>
      <div className="artShow">
        <img
          src={`/${images[currentImage]}`}
          alt="Art gallery"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="arrow arrow-left arrow-blink" onClick={prevImage}></div>
        <div className="arrow arrow-right arrow-blink" onClick={nextImage}></div>
      </div>
      <div className="logo-animation">
      <img
  src={LogoAnimation}
  alt="Logo Animation: Drawn Out Arts, The D and O morph into eyes and the A turns into the beak to make an owl."
/>

      </div>
    </div>
  );
};

export default Home;

