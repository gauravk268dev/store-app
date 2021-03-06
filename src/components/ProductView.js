import React from "react";
import ProductCard from "./ProductCard";
import products from "./data/products";
import "./style/productView.css";

const ProductView = ({ setItems, addToCart, items, cartItems }) => {
  const getProducts = () => {
    setItems(products);
  };
  getProducts();

  return (
    <div className="product-view row jumbotron">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductView;
