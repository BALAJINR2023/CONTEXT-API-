import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const findItemIndex = (productId) => {
    return cart.findIndex(item => item.id === productId);
  };

  const increaseQuantity = (productId) => {
    const index = findItemIndex(productId);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity++;
      setCart(updatedCart);
    }
  };

  const decreaseQuantity = (productId) => {
    const index = findItemIndex(productId);
    if (index !== -1 && cart[index].quantity > 0) {
      const updatedCart = [...cart];
      updatedCart[index].quantity--;
      setCart(updatedCart);
    }
  };

  const addToCart = (product) => {
    const index = findItemIndex(product.id);
    if (index !== -1) {
      increaseQuantity(product.id);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
