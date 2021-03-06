import React from "react";
import CartCard from "./CartCard";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
