import React, { useState } from 'react';

import './photogrid.css';

const PhotoGrid = () => {
  // Correct image paths from the public folder
  const images = [
    'images/leaf-small.png',
    'images/baseball-small.png',
    'images/beachchairs-small.png',
    'images/bwFlower-small.png',
    'images/collodionFace-small.png',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="photo-grid">
      {images.map((image, index) => (
        <div
          key={index}
          className="photo-grid-item"
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => setSelectedImage(image)}
        >
          <span>Full Image</span>
        </div>
      ))}
      {selectedImage && (
        <div className="image-overlay" onClick={() => setSelectedImage(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
