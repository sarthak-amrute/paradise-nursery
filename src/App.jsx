import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="company-name">Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="company-tagline">Where Green Meets Serenity</p>
            <AboutUs />
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList onHome={handleHome} />
      )}
    </div>
  );
}

export default App;