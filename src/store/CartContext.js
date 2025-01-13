import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, addItem, getCartItemCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
