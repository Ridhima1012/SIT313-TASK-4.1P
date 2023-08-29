import React from 'react';
import './FeaturedTutorial.css';

const FeaturedTutorial = ({ tutorials }) => {
  return (
       

    <div className="feature-tutorial">
         {/* <h1 className="Heading"> Featured Tutorial </h1> */}
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-item">
            <img className="tutorial-image" src={tutorial.url} alt={tutorial.name} />
          <h3 className="tutorial-title">{tutorial.title}</h3>
          <p className="tutorial-description">{tutorial.description}</p>
          <div className="author-rating">
            <span className="tutorial-author">By {tutorial.author}</span>
            <span className="star">&#9733;</span>
            <span className="rating-number">{tutorial.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedTutorial;
