import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    const itemCount = 5;
  
    return (
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        <span className="text-dark">{itemCount}</span>
      </div>
    );
  }

export { CartWidget };