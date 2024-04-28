import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayText, setDisplayText] = useState(''); // State for displayed text
  const [showPizzaImage, setShowPizzaImage] = useState(false); // State for image display

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setDisplayText(event.target.value); // Update displayed text
    setShowPizzaImage(event.target.value.toLowerCase() === 'pizza'); // Check for "pizza" (lowercase)
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Search Bar</h1>
      <style jsx>
        {`
          .search-wrapper {
            display: flex;
            justify-content: center;
            margin: 20px auto;
          }

          .search-input {
            display: block;
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
            background-color: #f5f5f5;
            color: #333;
          }

          .displayed-text {
            text-align: center;
            font-size: 36px;
            color: red;
            margin-top: 10px;
          }

          .pizza-image {
            display: block;
            width: 500px;
            height: auto;
            margin: 10px auto;
          }
        `}
      </style>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="displayed-text">{displayText || ''}</div>
      {showPizzaImage && (
        <img src="https://thumbs.dreamstime.com/b/sketch-smiling-italian-chef-holding-pizza-his-hand-style-vector-illustration-white-background-charming-74048679.jpg" alt="Pizza" className="pizza-image" />
      )}
    </div>
  );
}

export default App;
