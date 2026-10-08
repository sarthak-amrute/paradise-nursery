import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const numericCost = parseFloat(item.cost.replace('$', ''));
      return total + numericCost * item.quantity;
    }, 0).toFixed(2);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace('$', ''));
    return (numericCost * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    alert('Functionality to be added for future reference: Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <h3 className="cart-total-amount">Total Cart Amount: ${calculateTotalAmount()}</h3>

      {cartItems.length === 0 ? (
        <div className="empty-cart-view">
          <p className="empty-cart-msg">Your shopping cart is currently empty.</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-cost">Unit Price: {item.cost}</p>
                  <p className="cart-item-subtotal">Total: ${calculateTotalCost(item)}</p>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrement" 
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn increment" 
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;