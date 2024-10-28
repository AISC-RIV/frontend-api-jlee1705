import React, { useState, useEffect } from 'react';

function App() {
  const [image, setImage] = useState([]);
  const accessKey = 'BEOxWgZZl2iqtAOK5ku-5atMbFndzrjHe2VqtmuoyUI'

	const fetchRandomImage = async () => {
    try {
      const response = await fetch (`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
      const data = await response.json();
      setImage(data.urls.regular)
    } catch (error) {
    console.error('Error fetching image', error);
  }
};

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div>
      <h2>Random Unsplash Image</h2>
      {image ? (
        <>
          <img 
          src={image} alt="Random from Unsplash" 
          style={{ marginTop: '10px', maxWidth: '25%' }} />
          <div>
            <button onClick={fetchRandomImage} style={{ marginTop: '10px' }}>
              Generate New Image
            </button>
          </div>
        </>
      ) : (
        <p>Error loading image.</p>
      )}
    </div>
  );
};

export default App;
