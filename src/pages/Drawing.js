import React from 'react';
import PhotoGrid from '..//components/Photogrid';


const drawings = [
  { thumbnail: 'images/drawings/snails.jpg', full: 'images/drawings/snails.jpg' },
  { thumbnail: 'images/drawings/windoz.jpg', full: 'images/drawings/windoz.jpg' },
  // Add more drawings here
];

const Drawing = () => {
  return <PhotoGrid images={drawings} />;
};


export default Drawing;