import React from "react";
import "./style/productCard.css";

// {/* <div className="product-card-element">
//         {/* <img src={image} alt="value"></img>	 */}
// </div>
// <div className="product-card-element">
//   <div className="product-header">
//     <div>{title}</div>
//     <div>{price}</div>
//   </div>
//   <div className="product-">{description}</div>
// </div> */}

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="product-card col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>{price} $</strong>
          </li>
          <li className="list-group-item">Rating</li>
          <li className="list-group-item">Quantity</li>
        </ul>
        <div className="card-body">
          <button className="btn btn-info">
            <a href="/cart" className="card-link">
              Add to Cart
            </a>
          </button>
          <button className="btn btn-primary">
            <a href="/cart" className="card-link">
              Order Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
