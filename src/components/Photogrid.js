import React, { useState } from 'react';
import './photogrid.css';

const PhotoGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="photo-grid">
      {images.map((image, index) => (
        <div
          key={index}
          className="photo-grid-item"
          style={{ backgroundImage: `url(${image.thumbnail})` }}
          onClick={() => setSelectedImage(image.full)}
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
