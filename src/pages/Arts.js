import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Arts.css';

const categories = [
  {
    name: 'Photo',
    image: '/images/pictures/baseballSmall.png',
    images: ['/images/pictures/StilFlower.jpg', '/images/pictures/bwFlowerSmall.png','/images/pictures/beachchairsSmall.png','/images/pictures/leafSmall.png'],
  },
  {
    name: 'Drawing',
    image: '/images/drawings/windoz.jpg',
    images: ['/images/drawings/snails.jpg', '/images/drawings/windoz.jpg'],
  },
  {
    name: 'Painting',
    image: '/images/paintings/cliffsofJapan.jpg',
    images: ['/images/paintings/muyfasao.jpg', '/images/paintings/bugs.jpg', '/images/paintings/hellscape.jpg' , '/images/paintings/cliffsofJapan.jpg'],
  },

];

const Arts = () => {
  const [highlightedCategory, setHighlightedCategory] = useState('Photo');
  const [selectedImage, setSelectedImage] = useState(null); // Track clicked image
  const navigate = useNavigate();

  const currentCategory =
    categories.find((cat) => cat.name === highlightedCategory) || { images: [] };

  return (
    <div className="arts-container">
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-card ${
              highlightedCategory === category.name ? 'highlight' : ''
            }`}
            style={{ backgroundImage: `url(${category.image})` }}
            onClick={() => setHighlightedCategory(category.name)}
          >
            <div className="category-text">{category.name}</div>
          </div>
        ))}
      </div>

      {/* Display image grid */}
      <div className="category-content">
        {currentCategory.images.length > 0 ? (
          <div className="image-grid">
            {currentCategory.images.map((img, index) => (
              <div
                key={index}
                className="image-grid-item"
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => setSelectedImage(img)}
              ></div>
            ))}
          </div>
        ) : (
          <p className="no-images">No images available for this category.</p>
        )}
      </div>

      {/* Pop-out functionality */}
      {selectedImage && (
        <div className="image-overlay" onClick={() => setSelectedImage(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full-size preview" />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <a href="https://www.twitch.tv/drawnoutarts" target="_blank" rel="noopener noreferrer" className = 'twitch-link'>
        Follow me on Twitch
      </a>
    </div>

  );
};

export default Arts;
