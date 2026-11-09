import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bac?w=500",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=500",
          description: "Calming scent, helps reduce stress and anxiety.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=500",
          description: "Sweet fragrance, promotes relaxation and better sleep.",
          cost: "$18"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500",
          description: "Soothes skin irritations and has healing properties.",
          cost: "$14"
        },
        {
          name: "Peppermint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500",
          description: "Relieves digestive issues and provides fresh scent.",
          cost: "$10"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#plants" onClick={() => setShowCart(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Plants</a>
          <a href="#cart" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            🛒 Cart <span style={{ backgroundColor: '#e53935', borderRadius: '50%', padding: '2px 8px', fontSize: '14px', marginLeft: '5px' }}>{totalQuantity}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '30px' }}>
          {plantsArray.map((category, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>{category.category}</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} className="product-card" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '280px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }} />
                    <h3 style={{ margin: '10px 0' }}>{plant.name}</h3>
                    <p style={{ color: '#555', fontSize: '14px', height: '40px' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '10px 0' }}>{plant.cost}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)}
                      style={{
                        backgroundColor: addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? '#ccc' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        cursor: addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
