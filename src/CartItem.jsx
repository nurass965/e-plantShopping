import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const costNumber = parseFloat(item.cost.replace('$', ''));
      return total + costNumber * item.quantity;
    }, 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
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

  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.replace('$', ''));
    return (costNumber * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '15px 0' }}>
            <img className="cart-item-image" src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="cart-item-details" style={{ flex: 1, marginLeft: '20px' }}>
              <div className="cart-item-name" style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</div>
              <div className="cart-item-cost" style={{ color: '#666' }}>{item.cost}</div>
              <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)} style={{ padding: '5px 12px', fontSize: '16px', cursor: 'pointer' }}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)} style={{ padding: '5px 12px', fontSize: '16px', cursor: 'pointer' }}>+</button>
              </div>
              <div className="cart-item-total" style={{ marginTop: '8px', fontWeight: 'bold' }}>Subtotal: ${calculateTotalCost(item)}</div>
            </div>
            <button className="cart-item-delete" onClick={() => handleRemove(item)} style={{ backgroundColor: '#d32f2f', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <button className="get-started-btn" onClick={(e) => handleContinueShopping(e)} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Continue Shopping</button>
        <button className="get-started-btn" onClick={(e) => handleCheckoutShopping(e)} style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
