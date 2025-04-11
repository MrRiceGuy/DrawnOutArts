import React from 'react';
import './photogrid.css';

const PhotoGrid = ({ images }) => {
  console.log('Images prop:', images); // Debug log
  return (
    <div className="photo-grid">
      {images.map((image, index) => {
        console.log(`Rendering image ${index + 1}:`, image.thumbnail); // Debug each image
        return (
          <div key={index} className="grid-item">
            <img src={image.thumbnail} alt={`Painting ${index + 1}`} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;