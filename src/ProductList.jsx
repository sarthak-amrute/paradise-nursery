import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import Navbar from './Navbar';
import './ProductList.css';

function ProductList({ onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1599593915582-4f36c567e7df?w=500&auto=format&fit=crop&q=80",
          cost: "$15",
          description: "Produces oxygen at night and removes toxins from air."
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484438-3430147a44f5?w=500&auto=format&fit=crop&q=80",
          cost: "$12",
          description: "Resilient houseplant that filters carbon monoxide and xylene."
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593482892290-f5654ebd4589?w=500&auto=format&fit=crop&q=80",
          cost: "$18",
          description: "Graceful white blossoms that purify indoor living spaces."
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&auto=format&fit=crop&q=80",
          cost: "$14",
          description: "Lush feather-like fronds that naturally humidify the room."
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&auto=format&fit=crop&q=80",
          cost: "$20",
          description: "Glossy deep green leaves that absorb airborne contaminants."
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&auto=format&fit=crop&q=80",
          cost: "$10",
          description: "Healing succulent that cleans indoor air and soothes burns."
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=500&auto=format&fit=crop&q=80",
          cost: "$16",
          description: "Calming sweet aroma known to promote restful sleep."
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb264b5?w=500&auto=format&fit=crop&q=80",
          cost: "$15",
          description: "Intoxicating fragrance with exquisite white star flowers."
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586040685-61878d6978fb?w=500&auto=format&fit=crop&q=80",
          cost: "$11",
          description: "Herbaceous woodsy fragrance ideal for culinary and aromatherapy."
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=500&auto=format&fit=crop&q=80",
          cost: "$8",
          description: "Crisp and invigorating herbal scent for your kitchen windowsill."
        },
        {
          name: "Geranium",
          image: "https://images.unsplash.com/photo-1526318896980-cf7b808f73d5?w=500&auto=format&fit=crop&q=80",
          cost: "$13",
          description: "Delightful floral and citrus notes with colorful blossoms."
        },
        {
          name: "Eucalyptus",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&auto=format&fit=crop&q=80",
          cost: "$22",
          description: "Refreshing menthol scented foliage that clears the senses."
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207215624-9bc084c794f7?w=500&auto=format&fit=crop&q=80",
          cost: "$19",
          description: "Extremely drought-tolerant plant thriving even in low light."
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1596724817757-5e6e87f8b2d4?w=500&auto=format&fit=crop&q=80",
          cost: "$10",
          description: "Fast-growing trailing vine that forgives neglected watering."
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1520302212323-e52003e11425?w=500&auto=format&fit=crop&q=80",
          cost: "$25",
          description: "Indestructible dark foliage that tolerates poor conditions."
        },
        {
          name: "Succulent Mix",
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&auto=format&fit=crop&q=80",
          cost: "$9",
          description: "Charming assorted succulents that require rare watering."
        },
        {
          name: "Cactus",
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
          cost: "$11",
          description: "Hardy desert favorite that thrives in sunny dry rooms."
        },
        {
          name: "Money Plant",
          image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&auto=format&fit=crop&q=80",
          cost: "$14",
          description: "Traditional symbol of prosperity that thrives in water or soil."
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const checkIfAdded = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const handleNavigate = (page) => {
    if (page === 'cart') {
      setShowCart(true);
    } else if (page === 'products') {
      setShowCart(false);
    }
  };

  return (
    <div className="product-list-page">
      {/* Navbar visible on both Product Listing and Cart pages */}
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={showCart ? 'cart' : 'products'} 
        onHome={onHome} 
      />

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-list-container">
          <div className="product-list-header">
            <h2>Our Houseplants Collection</h2>
            <p>Select from our air purifying, aromatic, and low-maintenance plants</p>
          </div>

          {plantsArray.map((categoryGroup, index) => (
            <section key={index} className="category-section">
              <h3 className="category-title">{categoryGroup.category}</h3>
              <div className="plants-grid">
                {categoryGroup.plants.map((plant, pIndex) => {
                  const isAdded = checkIfAdded(plant.name);
                  return (
                    <div key={pIndex} className="plant-card">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="plant-image" 
                      />
                      <h4 className="plant-name">{plant.name}</h4>
                      <p className="plant-cost">{plant.cost}</p>
                      <p className="plant-description">{plant.description}</p>
                      <button 
                        className={`add-to-cart-btn ${isAdded ? 'disabled' : 'enabled'}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;