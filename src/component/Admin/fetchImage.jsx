import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/getImage') // Replace '/api/images' with your backend endpoint that serves image URLs
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index}`} />
          
        ))}
      </div>
    </div>
    
  );
  
}

export default ImageGallery;
