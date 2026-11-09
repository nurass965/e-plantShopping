import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-overlay">
            <div className="landing-content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity. Explore our collection of lush, beautiful plants to brighten your living space.</p>
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
