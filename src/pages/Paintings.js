import React from 'react';
import PhotoGrid from '..//components/Photogrid';
const photoImages = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
];

const Photo = () => {
  return (
    <div>
      <h1>Painting Gallery</h1>
      <PhotoGrid images={photoImages} />
    </div>
  );
};

export default Photo;
