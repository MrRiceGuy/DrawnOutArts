import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Arts.css';

const categories = [
  { name: 'Photo', image: '/images/baseball-small.png' },
  { name: 'Drawing', image: '/images/bwFlower-small.png' },
  { name: 'Painting', image: '/images/Collodionface-small.png' },
  { name: 'Writing', image: '/images/beachchairs-small.png' },
];

const Arts = () => {
  const [highlightedCategory, setHighlightedCategory] = useState('Photo');
  const navigate = useNavigate();

  return (
    <div className="glass-container">
      {categories.map((category, index) => (
        <>
  <div
    key={category.name} // Use a unique value as the key
    className={`glass-piece shape-${index + 1}`}
    style={{ backgroundImage: `url(${category.image})` }}
    onMouseEnter={() => setHighlightedCategory(category.name)}
    onClick={() => navigate(`/${category.name.toLowerCase()}`)}
  >
  </div>
              <div className="glass-text">
              <span>{category.name}</span>
            </div>
            </>
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

