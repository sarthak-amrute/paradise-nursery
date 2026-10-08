import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar({ onNavigate, currentPage, onHome }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleHomeClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onHome) {
      onHome();
    } else if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={handleHomeClick}>
        <span className="navbar-logo">🌿</span>
        <h2>Paradise Nursery</h2>
      </div>
      <div className="navbar-links">
        <button className="nav-link" onClick={handleHomeClick}>
          Home
        </button>
        <button 
          className={`nav-link ${currentPage === 'products' ? 'active' : ''}`} 
          onClick={() => onNavigate && onNavigate('products')}
        >
          Plants
        </button>
        <button 
          className={`nav-link ${currentPage === 'cart' ? 'active' : ''}`} 
          onClick={() => onNavigate && onNavigate('cart')}
        >
          🛒 Cart <span className="cart-badge">{totalItemsCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;