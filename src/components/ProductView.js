import React from "react";
import ProductCard from "./ProductCard";
import products from "./data/products";
import "./style/productView.css";

const ProductView = ({ setItems, items }) => {
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
          setItems={setItems}
        />
      ))}
    </div>
  );
};

export default ProductView;
