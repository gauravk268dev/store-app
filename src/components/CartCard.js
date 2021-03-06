import React from "react";
import "./style/cartCard.css";

const CartCard = ({ image, title, price }) => {
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={image} alt="..."></img>
      </div>
      <div className="cart-card-detail">
        <h5>{title}</h5>
        <h5>
          <strong>{price} $</strong>
        </h5>
      </div>
    </div>
  );
};

export default CartCard;
