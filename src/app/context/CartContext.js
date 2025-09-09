'use client';
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const clearCart = () => setCart([]);

  const placeOrder = () => {
    if (cart.length > 0) {
      setOrders([...orders, { id: Date.now(), items: cart }]);
      clearCart();
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, orders, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
