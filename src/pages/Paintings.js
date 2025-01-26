import React from 'react';
import PhotoGrid from '..//components/Photogrid';

const paintings = [
  { thumbnail: 'images/paintings/cliffsofJapan.jpg', full: 'images/paintings/cliffsofJapan.jpg' },
  { thumbnail: 'images/paintings/croppedCat.jpg', full: 'images/paintings/croppedCat.jpg' },
  { thumbnail: 'images/paintings/Doggy.jpg' , full:'images/paintings/Doggy.jpg' }
  // Add more paintings here
];

const Painting = () => {
  return <PhotoGrid images={paintings} />;
};

export default Painting;