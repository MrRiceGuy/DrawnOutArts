import React from 'react';
import PhotoGrid from '..//components/Photogrid';

const photos = [
  { thumbnail: 'images/pictures/leafSmall.png', full: 'images/pictures/leafLarge.jpg' },
  { thumbnail: 'images/pictures/StilFlower.jpg', full: 'images/pictures/StilFlower.jpg' },
  { thumbnail: 'images/pictures/beachchairsSmall.png', full: 'images/pictures/beachchairsLarge.jpg' },
  { thumbnail: 'images/pictures/baseballSmall.png', full: 'images/pictures/baseballLarge.jpg' },
  // Add more photos here
];

const Photo = () => {
  return <PhotoGrid images={photos} />;
};

export default Photo;
