import React from "react";
import CartCard from "./CartCard";
import "./style/cart.css";

const Cart = ({ items, cartItems }) => {
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cart-items jumbotron">
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
