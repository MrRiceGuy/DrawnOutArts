import React from 'react';
import PhotoGrid from '..//components/Photogrid';

const paintings = [
  { thumbnail: '/images/paintings/cliffsofJapan.jpg', full: '/images/paintings/cliffsofJapan.jpg' },
  { thumbnail: '/images/paintings/muyfasao.jpg', full: '/images/paintings/muyfasao.jpg' },
  { thumbnail: '/images/paintings/hellscape.jpg', full: '/images/paintings/hellscape.jpg' },
  { thumbnail: '/images/paintings/bugs.jpg', full: '/images/paintings/bugs.jpg' }
];

const Painting = () => {
  return <PhotoGrid images={paintings} />;
};

export default Painting;