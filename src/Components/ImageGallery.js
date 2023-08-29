// import React from 'react';
// import './ImageGallery.css';

// const ImageGallery = ({ props }) => {
//   return (
//     <div className="image-gallery">
//       {props.map((props, index) => (
//         <img key={index} className="gallery-image" src={props} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;

import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img className="gallery-image" src={image.url} alt={image.name} />
          <div className="image-details">
            <h3 className="image-name">{image.name}</h3>
            <p className="image-description">{image.description}</p>
            <p className="image-author">By {image.author}</p>
            <div className="image-rating">
            <span className="star">&#9733;</span>
              <span className="rating-number">{image.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
