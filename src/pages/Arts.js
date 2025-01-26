import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Arts.css';

const categories = [
  { name: 'Photo', image: '/images/pictures/baseballSmall.png' },
  { name: 'Drawing', image: '/images/drawings/windoz.jpg' },
  { name: 'Painting', image: '/images/paintings/cliffsofJapan.jpg' },
  { name: 'Writing', image: '/images/pictures/beachchairs-small.png' },
];

const Arts = () => {
  const [highlightedCategory, setHighlightedCategory] = useState('Photo');
  const navigate = useNavigate();

  return (
    <div className="glass-container">
      {categories.map((category, index) => (
        <div
          key={category.name} // Ensure a unique key for each item
          className={`glass-piece shape-${index + 1}`}
          style={{ backgroundImage: `url(${category.image})` }}
          onMouseEnter={() => setHighlightedCategory(category.name)}
          onClick={() => navigate(`/${category.name.toLowerCase()}`)}
        >
          <div className="glass-text">
            <span>{category.name}</span>
          </div>
        </div>
      ))}
      {highlightedCategory && (
        <div
          className="background-preview"
          style={{
            backgroundImage: `url(${
              categories.find((cat) => cat.name === highlightedCategory).image
            })`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Arts;

