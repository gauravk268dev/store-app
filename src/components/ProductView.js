import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./data/products";
import "./style/productView.css";

const ProductView = () => {
  const [items, setItems] = useState([...products]);
  const [cart, addToCart] = useState([]);

  return (
    <div className="product-view row">
      {items.map((item) => (
        <ProductCard
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          setItems={setItems}
        />
      ))}
    </div>
  );
};

export default ProductView;
